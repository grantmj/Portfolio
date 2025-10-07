import ExperienceTimeline from '../ExperienceTimeline';

export default function ExperienceTimelineExample() {
  const experiences = [
    {
      role: "AI Systems Intern",
      company: "Intel",
      location: "Chandler, AZ",
      period: "June 2025 – Sept 2025",
      highlights: [
        "Engineered GPU memory profiling pipeline using Intel MPT",
        "Developed automated data collection framework with batch scripting"
      ]
    }
  ];

  return (
    <div className="p-6 max-w-4xl">
      <ExperienceTimeline items={experiences} />
    </div>
  );
}
