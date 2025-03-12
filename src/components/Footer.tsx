
import { Github, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pixblocks-dark text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/a2d27712-acd5-4213-9ea3-fab2c3943732.png" 
              alt="PixBlocks Logo" 
              className="h-10"
            />
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {currentYear} PixBlocks. Wszelkie prawa zastrzeżone.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-400 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Warunki korzystania</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          
          <div>
            Zaprojektowano i zbudowano w Polsce
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
