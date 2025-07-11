"use client";

import { useState, useEffect } from "react";

const categories = [
  { value: "strings", label: "String Manipulation" },
  { value: "arrays", label: "Array Problems" },
  { value: "trees", label: "Trees & Graphs" },
  { value: "dynamic-programming", label: "Dynamic Programming" },
  { value: "recursion", label: "Recursion" },
  { value: "sorting", label: "Sorting & Searching" },
];

export function ChallengeGeneratorForm() {
  const [difficulty, setDifficulty] = useState("medium");
  const [category, setCategory] = useState("strings");
  const [promptText, setPromptText] = useState("");

  // Update prompt text whenever difficulty or category changes
  useEffect(() => {
    const categoryLabel =
      categories.find((c) => c.value === category)?.label.toLowerCase() || "";
    const newPrompt = `Create a ${difficulty} difficulty ${categoryLabel} coding challenge.`;
    setPromptText(newPrompt);
  }, [difficulty, category]);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-t-lg p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1">
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

      {/* Dynamic Prompt Display */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="text-gray-300 font-mono text-sm">
          <div className="mb-2">
            <span className="text-blue-400">Prompt:</span>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-gray-600">
            {promptText}
          </div>
        </div>
      </div>
    </>
  );
}

export { categories };
