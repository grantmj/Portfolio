import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  achievement?: string;
  prize?: string;
  technologies: string[];
  link?: string;
  linkText?: string;
}

export default function ProjectCard({
  title,
  description,
  achievement,
  prize,
  technologies,
  link,
  linkText
}: ProjectCardProps) {
  return (
    <Card className="group hover-elevate overflow-hidden transition-all duration-300">
      <div className="p-6 md:p-8 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold font-heading">{title}</h3>
            {achievement && (
              <Badge className="bg-chart-2 text-white shrink-0">
                <Trophy className="w-3 h-3 mr-1" />
                {achievement}
              </Badge>
            )}
          </div>
          
          {prize && (
            <p className="text-sm text-chart-2 font-medium">{prize}</p>
          )}
        </div>

        <p className="text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}`}>
              {tech}
            </Badge>
          ))}
        </div>

        {link && (
          <Button 
            variant="outline" 
            className="w-full group/btn"
            onClick={() => window.open(link, '_blank')}
            data-testid={`button-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {linkText || 'View Project'}
            <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        )}
      </div>
    </Card>
  );
}
