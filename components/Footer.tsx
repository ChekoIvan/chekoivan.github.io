export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-400 mb-4">
                Sergio Chávez
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A passionate software developer creating digital experiences 
                that make a difference.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/chekoivan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/chekoivan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/chekoivan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sergio Iván Chávez Hernández. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
