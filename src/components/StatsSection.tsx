const stats = [
  { number: "500+", label: "Записанных треков" },
  { number: "8", label: "Лет опыта" },
  { number: "150+", label: "Довольных клиентов" },
  { number: "24/7", label: "Поддержка" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-magma">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
