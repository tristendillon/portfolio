import { Projects } from './types'

export const projects: Projects = {
  'ecommerce-platform': {
    meta: {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, and payment processing.',
      image: '/vercel.svg', // Replace with actual image path
    },
    components: [
      {
        component: 'ProjectShowcase',
        props: {
          title: 'E-commerce Platform',
          description: 'A complete e-commerce solution built with Next.js and Stripe',
          technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
          link: 'https://example.com/ecommerce',
        },
      },
      {
        component: 'ImageShowcase',
        props: {
          images: ['/vercel.svg', '/next.svg'], // Replace with actual image paths
          alt: 'E-commerce platform screenshot',
        },
      },
      {
        component: 'FeatureList',
        props: {
          title: 'Key Features',
          features: [
            { title: 'Product Management', description: 'Easy inventory and product listing management' },
            { title: 'Shopping Cart', description: 'Real-time cart updates and session persistence' },
            { title: 'Payment Processing', description: 'Secure checkout with Stripe integration' },
            { title: 'User Accounts', description: 'Customer profiles and order history' },
            { title: 'Responsive Design', description: 'Mobile-first approach for all device sizes' },
          ],
        },
      },
      {
        component: 'DeveloperProfile',
        props: {
          name: 'Tristen Dillon',
          role: 'Full Stack Developer',
          bio: 'Specialized in building high-performance e-commerce solutions with modern web technologies.',
          profilePicture: '/vercel.svg', // Replace with actual image
          socialLinks: [
            {
              platform: 'github',
              url: 'https://github.com/username',
            },
            {
              platform: 'linkedin',
              url: 'https://linkedin.com/in/username',
            },
          ],
        },
      },
    ],
  },
  'task-management-app': {
    meta: {
      title: 'Task Management App',
      description: 'A collaborative task management application for teams with real-time updates.',
      image: '/next.svg', // Replace with actual image path
    },
    components: [
      {
        component: 'ProjectShowcase',
        props: {
          title: 'Task Management App',
          description: 'Collaborative task management for teams with real-time updates',
          technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
          link: 'https://example.com/task-app',
        },
      },
      {
        component: 'ImageShowcase',
        props: {
          images: ['/next.svg'], // Replace with actual image path
          alt: 'Task management app interface',
        },
      },
      {
        component: 'FeatureList',
        props: {
          features: [
            'Real-time collaboration',
            'Drag-and-drop interface',
            'Task assignments and deadlines',
            'Project grouping and tagging',
            'Activity tracking and notifications',
          ],
        },
      },
    ],
  },
  'portfolio-website': {
    meta: {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with a modern design.',
      image: '/file.svg', // Replace with actual image path
    },
    components: [
      {
        component: 'ProjectShowcase',
        props: {
          title: 'Portfolio Website',
          description: 'Personal portfolio with dark mode and animations',
          technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
          link: 'https://example.com/portfolio',
        },
      },
      {
        component: 'ImageShowcase',
        props: {
          images: ['/file.svg', '/globe.svg'], // Replace with actual image paths
          alt: 'Portfolio website design',
        },
      },
    ],
  },
}
