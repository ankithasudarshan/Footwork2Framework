import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import type { TimelineEvent } from "@shared/schema";
import templeImg from "@/images/bharatnatyam_temple_2.jpg";
import revivalImg from "@/images/bharatnatyam_revival.avif";

// Static content (previously served from the /api/timeline endpoint).
const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "500 BCE",
    era: "past",
    title: "Origins in Temple Worship",
    description:
      "Bharatanatyam emerged from the sacred halls of South Indian temples, where devadasis (temple dancers) performed as offerings to the divine.",
    imageUrl: templeImg,
    significance:
      "Established the spiritual foundation and sacred geometry of classical Indian dance",
    innovations: null,
    keyFigures: null,
  },
  {
    id: 2,
    year: "1940",
    era: "past",
    title: "Revival Movement",
    description:
      "Rukmini Devi Arundale's revolutionary efforts to revive and refine Bharatanatyam, transforming it from temple tradition to concert stage.",
    imageUrl: revivalImg,
    significance:
      "Brought respectability and artistic recognition to the dance form",
    innovations: null,
    keyFigures: null,
  },
  {
    id: 3,
    year: "2025",
    era: "present",
    title: "Digital Heritage Platform",
    description:
      "Revolutionary AI-powered platform for preserving, teaching, and evolving Bharatanatyam through interactive digital experiences.",
    imageUrl:
      "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4",
    significance:
      "Bridging ancient wisdom with cutting-edge technology for future generations",
    innovations: null,
    keyFigures: null,
  },
];

export function TimelineSection() {
  const timelineEvents = timelineData;

  const groupedEvents = timelineEvents?.reduce((acc, event) => {
    if (!acc[event.era]) {
      acc[event.era] = [];
    }
    acc[event.era].push(event);
    return acc;
  }, {} as Record<string, TimelineEvent[]>);

  const eraConfig = {
    past: {
      title: "Past · Origins and Revival",
      description: "Sacred traditions and temple heritage",
      color: "text-[#9c1c1c] font-serif",
    },
    present: {
      title: "Present · Innovation",
      description: "Modern renaissance and global recognition",
      color: "text-[#9c1c1c] font-serif",
    },
    future: {
      title: "Future · Innovation",
      description: "Digital preservation and AI integration",
      color: "text-[#f97316] font-serif",
    },
  };

  return (
    <div className="pt-0 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        ></motion.div>

        {Object.entries(eraConfig).map(([era, config], eraIndex) => {
          const events = groupedEvents?.[era] || [];
          if (events.length === 0) return null;

          return (
            <motion.section
              key={era}
              id={era}
              className="mb-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div className="text-center mb-12" variants={fadeInUp}>
                <h3
                  className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${config.color}`}
                >
                  {config.title}
                </h3>
                <p className="text-lg text-[#5f4330]/80 max-w-2xl mx-auto font-serif">
                  {config.description}
                </p>
              </motion.div>

              <div className="space-y-12">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      index % 2 === 0 ? "" : "md:grid-flow-col-dense"
                    }`}
                    variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  >
                    <div className={index % 2 === 0 ? "" : "md:col-start-2"}>
                      <Card className="bg-[#fdf6ec] border border-neutral-200 text-[#3c2d1d] shadow-lg">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="border-[#b38000] text-[#b38000] bg-[#fcf4da] text-xs px-2 py-1">
                              {event.year}
                            </Badge>
                            <Badge className="text-xs text-[#fef9f2] bg-[#0f172a] px-2 py-1">
                              {event.era}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl md:text-3xl font-serif font-bold text-[#9c1c1c]">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="text-base text-[#5f4330]/80 font-serif">
                            {event.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-sm font-semibold text-[#9c1c1c] font-serif mb-2">
                            Cultural Significance:
                          </p>
                          <p className="text-sm text-[#5f4330]/80 font-serif">
                            {event.significance}
                          </p>

                          {event.innovations?.length > 0 && (
                            <div>
                              <p className="text-sm font-semibold text-[#9c1c1c] mb-2">
                                Key Innovations:
                              </p>
                              <ul className="space-y-1">
                                {event.innovations.map((innovation, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-[#3c2d1d] flex items-start"
                                  >
                                    <span className="text-[#b38000] mr-2">•</span>
                                    {innovation}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {event.keyFigures?.length > 0 && (
                            <div>
                              <p className="text-sm font-semibold text-[#b38000] mb-2">
                                Key Figures:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {event.keyFigures.map((figure, i) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="text-xs border-[#b38000] text-[#3c2d1d]"
                                  >
                                    {figure}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    <div className={index % 2 === 0 ? "" : "md:col-start-1"}>
                      {era === "present" ? (
                        <motion.video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="rounded-xl shadow-2xl w-full h-64 md:h-80 object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <source
                            src={
                              event.imageUrl || "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"
                            }
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </motion.video>
                      ) : (
                        <motion.img
                          src={
                            event.imageUrl ||
                            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                          }
                          alt={event.title}
                          className="rounded-xl shadow-2xl w-full h-64 md:h-80 object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
