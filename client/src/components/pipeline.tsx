import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function PipelineSection() {
  return (
    <section id="pipeline" className="py-20 px-4 bg-white">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center space-y-12"
      >
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10"
          variants={fadeInUp}
        >
          Our Pipeline
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-start">
          {[
            {
              title: "Data Preprocessing Stage",
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/data_preprocessing.png",
            },
            {
              title: "Feature Extraction Stage",
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/stitching.png",
            },
            {
              title: "Model Training Stage",
              src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/vae.png",
            },
          ].map((img, index) => (
            <div
              key={img.title}
              className={`flex flex-col items-center ${
                index === 2 ? "md:col-span-2" : ""
              }`} // Last image spans full width in row 2
            >
              <h3 className="text-lg text-[#9c1c1c] font-semibold mb-4 font-serif">
                {img.title}
              </h3>

              <div
                className="w-full aspect-video border-2 border-gray-900 rounded-xl shadow-md bg-white overflow-hidden"
                style={{ maxWidth: "700px" }}
              >
                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-contain"
                  variants={fadeInUp}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
