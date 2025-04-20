import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="FastClient Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-white">FastClient</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 transition-colors">
            Главная
          </Link>
          <Link to="/" className="text-white hover:text-gray-200 transition-colors">
            Возможности
          </Link>
          <Link to="/" className="text-white hover:text-gray-200 transition-colors">
            Цены
          </Link>
          <Link to="/" className="text-white hover:text-gray-200 transition-colors">
            Отзывы
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-primary">
            Войти
          </Button>
          <Button className="bg-white hover:bg-gray-100 text-primary hidden md:flex">
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
