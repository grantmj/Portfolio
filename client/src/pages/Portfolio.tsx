import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import EducationCard from "@/components/EducationCard";

export default function Portfolio() {
  const projects = [
    {
      title: "AlterView",
      description: "Created an AI-based student assessment platform that revolutionizes education. Awarded 1st place among 100+ applicants in the ScaleU + PIA: AI Agents in Education Hackathon.",
      achievement: "1st Place",
      prize: "$5,000 Prize Winner",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI/ML"],
      link: "https://alterview.me",
      linkText: "Visit AlterView"
    },
    {
      title: "Fable: All-In-One Storytelling Hub",
      description: "Awarded 1st place at SunHacks (ASU Hackathon) among 600+ competitors and 130 final submissions. Features AI-powered transcription, image generation, and secure account storage.",
      achievement: "1st Place",
      prize: "SunHacks Winner 2024",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Whisper", "DALL-E", "ElevenLabs", "MySQL", "Prisma"],
      link: "https://devpost.com",
      linkText: "View on Devpost"
    }
  ];

  const workExperience = [
    {
      role: "AI Systems Intern",
      company: "Intel",
      location: "Chandler, AZ",
      period: "June 2025 – September 2025",
      highlights: [
        "Engineered GPU memory profiling pipeline using Intel MPT to analyze LLM workloads on Battlemage GPUs",
        "Developed automated data collection framework with batch scripting and ETL tools for AI workload analysis",
        "Implemented LLM optimization workflow with OpenVINO GenAI to quantize and deploy models on discrete GPUs"
      ]
    },
    {
      role: "Software Engineer Intern (Functional Safety)",
      company: "Intel Automotive",
      location: "Chandler, AZ",
      period: "September 2024 – June 2025",
      highlights: [
        "Implemented pre-OS checker validation tool to verify boot sequences on 2 Intel platforms with Docker and CI/CD",
        "Developed a Python tool using pandas and web scraping to automate analytics and reporting for data reviews",
        "Collaborated with cross-functional teams including software engineers, product managers, and quality engineers"
      ]
    },
    {
      role: "Full Stack Software Engineer Intern",
      company: "Galago",
      location: "Phoenix, AZ",
      period: "May 2024 – August 2024",
      highlights: [
        "Collaborated on a mock event app for client WAVE using React and MUI for a responsive, dynamic UI",
        "Designed RESTful backend services with Express.js and MongoDB for efficient data management",
        "Integrated the SendGrid API for a secure password recovery system and implemented JWT-based authentication"
      ]
    }
  ];

  const professionalDev = [
    {
      role: "Senior Consultant",
      company: "New Venture Group (NVG) at Arizona State University",
      location: "Tempe, AZ",
      period: "September 2024 – Present",
      highlights: [
        "Underwent training in market analysis, casing, and problem-solving; applying these skills to real-world clients",
        "Benchmarking competitor marketing tactics for YC startup, Trieve, uncovering unique go-to-market approaches"
      ]
    },
    {
      role: "Software Engineer Consultant",
      company: "TAMID Group at Arizona State University",
      location: "Tempe, AZ",
      period: "January 2024 – Present",
      highlights: [
        "Contributed to full-stack development of club's website and participated in two technical engagements",
        "Won 1st place in internal slide deck competition and collaborated on recruitment by conducting interviews"
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++", "Java", "JavaScript", "TypeScript", "HTML/CSS", "Dart", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Next.js", "Flutter", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "SQL", "MongoDB", "Docker", "Linux/Unix", "Jira", "UI/UX Design"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <section id="projects" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Award-winning projects showcasing innovation in AI and full-stack development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 md:py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions at leading tech companies
            </p>
          </div>
          
          <ExperienceTimeline items={workExperience} />
        </div>
      </section>

      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Professional Development</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consulting and leadership roles in student organizations
            </p>
          </div>
          
          <ExperienceTimeline items={professionalDev} />
        </div>
      </section>

      <section id="skills" className="py-20 md:py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise across the full technology stack
            </p>
          </div>
          
          <SkillsSection categories={skillCategories} />
        </div>
      </section>

      <section id="education" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic excellence in Computer Science
            </p>
          </div>
          
          <EducationCard
            degree="Bachelor of Science in Computer Science"
            school="Arizona State University, Ira A. Fulton Schools of Engineering"
            location="Tempe, AZ"
            graduation="May 2027"
            gpa="4.00/4.00"
            honors={[
              "Dean's List (4x)",
              "New American University Scholar ($32,000)",
              "Barrett, The Honors College"
            ]}
            coursework={[
              "Data Structures and Algorithms",
              "Object-Oriented Programming",
              "Software Engineering",
              "Information Assurance",
              "Discrete Mathematics",
              "Exploring Data in Python and R"
            ]}
          />
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            © 2025 Grant M. Johnson. Built with React + Tailwind CSS
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Interests: Karate (3rd Degree Black Belt), Bouldering, Football (NY Giants), Soccer (Arsenal), Snowboarding</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
