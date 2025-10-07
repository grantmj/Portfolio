import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  type?: 'work' | 'professional-dev';
}

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
      
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex gap-6 md:gap-8">
            <div className="hidden md:flex items-start justify-center shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-background">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
            </div>

            <Card className="flex-1 hover-elevate transition-all duration-300">
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold font-heading">{item.role}</h3>
                    <Badge variant="outline" data-testid={`badge-period-${index}`}>
                      {item.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground font-medium">{item.company}</p>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>

                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
