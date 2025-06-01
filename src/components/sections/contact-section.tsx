import { ContactForm } from "@/components/contact-form";
import { AnimatedSection } from "@/components/animated-section";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const contactDetails = [
  { icon: <Phone className="w-5 h-5 mr-2 text-primary" />, text: "+91 8320446826", href: "tel:+918320446826" },
  { icon: <Mail className="w-5 h-5 mr-2 text-primary" />, text: "sitequickpersonal@gmail.com", href: "mailto:sitequickpersonal@gmail.com" },
  { icon: <Instagram className="w-5 h-5 mr-2 text-primary" />, text: "@abhi293848", href: "https://instagram.com/abhi293848" },
  { icon: <Facebook className="w-5 h-5 mr-2 text-primary" />, text: "Abhi Dankhara", href: "https://facebook.com/AbhiDankhara" }, // Replace with actual Facebook profile link if available
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
            Fill the form below and we’ll contact you shortly. Or reach out directly:
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay="100ms">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">Contact Information</h3>
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <a 
                  key={detail.text} 
                  href={detail.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground hover:text-primary transition-colors group"
                >
                  {detail.icon} 
                  <span className="group-hover:underline">{detail.text}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay="200ms">
             <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline"> <span role="img" aria-label="mailbox emoji" className="mr-1">📬</span> Contact Form</h3>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
