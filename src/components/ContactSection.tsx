import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы начать работу над вашим проектом? Мы всегда на связи!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                  Наш адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ул. Звукозаписи, 42
                  <br />
                  Москва, 119991
                  <br />
                  Россия
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={24} className="mr-3 text-primary" />
                  Время работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Пн-Пт: 10:00 - 22:00
                  <br />
                  Сб-Вс: 12:00 - 20:00
                  <br />
                  По предварительной записи
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="pulse-glow">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Mail" size={20} />
                info@magma-studio.ru
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Бесплатная консультация по вашему проекту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
