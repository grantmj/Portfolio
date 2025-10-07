import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Card key={index} className="p-6 space-y-4 hover-elevate transition-all duration-300">
          <h3 className="text-lg font-semibold font-heading">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary"
                data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
