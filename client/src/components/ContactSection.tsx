import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gmjohn22@asu.edu",
      action: () => window.open('mailto:gmjohn22@asu.edu', '_blank'),
      testId: "button-contact-email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(602) 326-7617",
      action: () => window.open('tel:+16023267617', '_blank'),
      testId: "button-contact-phone"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandler, AZ",
      action: undefined,
      testId: "text-location"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/grant-m-j",
      action: () => window.open('https://linkedin.com/in/grant-m-j', '_blank'),
      testId: "button-contact-linkedin"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com",
      action: () => window.open('https://github.com', '_blank'),
      testId: "button-contact-github"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just connecting!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const isClickable = !!item.action;
            
            return (
              <Card 
                key={index}
                className={isClickable ? "hover-elevate transition-all duration-300 cursor-pointer" : ""}
                onClick={item.action}
                data-testid={item.testId}
              >
                <div className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium truncate">{item.value}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => window.open('mailto:gmjohn22@asu.edu', '_blank')}
            data-testid="button-send-email"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Me an Email
          </Button>
        </div>
      </div>
    </section>
  );
}
