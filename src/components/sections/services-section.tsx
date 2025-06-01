import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { LayoutGrid, Smartphone, Share2, Mail, EyeOff, Laptop } from "lucide-react";

const services = [
  {
    icon: <LayoutGrid className="w-10 h-10 text-primary mb-4" />,
    title: "Custom Website Design",
    description: "Mobile-friendly, fast-loading, and clean design with your details.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary mb-4" />,
    title: "App Development",
    description: "Android apps that match your brand or purpose — personal, business, or promotional.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-primary mb-4" />,
    title: "Social Media Integration",
    description: "Easily link your Instagram, Facebook, and other platforms.",
  },
  {
    icon: <Mail className="w-10 h-10 text-primary mb-4" />,
    title: "Contact Form",
    description: "Let your users connect with you directly through your website.",
  },
  {
    icon: <EyeOff className="w-10 h-10 text-primary mb-4" />,
    title: "No Images, Clean Layout",
    description: "Text-only designs for speed, simplicity, and privacy.",
  },
  {
    icon: <Laptop className="w-10 h-10 text-primary mb-4" />,
    title: "Responsive Design",
    description: "Works perfectly on mobile, tablet, and desktop.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-headline">
             <span role="img" aria-label="briefcase emoji" className="mr-2">💼</span> What We Offer
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={`${index * 100}ms`}>
              <Card className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
