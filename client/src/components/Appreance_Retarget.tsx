// components/F2F3DSection.tsx

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function Appearance_Retarget() {
  return (
    <section className="py-20 bg-white" id="appearance-retarget">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Appreance Retargeting with 3D Meshes
        </motion.h2>

        <motion.p
          className="text-center text-lg text-cream font-serif leading-relaxed max-w-4xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          This section showcases 3D mesh renderings from the Footwork2Framework (F2F) dataset.
          Each clip visualizes pose dynamics, skeletal motion, and mesh deformation aligned with rhythmic footwork,
          enabling deeper analysis of temporal structure, articulation, and style.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 items-start justify-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Row 1 */}
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Mesh View 01</p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_guy_yo_chunk_001.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[22rem] md:h-[30rem] object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Mesh View 02</p>
            <video
              src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_pop_chunk_002.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[22rem] md:h-[30rem] object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Mesh View 03</p>
            <video
              src="https://your-bucket/f2f_mesh_03.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[22rem] md:h-[30rem] object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>

          {/* Row 2 */}
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Mesh View 04</p>
            <video
              src="https://your-bucket/f2f_mesh_04.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[22rem] md:h-[30rem] object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Mesh View 05</p>
            <video
              src="https://your-bucket/f2f_mesh_05.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[22rem] md:h-[30rem] object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-[#9c1c1c] mb-2 font-semibold font-serif">Mesh View 06</p>
            <video
              src="https://your-bucket/f2f_mesh_06.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[22rem] md:h-[30rem] object-cover rounded-lg shadow-md mx-auto bg-black"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-center text-base text-cream font-serif leading-relaxed max-w-4xl mx-auto mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          The 3D mesh views provide a compact representation of motion quality—ideal for sequence alignment,
          pose tracking, and benchmarking mesh-based generation models on F2F.
        </motion.p>
      </div>
    </section>
  );
}
