import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const meshVideos = [
  { title: "Mesh View 01", src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Arun1.mp4" },
  { title: "Mesh View 02", src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Arun+1.mp4" },
  { title: "Mesh View 03", src: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Arun+1_black.mp4" },
];

function MeshVideoTile({ title, src }: { title: string; src: string }) {
  return (
    <div className="text-center">
      {/* <p className="text-base text-[#9c1c1c] mb-2 font-semibold font-serif">{title}</p> */}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[14rem] md:h-[18rem] object-cover rounded-lg shadow-md mx-auto bg-black"
      />
    </div>
  );
}

export function F2F3DSection() {
  return (
    <section className="py-20 bg-white" id="f2f-3d">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          F2F-3D : 3D Motion Extraction for the Footwork2Framework Dataset
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

        {/* Video Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-start justify-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {meshVideos.map((video, index) => (
            <MeshVideoTile key={index} title={video.title} src={video.src} />
          ))}
        </motion.div>

        {/* Two stacked images */}
        <motion.div
          className="flex flex-col gap-8 mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img
            src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/F2F-3D.png"
            alt="3D Mesh Image 1"
            className="w-full rounded-lg shadow-md border border-gray-300"
          />
          <img
            src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/F2F-3D_hands.png"
            alt="3D Mesh Image 2"
            className="w-full rounded-lg shadow-md border border-gray-300"
          />
        </motion.div>

        <motion.p
          className="text-center text-base text-cream font-serif leading-relaxed max-w-4xl mx-auto mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          These figures present our compositional motion-capture pipeline that augments full-body pose with fine-grained hand reconstruction. 
          Overlaid 3D hand meshes accurately track subtle finger articulations central to Bharatanatyam mudras. 
          Fusing local hand modules with the global body model yields temporally coherent, high-resolution full-body meshes. 
          This representation supports sequence alignment, gesture recognition, and quantitative benchmarking on F2F.
        </motion.p>
      </div>
    </section>
  );
}
