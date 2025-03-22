# Portfolio Project

A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. This project includes a flexible component system for showcasing projects in a customizable way.

## Features

- Responsive design optimized for all devices
- Dark/light mode theme support
- Custom project component system for easy project page creation
- Contact form with email notification
- Code syntax highlighting
- Image gallery with modal viewing
- Performance optimized with Next.js

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
# or with turbopack
next dev --turbopack
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

- **Development**: `pnpm dev` or `next dev --turbopack`
- **Build**: `pnpm build` or `next build`
- **Start**: `pnpm start` or `next start`
- **Lint**: `pnpm lint` or `next lint`

## Project Components System

This portfolio uses a powerful component system for building project pages declaratively. Each project is defined using a schema that specifies which components to render and how to configure them.

### Using the Project Component System

Projects are defined in `lib/projects.tsx` using a structured schema:

```typescript
const projects: Projects = {
  "project-slug": {
    meta: {
      title: "Project Title",
      description: "Short project description",
      image: "/images/project.png",
      github: "https://github.com/username/project",
    },
    sections: [
      // Project sections go here
    ]
  }
}
```

### Section Types

There are two types of sections:

#### 1. Standard Sections

Renders a single component:

```typescript
{
  type: 'standard',
  component: {
    component: 'Title', // Component name
    props: {
      text: 'My Project',
      size: 'xl',
      align: 'center',
      withLine: true,
    },
  },
}
```

#### 2. Grid Sections

Allows arranging multiple components in a grid:

```typescript
{
  type: 'grid',
  title: 'Project Features', // Optional title
  items: [
    {
      width: 2, // 2/3 of grid width
      component: {
        component: 'ImageWithCaption',
        props: {
          src: '/images/feature.png',
          alt: 'Feature screenshot',
          caption: 'Main interface',
        },
      },
    },
    {
      width: 1, // 1/3 of grid width
      component: {
        component: 'FeatureList',
        props: {
          features: ['Feature 1', 'Feature 2'],
        },
      },
    },
  ],
}
```

### Available Components

The system includes specialized components for project pages:

#### Text Components
- `Title` - Section titles with configurable size and alignment
- `Subtitle` - Secondary headings
- `Description` - Paragraph text with formatting options

#### Media Components
- `ImageShowcase` - Gallery of multiple images
- `ImageWithCaption` - Single image with caption
- `Video` - Embed video content

#### Content Components
- `CodeBlock` - Syntax-highlighted code snippets
- `FeatureList` - List of features with check icons
- `TechStack` - Display technologies used in the project
- `Quote` - Highlighted quote with attribution
- `Testimonial` - Customer/user testimonial
- `LinkCard` - Card with link to external resource
- `LinkGrid` - Grid of link cards
- `ProcessTimeline` - Timeline showing development steps
- `ProjectShowcase` - Featured project information
- `StatsSection` - Display statistics with labels

#### Layout Components
- `Divider` - Visual separator
- `GridSection` - For arranging components in a grid

### Example Project Definition

See `public/code/example-project.tsx` for a complete example of a project definition using all available components.

## Code Style Guidelines

- **TypeScript**: Use strict mode with proper type definitions
- **Components**: Follow shadcn/ui patterns with New York style
- **Imports**: Use path aliases (@/*) and organize by category
- **Styling**: Use Tailwind CSS with component-specific classes

## Deploy on Vercel

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new).

## License

MIT