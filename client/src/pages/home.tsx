import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TimelineSection } from "@/components/timeline-section";
import { PoseLibrary } from "@/components/pose-library";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { CulturalElementGrid } from "@/components/cultural-components";
import { PipelineSection } from "@/components/pipeline";
import { AICoDanceSection } from "@/components/AICoDanceSection";
import { F2FDatasetSection } from "@/components/F2FDataset";
import { F2F3DSection } from "@/components/F2F_3D";
import App from "@/App";
import { Appearance_Retarget } from "@/components/Appreance_Retarget";
import { OtherUseCasesSection } from "@/components/Other_use_Cases";
import { DataAccessSection } from "@/components/Data_Access";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutSection />
      <F2FDatasetSection/>
      <F2F3DSection/>
      <PipelineSection/>
      <AICoDanceSection/>
      <PoseLibrary />
      {/* <Appearance_Retarget/> */}
      <OtherUseCasesSection/>
      <DataAccessSection/>
      <Footer />
    </div>
  );
}
