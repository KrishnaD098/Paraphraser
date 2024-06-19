// src/App.js

import React, { useState } from 'react';
import FileUpload from './FileUpload';
import Progress from './Progress';
import Results from './Results';
import './App.css';

function App() {
  const [paraphrasedText, setParaphrasedText] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFilesUploaded = (text) => {
    setParaphrasedText(text);
    setIsProcessing(false);
  };

  const handleFormSubmit = () => {
    setIsProcessing(true);
    setParaphrasedText(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Plagiarism Paraphraser</h1>
      </header>
      <main className="container mx-auto p-4">
        {!isProcessing && !paraphrasedText && (
          <FileUpload onFilesUploaded={handleFilesUploaded} onFormSubmit={handleFormSubmit} />
        )}
        {isProcessing && <Progress />}
        {paraphrasedText && <Results paraphrasedText={paraphrasedText} />}
      </main>
    </div>
  );
}

export default App;
