"use client";

import JSZip from "jszip";
import Image from "next/image";
import { useState } from "react";
import { MdFileDownload } from "react-icons/md";

export default function ImageConverter() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [convertedImages, setConvertedImages] = useState([]);
  const [conversionFormat, setConversionFormat] = useState("jpg");
  const [zipUrl, setZipUrl] = useState(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]); // Append new files
    setConvertedImages([]);
    setZipUrl(null);
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleFormatChange = (event) => {
    setConversionFormat(event.target.value);
  };

  const handleConvert = async () => {
    if (selectedFiles.length === 0) return;

    const zip = new JSZip();
    const convertedFiles = [];

    for (const file of selectedFiles) {
      const fileBlob = new Blob([await file.arrayBuffer()], {
        type: `image/${conversionFormat}`,
      });

      const convertedFileUrl = URL.createObjectURL(fileBlob);
      convertedFiles.push({
        url: convertedFileUrl,
        name: `${file.name.split(".")[0]}.${conversionFormat}`,
      });

      zip.file(`${file.name.split(".")[0]}.${conversionFormat}`, fileBlob);
    }

    if (convertedFiles.length === 1) {
      setZipUrl(null);
      setConvertedImages(convertedFiles);
      return;
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    setZipUrl(URL.createObjectURL(zipBlob));
    setConvertedImages(convertedFiles);
  };

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <div className="mb-6">
        <label
          htmlFor="image-upload"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Upload Images
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleFileChange}
          multiple
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Selected Images</h2>
          <div className="grid grid-cols-6 gap-4">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="relative max-w-xs border shadow-md p-2"
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Selected Image ${index + 1}`}
                  width={150}
                  height={150}
                  className="max-w-full h-auto"
                />
                <p className="text-sm text-center mt-2">{file.name}</p>
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  aria-label={`Remove ${file.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <label
          htmlFor="format-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Convert to
        </label>
        <select
          id="format-select"
          value={conversionFormat}
          onChange={handleFormatChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
          <option value="gif">GIF</option>
        </select>
      </div>

      <button
        onClick={handleConvert}
        disabled={selectedFiles.length === 0}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
      >
        Convert {selectedFiles.length > 0 && `(${selectedFiles.length} Files)`}
      </button>

      {zipUrl && (
        <div className="mt-6">
          <a
            href={zipUrl}
            download={`converted_images.zip`}
            className="bg-green-600 flex w-fit items-center gap-1 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <MdFileDownload size={20} />
            Download All Images ({selectedFiles.length})
          </a>
        </div>
      )}

      {convertedImages.length === 1 && (
        <div className="mt-6">
          <a
            href={convertedImages[0].url}
            download={convertedImages[0].name}
            className="bg-green-600 hover:bg-green-700 flex w-min gap-1 items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <MdFileDownload size={20} />
            Download
            {/* {convertedImages[0].name} */}
          </a>
        </div>
      )}
    </div>
  );
}
