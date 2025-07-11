import { CodeWindow } from "./CodeWindow";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Master Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {" "}
            Prompts
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Build, test, and optimize your AI prompts with our intuitive code
          editor. Create better conversations with AI.
        </p>

        <div className="mb-12">
          <CodeWindow />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Coding Now
          </button>
          <button className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            View Examples
          </button>
        </div>
      </div>
    </section>
  );
}