// components/PoseLibrary.tsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { fadeInUp, staggerContainer, poseCardHover } from "@/lib/animations";
import type { DancePose } from "@shared/schema";

// --- Your local data (exactly as provided) ---
type InsertDancePose = {
  name: string;
  description: string;
  videoUrls: string[];
  symbolism?: string;
  mudraType?: string;
};

const poseData: InsertDancePose[] = [
  {
    name: "Katti Adavu",
    description:
      "A foundational Bharatanatyam adavu characterized by sharp stamping and forceful hand gestures, symbolizing strength and determination.",
    videoUrls: [
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/KattiAdavu.mp4",
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D001-ref_bluedancer_chunk_001katti.mp4",
    ],
    symbolism:
      "Represents clenched strength or gripping force, often used to portray valor or intense emotion.",
    mudraType: "Mushti",
  },
  {
    name: "Korvai Adavu",
    description:
      "A complex sequence in Bharatanatyam that links multiple adavus into a rhythmic pattern, showcasing the dancer’s control, memory, and precision.",
    videoUrls: [
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Korvai_Adavu.mp4",
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_bluedancer_chunk_002.mp4",
    ],
    symbolism:
      "Represents intricacy and mastery; often used as a climactic highlight in pure dance segments.",
    mudraType: "Varying (depending on incorporated adavus)",
  },
  {
    name: "Mandi Adavu",
    description:
      "A dynamic Bharatanatyam adavu performed close to the ground with bent knees or squatting jumps, demanding agility and strength.",
    videoUrls: [
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Mandi_Adavu.mp4",
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D000-ref_bluedancer_chunk_000.mp4",
    ],
    symbolism:
      "Signifies humility, surrender, or moments of intense emotion; reflects grounded energy and devotion.",
    mudraType: "Varying (commonly Ardhachandra, Tripataka or Katakamukha)",
  },
  {
    name: "Natta Adavu",
    description:
      "A foundational Bharatanatyam adavu characterized by stretched leg movements and striking the floor with the heel, synchronized with elegant arm positions.",
    videoUrls: [
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Natt_adavu.mp4",
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D001-ref_bluedancer_chunk_001.mp4",
    ],
    symbolism:
      "Symbolizes grace, rhythm, and control—used extensively in pure dance sequences to establish tempo and posture.",
    mudraType: "Katakamukha",
  },
  {
    name: "Paraval Adavu",
    description:
      "A graceful Bharatanatyam adavu that involves sweeping, gliding movements across the stage, symbolizing flow and expansion.",
    videoUrls: [
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ParavalAdavu1.2_part0.mp4",
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/blue_chunk_paraval_Adavu.mp4",
    ],
    symbolism:
      "Represents spreading, flying, or expansive movement—used to convey transitions, joy, or grandeur.",
    mudraType: "Alapadma or Tripataka",
  },
  {
    name: "Sarukkal Adavu",
    description:
      "A sliding movement-based Bharatanatyam adavu where the feet glide across the floor with fluidity and grace, often accompanied by soft arm gestures.",
    videoUrls: [
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Sarukkal_Adavu.mp4",
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D000-ref_bluedancer_chunk_000saru.mp4",
    ],
    symbolism:
      "Symbolizes smooth transition, stealth, or elegance—used to portray gliding motions, delicate approaches, or emotional subtlety.",
    mudraType: "Katakamukha or Alapadma",
  },
];

// Optional: map local insert type -> your API type (generate ids)
const localPoses: DancePose[] = poseData.map((p, i) => ({
  id: i + 1, // fallback id
  name: p.name,
  description: p.description,
  videoUrls: p.videoUrls,
  symbolism: p.symbolism,
  mudraType: p.mudraType,
}));

export function PoseLibrary() {
  const [selectedPose, setSelectedPose] = useState<DancePose | null>(null);

  const { data: apiPoses, isLoading } = useQuery<DancePose[]>({
    queryKey: ["/api/poses"],
  });

  // Prefer API data if present; otherwise use your local data
  const poses: DancePose[] = apiPoses?.length ? apiPoses : localPoses;

  if (isLoading && !apiPoses?.length) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-[#b38000]/20 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white" id="pose-library">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10"
            variants={fadeInUp}
          >
            Interactive Adavus Library
          </motion.h2>
          <motion.p
            className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
            variants={fadeInUp}
          >
            A curated, interactive corpus of foundational Bharatanatyam positions (sthānas) and movement units (adavus). Each entry pairs reference video with 3D mesh reconstructions and annotated keyframes to clarify rhythm, footwork, posture, and mudra articulation. The library supports systematic study, side-by-side comparison, and quantitative analysis of technique and style.
          </motion.p>
        </motion.div>

        {/* Pose Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {poses.map((pose, index) => (
            <motion.div key={pose.id ?? `${pose.name}-${index}`} variants={fadeInUp} custom={index}>
              <Dialog onOpenChange={(open) => setSelectedPose(open ? pose : null)}>
                <DialogTrigger asChild>
                  <motion.div
                    className="pose-card cursor-pointer"
                    variants={poseCardHover}
                    whileHover="whileHover"
                  >
                    <Card className="bg-[#fdf6ec] border border-neutral-200 hover:border-[#b38000] transition-colors duration-300 text-[#3c2d1d] shadow-md min-h-[360px]">
                      {/* Inline Videos in Card */}
                      <div className="flex gap-2 px-2 pt-2 justify-center">
                        {pose.videoUrls.slice(0, 2).map((url, i) => (
                          <span key={i} className="w-1/2">
                            <video
                              src={url}
                              className="w-full h-44 object-cover rounded-md"
                              muted
                              autoPlay
                              loop
                              playsInline
                            />
                          </span>
                        ))}
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-serif font-bold text-[#9c1c1c]">
                          {pose.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-[#5f4330]/80 line-clamp-2 font-serif">
                          {pose.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-2" />
                    </Card>
                  </motion.div>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent className="max-w-4xl bg-[#fdf6ec] border border-neutral-200 text-[#3c2d1d] font-serif">
                  <DialogHeader className="flex flex-col gap-2">
                    <DialogTitle className="text-2xl font-serif font-bold text-[#9c1c1c]">
                      {selectedPose?.name ?? pose.name}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-[#5f4330]/80 font-serif">
                      {selectedPose?.description ?? pose.description}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Inline Videos in Dialog */}
                  <div className="flex gap-4 py-4 justify-center">
                    {pose.videoUrls.slice(0, 2).map((url, i) => (
                      <span key={i} className="w-1/2">
                        <video
                          src={url}
                          className="w-full h-64 object-cover rounded-md"
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      </span>
                    ))}
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4 mt-4">
                    {pose.symbolism && (
                      <div>
                        <h4 className="font-semibold text-[#9c1c1c] mb-2">Symbolism</h4>
                        <p className="text-sm text-[#5f4330]/80 font-serif">{pose.symbolism}</p>
                      </div>
                    )}

                    {pose.mudraType && (
                      <div>
                        <h4 className="font-semibold text-[#9c1c1c] mb-2">Mudra Type</h4>
                        <p className="text-sm text-[#5f4330]/80 font-serif capitalize">
                          {pose.mudraType}
                        </p>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
