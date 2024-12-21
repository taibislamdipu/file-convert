"use client";

import { saveAs } from "file-saver";
import JSZip from "jszip";
import Image from "next/image";
import { useState } from "react";

export default function ImageConverter() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [convertedImages, setConvertedImages] = useState([]);
  const [conversionFormat, setConversionFormat] = useState("png");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    setConvertedImages([]); // Reset converted images when new files are selected
  };

  const handleFormatChange = (event) => {
    setConversionFormat(event.target.value);
  };

  const handleConvert = async () => {
    if (selectedFiles.length === 0) return;

    const convertedFiles = [];

    for (const file of selectedFiles) {
      // Simulating image conversion by creating a new Blob
      const fakeConvertedBlob = new Blob([await file.arrayBuffer()], {
        type: `image/${conversionFormat}`,
      });
      const convertedImageURL = URL.createObjectURL(fakeConvertedBlob);
      convertedFiles.push({ name: file.name, url: convertedImageURL });
    }

    setConvertedImages(convertedFiles);
  };

  const downloadAllConverted = async () => {
    if (convertedImages.length === 0) return;

    const zip = new JSZip();

    // Add each converted image to the zip file
    for (const { name, url } of convertedImages) {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileName = `${name.split(".")[0]}.${conversionFormat}`;
      zip.file(fileName, blob);
    }

    // Generate the zip file and trigger the download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "converted-images.zip");
    });
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
          multiple
          onChange={handleFileChange}
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
          <div className="grid grid-cols-3 gap-4">
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${file.name}`}
                  width={100}
                  height={100}
                  className="max-w-full h-auto"
                />
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
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
          <option value="webp">WebP</option>
          <option value="gif">GIF</option>
        </select>
      </div>

      <button
        onClick={handleConvert}
        disabled={selectedFiles.length === 0}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
      >
        Convert Images
      </button>

      {convertedImages.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Converted Images</h2>
          <div className="grid grid-cols-3 gap-4">
            {convertedImages.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={image.url}
                  alt={`Converted ${image.name}`}
                  width={100}
                  height={100}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>

          <button
            onClick={downloadAllConverted}
            className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Download All Converted Images
          </button>
        </div>
      )}
    </div>
  );
}
