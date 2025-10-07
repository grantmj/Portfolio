import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import DownloadResume from "./DownloadResume";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold font-heading tracking-tight">
            Grant M. Johnson
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science Student | AI Systems Intern at Intel | Award-Winning Developer
          </p>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate about building innovative AI solutions and creating impactful software. 
          Currently studying at Arizona State University with a 4.00 GPA.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => window.open('mailto:gmjohn22@asu.edu', '_blank')}
            data-testid="button-email"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
          <DownloadResume />
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('https://linkedin.com/in/grant-m-j', '_blank')}
            data-testid="button-linkedin"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('https://github.com', '_blank')}
            data-testid="button-github"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>

        <button 
          onClick={() => scrollToSection('projects')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to projects"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
