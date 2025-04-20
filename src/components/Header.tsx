import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img 
              src="https://cdn.poehali.dev/files/f6274bce-2087-4a2c-bd4d-e3c508601391.jpg" 
              alt="FastClient Logo" 
              className="h-10"
            />
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-white hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#pricing" className="text-white hover:text-primary transition-colors">Цены</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-white hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
              Войти
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Регистрация
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#" className="block py-2 text-white hover:text-primary">Главная</a>
            <a href="#" className="block py-2 text-white hover:text-primary">Возможности</a>
            <a href="#pricing" className="block py-2 text-white hover:text-primary">Цены</a>
            <a href="#" className="block py-2 text-white hover:text-primary">Отзывы</a>
            <a href="#" className="block py-2 text-white hover:text-primary">FAQ</a>
            
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-center text-white hover:text-primary hover:bg-white/10">
                Войти
              </Button>
              <Button className="justify-center bg-primary hover:bg-primary/90">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
