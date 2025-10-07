import EducationCard from '../EducationCard';

export default function EducationCardExample() {
  return (
    <div className="p-6 max-w-4xl">
      <EducationCard
        degree="Bachelor of Science in Computer Science"
        school="Arizona State University"
        location="Tempe, AZ"
        graduation="May 2027"
        gpa="4.00"
        honors={["Dean's List (4x)", "Barrett Honors College"]}
        coursework={["Data Structures", "Algorithms", "Software Engineering"]}
      />
    </div>
  );
}
