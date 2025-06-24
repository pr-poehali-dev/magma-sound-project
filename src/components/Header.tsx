import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <Icon name="Radio" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">MAGMA</span>
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
