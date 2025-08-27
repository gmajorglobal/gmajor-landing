export default function Header() {
  return (
    <header className="w-full bg-blue-800 py-4 shadow-lg">
      <nav className="max-w-7xl mx-auto px-2">
        <div className="flex justify-end space-x-12">
          <a href="#" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-sm">
            HOME
          </a>
          <a href="#" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-sm">
            ABOUT US
          </a>
          <a href="#" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-sm">
            CONTACT
          </a>
          <a href="#" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-sm">
            BLOG
          </a>
        </div>
      </nav>
    </header>
  )
} 