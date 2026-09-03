import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Dance Poses API
  app.get("/api/poses", async (req, res) => {
    try {
      const poses = await storage.getDancePoses();
      res.json(poses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch dance poses" });
    }
  });

  app.get("/api/poses/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const pose = await storage.getDancePoseById(id);
      if (!pose) {
        return res.status(404).json({ error: "Pose not found" });
      }
      res.json(pose);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch pose" });
    }
  });

  app.get("/api/poses/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const poses = await storage.getDancePosesByCategory(category);
      res.json(poses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch poses by category" });
    }
  });

  // Timeline Events API
  app.get("/api/timeline", async (req, res) => {
    try {
      const events = await storage.getTimelineEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch timeline events" });
    }
  });

  app.get("/api/timeline/:era", async (req, res) => {
    try {
      const era = req.params.era;
      const events = await storage.getTimelineEventsByEra(era);
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch timeline events by era" });
    }
  });

  // Cultural Elements API
  app.get("/api/cultural", async (req, res) => {
    try {
      const elements = await storage.getCulturalElements();
      res.json(elements);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cultural elements" });
    }
  });

  app.get("/api/cultural/:type", async (req, res) => {
    try {
      const type = req.params.type;
      const elements = await storage.getCulturalElementsByType(type);
      res.json(elements);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cultural elements by type" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
