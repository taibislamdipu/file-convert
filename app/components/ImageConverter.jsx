"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageConverter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [conversionFormat, setConversionFormat] = useState("png");
  const [originalFileName, setOriginalFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setOriginalFileName(file.name); // Save original file name
    setConvertedImage(null); // Reset converted image when a new file is selected
  };

  const handleFormatChange = (event) => {
    setConversionFormat(event.target.value);
  };

  const handleConvert = async () => {
    if (!selectedFile) return;

    // In a real application, you would send the file to your server or use a client-side library for conversion
    // For this example, we'll simulate a conversion by creating a object URL
    const fakeConvertedBlob = new Blob([await selectedFile.arrayBuffer()], {
      type: `image/${conversionFormat}`,
    });
    setConvertedImage(URL.createObjectURL(fakeConvertedBlob));
  };

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <div className="mb-6">
        <label
          htmlFor="image-upload"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Upload Image
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      {selectedFile && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Selected Image</h2>
          <Image
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            width={300}
            height={300}
            className="max-w-full h-auto"
          />
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
        disabled={!selectedFile}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
      >
        Convert Image
      </button>

      {convertedImage && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Converted Image</h2>
          <Image
            src={convertedImage}
            alt="Converted"
            width={300}
            height={300}
            className="max-w-full h-auto mb-4"
          />
          <a
            href={convertedImage}
            download={`${originalFileName.split(".")[0]}.${conversionFormat}`} // Use original name and new extension
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Download Converted Image
          </a>
        </div>
      )}
    </div>
  );
}
