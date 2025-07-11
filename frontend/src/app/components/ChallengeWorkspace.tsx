"use client";

import { ChallengeGeneratorForm } from "./ChallengeGeneratorForm";
import { CodeEditor } from "./CodeEditor";

export function ChallengeWorkspace() {
  

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ChallengeGeneratorForm />
      <CodeEditor />
    </div>
  );
}
