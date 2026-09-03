import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { CulturalElement } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { TimelineSection } from "./timeline-section";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const timelineSteps = [
    { year: "500 BCE", era: "Classical Origins", section: "#past" },
    { year: "1940", era: "20th-Century Revival", section: "#past" },
    { year: "2025", era: "Contemporary Trajectories", section: "#present" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-white pt-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-temple-gold rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-warm-orange rounded-full opacity-15 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-deep-red rounded-full opacity-10 animate-pulse" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Section Heading */}
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10"
          variants={fadeInUp}
        >
          Diachronic Overview of Bharatanatyam
        </motion.h2>

        {/* Timeline Navigation */}
        <motion.div
          className="flex flex-col items-center space-y-6 mb-12"
          variants={{
            animate: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="flex justify-center items-center space-x-6 flex-wrap mb-12"
            variants={{
              animate: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {timelineSteps.map((step, index) => (
              <div key={step.year} className="flex items-center">
                <button
                  onClick={() => scrollToSection(step.section)}
                  className="timeline-dot flex flex-col items-center group"
                >
                  <div className=" w-16 h-16 rounded-full bg-temple-gold/20 flex items-center justify-center mb-2 group-hover:bg-temple-gold/40 transition-colors duration-300 border-2 border-temple-gold/30">
                    <span className="temple-gold font-bold text-sm">{step.year}</span>
                  </div>
                  <span className="text-sm text-[#9c1c1c] group-hover:temple-gold transition-colors duration-300 font-serif font-semibold">
                    {step.era}
                  </span>
                </button>

                {index < timelineSteps.length - 1 && (
                  <div className="w-16 h-0.5 bg-temple-gold/30 mx-4" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Summary Section */}
        <motion.div variants={fadeInUp} className="space-y-6 mb-16">
          <motion.p
            className="text-lg text-cream max-w-3xl mx-auto leading-relaxed font-serif"
            variants={fadeInUp}
          >
            This project examines the historical development and contemporary recontextualization of Bharatanatyam, tracing its movement from temple ritual and courtly practice to modern pedagogy, global performance circuits, and digital scholarship.
          </motion.p>

          <p className="text-4xl md:text-6xl font-serif font-bold temple-gold">5000+</p>

          <p className="text-lg text-cream max-w-3xl mx-auto leading-relaxed font-serif">
            Years of an enduring aesthetic tradition, documented through formal analysis, archival synthesis, and computational methods for preservation and dissemination.
          </p>
        </motion.div>  
      </motion.div>
      <TimelineSection/>
    </section>
  );
}
