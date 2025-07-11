"use client";

import { useState } from "react";
import React from "react";
import { ChallengeGeneratorForm, categories } from "./ChallengeGeneratorForm";
import { CodeEditor } from "./CodeEditor";

export function ChallengeWorkspace() {
  const [difficulty, setDifficulty] = useState("medium");
  const [category, setCategory] = useState("strings");
  const [code, setCode] = useState(``);
  const [promptText, setPromptText] = useState("");

  // Update prompt text whenever difficulty or category changes
  React.useEffect(() => {
    const categoryLabel =
      categories.find((c) => c.value === category)?.label.toLowerCase() || "";
    const newPrompt = `Create a ${difficulty} difficulty ${categoryLabel} coding challenge.`;
    setPromptText(newPrompt);
  }, [difficulty, category]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ChallengeGeneratorForm
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        category={category}
        setCategory={setCategory}
      />

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

      <CodeEditor code={code} setCode={setCode} />

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
