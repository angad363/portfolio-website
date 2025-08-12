# Overview

This is a modern full-stack web application built with React and Express, featuring a portfolio website with interactive 3D elements, contact functionality, and a clean modern design. The application uses TypeScript throughout and follows a monorepo structure with shared code between frontend and backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management
- **3D Graphics**: Three.js with React Three Fiber for interactive 3D background elements
- **Animations**: Framer Motion for smooth page transitions and component animations
- **Styling**: Tailwind CSS with custom color variables and design system

## Backend Architecture  
- **Framework**: Express.js with TypeScript running in ESM mode
- **Development Server**: Custom Vite integration for seamless full-stack development
- **API Design**: RESTful endpoints with structured error handling and request logging
- **Storage**: In-memory storage implementation with interface for easy database migration
- **Session Management**: Basic session handling with middleware support

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Schema**: Simple user management with ID, username, and password fields
- **Migrations**: Drizzle Kit for schema management and migrations
- **Validation**: Zod schemas for type-safe data validation

## Build and Deployment
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Hot module replacement with Vite dev server integration
- **Production**: Static file serving with Express for SPA deployment
- **TypeScript**: Strict mode enabled with path aliases for clean imports

# External Dependencies

## Database and Storage
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Connect PG Simple**: PostgreSQL session store for Express sessions

## UI and Design
- **Radix UI**: Comprehensive component library for accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Modern icon library with consistent design
- **Font Awesome**: Icon library for social media and contact icons

## 3D Graphics and Animation
- **Three.js**: WebGL 3D graphics library for interactive backgrounds
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Helper components and utilities for R3F
- **Framer Motion**: Production-ready motion library for React animations

## Development and Tooling
- **Vite**: Fast build tool with HMR and plugin ecosystem
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast JavaScript bundler for backend compilation
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

## Email and Communication
- **EmailJS**: Client-side email sending (configured but using simulation)
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

## Replit Integration
- **Replit Vite Plugins**: Runtime error overlay and cartographer for development
- **Development Banner**: Replit-specific development environment integration