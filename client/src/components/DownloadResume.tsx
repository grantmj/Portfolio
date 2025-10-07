import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import resumePdf from "@assets/Grant M Johnson Resume_1759873686107.pdf";

export default function DownloadResume() {
  return (
    <Button 
      variant="outline" 
      size="lg"
      asChild
      data-testid="button-download-resume"
    >
      <a href={resumePdf} download="Grant_M_Johnson_Resume.pdf">
        <Download className="w-4 h-4 mr-2" />
        Download Resume
      </a>
    </Button>
  );
}
