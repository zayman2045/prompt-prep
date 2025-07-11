"use client";

import { useState } from "react";

export function CodeWindow() {
  const [code, setCode] = useState(`// Welcome to Prompt Prep!
// Start building your AI prompts here

const prompt = \`You are a helpful AI assistant. 
Please help me with the following task:

{task}

Please provide a clear and detailed response.\`;

// Example usage
const task = "Write a creative story about a robot learning to paint";
console.log(prompt.replace('{task}', task));`);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Window Header */}
      <div className="bg-gray-800 rounded-t-lg p-4 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-gray-300 text-sm font-mono">
            prompt-editor.js
          </span>
        </div>
      </div>

      {/* Code Editor */}
      <div className="bg-gray-900 rounded-b-lg overflow-hidden">
        <div className="flex">
          {/* Line Numbers */}
          <div className="bg-gray-800 text-gray-500 text-sm font-mono p-4 select-none">
            {code.split("\n").map((_, index) => (
              <div key={index} className="text-right pr-3">
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <div className="flex-1 p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 bg-transparent text-gray-100 font-mono text-sm resize-none border-none outline-none"
              spellCheck={false}
              placeholder="Start typing your code here..."
            />
          </div>
        </div>

        {/* Terminal Output */}
        <div className="border-t border-gray-700 bg-black p-4">
          <div className="text-green-400 font-mono text-sm">
            <div className="mb-2">
              <span className="text-blue-400">$</span> node prompt-editor.js
            </div>
            <div className="text-gray-300">
              You are a helpful AI assistant. Please help me with the following
              task:
            </div>
            <div className="text-gray-300 mb-2">
              Write a creative story about a robot learning to paint
            </div>
            <div className="text-gray-300">
              Please provide a clear and detailed response.
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Run Code
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Save Prompt
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Share
        </button>
      </div>
    </div>
  );
}
