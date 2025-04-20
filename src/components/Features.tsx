import { Zap, Shield, Eye, Cpu, Users, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Высокая производительность",
      description: "FastClient оптимизирован для максимальной FPS и минимального потребления ресурсов"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Анти-детект система",
      description: "Продвинутая система обхода античитов и защита от обнаружения"
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "ESP и Wallhack",
      description: "Видьте игроков, мобов и ресурсы через стены и на большом расстоянии"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Совместимость",
      description: "Разработан специально для Minecraft 1.16.5 MCP с поддержкой популярных модов"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Приватное сообщество",
      description: "Доступ к закрытому сообществу пользователей и постоянные обновления"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Уникальные функции",
      description: "Эксклюзивные возможности, недоступные в других чит-клиентах для Minecraft"
    }
  ];

  return (
    <section className="py-16 bg-card occult-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности FastClient</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональный чит для Minecraft с широким набором функций, созданный для повышения вашего игрового опыта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg transition-all hover:bg-primary/10 hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block p-4 bg-black/40 backdrop-blur-sm rounded-lg">
            <p className="text-lg font-semibold text-white">
              Все возможности чита активируются по вашему UUID Minecraft аккаунта
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
