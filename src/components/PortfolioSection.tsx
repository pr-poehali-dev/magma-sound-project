import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const portfolioItems = [
  {
    title: "Альбом «Космос»",
    artist: "Группа Звездопад",
    genre: "Электронная музыка",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    duration: "3:45",
  },
  {
    title: "Подкаст «Технологии»",
    artist: "ТехноВолна",
    genre: "Подкаст",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
    duration: "45:20",
  },
  {
    title: "Рекламный ролик",
    artist: "Компания Инновации",
    genre: "Коммерческая реклама",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
    duration: "0:30",
  },
  {
    title: "Сингл «Ночь»",
    artist: "Мария Светлая",
    genre: "Поп-музыка",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    duration: "4:12",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Портфолио
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Наши последние работы в звукозаписи и радиопроизводстве
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Icon name="Play" size={20} />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {item.artist}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{item.genre}</span>
                  <span>{item.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
