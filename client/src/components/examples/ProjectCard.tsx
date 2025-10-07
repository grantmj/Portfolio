import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="p-6 max-w-md">
      <ProjectCard
        title="AlterView"
        description="Created an AI-based student assessment platform that won 1st place among 100+ applicants."
        achievement="1st Place"
        prize="$5000 Prize Winner"
        technologies={['Next.js', 'TypeScript', 'Tailwind']}
        link="https://alterview.me"
        linkText="Visit AlterView"
      />
    </div>
  );
}
