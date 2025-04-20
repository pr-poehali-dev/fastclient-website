import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "HWID",
      price: "300",
      features: [
        "Привязка к устройству (HWID)",
        "Полный доступ ко всем функциям",
        "Приватное сообщество",
        "Регулярные обновления",
        "Анти-детект система"
      ],
      popular: false
    },
    {
      name: "1 месяц",
      price: "380",
      features: [
        "Полный доступ ко всем функциям",
        "Приватное сообщество",
        "Регулярные обновления",
        "Поддержка 24/7",
        "Анти-детект система"
      ],
      popular: false
    },
    {
      name: "Навсегда",
      price: "500",
      features: [
        "Полный доступ ко всем функциям",
        "Приватное сообщество",
        "Все будущие обновления",
        "Приоритетная поддержка 24/7",
        "Расширенная анти-детект система",
        "Эксклюзивные функции"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-black occult-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Тарифы</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Выберите подходящий план и получите доступ к FastClient уже сегодня
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`flex-1 rounded-xl overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary/80 to-primary/20 border border-primary' 
                  : 'bg-white/5 backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary py-1 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    Рекомендуемый
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-xl text-white/80"> ₽</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full py-6 h-auto ${
                  plan.popular 
                    ? 'bg-white text-primary hover:bg-gray-100' 
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}>
                  Купить сейчас
                </Button>
                
                <div className="mt-4 text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Способы оплаты" 
                    className="h-8 mx-auto opacity-70"
                  />
                  <p className="text-xs mt-2 text-gray-400">СБП и другие способы оплаты</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
