import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-magma relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-32 bg-primary sound-wave"></div>
        <div className="absolute top-32 left-20 w-2 h-24 bg-accent sound-wave-delayed"></div>
        <div className="absolute top-24 left-32 w-2 h-40 bg-primary sound-wave"></div>
        <div className="absolute top-40 right-20 w-2 h-28 bg-accent sound-wave-delayed"></div>
        <div className="absolute top-16 right-32 w-2 h-36 bg-primary sound-wave"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-red-700">MAGMA</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
          Студия звукозаписи и радиопроизводства
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Профессиональная запись, сведение и мастеринг. Создаем звук мирового
          уровня для музыкантов, подкастеров и радиостанций.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="pulse-glow">
            <Icon name="Play" size={20} />
            Слушать портфолио
          </Button>
          <Button size="lg" variant="outline">
            <Icon name="Calendar" size={20} />
            Забронировать студию
          </Button>
        </div>

        {/* Sound wave visualization */}
        <div className="mt-16 flex justify-center items-end space-x-1">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-primary sound-wave`}
              style={{
                height: `${Math.random() * 40 + 10}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
