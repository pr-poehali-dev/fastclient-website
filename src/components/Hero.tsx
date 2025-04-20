import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/90 to-primary/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              FastClient
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Ваше преимущество в мире Minecraft 1.16.5
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto">
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
