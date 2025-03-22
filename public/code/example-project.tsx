import { Projects } from '@/lib/types'

// Example project showing usage of all available components
export const projects: Projects = {
  'example-project': {
    meta: {
      title: 'Example Project',
      description: 'Showcasing all available components for project pages',
      image: '/images/project-preview.png',
      github: 'https://github.com/username/example-project',
    },
    sections: [
      // Main project showcase section
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Component Showcase',
            description: 'A demonstration of all available components',
            technologies: [
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Framer Motion',
            ],
            link: 'https://example.com',
          },
        },
      },

      // Title and description section
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'Project Overview',
            size: 'lg',
            align: 'center',
            withLine: true,
          },
        },
      },

      {
        type: 'standard',
        component: {
          component: 'Description',
          props: {
            text: 'This project demonstrates all the available components that can be used in project pages. Each component is designed to be flexible and reusable across different projects.',
            align: 'center',
          },
        },
      },

      // Divider example
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'dots',
            color: 'primary',
          },
        },
      },

      // Grid with mixed components
      {
        type: 'grid',
        title: 'Features and Screenshots',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/feature1.png',
                alt: 'Feature screenshot',
                caption: 'Main dashboard interface',
                aspectRatio: '16:9',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'TechStack',
              props: {
                title: 'Tech Stack',
                technologies: [
                  'React',
                  'TypeScript',
                  'Next.js',
                  'Tailwind CSS',
                  'Framer Motion',
                ],
                variant: 'pills',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'Quote',
              props: {
                text: 'This project has been a great way to showcase all of our components in one place.',
                author: 'Development Team',
                variant: 'highlight',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'Video',
              props: {
                src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                title: 'Project Demo',
                caption: 'A walkthrough of the application',
              },
            },
          },
        ],
      },

      // Code example section
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: 'Implementation Details',
            size: 'lg',
          },
        },
      },

      {
        type: 'standard',
        component: {
          component: 'CodeBlock',
          props: {
            filePath: 'sample.tsx',
            title: 'Button Component',
          },
        },
      },

      // Links section
      {
        type: 'standard',
        component: {
          component: 'LinkGrid',
          props: {
            title: 'Related Resources',
            links: [
              {
                title: 'GitHub Repository',
                url: 'https://github.com/username/example-project',
                description: 'View the source code',
                platform: 'github',
              },
              {
                title: 'Live Demo',
                url: 'https://example.com',
                description: 'Try the application',
                platform: 'demo',
              },
              {
                title: 'Documentation',
                url: 'https://docs.example.com',
                description: 'Read the docs',
                platform: 'docs',
              },
              {
                title: 'Design Files',
                url: 'https://figma.com',
                description: 'View Figma designs',
                platform: 'figma',
              },
            ],
            columns: 2,
          },
        },
      },

      // Timeline section
      {
        type: 'standard',
        component: {
          component: 'ProcessTimeline',
          props: {
            title: 'Development Process',
            steps: [
              {
                title: 'Research & Planning',
                description:
                  'Initial requirements gathering and project scoping',
                date: 'January 2025',
              },
              {
                title: 'Design Phase',
                description: 'Creating wireframes and high-fidelity designs',
                date: 'February 2025',
              },
              {
                title: 'Development',
                description:
                  'Building the application with React and TypeScript',
                date: 'March-April 2025',
              },
              {
                title: 'Testing & Deployment',
                description: 'QA testing and production deployment',
                date: 'May 2025',
              },
            ],
          },
        },
      },

      // Stats section
      {
        type: 'standard',
        component: {
          component: 'StatsSection',
          props: {
            stats: [
              {
                label: 'Users',
                value: 10000,
              },
              {
                label: 'Transactions',
                value: 250000,
              },
              {
                label: 'Countries',
                value: 42,
              },
              {
                label: 'Uptime',
                value: 99.9,
                unit: '%',
              },
            ],
          },
        },
      },
    ],
  },
}
