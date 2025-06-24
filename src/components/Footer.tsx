import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <Icon name="Radio" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">MAGMA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональная студия звукозаписи и радиопроизводства
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Звукозапись</li>
              <li>Сведение</li>
              <li>Мастеринг</li>
              <li>Радиопроизводство</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+7 (495) 123-45-67</li>
              <li>info@magma-studio.ru</li>
              <li>ул. Звукозаписи, 42</li>
              <li>Москва, 119991</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={20}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              />
              <Icon
                name="Youtube"
                size={20}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              />
              <Icon
                name="Facebook"
                size={20}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 MAGMA Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
