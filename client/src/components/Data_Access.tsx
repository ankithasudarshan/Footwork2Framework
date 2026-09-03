// components/DataAccessSection.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function DataAccessSection() {
  return (
    <section id="data-access" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
            variants={fadeInUp}
          >
            Data Access
          </motion.h2>

          {/* Body */}
          <motion.p
            className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
            variants={fadeInUp}
          >
            To request access to our data, please fill out the form {" "}
            <a
              href="https://forms.gle/zy2jK5JhJi1CtDH8A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-temple-gold underline hover:text-temple-gold/80 transition-colors"
            >
              here
        </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
