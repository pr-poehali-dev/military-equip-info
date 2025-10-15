import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'equipment'>('home');

  const equipmentCategories = [
    {
      id: 1,
      title: 'Стрелковое оружие',
      description: 'Изучение характеристик и правил обращения с автоматами, пистолетами и снайперскими винтовками',
      icon: 'Target',
      modules: 12,
      duration: '8 часов',
      level: 'Базовый'
    },
    {
      id: 2,
      title: 'Средства индивидуальной защиты',
      description: 'Правила использования бронежилетов, касок, защитных масок и другого снаряжения',
      icon: 'Shield',
      modules: 8,
      duration: '5 часов',
      level: 'Базовый'
    },
    {
      id: 3,
      title: 'Тактическое снаряжение',
      description: 'Изучение разгрузочных систем, рюкзаков, средств связи и навигации',
      icon: 'Backpack',
      modules: 10,
      duration: '6 часов',
      level: 'Средний'
    },
    {
      id: 4,
      title: 'Специальные средства',
      description: 'Дымовые гранаты, сигнальные ракеты, средства радиоэлектронной борьбы',
      icon: 'Radio',
      modules: 15,
      duration: '10 часов',
      level: 'Продвинутый'
    },
    {
      id: 5,
      title: 'Оптические приборы',
      description: 'Прицелы, бинокли, приборы ночного видения и тепловизоры',
      icon: 'Eye',
      modules: 9,
      duration: '7 часов',
      level: 'Средний'
    },
    {
      id: 6,
      title: 'Средства связи',
      description: 'Радиостанции, системы шифрования, портативные передатчики',
      icon: 'Wifi',
      modules: 11,
      duration: '8 часов',
      level: 'Продвинутый'
    }
  ];

  const stats = [
    { label: 'Учебных модулей', value: '65+', icon: 'BookOpen' },
    { label: 'Часов обучения', value: '44', icon: 'Clock' },
    { label: 'Практических занятий', value: '28', icon: 'Target' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Target" className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-heading font-bold text-primary">
              Огневая подготовка
            </h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('home')}
              className="font-medium"
            >
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button
              variant={activeSection === 'equipment' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('equipment')}
              className="font-medium"
            >
              <Icon name="Shield" size={18} className="mr-2" />
              Спецсредства
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-24 px-4">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="container mx-auto max-w-5xl relative z-10">
              <div className="text-center space-y-6 animate-slide-up">
                <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
                  Образовательный портал
                </Badge>
                <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight">
                  Спецсредства<br />военнослужащих
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
                  Комплексное обучение работе со специальным снаряжением и вооружением для военнослужащих всех категорий
                </p>
                <div className="flex gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setActiveSection('equipment')}
                  >
                    <Icon name="PlayCircle" size={20} className="mr-2" />
                    Начать обучение
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  >
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Программа курса
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-4 -mt-12">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:shadow-lg transition-all duration-300 animate-scale-in bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={stat.icon as any} size={32} className="text-secondary" />
                      </div>
                      <div className="text-4xl font-heading font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                  Почему выбирают наш портал
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Современные методики обучения и проверенные практические материалы
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: 'GraduationCap', title: 'Сертификация', desc: 'Официальное подтверждение прохождения' },
                  { icon: 'Users', title: 'Опытные инструкторы', desc: 'Преподаватели с боевым опытом' },
                  { icon: 'Video', title: 'Видеоматериалы', desc: 'Наглядные демонстрации всех процедур' },
                  { icon: 'Award', title: 'Практика', desc: 'Реальные учебные занятия' }
                ].map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-all">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={feature.icon as any} size={28} className="text-primary" />
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'equipment' && (
        <div className="animate-fade-in py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">
                Категории спецсредств
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Выберите категорию для начала обучения. Каждый модуль включает теоретическую базу и практические упражнения
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipmentCategories.map((category, index) => (
                <Card
                  key={category.id}
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 hover:border-secondary/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={category.icon as any} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-secondary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon name="BookOpen" size={16} />
                          {category.modules} модулей
                        </span>
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          {category.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant={category.level === 'Базовый' ? 'secondary' : category.level === 'Средний' ? 'default' : 'outline'}>
                          {category.level}
                        </Badge>
                        <Button size="sm" className="group-hover:bg-secondary group-hover:text-white transition-colors">
                          Начать
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-dashed">
                <CardContent className="py-12">
                  <Icon name="Trophy" size={48} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    Готовы начать обучение?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Пройдите все модули и получите сертификат о прохождении курса огневой подготовки
                  </p>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Зарегистрироваться на курс
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t mt-16 py-8 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Target" className="text-white" size={18} />
              </div>
              <span className="font-heading font-bold text-primary">
                Огневая подготовка
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Учебный портал. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
