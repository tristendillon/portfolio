import { Projects } from '@/lib/types'

// Example project definition showcasing the component-based structure
export const projects: Projects = {
  'my-project': {
    meta: {
      title: 'My Amazing Project',
      description: 'A showcase of my technical skills and creativity',
      image: '/images/project-preview.png',
      github: 'https://github.com/username/my-project',
    },
    sections: [
      // Main project showcase section
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'My Project',
            description:
              'A detailed description of what this project does and why it matters',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            link: 'https://my-project.example.com',
          },
        },
      },

      // Grid section with multiple components
      {
        type: 'grid',
        title: 'Project Features',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageShowcase',
              props: {
                images: ['/images/feature1.png', '/images/feature2.png'],
                alt: 'Project features',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                features: [
                  'Responsive design',
                  'Dark mode support',
                  'Real-time updates',
                  'User authentication',
                ],
              },
            },
          },
        ],
      },

      // Code example section
      {
        type: 'standard',
        component: {
          component: 'CodeBlock',
          props: {
            filePath: 'example-code.tsx',
            title: 'Key Component',
          },
        },
      },
    ],
  },
}
