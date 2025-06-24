import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Mic",
    title: "Звукозапись",
    description:
      "Профессиональная запись вокала и инструментов в акустически обработанной студии",
    features: ["Запись вокала", "Инструментальная запись", "Живые инструменты"],
  },
  {
    icon: "Headphones",
    title: "Сведение",
    description:
      "Баланс, эквализация и обработка треков для создания цельного звучания",
    features: ["Балансировка", "EQ и компрессия", "Пространственная обработка"],
  },
  {
    icon: "Volume2",
    title: "Мастеринг",
    description: "Финальная обработка для достижения коммерческого звучания",
    features: ["Динамическая обработка", "Частотная коррекция", "Стереобаза"],
  },
  {
    icon: "Radio",
    title: "Радиопроизводство",
    description: "Создание джинглов, рекламных роликов и подкастов",
    features: ["Джинглы", "Реклама", "Подкасты"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл аудиопроизводства от идеи до готового продукта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
