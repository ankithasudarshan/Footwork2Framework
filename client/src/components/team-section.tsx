import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Cultural Heritage Director",
      specialization: "Bharatanatyam Traditionalist",
      bio: "Leading authority on classical Indian dance with 25+ years of performance and teaching experience",
      expertise: ["Traditional Choreography", "Cultural Preservation", "Spiritual Context"]
    },
    {
      name: "Arjun Patel",
      role: "Technology Innovation Lead",
      specialization: "AI & Motion Capture",
      bio: "Pioneering the integration of artificial intelligence with classical dance preservation",
      expertise: ["Machine Learning", "Computer Vision", "3D Modeling"]
    },
    {
      name: "Kavya Menon",
      role: "Digital Artist & Choreographer",
      specialization: "Contemporary Fusion",
      bio: "Bridging traditional techniques with modern expression through digital storytelling",
      expertise: ["Digital Choreography", "Interactive Media", "Cultural Adaptation"]
    },
    {
      name: "Prof. Raghavan Iyer",
      role: "Research Advisor",
      specialization: "Cultural Studies",
      bio: "Academic researcher specializing in the intersection of technology and cultural heritage",
      expertise: ["Cultural Theory", "Digital Humanities", "Academic Research"]
    },
    {
      name: "Maya Krishnan",
      role: "Community Outreach Manager",
      specialization: "Global Education",
      bio: "Connecting international communities with authentic Bharatanatyam traditions",
      expertise: ["Community Building", "Educational Programs", "Cultural Exchange"]
    },
    {
      name: "Siddharth Gupta",
      role: "Technical Architect",
      specialization: "Platform Development",
      bio: "Building scalable digital infrastructure for cultural preservation and education",
      expertise: ["Full-Stack Development", "Cloud Architecture", "User Experience"]
    }
  ];

  const collaborators = [
    "Kalakshetra Foundation",
    "National Institute of Technology",
    "UNESCO Cultural Heritage",
    "MIT Media Lab",
    "Indian Council for Cultural Relations",
    "Digital India Initiative"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold temple-gold mb-6"
            variants={fadeInUp}
          >
            Our Collaborative Team
          </motion.h2>
          <motion.p
            className="text-lg text-cream max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            A multidisciplinary team of artists, technologists, and cultural preservationists 
            working together to bridge tradition and innovation
          </motion.p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-gray-900 border-temple-gold/20 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-cream">
                    {member.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <Badge variant="outline" className="temple-gold border-temple-gold/50">
                      {member.role}
                    </Badge>
                    <Badge variant="secondary" className="warm-orange bg-warm-orange/20">
                      {member.specialization}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <p className="text-sm text-temple-gold font-semibold mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Collaborators */}
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-serif font-bold temple-gold mb-8"
            variants={fadeInUp}
          >
            Institutional Collaborators
          </motion.h3>
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-temple-gold/20 rounded-lg p-4 text-center hover:border-temple-gold/40 transition-colors duration-300"
                variants={fadeInUp}
              >
                <p className="text-cream font-medium">{collaborator}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-temple-gold/10 to-warm-orange/10 rounded-xl p-8 border border-temple-gold/20"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-serif font-bold temple-gold mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-cream max-w-4xl mx-auto leading-relaxed">
              To preserve, celebrate, and evolve the sacred art of Bharatanatyam through innovative 
              technology, ensuring this cultural treasure remains vibrant and accessible for future 
              generations while honoring its profound spiritual and artistic heritage.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
