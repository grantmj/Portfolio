# Portfolio Website for Grant M. Johnson

## Overview

This is a modern, professionally designed portfolio website for Grant M. Johnson, a Computer Science student at Arizona State University. The site showcases his achievements, projects, work experience, and technical skills with an emphasis on clean design and visual hierarchy. Built as a single-page application with React, the portfolio highlights award-winning hackathon projects (AlterView - 1st place $5,000 winner, Fable - SunHacks winner), AI systems internship experience at Intel, and academic accomplishments.

**Current Status:** ✅ Production-ready and fully functional

## Key Features

- **Responsive Navigation**: Sticky navigation with mobile hamburger menu and smooth scrolling
- **Hero Section**: Professional introduction with contact CTAs and downloadable PDF resume
- **Featured Projects**: Award-winning hackathon projects with achievement badges and tech stack displays
- **Work Experience Timeline**: Intel AI Systems and Automotive internships, Galago full-stack role
- **Professional Development**: NVG and TAMID consulting experience
- **Technical Skills**: Organized by category (Languages, Frameworks, Tools)
- **Education**: ASU degree with 4.00 GPA, honors, and coursework
- **Contact Section**: Multiple contact methods (email, phone, LinkedIn, GitHub) with working links
- **Dark Mode**: Theme toggle with localStorage persistence
- **Resume Download**: PDF download functionality using Vite asset bundling

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React SPA with Vite Build System**
- Single-page application built with React 18 and TypeScript
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight alternative to React Router)
- Component-based architecture with reusable UI elements

**UI Component Library**
- shadcn/ui component system (New York style variant) using Radix UI primitives
- Tailwind CSS for utility-first styling with custom theme configuration
- Custom design system following modern developer portfolio aesthetics (inspired by Linear, Vercel, GitHub)
- Dark mode as primary theme with light mode support via CSS variables

**State Management & Data Fetching**
- TanStack Query (React Query) for async state management
- No external API calls in current implementation - portfolio content is static/hardcoded
- Toast notifications for user feedback using Radix UI Toast primitives

**Styling & Theming**
- Custom color palette defined in CSS variables (HSL format)
- Typography: Inter for body/UI, Space Grotesk for headings (Google Fonts)
- Consistent spacing system using Tailwind's spacing units
- Elevation system with hover/active states for interactive elements

### Backend Architecture

**Express.js Server**
- Minimal Express server serving the React SPA
- Development mode integrates Vite middleware for HMR
- Production mode serves pre-built static files
- Request logging middleware for API routes

**Route Structure**
- `/api/*` prefix reserved for API endpoints (currently minimal/placeholder implementation)
- All other routes serve the React SPA (client-side routing)

**Session & Storage Layer**
- In-memory storage implementation (`MemStorage` class) as placeholder
- Interface defined for future database integration
- User schema defined but not actively used in current portfolio implementation
- Session management with `connect-pg-simple` configured but not actively utilized

### Database Schema

**Drizzle ORM Configuration**
- PostgreSQL as target database (via Neon serverless driver)
- Schema location: `shared/schema.ts`
- Migration files output to `./migrations` directory
- Single users table defined with UUID primary key, username, and password fields

**Current Status**
- Database schema exists but is not actively used by the portfolio
- The portfolio content is static and does not require database persistence
- Schema appears to be scaffolding for future authentication/user features

## External Dependencies

### Core Framework & Build Tools
- **React 18**: UI library for component-based frontend
- **Vite**: Fast build tool and development server with HMR
- **TypeScript**: Type-safe development across client and server
- **Express.js**: Node.js web server framework

### UI Component Libraries
- **Radix UI**: Unstyled, accessible component primitives (20+ components including Dialog, Dropdown, Popover, Accordion, etc.)
- **shadcn/ui**: Pre-styled component system built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for managing component variants
- **Lucide React**: Icon library for consistent iconography

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation

### Form & Validation
- **React Hook Form**: Form state management via `@hookform/resolvers`
- **Zod**: Schema validation library (used with Drizzle)

### Utilities & Developer Tools
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Utility for merging Tailwind classes
- **nanoid**: Unique ID generation
- **Wouter**: Lightweight routing library

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Development error overlay
- `@replit/vite-plugin-cartographer`: Replit integration (dev only)
- `@replit/vite-plugin-dev-banner`: Development banner (dev only)

### Static Assets
- **Google Fonts**: Inter and Space Grotesk font families
- **Resume PDF**: Stored in `attached_assets` directory for download feature

### Design Guidelines
- Custom design system documented in `design_guidelines.md`
- Color palette optimized for dark mode (primary) with light mode support
- Typography scale and spacing system defined for consistent UI