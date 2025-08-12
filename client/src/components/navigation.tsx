import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-deep-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-electric-blue to-purple-primary bg-clip-text text-transparent">
            Angad Gosain
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-electric-blue transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-electric-blue transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-electric-blue transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-electric-blue transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-electric-blue transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="fixed inset-0 bg-deep-black/95 backdrop-blur-md md:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                <a 
                  href="#home" 
                  className="hover:text-electric-blue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="hover:text-electric-blue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#experience" 
                  className="hover:text-electric-blue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </a>
                <a 
                  href="#projects" 
                  className="hover:text-electric-blue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="hover:text-electric-blue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
