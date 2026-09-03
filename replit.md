# Bharatanatyam Heritage Platform

## Overview

A full-stack web application dedicated to preserving and showcasing the rich cultural heritage of Bharatanatyam, a classical Indian dance form. The platform combines traditional cultural knowledge with modern technology to create an interactive educational experience featuring dance poses, historical timelines, and cultural elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Router**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom cultural color palette
- **Component Library**: Radix UI components with shadcn/ui design system
- **State Management**: React Query (@tanstack/react-query) for server state
- **Animations**: Framer Motion for smooth user interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development**: tsx for TypeScript execution in development

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express backend API
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Schema
- **Users**: Authentication and user management
- **Dance Poses**: Comprehensive pose library with categories, difficulty levels, and cultural significance
- **Timeline Events**: Historical milestones organized by era (past, present, future)
- **Cultural Elements**: Costumes, music, temples, and traditions

### API Endpoints
- `/api/poses` - Dance pose management and retrieval
- `/api/timeline` - Historical timeline events
- `/api/cultural` - Cultural elements and traditions

### UI Components
- Responsive navigation with smooth scrolling
- Interactive pose library with filtering and detailed views
- Timeline visualization with era-based organization
- Cultural heritage showcase with modern adaptations
- Team section highlighting expertise and diversity

## Data Flow

1. **Client Requests**: React components use React Query to fetch data from REST API endpoints
2. **API Processing**: Express routes handle requests and interact with the database through Drizzle ORM
3. **Database Operations**: PostgreSQL stores and retrieves cultural data with proper relational structure
4. **Response Handling**: JSON responses are cached and managed by React Query for optimal performance

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **ORM**: Drizzle ORM with Zod validation
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Animation**: Framer Motion for enhanced user experience
- **Form Handling**: React Hook Form with Zod resolvers

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Development Server**: Express with Vite middleware for SSR-like development

## Deployment Strategy

### Development Environment
- Frontend served through Vite dev server with HMR
- Backend runs on tsx with automatic restart on file changes
- Database migrations handled through Drizzle Kit

### Production Build
- Frontend: Vite builds static assets to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Database: Production schema managed through environment variables

### Environment Configuration
- `DATABASE_URL` for PostgreSQL connection
- `NODE_ENV` for environment-specific behavior
- Development features include Replit integration and error overlays

### Cultural Design Elements
- Custom color palette inspired by traditional temple architecture
- Typography using serif fonts for headers to reflect classical aesthetics
- Responsive design ensuring accessibility across devices
- Animation patterns that respect cultural significance while enhancing user experience

The architecture prioritizes both technical performance and cultural authenticity, creating a platform that serves as both an educational resource and a celebration of Bharatanatyam's rich heritage.