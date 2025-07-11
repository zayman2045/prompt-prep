"use client";

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

export function CodeEditor({ code, setCode }: CodeEditorProps) {
  return (
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
            <span className="text-blue-400">$</span> node challenge-generator.js
          </div>
          <div className="text-gray-300">Challenge generated successfully!</div>
        </div>
      </div>
    </div>
  );
}
