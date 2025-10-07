import SkillsSection from '../SkillsSection';

export default function SkillsSectionExample() {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Java"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express.js"]
    }
  ];

  return (
    <div className="p-6">
      <SkillsSection categories={categories} />
    </div>
  );
}
