import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  degree: string;
  school: string;
  location: string;
  graduation: string;
  gpa: string;
  honors: string[];
  coursework?: string[];
}

export default function EducationCard({
  degree,
  school,
  location,
  graduation,
  gpa,
  honors,
  coursework
}: EducationCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300">
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-xl font-semibold font-heading">{degree}</h3>
              <p className="text-muted-foreground font-medium mt-1">{school}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                <span>{location}</span>
                <span>•</span>
                <span>{graduation}</span>
                <span>•</span>
                <Badge variant="secondary" data-testid="badge-gpa">GPA: {gpa}</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Awards & Honors:</p>
              <div className="flex flex-wrap gap-2">
                {honors.map((honor, index) => (
                  <Badge key={index} variant="outline" data-testid={`badge-honor-${index}`}>
                    {honor}
                  </Badge>
                ))}
              </div>
            </div>

            {coursework && coursework.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Relevant Coursework:</p>
                <p className="text-sm text-muted-foreground">{coursework.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
