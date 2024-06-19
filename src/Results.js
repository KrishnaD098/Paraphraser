// src/Results.js

import React from 'react';

function Results({ paraphrasedText }) {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Paraphrased Text</h2>
      <p className="text-gray-700 whitespace-pre-wrap">{paraphrasedText}</p>
    </div>
  );
}

export default Results;
