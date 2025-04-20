import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "1 месяц",
      price: "380",
      features: [
        "Полный доступ ко всем функциям",
        "Обновления в течение месяца",
        "Базовая техподдержка",
        "Работает на сервере и в одиночной игре"
      ],
      popular: false
    },
    {
      name: "Навсегда",
      price: "500",
      features: [
        "Полный доступ ко всем функциям",
        "Пожизненные обновления",
        "Приоритетная техподдержка",
        "Ранний доступ к новым функциям",
        "Работает на сервере и в одиночной игре"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-16 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите план, который подходит именно вам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? "border-2 border-primary" : "border border-border"
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white py-2 text-center font-medium">
                  Рекомендуемый
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-1">₽</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full text-lg py-6 h-auto">
                  Купить {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-secondary rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Способы оплаты</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="bg-card p-3 rounded-md shadow-sm">
              <span className="font-medium">СБП</span>
            </div>
            <div className="bg-card p-3 rounded-md shadow-sm">
              <span className="font-medium">Банковская карта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
