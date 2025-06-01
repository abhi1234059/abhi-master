import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";

export function HeroSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 text-center bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 font-headline">
          <span role="img" aria-label="rocket emoji" className="mr-2">🚀</span> Super Fast Websites for You!
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">
          Welcome to SiteQuick Personal, your one-stop solution to create professional websites and mobile apps quickly and affordably. Whether you&apos;re a student, business owner, influencer, or freelancer — we can build a clean, functional, and modern website or app tailored to your needs.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          No complex processes. Just tell us what you need, and we’ll handle the rest — from idea to live website or app.
        </p>
        <Link href="#contact">
            <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
            </Button>
        </Link>
      </div>
    </AnimatedSection>
  );
}
