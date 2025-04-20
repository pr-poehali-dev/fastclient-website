import { Shield, Zap, Eye, Target, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Высокая производительность",
      description: "Оптимизированный код, который не влияет на FPS"
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Безопасность",
      description: "Наш чит невозможно обнаружить античитами"
    },
    {
      icon: <Eye className="w-10 h-10 text-primary" />,
      title: "Улучшенный ESP",
      description: "Видимость игроков, мобов и ресурсов через стены"
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Точный AimBot",
      description: "Автоматическое наведение на врагов с настраиваемыми параметрами"
    },
    {
      icon: <Lock className="w-10 h-10 text-primary" />,
      title: "Система лицензирования",
      description: "Уникальные ключи, привязанные к вашему UUID"
    }
  ];

  return (
    <section className="py-16 bg-secondary" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности FastClient</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наш чит предоставляет вам преимущества во всех аспектах игры
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
