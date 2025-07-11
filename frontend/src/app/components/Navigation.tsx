export default function Navigation() {
  return (
    <nav className="flex items-center justify-between p-6 text-white">
      <div className="text-2xl font-bold">Prompt Prep</div>
      <div className="hidden md:flex space-x-6">
        <a
          href="#features"
          className="hover:text-purple-300 transition-colors"
        >
          Features
        </a>
        <a href="#about" className="hover:text-purple-300 transition-colors">
          About
        </a>
        <a
          href="#contact"
          className="hover:text-purple-300 transition-colors"
        >
          Contact
        </a>
      </div>
      <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
        Get Started
      </button>
    </nav>
  );
}