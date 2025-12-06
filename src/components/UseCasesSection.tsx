import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, ShoppingBag, Leaf } from "lucide-react";

const useCases = [
  {
    icon: MapPin,
    title: "Vânătorul Hiper-Local",
    subtitle: "Găsește produse în proximitatea ta",
    description: "Un agent care găsește articole specifice de îmbrăcăminte sau meșteșuguri într-o rază de 5 km de la tine. Perfect pentru cei care vor să susțină afacerile din cartier.",
    example: '"Vreau o geacă de piele făcută manual, în București, sector 3"',
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Coșul Agregat",
    subtitle: "Un click, trei magazine",
    description: "Agentul primește o listă de cumpărături, găsește cei mai buni vânzători locali pentru fiecare articol și le combină într-un singur flux de plată.",
    example: '"Fă-mi un coș cu pâine de la o brutărie locală, brânză de la o fermă, și legume bio"',
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Leaf,
    title: "Filtrul Etic",
    subtitle: "Exclude produsele de masă",
    description: "Un agent care filtrează explicit articolele produse în masă pentru a evidenția produsele cu valoare socială ridicată, sustenabile și etice.",
    example: '"Vreau haine eco-friendly, doar de la producători certificați"',
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Cazuri de Utilizare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Inspirație pentru cum poți folosi agentul nostru
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              variant="useCase"
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${useCase.color} flex items-center justify-center mb-4`}>
                  <useCase.icon className={`w-8 h-8 ${useCase.iconColor}`} />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <p className="text-sm font-medium text-primary font-body">{useCase.subtitle}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {useCase.description}
                </CardDescription>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="text-sm italic text-muted-foreground font-body">
                    {useCase.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
