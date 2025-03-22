import { Projects } from './types'

export const projects: Projects = {
  'ecommerce-platform': {
    meta: {
      title: 'E-commerce Platform',
      description:
        'A full-featured e-commerce platform with product management, shopping cart, and payment processing.',
      image: '/vercel.svg', // Replace with actual image path
      github: 'https://github.com/username/ecommerce-platform',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'E-commerce Platform',
            description:
              'A complete e-commerce solution built with Next.js and Stripe',
            technologies: [
              'Next.js',
              'React',
              'TypeScript',
              'Stripe',
              'Tailwind CSS',
            ],
            link: 'https://example.com/ecommerce',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ImageShowcase',
          props: {
            images: ['/vercel.svg', '/next.svg'], // Replace with actual image paths
            alt: 'E-commerce platform screenshot',
          },
        },
      },
      {
        type: 'grid',
        title: 'Key Features',
        description:
          'The platform includes several advanced features to enhance the shopping experience',
        items: [
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Shopping Features',
                features: [
                  {
                    title: 'Product Catalog',
                    description: 'Searchable and filterable catalog',
                  },
                  {
                    title: 'Shopping Cart',
                    description: 'Real-time cart updates',
                  },
                ],
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Admin Features',
                features: [
                  {
                    title: 'Inventory',
                    description: 'Stock management and alerts',
                  },
                  {
                    title: 'Analytics',
                    description: 'Sales and visitor tracking',
                  },
                ],
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Technical Features',
                features: [
                  { title: 'SEO', description: 'Optimized for search engines' },
                  { title: 'Performance', description: 'Fast loading times' },
                ],
              },
            },
          },
        ],
      },
      {
        type: 'grid',
        title: 'Testimonials',
        items: [
          {
            width: 3,
            component: {
              component: 'Testimonial',
              props: {
                quote:
                  'This e-commerce platform has transformed our business. The seamless checkout process and inventory management have increased our sales by 30% within the first month.',
                author: 'Jane Smith',
                role: 'CEO',
                company: 'Fashion Boutique LLC',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'Testimonial',
              props: {
                quote:
                  'The mobile responsiveness is outstanding. Our customers love shopping on their phones now.',
                author: 'Mike Johnson',
                role: 'Marketing Director',
                company: 'TechGadgets Inc',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'Testimonial',
              props: {
                quote:
                  'Integration with our existing systems was painless. The developer really understood our business needs and delivered a solution that works perfectly for us.',
                author: 'Sarah Williams',
                role: 'Operations Manager',
                company: 'HomeGoods Co',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'ProcessTimeline',
          props: {
            title: 'Development Process',
            steps: [
              {
                title: 'Requirements Gathering',
                description:
                  'Conducted stakeholder interviews and market research to define project scope and requirements.',
                date: 'January 2025',
              },
              {
                title: 'Design and Prototyping',
                description:
                  'Created wireframes, mockups, and interactive prototypes with user feedback iterations.',
                date: 'February 2025',
              },
              {
                title: 'Frontend Development',
                description:
                  'Built responsive UI components and integrated state management with React and Next.js.',
                date: 'March 2025',
              },
              {
                title: 'Backend Integration',
                description:
                  'Implemented API endpoints, payment processing, and database models.',
                date: 'April 2025',
              },
              {
                title: 'Testing and Launch',
                description:
                  'Conducted comprehensive testing, fixed bugs, and optimized performance before deployment.',
                date: 'May 2025',
              },
            ],
          },
        },
      },
    ],
  },
  'task-management-app': {
    meta: {
      title: 'Task Management App',
      description:
        'A collaborative task management application for teams with real-time updates.',
      image: '/next.svg', // Replace with actual image path
      github: 'https://github.com/username/task-management-app',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Task Management App',
            description:
              'Collaborative task management for teams with real-time updates',
            technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
            link: 'https://example.com/task-app',
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageShowcase',
              props: {
                images: ['/next.svg'], // Replace with actual image path
                alt: 'Task management app interface',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'CodeBlock',
              props: {
                code: `// Task creation example
const createTask = async (data) => {
  try {
    await db.collection('tasks').add({
      ...data,
      createdAt: serverTimestamp(),
      status: 'pending'
    });
    showNotification('Task created!');
  } catch (error) {
    console.error('Error creating task:', error);
  }
};`,
                language: 'javascript',
                title: 'Task Creation Function',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'FeatureList',
          props: {
            title: 'Key Features',
            features: [
              'Real-time collaboration',
              'Drag-and-drop interface',
              'Task assignments and deadlines',
              'Project grouping and tagging',
              'Activity tracking and notifications',
            ],
          },
        },
      },
    ],
  },
  'portfolio-website': {
    meta: {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing projects and skills with a modern design.',
      image: '/file.svg', // Replace with actual image path
      github: 'https://github.com/username/portfolio-website',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Portfolio Website',
            description: 'Personal portfolio with dark mode and animations',
            technologies: [
              'Next.js',
              'Framer Motion',
              'Tailwind CSS',
              'TypeScript',
            ],
            link: 'https://example.com/portfolio',
          },
        },
      },
      {
        type: 'grid',
        title: 'Website Features',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageShowcase',
              props: {
                images: ['/file.svg', '/globe.svg'], // Replace with actual image paths
                alt: 'Portfolio website design',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                features: [
                  'Responsive design for all devices',
                  'Dark/light mode toggle',
                  'Smooth animations with Framer Motion',
                  'Static site generation for fast loading',
                  'Contact form with validation',
                ],
              },
            },
          },
        ],
      },
    ],
  },
  'mobile-fitness-app': {
    meta: {
      title: 'Mobile Fitness App',
      description:
        'A fitness tracking application with workout plans, progress tracking, and social features.',
      image: '/window.svg', // Replace with actual image path
      github: 'https://github.com/username/fitness-app',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Mobile Fitness App',
            description: 'Track workouts, set goals, and connect with friends',
            technologies: ['React Native', 'Firebase', 'Expo', 'TypeScript'],
            link: 'https://example.com/fitness-app',
          },
        },
      },
      {
        type: 'grid',
        title: 'App Features',
        items: [
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Workout Tracking',
                features: [
                  {
                    title: 'Exercise Library',
                    description: 'Over 500 exercises with instructions',
                  },
                  {
                    title: 'Custom Routines',
                    description: 'Create and save personalized workout plans',
                  },
                ],
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'ImageShowcase',
              props: {
                images: ['/globe.svg'], // Replace with actual image path
                alt: 'Fitness app screens',
              },
            },
          },
        ],
      },
    ],
  },
  'ai-chatbot': {
    meta: {
      title: 'AI Customer Service Chatbot',
      description:
        'An intelligent chatbot that handles customer inquiries and support tickets automatically.',
      image: '/file.svg', // Replace with actual image path
      github: 'https://github.com/username/ai-chatbot',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'AI Customer Service Chatbot',
            description:
              'Intelligent automated customer support powered by machine learning',
            technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'React'],
            link: 'https://example.com/ai-chatbot',
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 1,
            component: {
              component: 'CodeBlock',
              props: {
                code: `# Example model training
import tensorflow as tf
from transformers import BertTokenizer

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(128,)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)`,
                language: 'python',
                title: 'Model Architecture',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Chatbot Capabilities',
                features: [
                  {
                    title: 'Intent Recognition',
                    description: 'Accurately identifies customer needs',
                  },
                  {
                    title: 'Multi-language Support',
                    description: 'Available in 12 languages',
                  },
                  {
                    title: 'Human Handoff',
                    description:
                      'Seamless transfer to human agents when needed',
                  },
                  {
                    title: 'Analytics Dashboard',
                    description: 'Track performance and conversation metrics',
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  'data-visualization-dashboard': {
    meta: {
      title: 'Data Visualization Dashboard',
      description:
        'An interactive dashboard for visualizing complex datasets with customizable charts and filters.',
      image: '/next.svg', // Replace with actual image path
      github: 'https://github.com/username/data-viz-dashboard',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Data Visualization Dashboard',
            description:
              'Interactive charts and graphs for complex data analysis',
            technologies: [
              'D3.js',
              'React',
              'Node.js',
              'MongoDB',
              'WebSockets',
            ],
            link: 'https://example.com/dashboard',
          },
        },
      },
      {
        type: 'grid',
        title: 'Dashboard Features',
        items: [
          {
            width: 3,
            component: {
              component: 'ImageShowcase',
              props: {
                images: ['/vercel.svg', '/next.svg'], // Replace with actual image paths
                alt: 'Dashboard screenshots',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'ProcessTimeline',
          props: {
            title: 'Development Process',
            steps: [
              {
                title: 'Requirements Analysis',
                description:
                  'Interviewed stakeholders to identify key visualization needs',
                date: 'January 2025',
              },
              {
                title: 'Data Pipeline Design',
                description: 'Created ETL processes for diverse data sources',
                date: 'February 2025',
              },
              {
                title: 'Frontend Development',
                description:
                  'Built interactive visualization components with D3 and React',
                date: 'March 2025',
              },
            ],
          },
        },
      },
    ],
  },
}
