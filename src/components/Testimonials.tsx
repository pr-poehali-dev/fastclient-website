import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "MineDestroyer",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Лучший чит-клиент для Minecraft, который я когда-либо использовал. Анти-детект работает идеально, ни разу не поймали за полгода использования."
    },
    {
      name: "PvPMaster1337",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Благодаря FastClient я стал непобедим в PvP. ESP функция позволяет видеть врагов издалека, а настройки боя дают огромное преимущество."
    },
    {
      name: "DiamondHunter",
      avatar: "/placeholder.svg",
      rating: 4,
      text: "Отличный функционал для поиска ресурсов. Нахожу алмазы за считанные минуты. Иногда бывают небольшие лаги, но в целом все супер."
    }
  ];

  return (
    <section className="py-16 bg-card occult-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Отзывы реальных пользователей FastClient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg transition-all hover:bg-primary/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 mr-3 overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-400'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
