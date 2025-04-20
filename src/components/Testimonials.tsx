import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей",
      rating: 5,
      comment: "Потрясающий клиент! Использую FastClient уже два месяца, ни разу не было проблем с античитами. Особенно нравится ESP режим для поиска ресурсов."
    },
    {
      name: "Дмитрий",
      rating: 5,
      comment: "Лучший чит для PVP, который я пробовал. AimBot работает так естественно, что никто не заподозрит использование читов. Стоит своих денег!"
    },
    {
      name: "Игорь",
      rating: 4,
      comment: "Отличная производительность даже на слабых компьютерах. Купил навсегда и не жалею. Техподдержка быстро отвечает на вопросы."
    }
  ];

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-muted" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы пользователей</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят клиенты о FastClient
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.comment}"</p>
                <div className="font-semibold">{testimonial.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
