import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-black occult-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/f6274bce-2087-4a2c-bd4d-e3c508601391.jpg" 
                alt="FastClient Logo" 
                className="h-28 mx-auto md:mx-0"
              />
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Ваше преимущество в мире Minecraft 1.16.5
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 h-auto">
                Купить сейчас
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="w-full aspect-square max-w-md mx-auto bg-white/10 rounded-lg p-4 backdrop-blur-sm animate-float">
              <img 
                src="/placeholder.svg" 
                alt="FastClient Preview" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="font-bold text-3xl mb-2">FAST</div>
                  <div className="text-xl">MINECRAFT CHEAT</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-md rounded-lg p-3 shadow-lg">
              <span className="text-white font-bold">Версия для Minecraft 1.16.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
