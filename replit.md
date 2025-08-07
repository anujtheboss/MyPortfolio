# Overview

This is a full-stack web application built with React frontend and Express.js backend, featuring a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components. The application uses Drizzle ORM for database management with PostgreSQL, and includes a comprehensive UI component library for rapid development.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design tokens and shadcn/ui component system
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Library**: Comprehensive shadcn/ui components with Radix UI primitives

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Storage Pattern**: Abstract storage interface with in-memory implementation (MemStorage) for development
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle migrations in `./migrations` directory
- **Schema Definition**: Centralized schema in `shared/schema.ts` with Zod validation
- **Current Schema**: User management with id, username, and password fields

## Development Tooling
- **TypeScript Configuration**: Strict mode enabled with path mapping for clean imports
- **Code Quality**: ESM modules throughout the application
- **Development Server**: Hot module replacement with Vite
- **Database Tools**: Drizzle Kit for schema management and migrations

## Authentication & Security
- **User Model**: Basic user structure with username/password authentication
- **Validation**: Zod schemas for type-safe data validation
- **Storage Interface**: Abstracted user operations (getUser, getUserByUsername, createUser)

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle and Zod for validation
- **@tanstack/react-query**: Server state management and caching

## UI Component Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditional className composition
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library for consistent iconography

## Development Dependencies
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: JavaScript bundler for production builds

## Form and Date Utilities
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Carousel component for image/content sliders

## Additional Integrations
- **wouter**: Minimalist routing library for React
- **cmdk**: Command palette component
- **nanoid**: URL-safe unique string ID generator