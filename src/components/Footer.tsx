import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="https://cdn.poehali.dev/files/f6274bce-2087-4a2c-bd4d-e3c508601391.jpg" 
                alt="FastClient Logo" 
                className="h-16"
              />
            </div>
            <p className="text-gray-400 mb-4">
              FastClient — продвинутый чит-клиент для Minecraft 1.16.5, предоставляющий игрокам 
              преимущество благодаря мощным функциям и инновационной защите от обнаружения.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">Цены</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Поддержка</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Подпишитесь на новости</h3>
            <p className="text-gray-400 mb-4">Получайте уведомления о новых обновлениях чита</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-gray-800 border-gray-700"
              />
              <Button className="bg-primary hover:bg-primary/90">ОК</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FastClient. Все права защищены.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
