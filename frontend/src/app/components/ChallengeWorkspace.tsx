"use client";

import { useState } from "react";
import { ChallengeGeneratorForm } from "./ChallengeGeneratorForm";
import { CodeEditor } from "./CodeEditor";

export function ChallengeWorkspace() {
  const [code, setCode] = useState(``);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ChallengeGeneratorForm />
      <CodeEditor code={code} setCode={setCode} />
    </div>
  );
}
