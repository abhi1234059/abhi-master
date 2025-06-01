import { AnimatedSection } from "@/components/animated-section";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const contactDetails = [
  { icon: <Phone className="w-6 h-6 mr-3 text-primary" />, text: "+91 8320446826", href: "tel:+918320446826", label: "Phone" },
  { icon: <Mail className="w-6 h-6 mr-3 text-primary" />, text: "sitequickpersonal@gmail.com", href: "mailto:sitequickpersonal@gmail.com", label: "Email" },
  { icon: <Instagram className="w-6 h-6 mr-3 text-primary" />, text: "@abhi293848", href: "https://instagram.com/abhi293848", label: "Instagram" },
  { icon: <Facebook className="w-6 h-6 mr-3 text-primary" />, text: "Abhi Dankhara", href: "https://facebook.com/AbhiDankhara", label: "Facebook" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-headline">
             <span role="img" aria-label="envelope emoji" className="mr-2">📩</span> Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            You can reach out to us directly using the contact information below:
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay="100ms" className="md:col-span-2">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-headline">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {contactDetails.map((detail) => (
                  <a 
                    key={detail.text} 
                    href={detail.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary transition-colors group p-4 rounded-md hover:bg-muted/50"
                  >
                    {detail.icon} 
                    <div>
                      <p className="font-medium">{detail.label}</p>
                      <span className="group-hover:underline text-muted-foreground group-hover:text-primary">{detail.text}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
