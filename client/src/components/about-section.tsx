import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";
import type { CulturalElement } from "@shared/schema";
import { useRef, useEffect } from "react";

export function AboutSection() {
  const { data: culturalElements, isLoading } = useQuery<CulturalElement[]>({
    queryKey: ["/api/cultural"],
  });

  const syncedVideo1Ref = useRef<HTMLVideoElement>(null);
  const syncedVideo2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video1 = syncedVideo1Ref.current;
    const video2 = syncedVideo2Ref.current;

    if (video1 && video2) {
      video1.playbackRate = 1.0;
      video2.playbackRate = 1.0;

      const playIfReady = () => {
        if (video1.readyState >= 3 && video2.readyState >= 3) {
          video1.currentTime = 0;
          video2.currentTime = 0;
          video1.play().catch((e) => console.warn("Video1 autoplay blocked:", e));
          video2.play().catch((e) => console.warn("Video2 autoplay blocked:", e));
        }
      };

      const interval = setInterval(() => {
        playIfReady();
      }, 100);

      setTimeout(() => clearInterval(interval), 2000); // stop polling after 2s

      return () => clearInterval(interval);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-temple-gold/20 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-6 gradient-text"
            variants={fadeInUp}
          >
            Footwork2Framework
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-4 font-serif"
            style={{ color: "#800000" }}
            variants={fadeInUp}
          >
            Capturing Fine-Grained 3D Motion Representations in Expressive Dance
          </motion.p>

          <motion.div
            className="flex justify-center items-center space-x-8 md:space-x-16 mb-8"
            variants={fadeInUp}
          >
            <motion.p
              className="text-lg font-serif font-bold mb-6 gradient-text"
              variants={fadeInUp}
            >
              Ankitha Sudarshan*, Lipisha Nitin Chaudhary*, Tanvi Ranga, Ifeoma Nwogu, Rohini Srihari
              <br />
              <span className="italic">University at Buffalo, State University of New York</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Text + Videos */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={slideInLeft}>
            <p className="text-lg text-cream leading-relaxed font-serif">
              Traditional South Asian dance forms encode complex motions, rhythms, and expressions through coordinated movements of the body and hands. Yet they remain largely absent from computational archives due to scarce motion-capture resources and the difficulty of capturing fine-grained, synchronized motion at scale.
            </p>

            <p className="text-lg text-cream leading-relaxed font-serif">
              We introduce Footwork2Framework (F2F), the first large-scale 3D motion dataset for South Asian classical dance, focusing on Bharatanatyam. It comprises over 47,000 seconds of temporally aligned full-body and detailed hand mesh sequences reconstructed from high-resolution videos using state-of-the-art mesh recovery.
            </p>

            <p className="text-lg text-cream leading-relaxed font-serif">
              Surpassing prior resources in scale, anatomical detail, and cultural specificity, F2F documents Bharatanatyam at unprecedented granularity and releases processed 3D features to catalyze research in motion analysis, generation, and cultural preservation. As an initial exploration, we train a simple VAE-based transformer, showing that these fine-grained 3D features support learning of intricate spatiotemporal structure; we envision F2F as a foundation for Creative AI systems that learn from, generate, and help safeguard embodied knowledge of intangible cultural heritage.
            </p>
          </motion.div>

          <motion.div className="space-y-2" variants={slideInRight}>
            {/* In-Studio Label */}
            <p className="text-xl text-center font-semibold font-serif mb-2" style={{ color: "#9c1c1c" }}>
              Custom Studio Recordings
            </p>
            <div className="grid grid-cols-2 gap-4">
              <video
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Purawai_intro+.mov"
              />
              <video
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Purwai_+chunk_000.mp4"
              />
            </div>

            {/* YouTube Label */}
            <p className="text-xl font-semibold font-serif mt-8 mb-2 text-center" style={{ color: "#9c1c1c" }}>
              YouTube Videos
            </p>
            <div className="grid grid-cols-2 gap-4">
              <video
                ref={syncedVideo1Ref}
                src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Natesh+Kautvam+%EF%BD%9C+Bharatanatyam+%EF%BD%9C+Sachhid+2.mov"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <video
                ref={syncedVideo2Ref}
                src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Sachid_chunk_001.mp4"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
