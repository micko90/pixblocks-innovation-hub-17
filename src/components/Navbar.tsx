
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Nas', href: '#about' },
    { name: 'Rozwiązania', href: '#solutions' },
    { name: 'Opinie', href: '#testimonials' },
    { name: 'Cennik', href: '#pricing' },
    // Removing 'Kontakt' from the navigation links
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/a2d27712-acd5-4213-9ea3-fab2c3943732.png" 
              alt="PixBlocks Logo" 
              className="h-10 md:h-12"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-pixblocks-purple ${isScrolled ? 'text-pixblocks-dark' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Special styled link for 'Pobierz PixBlocks' */}
            <a 
              href="#download" 
              className={`text-sm font-medium px-4 py-2 rounded-md bg-pixblocks-purple text-white hover:bg-purple-700 transition-colors flex items-center gap-1`}
            >
              <Download size={16} />
              Pobierz PixBlocks
            </a>

            <Button 
              className="bg-pixblocks-yellow hover:bg-yellow-500 text-pixblocks-dark"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Skontaktuj się
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-pixblocks-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-pixblocks-dark text-sm font-medium transition-colors hover:text-pixblocks-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Special styled link for mobile 'Pobierz PixBlocks' */}
              <a 
                href="#download" 
                className="text-white text-sm font-medium bg-pixblocks-purple px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={16} />
                Pobierz PixBlocks
              </a>
              
              <Button 
                className="bg-pixblocks-yellow hover:bg-yellow-500 text-pixblocks-dark w-full"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Skontaktuj się
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
