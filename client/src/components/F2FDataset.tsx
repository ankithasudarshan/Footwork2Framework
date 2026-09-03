import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function F2FDatasetSection() {
    return (
        <section className="py-20 bg-white" id="f2f-dataset">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-2xl md:text-4xl font-serif font-bold temple-gold mb-10 text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Footwork2Framework (F2F) Dataset
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-center text-lg text-cream leading-relaxed font-serif mb-16"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Footwork2Framework is designed to digitally preserve the nuanced vocabulary of this South Asian dance form through a combination of curated performances and controlled recordings.
                    The Footwork2Framework dataset comprises 1,910 video clips, each 25 seconds long and sampled at 30 frames per second, totaling 47,750 seconds (approximately 13 hours) of performance footage.
                    <br/>
                    Sample frames from our dataset. The first row shows raw video frames “in the wild”
                    sourced from YouTube, while the second row displays frames from our custom 2D studio recordings.
                    The YouTube samples capture dance in varied settings, backgrounds, and lighting conditions, whereas
                    our studio recordings feature a consistent background and higher visual clarity
                </motion.p>

                <motion.div
                    className="flex justify-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <div className="inline-block overflow-hidden rounded-2xl shadow-lg bg-white">
                        <div className="relative">
                            <img
                                src="https://bharatnatyambucket.s3.us-east-1.amazonaws.com/five_dancer.png"
                                alt="F2F Sample montage of annotated dance frames"
                                className="block object-contain w-[600px] max-w-full rounded-2xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
