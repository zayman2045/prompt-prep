"use client";

import { useState } from "react";

export function CodeWindow() {
  const [difficulty, setDifficulty] = useState("medium");
  const [category, setCategory] = useState("algorithms");
  const [code, setCode] = useState(``);

  const categories = [
    { value: "strings", label: "String Manipulation" },
    { value: "arrays", label: "Array Problems" },
    { value: "trees", label: "Trees & Graphs" },
    { value: "dynamic-programming", label: "Dynamic Programming" },
    { value: "recursion", label: "Recursion" },
    { value: "sorting", label: "Sorting & Searching" },
];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Challenge Generator Form */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-t-lg p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-3">
              Generate Coding Challenge
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Difficulty Selector */}
              <div className="flex-1">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Difficulty
                </label>
                <div className="flex space-x-2">
                  {["easy", "medium", "hard"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        difficulty === level
                          ? "bg-white text-gray-900 shadow-lg"
                          : "bg-white/10 text-gray-300 hover:bg-white/20"
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="flex-1">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option
                      key={cat.value}
                      value={cat.value}
                      className="bg-gray-800"
                    >
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="lg:flex-shrink-0">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Generate Challenge
            </button>
          </div>
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
              placeholder="Your challenge generation prompt will appear here..."
            />
          </div>
        </div>

        {/* Terminal Output */}
        <div className="border-t border-gray-700 bg-black p-4">
          <div className="text-green-400 font-mono text-sm">
            <div className="mb-2">
              <span className="text-blue-400">$</span> node
              challenge-generator.js
            </div>
            <div className="text-gray-300">
              Create a {difficulty} difficulty{" "}
              {categories
                .find((c) => c.value === category)
                ?.label.toLowerCase()}{" "}
              coding challenge.
            </div>
            <div className="text-gray-300 mb-2">Requirements:</div>
            <div className="text-gray-300 ml-4">
              • Clear problem description
              <br />
              • Input/output examples
              <br />
              • Edge cases to consider
              <br />
              • Expected time complexity
              <br />• Hints for solving
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Generate Challenge
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Save Challenge
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Share Challenge
        </button>
      </div>
    </div>
  );
}
