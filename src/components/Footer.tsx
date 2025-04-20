import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/placeholder.svg" alt="FastClient Logo" className="h-8 w-8" />
              <span className="text-xl font-bold">FastClient</span>
            </div>
            <p className="mb-4 text-white/80 max-w-md">
              FastClient - это премиум решение для игроков Minecraft 1.16.5, 
              предоставляющее преимущества в PVP, поиске ресурсов и многом другом.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Возможности
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} FastClient™. Все права защищены.</p>
            </div>
            <div>
              <p className="text-white/80">
                FastClient не связан с Mojang AB
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
