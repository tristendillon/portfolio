// import { Projects } from './types'

// export const projects: Projects = {
//   'ecommerce-platform': {
//     meta: {
//       title: 'E-commerce Platform',
//       description:
//         'A full-featured e-commerce platform with product management, shopping cart, and payment processing.',
//       image: '/vercel.svg', // Replace with actual image path
//       github: 'https://github.com/username/ecommerce-platform',
//     },
//     sections: [
//       {
//         type: 'standard',
//         component: {
//           component: 'ProjectShowcase',
//           props: {
//             title: 'E-commerce Platform',
//             description:
//               'A complete e-commerce solution built with Next.js and Stripe',
//             technologies: [
//               'Next.js',
//               'React',
//               'TypeScript',
//               'Stripe',
//               'Tailwind CSS',
//             ],
//             link: 'https://example.com/ecommerce',
//           },
//         },
//       },
//       {
//         type: 'standard',
//         component: {
//           component: 'ImageShowcase',
//           props: {
//             images: ['/vercel.svg', '/next.svg'], // Replace with actual image paths
//             alt: 'E-commerce platform screenshot',
//           },
//         },
//       },
//       {
//         type: 'grid',
//         title: 'Key Features',
//         description:
//           'The platform includes several advanced features to enhance the shopping experience',
//         items: [
//           {
//             width: 1,
//             component: {
//               component: 'FeatureList',
//               props: {
//                 title: 'Shopping Features',
//                 features: [
//                   {
//                     title: 'Product Catalog',
//                     description: 'Searchable and filterable catalog',
//                   },
//                   {
//                     title: 'Shopping Cart',
//                     description: 'Real-time cart updates',
//                   },
//                 ],
//               },
//             },
//           },
//           {
//             width: 1,
//             component: {
//               component: 'FeatureList',
//               props: {
//                 title: 'Admin Features',
//                 features: [
//                   {
//                     title: 'Inventory',
//                     description: 'Stock management and alerts',
//                   },
//                   {
//                     title: 'Analytics',
//                     description: 'Sales and visitor tracking',
//                   },
//                 ],
//               },
//             },
//           },
//           {
//             width: 1,
//             component: {
//               component: 'FeatureList',
//               props: {
//                 title: 'Technical Features',
//                 features: [
//                   { title: 'SEO', description: 'Optimized for search engines' },
//                   { title: 'Performance', description: 'Fast loading times' },
//                 ],
//               },
//             },
//           },
//         ],
//       },
//       {
//         type: 'grid',
//         title: 'Testimonials',
//         items: [
//           {
//             width: 3,
//             component: {
//               component: 'Testimonial',
//               props: {
//                 quote:
//                   'This e-commerce platform has transformed our business. The seamless checkout process and inventory management have increased our sales by 30% within the first month.',
//                 author: 'Jane Smith',
//                 role: 'CEO',
//                 company: 'Fashion Boutique LLC',
//               },
//             },
//           },
//           {
//             width: 1,
//             component: {
//               component: 'Testimonial',
//               props: {
//                 quote:
//                   'The mobile responsiveness is outstanding. Our customers love shopping on their phones now.',
//                 author: 'Mike Johnson',
//                 role: 'Marketing Director',
//                 company: 'TechGadgets Inc',
//               },
//             },
//           },
//           {
//             width: 2,
//             component: {
//               component: 'Testimonial',
//               props: {
//                 quote:
//                   'Integration with our existing systems was painless. The developer really understood our business needs and delivered a solution that works perfectly for us.',
//                 author: 'Sarah Williams',
//                 role: 'Operations Manager',
//                 company: 'HomeGoods Co',
//               },
//             },
//           },
//         ],
//       },
//       {
//         type: 'standard',
//         component: {
//           component: 'ProcessTimeline',
//           props: {
//             title: 'Development Process',
//             steps: [
//               {
//                 title: 'Requirements Gathering',
//                 description:
//                   'Conducted stakeholder interviews and market research to define project scope and requirements.',
//                 date: 'January 2025',
//               },
//               {
//                 title: 'Design and Prototyping',
//                 description:
//                   'Created wireframes, mockups, and interactive prototypes with user feedback iterations.',
//                 date: 'February 2025',
//               },
//               {
//                 title: 'Frontend Development',
//                 description:
//                   'Built responsive UI components and integrated state management with React and Next.js.',
//                 date: 'March 2025',
//               },
//               {
//                 title: 'Backend Integration',
//                 description:
//                   'Implemented API endpoints, payment processing, and database models.',
//                 date: 'April 2025',
//               },
//               {
//                 title: 'Testing and Launch',
//                 description:
//                   'Conducted comprehensive testing, fixed bugs, and optimized performance before deployment.',
//                 date: 'May 2025',
//               },
//             ],
//           },
//         },
//       },
//     ],
//   },
//   'task-management-app': {
//     meta: {
//       title: 'Task Management App',
//       description:
//         'A collaborative task management application for teams with real-time updates.',
//       image: '/next.svg', // Replace with actual image path
//       github: 'https://github.com/username/task-management-app',
//     },
//     sections: [
//       {
//         type: 'standard',
//         component: {
//           component: 'ProjectShowcase',
//           props: {
//             title: 'Task Management App',
//             description:
//               'Collaborative task management for teams with real-time updates',
//             technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
//             link: 'https://example.com/task-app',
//           },
//         },
//       },
//       {
//         type: 'grid',
//         items: [
//           {
//             width: 2,
//             component: {
//               component: 'ImageShowcase',
//               props: {
//                 images: ['/next.svg'], // Replace with actual image path
//                 alt: 'Task management app interface',
//               },
//             },
//           },
//           {
//             width: 1,
//             component: {
//               component: 'CodeBlock',
//               props: {
//                 code: `// Task creation example
// const createTask = async (data) => {
//   try {
//     await db.collection('tasks').add({
//       ...data,
//       createdAt: serverTimestamp(),
//       status: 'pending'
//     });
//     showNotification('Task created!');
//   } catch (error) {
//     console.error('Error creating task:', error);
//   }
// };`,
//                 language: 'javascript',
//                 title: 'Task Creation Function',
//               },
//             },
//           },
//         ],
//       },
//       {
//         type: 'standard',
//         component: {
//           component: 'FeatureList',
//           props: {
//             title: 'Key Features',
//             features: [
//               'Real-time collaboration',
//               'Drag-and-drop interface',
//               'Task assignments and deadlines',
//               'Project grouping and tagging',
//               'Activity tracking and notifications',
//             ],
//           },
//         },
//       },
//     ],
//   },
//   'portfolio-website': {
//     meta: {
//       title: 'Portfolio Website',
//       description:
//         'A personal portfolio website showcasing projects and skills with a modern design.',
//       image: '/file.svg', // Replace with actual image path
//       github: 'https://github.com/username/portfolio-website',
//     },
//     sections: [
//       {
//         type: 'standard',
//         component: {
//           component: 'ProjectShowcase',
//           props: {
//             title: 'Portfolio Website',
//             description: 'Personal portfolio with dark mode and animations',
//             technologies: [
//               'Next.js',
//               'Framer Motion',
//               'Tailwind CSS',
//               'TypeScript',
//             ],
//             link: 'https://example.com/portfolio',
//           },
//         },
//       },
//       {
//         type: 'grid',
//         title: 'Website Features',
//         items: [
//           {
//             width: 2,
//             component: {
//               component: 'ImageShowcase',
//               props: {
//                 images: ['/file.svg', '/globe.svg'], // Replace with actual image paths
//                 alt: 'Portfolio website design',
//               },
//             },
//           },
//           {
//             width: 1,
//             component: {
//               component: 'FeatureList',
//               props: {
//                 features: [
//                   'Responsive design for all devices',
//                   'Dark/light mode toggle',
//                   'Smooth animations with Framer Motion',
//                   'Static site generation for fast loading',
//                   'Contact form with validation',
//                 ],
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
//   'mobile-fitness-app': {
//     meta: {
//       title: 'Mobile Fitness App',
//       description:
//         'A fitness tracking application with workout plans, progress tracking, and social features.',
//       image: '/window.svg', // Replace with actual image path
//       github: 'https://github.com/username/fitness-app',
//     },
//     sections: [
//       {
//         type: 'standard',
//         component: {
//           component: 'ProjectShowcase',
//           props: {
//             title: 'Mobile Fitness App',
//             description: 'Track workouts, set goals, and connect with friends',
//             technologies: ['React Native', 'Firebase', 'Expo', 'TypeScript'],
//             link: 'https://example.com/fitness-app',
//           },
//         },
//       },
//       {
//         type: 'grid',
//         title: 'App Features',
//         items: [
//           {
//             width: 1,
//             component: {
//               component: 'FeatureList',
//               props: {
//                 title: 'Workout Tracking',
//                 features: [
//                   {
//                     title: 'Exercise Library',
//                     description: 'Over 500 exercises with instructions',
//                   },
//                   {
//                     title: 'Custom Routines',
//                     description: 'Create and save personalized workout plans',
//                   },
//                 ],
//               },
//             },
//           },
//           {
//             width: 2,
//             component: {
//               component: 'ImageShowcase',
//               props: {
//                 images: ['/globe.svg'], // Replace with actual image path
//                 alt: 'Fitness app screens',
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
//   'ai-chatbot': {
//     meta: {
//       title: 'AI Customer Service Chatbot',
//       description:
//         'An intelligent chatbot that handles customer inquiries and support tickets automatically.',
//       image: '/file.svg', // Replace with actual image path
//       github: 'https://github.com/username/ai-chatbot',
//     },
//     sections: [
//       {
//         type: 'standard',
//         component: {
//           component: 'ProjectShowcase',
//           props: {
//             title: 'AI Customer Service Chatbot',
//             description:
//               'Intelligent automated customer support powered by machine learning',
//             technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'React'],
//             link: 'https://example.com/ai-chatbot',
//           },
//         },
//       },
//       {
//         type: 'grid',
//         items: [
//           {
//             width: 1,
//             component: {
//               component: 'CodeBlock',
//               props: {
//                 code: `# Example model training
// import tensorflow as tf
// from transformers import BertTokenizer

// tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
// model = tf.keras.Sequential([
//     tf.keras.layers.Input(shape=(128,)),
//     tf.keras.layers.Dense(64, activation='relu'),
//     tf.keras.layers.Dense(32, activation='relu'),
//     tf.keras.layers.Dense(10, activation='softmax')
// ])

// model.compile(
//     optimizer='adam',
//     loss='sparse_categorical_crossentropy',
//     metrics=['accuracy']
// )`,
//                 language: 'python',
//                 title: 'Model Architecture',
//               },
//             },
//           },
//           {
//             width: 2,
//             component: {
//               component: 'FeatureList',
//               props: {
//                 title: 'Chatbot Capabilities',
//                 features: [
//                   {
//                     title: 'Intent Recognition',
//                     description: 'Accurately identifies customer needs',
//                   },
//                   {
//                     title: 'Multi-language Support',
//                     description: 'Available in 12 languages',
//                   },
//                   {
//                     title: 'Human Handoff',
//                     description:
//                       'Seamless transfer to human agents when needed',
//                   },
//                   {
//                     title: 'Analytics Dashboard',
//                     description: 'Track performance and conversation metrics',
//                   },
//                 ],
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
//   'data-visualization-dashboard': {
//     meta: {
//       title: 'Data Visualization Dashboard',
//       description:
//         'An interactive dashboard for visualizing complex datasets with customizable charts and filters.',
//       image: '/next.svg', // Replace with actual image path
//       github: 'https://github.com/username/data-viz-dashboard',
//     },
//     sections: [
//       {
//         type: 'standard',
//         component: {
//           component: 'ProjectShowcase',
//           props: {
//             title: 'Data Visualization Dashboard',
//             description:
//               'Interactive charts and graphs for complex data analysis',
//             technologies: [
//               'D3.js',
//               'React',
//               'Node.js',
//               'MongoDB',
//               'WebSockets',
//             ],
//             link: 'https://example.com/dashboard',
//           },
//         },
//       },
//       {
//         type: 'grid',
//         title: 'Dashboard Features',
//         items: [
//           {
//             width: 3,
//             component: {
//               component: 'ImageShowcase',
//               props: {
//                 images: ['/vercel.svg', '/next.svg'], // Replace with actual image paths
//                 alt: 'Dashboard screenshots',
//               },
//             },
//           },
//         ],
//       },
//       {
//         type: 'standard',
//         component: {
//           component: 'ProcessTimeline',
//           props: {
//             title: 'Development Process',
//             steps: [
//               {
//                 title: 'Requirements Analysis',
//                 description:
//                   'Interviewed stakeholders to identify key visualization needs',
//                 date: 'January 2025',
//               },
//               {
//                 title: 'Data Pipeline Design',
//                 description: 'Created ETL processes for diverse data sources',
//                 date: 'February 2025',
//               },
//               {
//                 title: 'Frontend Development',
//                 description:
//                   'Built interactive visualization components with D3 and React',
//                 date: 'March 2025',
//               },
//             ],
//           },
//         },
//       },
//     ],
//   },
// }

import { Projects } from './types'

export const projects: Projects = {
  'pick-pulse': {
    meta: {
      title: 'PickPulse',
      description: 'Draftboard app for ESPN Fantasy Football',
      image: '/images/PickPulse.png',
      github: 'https://github.com/tristendillon/pick-pulse-old',
    },
    sections: [
      {
        type: 'grid',
        items: [
          {
            inCard: false,
            width: 2,
            component: {
              component: 'ProjectShowcase',
              props: {
                title: 'PickPulse',
                description: `A passion project for fantasy football players.
                Trever, my brother, and myself created this app to help ESPN Fantasy Football players have a better experience when drafting on ESPN's platform.

                  `,
                technologies: [
                  'NextJS',
                  'TailwindCSS',
                  'TypeScript',
                  'Framer Motion',
                  'Supabase',
                ],
                link: 'https://pick-pulse.com/',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                features: [
                  'Draftboard app for ESPN Fantasy Football',
                  'Real-time draft updates',
                  'AI Draft Assistant',
                  'Real-time ADP',
                ],
              },
            },
          },
          {
            padding: 0,
            width: 3,
            component: {
              component: 'ImageShowcase',
              props: {
                images: ['/images/PickPulse.png'],
              },
            },
          },

          {
            width: 2,
            component: {
              component: 'Testimonial',
              props: {
                image:
                  'https://lh3.googleusercontent.com/a-/ALV-UjWlA6zxM1rjXV3svd8YQjYRr1ZvRYykoIpgcQgS9kAbcaw4kQKy=s48-w48-h48',
                quote:
                  'Love this extension! Works great and is the perfect solution for hosting a fantasy football draft party!',
                author: 'Miguel Aldaz',
                role: 'Fantasy Football Player',
              },
            },
          },

          {
            padding: 0,
            width: 1,
            component: {
              component: 'ImageShowcase',
              props: {
                images: ['/images/ADPTable.png'],
              },
            },
          },
          {
            width: 3,
            component: {
              component: 'Testimonial',
              props: {
                image:
                  'https://lh3.googleusercontent.com/a-/ALV-UjVLJahJxhbCUppf5XskCGHbjtRTOOQRW-2mkc2DJ-bTfMsnOXY=s48-w48-h48',
                quote:
                  'Just used this for a 12 team draft and it worked perfectly. A+, thank you devs! Helps me not gripe about being in an ESPN league as much :)',
                author: 'Alex Ward',
                role: 'Fantasy Football League Manager',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'StatsSection',
          props: {
            stats: [
              {
                label: 'Chrome Store Downloads',
                value: 1000,
              },
            ],
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ProcessTimeline',
          props: {
            title: 'Development Process',
            steps: [
              {
                title: 'Ideation',
                description: 'Initial brainstorming and concept development',
                date: '06/2024',
              },
              {
                title: 'Research',
                description:
                  'We researched if it was even possible to create something that attached to ESPN',
                date: '06/2024',
              },
              {
                title: 'Design & Development',
                description:
                  'Creating wireframes and mockups, designed the NextJS app, created the Chrome extension that went with it.',
                date: '06/2024 - 07/2024',
              },
              {
                title: 'Testing & Launch',
                description:
                  'We tested the app and launched it on the Chrome Store',
                date: '07/2024 - 08/2024',
              },
              {
                title: 'Marketing',
                description:
                  'We marketed the app to fantasy football players through Reddit, Twitter, Developer chat rooms. Where ever we could we marketed.',
                date: '08/2024 - 09/2024',
              },
            ],
          },
        },
      },
    ],
  },
  // 'pick-pulse-extension': {
  //   meta: {
  //     title: 'PickPulse Browser Extension',
  //     description: 'Productivity-focused browser enhancement tool',
  //     image: '/placeholder-pickpulse.svg',
  //     github: 'https://github.com/tristendillon/pick-pulse-extension',
  //   },
  //   sections: [
  //     {
  //       type: 'standard',
  //       component: {
  //         component: 'ProjectShowcase',
  //         props: {
  //           title: 'PickPulse Extension',
  //           description:
  //             'Browser productivity booster with quick-access features',
  //           technologies: ['Chrome APIs'],
  //           link: 'https://chromewebstore.google.com/detail/pickpulse/ljnelhiofbippkmbeioamhnjihkecgbj',
  //         },
  //       },
  //     },
  //     {
  //       type: 'grid',
  //       items: [
  //         {
  //           width: 1,
  //           component: {
  //             component: 'FeatureList',
  //             props: {
  //               features: [
  //                 'Quick-access menu',
  //                 'Bookmark manager',
  //                 'Tab organizer',
  //                 'Cross-browser sync',
  //               ],
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  'myplanit-frontend': {
    meta: {
      title: 'MyPlanit Planning Suite',
      description: 'Collaborative project planning platform (Devpost Finalist)',
      image: '/placeholder-planit.svg',
      github: 'https://github.com/LunarHUE/MyPlanit-Frontend',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'MyPlanit',
            description:
              'Intuitive project management with AI-assisted planning',
            technologies: [
              'React',
              'TypeScript',
              'Redux',
              'Jest',
              'AWS Amplify',
            ],
            link: 'https://devpost.com/software/myplanit',
          },
        },
      },
      {
        type: 'grid',
        title: 'Features',
        items: [
          {
            width: 2,
            component: {
              component: 'FeatureList',
              props: {
                features: [
                  'Interactive Gantt charts',
                  'Team collaboration tools',
                  'Resource allocation tracking',
                  'AI-powered timeline predictions',
                ],
              },
            },
          },
        ],
      },
    ],
  },
  portfolio: {
    meta: {
      title: 'Developer Portfolio',
      description: 'Interactive showcase of technical projects and skills',
      image: '/placeholder-portfolio.svg',
      github: 'https://github.com/tristendillon/portfolio',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Portfolio Site',
            description: 'Modern developer portfolio with interactive elements',
            technologies: [
              'Next.js',
              'TypeScript',
              'Framer Motion',
              'Tailwind CSS',
              'Vercel',
            ],
            link: 'https://portfolio.tdilly.com',
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 2,
            component: {
              component: 'FeatureList',
              props: {
                features: [
                  'Dark/light mode',
                  'Project showcases',
                  'Interactive components',
                  'Responsive design',
                ],
              },
            },
          },
        ],
      },
    ],
  },
  'active911-integration': {
    meta: {
      title: 'Active911 Integration',
      description: 'Custom integration for emergency response systems',
      image: '/placeholder-911.svg',
      github: 'https://github.com/tristendillon/active911-integration',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Active911 Integration',
            description: 'Real-time emergency response system integration',
            technologies: [
              'Python',
              'REST APIs',
              'WebHooks',
              'AWS Lambda',
              'PostgreSQL',
            ],
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                features: [
                  'Real-time alert processing',
                  'GIS integration',
                  'Responder tracking',
                  'API webhooks',
                ],
              },
            },
          },
        ],
      },
    ],
  },
  occupancy: {
    meta: {
      title: 'Occupancy Tracking System',
      description:
        'Real-time space utilization monitoring and analytics platform',
      image: '/placeholder-occupancy.svg',
      github: 'https://github.com/Tristen-Dillon/occupancy',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'Occupancy Tracker',
            description:
              'IoT-enabled system for monitoring space utilization in real-time',
            technologies: [
              'React',
              'Node.js',
              'WebSockets',
              'PostgreSQL',
              'TypeScript',
            ],
          },
        },
      },
      {
        type: 'grid',
        title: 'Key Features',
        items: [
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Core Features',
                features: [
                  {
                    title: 'Real-time Monitoring',
                    description: 'Live occupancy updates',
                  },
                  {
                    title: 'Analytics Dashboard',
                    description: 'Historical usage trends',
                  },
                  {
                    title: 'Capacity Alerts',
                    description: 'Threshold notifications',
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  'firstdue-scheduling': {
    meta: {
      title: 'Emergency Services Scheduling',
      description: 'Mission-critical scheduling system for first responders',
      image: '/placeholder-emergency.svg',
      github: 'https://github.com/Tristen-Dillon/firstdue-scheduling',
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'ProjectShowcase',
          props: {
            title: 'FirstDue Scheduling',
            description:
              'Reliable scheduling solution for emergency service teams',
            technologies: [
              'React',
              'Java Spring',
              'WebSockets',
              'Redis',
              'JUnit',
            ],
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Key Components',
                features: [
                  'Shift management',
                  'Conflict detection',
                  'Real-time updates',
                  'Audit logging',
                ],
              },
            },
          },
        ],
      },
    ],
  },
}
