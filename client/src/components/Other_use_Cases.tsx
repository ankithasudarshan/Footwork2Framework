// components/OtherUseCasesSection.tsx
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function OtherUseCasesSection() {
  return (
    <section className="py-20 bg-white" id="other-use-cases">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Other Use Cases: Bharatanatyam on Diverse Avatars
        </motion.h2>

        <motion.p
          className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Examples of Bharatanatyam motion retargeted to diverse avatar styles, from stylized characters to pop culture figures, demonstrate that our motion representation transfers across different appearances while preserving kinematic and rhythmic fidelity.
        </motion.p>

        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_anime_chunk_002.mp4",
            },
             {
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D000-ref_moana_chunk_000.mp4",
            },
             {
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D003-ref_realman_chunk_003.mp4",
            },
            {
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D003-ref_humanoid_chunk_003.mp4",
            },
             {
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_back_swan_nat_port_chunk_002.mp4",
            },
        
            {
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_pop_chunk_002.mp4",
            } 
           
          ].map((item, i) => (
            <div className="text-center" key={i}>
              {/* <p className="text-sm md:text-base text-[#9c1c1c] mb-2 font-semibold font-serif"> */}
                {/* {item.label} */}
              {/* </p> */}
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-square object-cover rounded-lg shadow-md mx-auto bg-black"
              />
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-base text-cream font-serif leading-relaxed max-w-4xl mx-auto mt-12 mb-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
         These lightweight previews demonstrate generalization across avatars, showing that the same Bharatanatyam sequence transfers to diverse characters while preserving rhythmic structure and expressive detail.
        </motion.p>
      </div>
    </section>
  );
}
