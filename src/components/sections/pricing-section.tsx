import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";

const pricingPackages = [
  {
    name: "Basic",
    price: "₹500",
    features: ["Custom 1-Page Website", "Basic SEO Setup", "Contact Form"],
    cta: "Choose Basic",
  },
  {
    name: "Standard",
    price: "₹1000",
    features: ["Up to 3 Pages Website", "Social Media Integration", "Responsive Design", "Basic SEO"],
    cta: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1500",
    features: ["Up to 5 Pages Website / Basic App", "Advanced Features", "Priority Support", "Full SEO"],
    cta: "Choose Premium",
  },
];

export function PricingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-headline">
            <span role="img" aria-label="money bag emoji" className="mr-2">💰</span> Pricing Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            All packages include full setup and free minor changes after delivery.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} delay={`${index * 100}ms`} className="flex">
              <Card className={`flex flex-col w-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${pkg.popular ? 'border-2 border-accent' : ''}`}>
                <CardHeader className="text-center">
                  {pkg.popular && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 text-sm text-accent-foreground bg-accent rounded-full font-semibold">Popular</span>
                    </div>
                  )}
                  <CardTitle className="font-headline text-2xl text-foreground mt-4">{pkg.name}</CardTitle>
                  <CardDescription className="text-3xl sm:text-4xl font-bold text-primary my-4">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-muted-foreground">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                   <Link href="#contact" className="w-full">
                    <Button className={`w-full ${pkg.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                      {pkg.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
