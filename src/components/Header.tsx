import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/1dd3e154-8ee3-40c8-bf3a-6b122406d1fe.jpg"
              alt="МАГМА Логотип"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-gradient">МАГМА</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className="hover:text-primary transition-colors"
            >
              Портфолио
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <Button className="pulse-glow">
            <Icon name="Phone" size={16} />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
