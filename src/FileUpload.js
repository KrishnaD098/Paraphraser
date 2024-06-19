// src/FileUpload.js

import React, { useState } from 'react';

function FileUpload({ onFilesUploaded }) {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    onFilesUploaded(result.paraphrased_text);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file1">
            Upload Plagiarism Report
          </label>
          <input
            type="file"
            id="file1"
            onChange={(e) => handleFileChange(e, setFile1)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file2">
            Upload your Research Paper
          </label>
          <input
            type="file"
            id="file2"
            onChange={(e) => handleFileChange(e, setFile2)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
