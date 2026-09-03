import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function Footer() {
  const footerSections = [
    {
      title: "Academic Resources",
      links: [
        {
          name: "Indian Classical Dance Studies – Sangeet Natak Akademi",
          href: "http://www.sangeetnatak.gov.in/",
        },
        {
          name: "ACM Digital Library",
          href: "https://dl.acm.org/",
        },
        {
          name: "Bharatanatyam Adavus Dataset – Hugging Face",
          href: "https://huggingface.co/datasets/vibhuti16/bharatnatyam_adavus",
        },
      ],
    },
    {
      title: "Institutions & Collaborators",
      links: [
        {
          name: "University at Buffalo – CSE Department",
          href: "https://engineering.buffalo.edu/computer-science-engineering.html",
        },
        {
          name: "Sampradaya Dance Creations",
          href: "https://www.sampradaya.ca/",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-temple-gold/20">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {footerSections.map((section, index) => (
            <motion.div key={index} className="space-y-4" variants={fadeInUp}>
              <h3 className="font-semibold text-temple-gold font-serif text-base md:text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-temple-gold text-sm flex items-center gap-1 transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-temple-gold/20 pt-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
            <p>© 2025 Footwork2Frameworks.</p>
            <div className="flex gap-4">
              <a
                href="https://engineering.buffalo.edu/"
                className="hover:text-temple-gold transition-colors duration-200"
              >
                Institutional Access
              </a>
              <a
                href="https://www.nsf.gov/od/odi/ethics.jsp"
                className="hover:text-temple-gold transition-colors duration-200"
              >
                Research Ethics
              </a>
              <a
                href="https://apastyle.apa.org/style-grammar-guidelines/citations"
                className="hover:text-temple-gold transition-colors duration-200"
              >
                Citation Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
