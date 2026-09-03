import { users, dancePoses, timelineEvents, culturalElements, type User, type InsertUser, type DancePose, type InsertDancePose, type TimelineEvent, type InsertTimelineEvent, type CulturalElement, type InsertCulturalElement } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getDancePoses(): Promise<DancePose[]>;
  getDancePoseById(id: number): Promise<DancePose | undefined>;
  getDancePosesByCategory(category: string): Promise<DancePose[]>;
  createDancePose(pose: InsertDancePose): Promise<DancePose>;
  
  getTimelineEvents(): Promise<TimelineEvent[]>;
  getTimelineEventsByEra(era: string): Promise<TimelineEvent[]>;
  createTimelineEvent(event: InsertTimelineEvent): Promise<TimelineEvent>;
  
  getCulturalElements(): Promise<CulturalElement[]>;
  getCulturalElementsByType(type: string): Promise<CulturalElement[]>;
  createCulturalElement(element: InsertCulturalElement): Promise<CulturalElement>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private dancePoses: Map<number, DancePose>;
  private timelineEvents: Map<number, TimelineEvent>;
  private culturalElements: Map<number, CulturalElement>;
  private currentUserId: number;
  private currentPoseId: number;
  private currentTimelineId: number;
  private currentCulturalId: number;

  constructor() {
    this.users = new Map();
    this.dancePoses = new Map();
    this.timelineEvents = new Map();
    this.culturalElements = new Map();
    this.currentUserId = 1;
    this.currentPoseId = 1;
    this.currentTimelineId = 1;
    this.currentCulturalId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Timeline Events
    const timelineData: InsertTimelineEvent[] = [
      {
        year: "500 BCE",
        era: "past",
        title: "Origins in Temple Worship",
        description: "Bharatanatyam emerged from the sacred halls of South Indian temples, where devadasis (temple dancers) performed as offerings to the divine.",
        imageUrl: "./src/images/bharatnatyam_temple_2.jpg",
        significance: "Established the spiritual foundation and sacred geometry of classical Indian dance",
        // innovations: ["Sacred mudras development", "Temple architecture integration", "Ritualistic choreography"],
        // keyFigures: ["Ancient temple dancers", "Sage Bharata", "Tamil poets"]
      },
      {
        year: "1940",
        era: "past",
        title: "Revival Movement",
        description: "Rukmini Devi Arundale's revolutionary efforts to revive and refine Bharatanatyam, transforming it from temple tradition to concert stage.",
        imageUrl: "./src/images/bharatnatyam_revival.avif",
        significance: "Brought respectability and artistic recognition to the dance form",
        // innovations: ["Costume standardization", "Concert format development", "International exposure"],
        // keyFigures: ["Rukmini Devi Arundale", "Balasaraswati", "Kamala Lachhman"]
      },
      // {
      //   year: 2000,
      //   era: "present",
      //   title: "Global Recognition",
      //   description: "Bharatanatyam achieves worldwide recognition as premier classical dance form, with practitioners and academies established globally.",
      //   imageUrl: "./src/images/bharatnatyam_4.webp",
      //   significance: "Established as a global cultural ambassador for Indian heritage",
      //   // innovations: ["International academies", "Cultural diplomacy", "Cross-cultural collaborations"],
      //   // keyFigures: ["Alarmel Valli", "Leela Samson", "Shobana Chandrakumar"]
      // },
      {
        year: "2025",
        era: "present",
        title: "Digital Heritage Platform",
        description: "Revolutionary AI-powered platform for preserving, teaching, and evolving Bharatanatyam through interactive digital experiences.",
        imageUrl: "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4",
        significance: "Bridging ancient wisdom with cutting-edge technology for future generations",
        // innovations: ["AI choreography assistance", "Virtual reality training", "Digital pose recognition"],
        // keyFigures: ["Contemporary innovators", "Tech artists", "Cultural preservationists"]
      }
    ];

    // Dance Poses
  const poseData: InsertDancePose[] = [
{
  name: "Katti Adavu",
  description: "A foundational Bharatanatyam adavu characterized by sharp stamping and forceful hand gestures, symbolizing strength and determination.",
  videoUrls: ["https://bharatnatyambucket.s3.us-east-1.amazonaws.com/KattiAdavu.mp4", "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"],
  symbolism: "Represents clenched strength or gripping force, often used to portray valor or intense emotion.",
  mudraType: "Mushti"
},
      {
  name: "Korvai Adavu",
  description: "A complex sequence in Bharatanatyam that links multiple adavus into a rhythmic pattern, showcasing the dancer’s control, memory, and precision.",
  videoUrls: ["https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Korvai_Adavu.mp4", "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"],
  symbolism: "Represents intricacy and mastery; often used as a climactic highlight in pure dance segments.",
  mudraType: "Varying (depending on incorporated adavus)"
},
      {
  name: "Mandi Adavu",
  description: "A dynamic Bharatanatyam adavu performed close to the ground with bent knees or squatting jumps, demanding agility and strength.",
  videoUrls: ["https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Mandi_Adavu.mp4", "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D000-ref_bluedancer_chunk_000.mp4"],
  symbolism: "Signifies humility, surrender, or moments of intense emotion; reflects grounded energy and devotion.",
  mudraType: "Varying (commonly Ardhachandra, Tripataka or Katakamukha)"
},{
  name: "Natta Adavu",
  description: "A foundational Bharatanatyam adavu characterized by stretched leg movements and striking the floor with the heel, synchronized with elegant arm positions.",
  videoUrls: ["https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Natt_adavu.mp4", "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/chunk%3D002-ref_bluedancer_chunk_002.mp4"],
  symbolism: "Symbolizes grace, rhythm, and control—used extensively in pure dance sequences to establish tempo and posture.",
  mudraType: "Katakamukha"
},
      {
  name: "Paraval Adavu",
  description: "A graceful Bharatanatyam adavu that involves sweeping, gliding movements across the stage, symbolizing flow and expansion.",
  videoUrls: ["https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ParavalAdavu1.2_part0.mp4", "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"],
  symbolism: "Represents spreading, flying, or expansive movement—used to convey transitions, joy, or grandeur.",
  mudraType: "Alapadma or Tripataka"
},
     {
  name: "Sarukkal Adavu",
  description: "A sliding movement-based Bharatanatyam adavu where the feet glide across the floor with fluidity and grace, often accompanied by soft arm gestures.",
  videoUrls: ["https://bharatnatyambucket.s3.us-east-1.amazonaws.com/Sarukkal_Adavu.mp4", "https://bharatnatyambucket.s3.us-east-1.amazonaws.com/ref_smpl.mp4"],
  symbolism: "Symbolizes smooth transition, stealth, or elegance—used to portray gliding motions, delicate approaches, or emotional subtlety.",
  mudraType: "Katakamukha or Alapadma"
}
    ];

    // Cultural Elements
    const culturalData: InsertCulturalElement[] = [
  {
    "name": "Bharatanatyam Pose Geometry",
    "type": "geometry",
    "description": "Canonical postures defined by angular placement of limbs and symmetric body alignments",
    "origin": "Natya Shastra and temple sculpture poses",
    "significance": "Encodes meaning through structured joint articulation and balance",
    "modernAdaptation": "Digitized using motion capture and SMPL-X skeletal modeling",
    "imageUrl": "./src/images/bharatnatyam_geometry.avif"
  },
  {
    "name": "Mudra Hand Configurations",
    "type": "gesture",
    "description": "Hand gestures with defined finger positions representing symbolic meaning",
    "origin": "Classical dance treatises and iconography",
    "significance": "Expresses narrative elements through geometric precision of fingers",
    "modernAdaptation": "Mapped to 3D hand skeletons (MANO) for real-time synthesis",
    "imageUrl": "./src/images/bharatnatyam_mudra.jpg"
  },
  {
    "name": "Symmetry in Bharatanatyam",
    "type": "aesthetic-principle",
    "description": "Use of bilateral symmetry and axis-based alignment in choreography",
    "origin": "Temple sculpture and spiritual mandala structures",
    "significance": "Creates visual harmony and geometric balance in motion",
    "modernAdaptation": "Analyzed using AI pose graphs and rendered as motion skeletons",
    "imageUrl": "./src/images/bharatnatyam_symmetry.jpg"
  }
];

    // Seed the data
    timelineData.forEach(event => {
      const timelineEvent: TimelineEvent = {
        ...event,
        id: this.currentTimelineId++
      };
      this.timelineEvents.set(timelineEvent.id, timelineEvent);
    });

    poseData.forEach(pose => {
      const dancePose: DancePose = {
        ...pose,
        id: this.currentPoseId++,
        isActive: true
      };
      this.dancePoses.set(dancePose.id, dancePose);
    });

    culturalData.forEach(element => {
      const culturalElement: CulturalElement = {
        ...element,
        id: this.currentCulturalId++
      };
      this.culturalElements.set(culturalElement.id, culturalElement);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getDancePoses(): Promise<DancePose[]> {
    return Array.from(this.dancePoses.values()).filter(pose => pose.isActive);
  }

  async getDancePoseById(id: number): Promise<DancePose | undefined> {
    return this.dancePoses.get(id);
  }

  async getDancePosesByCategory(category: string): Promise<DancePose[]> {
    return Array.from(this.dancePoses.values()).filter(pose => 
      pose.category === category && pose.isActive
    );
  }

  async createDancePose(insertPose: InsertDancePose): Promise<DancePose> {
    const id = this.currentPoseId++;
    const pose: DancePose = { ...insertPose, id, isActive: true };
    this.dancePoses.set(id, pose);
    return pose;
  }

  async getTimelineEvents(): Promise<TimelineEvent[]> {
    return Array.from(this.timelineEvents.values()).sort((a, b) => a.year - b.year);
  }

  async getTimelineEventsByEra(era: string): Promise<TimelineEvent[]> {
    return Array.from(this.timelineEvents.values()).filter(event => event.era === era);
  }

  async createTimelineEvent(insertEvent: InsertTimelineEvent): Promise<TimelineEvent> {
    const id = this.currentTimelineId++;
    const event: TimelineEvent = { ...insertEvent, id };
    this.timelineEvents.set(id, event);
    return event;
  }

  async getCulturalElements(): Promise<CulturalElement[]> {
    return Array.from(this.culturalElements.values());
  }

  async getCulturalElementsByType(type: string): Promise<CulturalElement[]> {
    return Array.from(this.culturalElements.values()).filter(element => element.type === type);
  }

  async createCulturalElement(insertElement: InsertCulturalElement): Promise<CulturalElement> {
    const id = this.currentCulturalId++;
    const element: CulturalElement = { ...insertElement, id };
    this.culturalElements.set(id, element);
    return element;
  }
}

export const storage = new MemStorage();
