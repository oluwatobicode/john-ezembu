# John Ezembu Portfolio - Data Scientist & AI Automation Engineer

## Overview

This is a modern, production-grade personal portfolio website for John Ezembu, a Data Scientist and AI Automation Engineer. The application showcases his professional experience, research projects, and expertise in machine learning, federated learning, and AI-powered analytics. Built as a full-stack web application with emphasis on accessibility, performance, and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with CSS custom properties for consistent theming
- **Theme System**: Custom light/dark mode implementation with system preference detection and FOUC prevention
- **Animations**: Framer Motion for smooth micro-interactions with respect for `prefers-reduced-motion`
- **State Management**: TanStack Query for server state management and API caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **TypeScript**: Full TypeScript implementation for type safety across the stack
- **API Design**: RESTful endpoints with proper error handling and logging middleware
- **Contact System**: Built-in contact form processing with rate limiting and validation
- **Development**: Vite integration for hot module replacement and fast development builds

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database interactions
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session management

### Authentication and Authorization
- Basic user schema implemented with Drizzle ORM supporting username/password authentication
- Session-based authentication system ready for extension
- Memory storage fallback for development environments

### PWA (Progressive Web App) Features
- **Service Worker**: Comprehensive offline support with caching strategies
- **Web App Manifest**: Full PWA configuration for installable app experience
- **Performance**: Optimized for Lighthouse scores ≥95 on both mobile and desktop
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### SEO and Performance Optimization
- **Meta Tags**: Complete OpenGraph and Twitter Card implementation
- **Structured Data**: Schema.org markup for Person, CreativeWork, and Article types
- **Performance**: Code splitting, lazy loading, and optimized asset delivery
- **Analytics Ready**: Privacy-friendly analytics integration prepared

### Development Tooling
- **Build System**: Vite for fast development and optimized production builds
- **Code Quality**: ESLint and Prettier configuration for consistent code style
- **Type Safety**: Strict TypeScript configuration with path mapping
- **Development Experience**: Hot module replacement and error overlay integration

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and API caching
- **wouter**: Lightweight React router for client-side navigation
- **framer-motion**: Animation library for smooth user interactions

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for constructing className strings conditionally

### Database and ORM
- **drizzle-orm**: TypeScript ORM with excellent type inference
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-zod**: Zod schema generation from Drizzle tables

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Form Handling and Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Resolvers for various validation libraries
- **zod**: TypeScript-first schema validation

### Date and Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Secure, URL-friendly unique string ID generator

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **express-session**: Session middleware for Express.js applications