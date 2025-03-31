import { FaReact } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { Projects } from './types'
import { RiClaudeFill, RiNextjsFill } from 'react-icons/ri'
import { FaGolang } from 'react-icons/fa6'
import { SiTailwindcss } from 'react-icons/si'

export const projects: Projects = {
  'pick-pulse': {
    env: 'production',
    meta: {
      title: 'PickPulse',
      description: 'Draftboard app for ESPN Fantasy Football',
      image: '/images/PickPulse.png',
      github: 'https://github.com/tristendillon/pick-pulse-old',
      technologies: [
        'NextJS',
        'TailwindCSS',
        'TypeScript',
        'Framer Motion',
        'Supabase',
      ],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'PickPulse',
            size: 'xl',
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
            text: `A passion project for fantasy football players. Trever, my brother, and myself created this app to help ESPN Fantasy Football players have a better experience when drafting on ESPN's platform.`,
            align: 'center',
            size: 'lg',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'TechStack',
          props: {
            title: 'Built With',
            technologies: [
              'NextJS',
              'TailwindCSS',
              'TypeScript',
              'Framer Motion',
              'Supabase',
            ],
            variant: 'pills',
            columns: 5,
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        title: 'Product Overview',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/PickPulse.png',
                alt: 'PickPulse application screenshot',
                caption: 'PickPulse draft interface',
                aspectRatio: '16:9',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Key Features',
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
            width: 1,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/ADPTable.png',
                alt: 'ADP Table',
                caption: 'Average Draft Position tracking',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'LinkGrid',
              props: {
                title: 'Links',
                links: [
                  {
                    title: 'Live Website',
                    url: 'https://pick-pulse.com/',
                    description: 'Try the application',
                    platform: 'website',
                  },
                  {
                    title: 'GitHub Repository',
                    url: 'https://github.com/tristendillon/pick-pulse-old',
                    description: 'Source code',
                    platform: 'github',
                  },
                ],
                columns: 2,
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Quote',
          props: {
            text: 'Love this extension! Works great and is the perfect solution for hosting a fantasy football draft party!',
            author: 'Miguel Aldaz',
            source: 'Chrome Web Store Review',
            variant: 'simple',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'StatsSection',
          props: {
            stats: [
              {
                label: 'Chrome Store Downloads',
                value: 4000,
              },
              {
                label: 'Users',
                value: 2000,
              },
              {
                label: 'Drafts Created',
                value: 11117,
              },
              {
                label: 'Picks Made',
                value: 1_318_390,
              },
            ],
          },
        },
      },
      {
        type: 'grid',
        title: 'User Feedback',
        items: [
          {
            width: 1,
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
            width: 2,
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
  myplanit: {
    env: 'production',
    meta: {
      title: 'MyPlanit',
      description: 'Collaborative project planning project (Hackathon Winner)',
      image: '/images/MyPlanit.png',
      github: 'https://github.com/LunarHUE/MyPlanit-Frontend',
      technologies: [
        'React',
        'NextJS',
        'Go',
        'TailwindCSS',
        'Azure',
        'Claude AI',
      ],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'MyPlanit',
            size: 'xl',
            align: 'center',
            withLine: true,
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: '1st Place Winner - K-State WebDev Hackathon 2024',
            align: 'center',
            size: 'lg',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Description',
          props: {
            text: `MyPlanit is a time management tool that uses AI to help you plan your schedule using your assignments and courses from the Canvas API. This project was created in just one weekend for the Kansas State University Hackathon.`,
            align: 'center',
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'TechStack',
          props: {
            title: 'Technologies Used',
            technologies: [
              {
                name: 'React',
                icon: <FaReact fill="#61DAFB" className="h-8 w-8" />,
              },
              {
                name: 'NextJS',
                icon: (
                  <RiNextjsFill
                    fill="#000000"
                    className="h-8 w-8 bg-white/30 rounded-full"
                  />
                ),
              },
              {
                name: 'Go',
                icon: <FaGolang fill="#00ADD8" className="h-8 w-8" />,
              },
              {
                name: 'TailwindCSS',
                icon: <SiTailwindcss fill="#38BDF8" className="h-8 w-8" />,
              },
              {
                name: 'Azure',
                icon: <VscAzure fill="#0078D4" className="h-8 w-8" />,
              },
              {
                name: 'Claude AI',
                icon: <RiClaudeFill fill="#d27b63" className="h-8 w-8" />,
              },
            ],
            variant: 'grid',
            columns: 3,
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/MyPlanit.png',
                alt: 'MyPlanit application screenshot',
                caption: 'MyPlanit user interface',
                aspectRatio: '16:9',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Key Features',
                features: [
                  'AI-powered task prioritization',
                  'Canvas API integration',
                  'Intelligent scheduling',
                  'Assignment tracking',
                  'Course management',
                ],
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'LinkGrid',
          props: {
            title: 'Project Links',
            links: [
              {
                title: 'DevPost Submission',
                url: 'https://devpost.com/software/myplanit',
                description: 'Hackathon submission page',
                platform: 'website',
              },
              {
                title: 'GitHub Repository',
                url: 'https://github.com/LunarHUE/MyPlanit-Frontend',
                description: 'Frontend source code',
                platform: 'github',
              },
            ],
            columns: 2,
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Quote',
          props: {
            text: 'Great use of AI and well made UI/UX. I would use this if I was a student.',
            author: 'Hackathon Judge',
            variant: 'default',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
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
                description:
                  'Since it was a collaborative Hackathon, our group brainstormed for a while to come up with the plan, we only had the weekend to work on the project so we had to be efficient.',
                date: 'Day 1 - Morning',
              },
              {
                title: 'Design & Development',
                description:
                  'I designed the UI/UX and then built the project using React, NextJS, and Go. While my team built the backend using Go and used Claude for the AI that we used.',
                date: 'Day 1 - Afternoon to Day 2',
              },
              {
                title: 'Testing & Launch',
                description:
                  'We ran into a lot of issues with the connection between the frontend and backend, but we were able to get it working in the end with minutes to spare.',
                date: 'Day 2 - Evening',
              },
              {
                title: 'Presentation & Win',
                description:
                  'We presented our project to the judges and won 1st place in the WebDev track!',
                date: 'Day 3',
              },
            ],
          },
        },
      },
    ],
  },
  portfolio: {
    env: 'production',
    meta: {
      title: 'Developer Portfolio',
      description: 'Interactive showcase of technical projects and skills',
      image: '/images/Portfolio.png',
      github: 'https://github.com/tristendillon/portfolio',
      technologies: [
        'NextJS',
        'TailwindCSS',
        'TypeScript',
        'Framer Motion',
        'Supabase',
      ],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'Portfolio Website',
            size: 'xl',
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
            text: `I built this portfolio to showcase my projects and skills, but I also wanted to make it a challenge for myself. I did not want to create a conventional portfolio, so I decided to go for more of a SharePoint-esque approach to building each page, with modular and reusable components.`,
            align: 'center',
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ImageWithCaption',
          props: {
            src: '/images/Portfolio.png',
            alt: 'Portfolio website screenshot',
            caption: 'Main portfolio homepage',
            aspectRatio: '16:9',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'TechStack',
          props: {
            title: 'Built With',
            technologies: [
              'Next.js',
              'TypeScript',
              'Framer Motion',
              'Tailwind CSS',
              'shadcn/ui',
            ],
            variant: 'pills',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: 'Component-Driven Architecture',
            size: 'lg',
            align: 'center',
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            padding: 0,
            inCard: false,
            width: 2,
            component: {
              component: 'CodeBlock',
              props: {
                filePath: 'project-definition.ts',
                language: 'ts',
                title: 'Project Definition Schema',
                maxHeight: 300,
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'Description',
              props: {
                text: 'Each project page is defined declaratively using a schema that specifies which components to render and how to configure them. This makes it easy to add new projects and maintain consistency across the site.',
              },
            },
          },
        ],
      },

      {
        type: 'standard',
        component: {
          component: 'LinkGrid',
          props: {
            title: 'Project Links',
            links: [
              {
                title: 'Live Website',
                url: 'https://portfolio.tdilly.com',
                description: 'Visit the portfolio',
                platform: 'website',
              },
              {
                title: 'GitHub Repository',
                url: 'https://github.com/tristendillon/portfolio',
                description: 'View source code',
                platform: 'github',
              },
            ],
            columns: 2,
          },
        },
      },
    ],
  },
  'active911-integration': {
    env: 'production',
    meta: {
      title: 'Active911 Integration',
      description: 'Custom integration for emergency response systems',
      image: '/images/AlertDashboard.png',
      github: 'https://github.com/tristendillon/active911-integration',
      technologies: [
        'NextJS',
        'TailwindCSS',
        'TypeScript',
        'Framer Motion',
        'Supabase',
      ],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'Active911 Integration',
            size: 'xl',
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
            text: 'A real-time emergency response system integration that processes alerts from various sources and distributes them to the appropriate responders, while providing geographical information and tracking capabilities.',
            align: 'center',
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ImageWithCaption',
          props: {
            src: '/images/AlertDashboard.png',
            alt: 'Alert Dashboard',
            caption: 'New Alert popup on the dashboard, this is from the non-public dashboard, thats why the image has some blurring and editing.',
            aspectRatio: '16:9',
          },
        },
      },
      {
        type: 'grid',
        title: 'Technical Overview',
        items: [
          {
            width: 1,
            component: {
              component: 'TechStack',
              props: {
                title: 'Technologies',
                technologies: [
                  'Go',
                  'REST APIs',
                  'WebHooks',
                  'Azure',
                  'PostgreSQL',
                  'NextJS',
                ],
                variant: 'default',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Key Features',
                features: [
                  {
                    title: 'Real-time Alert Processing',
                    description:
                      'Process emergency alerts from multiple sources in real-time',
                  },
                  {
                    title: 'Active Weather Alerts',
                    description:
                      'Get real-time weather alerts and warnings from the National Weather Service',
                  },
                  {
                    title: 'API Webhooks',
                    description:
                      'Seamless integration with third-party emergency systems',
                  },
                  {
                    title: 'Logging & Monitoring',
                    description:
                      'Detailed logging and monitoring of all alerts and responses',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: 'Public RSS Feed',
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
            text: 'The live public RSS feed for the all alerts for the Manhattan, KS area. The feed is updated via websocket. Since the feed is public, I added a simple authentication layer to the websocket to redact sensitive information, such as the caller\'s name and address, the call details from dispatch, etc.',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Embed',
          props: {
            src: 'https://www.alertdashboard.com/rssfeed/center',
            aspectRatio: '16:9',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: 'System Components',
            size: 'lg',
            align: 'center',
            withLine: true,
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 1,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/AlertDashboardLogs.PNG',
                alt: 'Alert Dashboard Logs',
                caption: 'Advanced logging system for tracking alerts and system events',
                aspectRatio: '16:9',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/PublicAlertDashboard.PNG',
                alt: 'Public Alert Dashboard',
                caption: 'Public dashboard showing past alerts, current weather conditions, and active weather alerts for the region',
                aspectRatio: '16:9',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'LinkGrid',
          props: {
            title: 'Project Resources',
            links: [
              {
                title: 'GitHub Repository',
                url: 'https://github.com/tristendillon/active911-integration',
                description: 'Source code and documentation',
                platform: 'github',
              },
              {
                title: 'Public Dashboard',
                url: 'https://alertdashboard.com/public/all',
                description: 'View the public dashboard',
                platform: 'website',
              },
              {
                title: 'Active911',
                url: 'https://active911.com/',
                description: 'Active911 official website',
                platform: 'website',
              },
            ],
            columns: 3,
          },
        },
      },
    ],
  },
  occupancy: {
    env: 'production',
    meta: {
      title: 'Occupancy Validation Tool',
      description:
        'Tool to validate occupancy data from a CSV file against google validated addresses',
      image: '/images/Occupancy.png',
      github: 'https://github.com/Tristen-Dillon/occupancy',
      technologies: [
        'Python',
        'Pandas',
        'Google Maps API',
        'NextJS',
        'TypeScript',
      ],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'Occupancy Validation Tool',
            size: 'xl',
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
            text: 'I developed this tool for my workplace to validate and clean our occupancy data. The system checks addresses against the Google Maps API for accuracy, validates geographical coordinates, and ensures data consistency across our databases.',
            align: 'center',
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'TechStack',
          props: {
            title: 'Built With',
            technologies: [
              'Python',
              'Pandas',
              'Google Maps API',
              'NextJS',
              'TypeScript',
            ],
            variant: 'pills',
          },
        },
      },
      {
        type: 'grid',
        title: 'Key Features',
        items: [
          {
            width: 2,
            component: {
              component: 'FeatureList',
              props: {
                features: [
                  {
                    title: 'Address Validation',
                    description: 'Validate addresses against Google Maps API',
                  },
                  {
                    title: 'Geolocation Verification',
                    description:
                      'Ensure accurate longitude and latitude coordinates',
                  },
                  {
                    title: 'Batch Processing',
                    description: 'Process thousands of records efficiently',
                  },
                  {
                    title: 'Data Cleaning',
                    description:
                      'Standardize address formats and correct errors',
                  },
                  {
                    title: 'Reporting',
                    description:
                      'Generate detailed reports of validation results',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'LinkGrid',
          props: {
            title: 'Project Resources',
            links: [
              {
                title: 'GitHub Repository',
                url: 'https://github.com/Tristen-Dillon/occupancy',
                description: 'Source code and documentation',
                platform: 'github',
              },
            ],
            columns: 1,
          },
        },
      },
    ],
  },
  'firstdue-scheduling': {
    env: 'production',
    meta: {
      title: 'FirstDue Scheduling',
      description:
        'Scheduling system for a window cleaning company that my Co-Worker owns',
      image: '/images/Scheduling.png',
      github: 'https://github.com/Tristen-Dillon/firstdue-scheduling',
      technologies: ['NextJS', 'PayloadCMS', 'TailwindCSS', 'TypeScript'],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'FirstDue Scheduling',
            size: 'xl',
            align: 'center',
            withLine: true,
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: 'Reliable scheduling solution for service teams',
            align: 'center',
            size: 'lg',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Description',
          props: {
            text: 'I developed this scheduling system for a window cleaning company owned by my colleague. The application streamlines appointment booking, staff scheduling, and service management to optimize workflows and prevent scheduling conflicts.',
            align: 'center',
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ImageWithCaption',
          props: {
            src: '/images/Scheduling.png',
            alt: 'FirstDue Scheduling Interface',
            caption: 'The scheduling calendar interface',
            aspectRatio: '16:9',
          },
        },
      },
      {
        type: 'grid',
        title: 'Technical Details',
        items: [
          {
            width: 1,
            component: {
              component: 'TechStack',
              props: {
                title: 'Technologies',
                technologies: [
                  'NextJS',
                  'PayloadCMS',
                  'TailwindCSS',
                  'TypeScript',
                ],
                variant: 'pills',
                columns: 2,
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Key Components',
                features: [
                  {
                    title: 'Scheduling Calendar',
                    description:
                      'Schedule and manage appointments with a clean calendar interface',
                  },
                  {
                    title: 'Client Management',
                    description:
                      'Manage client information, client events, and preferences',
                  },
                  {
                    title: 'Email Broadcasting',
                    description:
                      'Send email broadcasts to all clients with a simple interface',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'LinkGrid',
          props: {
            title: 'Project Links',
            links: [
              {
                title: 'GitHub Repository',
                url: 'https://github.com/Tristen-Dillon/firstdue-scheduling',
                description: 'Source code and documentation',
                platform: 'github',
              },
            ],
            columns: 1,
          },
        },
      },
    ],
  },
  'filemaker-outlook': {
    env: 'development',
    meta: {
      title: 'FileMaker Outlook Integration',
      description:
        'A tool to send emails and review emails from Outlook in FileMaker',
      image: '/images/OutlookDraft.png',
      technologies: ['FileMaker', 'Outlook API'],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'FileMaker Outlook Integration',
            size: 'xl',
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
            text: "At my workplace we were having issues with emailing using FileMaker's built in email script. So I made a custom client that sent emails with the Outlook API through FileMaker.",
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ImageWithCaption',
          props: {
            src: '/images/OutlookSentBlurred.png',
            alt: 'Outlook Sent Email',
            caption: 'The sent mail interface',
            aspectRatio: '16:9',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 2,
            component: {
              component: 'CodeBlock',
              props: {
                filePath: 'outlook-script.txt',
                language: 'FMP12',
                title: 'Outlook Script',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'Description',
              props: {
                text: 'This is the script that starts the process of sending the email. It opens the outlook application and creates a new email. It has the ability to add attachments to the email, set the subject, and body of the email, etc.',
              },
            },
          },
          {
            width: 3,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/AttachmentsBlurred.png',
                alt: 'Outlook Attachments',
                caption: 'Able to see attachments in the email',
                aspectRatio: '16:9',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Description',
          props: {
            text: 'Below are some screenshots of the application in action, the first image shows off the drafter interface, the second image shows off that attachments that can be added to the email, and the third image shows off the custom email typing interface similar to outlook. (Click the images to enlarge)',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ImageShowcase',
          props: {
            images: [
              '/images/OutlookDraft.png',
              '/images/DraftWithAttachments.png',
              '/images/DraftWithEmailsBlurred.png',
            ],
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 1,
            component: {
              component: 'Description',
              props: {
                text: 'The settings interface allows you to configure the email settings, such as the reply email address, your name, the header attached to each email. There was also an admin interface that allowed the admin (me) to manage the environment variables for the application, such as the tenant id, client id, client secret, etc.',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/OutlookSettingsBlurred.png',
                alt: 'Outlook Settings',
                caption: 'The settings interface',
                aspectRatio: '16:9',
              },
            },
          },
        ],
      },
    ],
  },
  'filemaker-review-dashboard': {
    env: 'development',
    meta: {
      title: 'FileMaker Review Dashboard',
      description:
        'A dashboard for managing and analyzing permit applications in FileMaker.',
      image: '/images/Review.png',
      technologies: ['FileMaker'],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'FileMaker Review Dashboard',
            size: 'xl',
            align: 'center',
            withLine: true,
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: 'A dashboard for managing and analyzing permit applications in FileMaker.',
            align: 'center',
            size: 'lg',
          },
        },
      },
      {
        type: 'grid',
        items: [
          {
            width: 1,
            component: {
              component: 'Description',
              props: {
                text: 'One of the main problems with the previous way of reviewing applications was that it was very time consuming, there was a LOT of manual input which was slow and caused human error. So I made an integration and dashboard that allows the admin to review applications, and quickly edit the permit application before they get put in our system..',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/Review.png',
                alt: 'FileMaker Review Dashboard',
                caption: 'The review dashboard',
                aspectRatio: '16:9',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Description',
          props: {
            text: 'There is not much more to say about this project, it was a simple integration. It was a fun project to work on, and I learned a lot from it. It was my first big FileMaker project, and I was able to learn a lot about the platform and how to use it to.',
          },
        },
      },
    ],
  },
  storemfd: {
    env: 'development',
    meta: {
      title: 'StoreMFD',
      description: 'An internal clothing store for my workplace',
      image: '/images/StoreMFD.webp',
      technologies: [
        'NextJS',
        'TailwindCSS',
        'TypeScript',
        'Framer Motion',
        'Payload',
      ],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'StoreMFD',
            size: 'xl',
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
            text: 'StoreMFD is an internal e-commerce platform I developed for the Manhattan Fire Department to streamline the process of ordering uniform items and merchandise. This solution replaced an inefficient paper-based system with a modern digital storefront and inventory management system.',
            align: 'center',
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'TechStack',
          props: {
            title: 'Built With',
            technologies: [
              'NextJS',
              'TypeScript',
              'TailwindCSS',
              'Framer Motion',
              'PayloadCMS',
              'MongoDB',
            ],
            variant: 'pills',
            columns: 3,
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        title: 'Core Features',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/StoreMFD.webp',
                alt: 'StoreMFD application screenshot',
                caption: 'StoreMFD store interface',
                aspectRatio: '16:9',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Key Features',
                features: [
                  {
                    title: 'User Authentication',
                    description:
                      'Azure AD integration for secure department login',
                  },
                  {
                    title: 'Role-Based Access',
                    description:
                      'Different permissions for administrators and standard users',
                  },
                  {
                    title: 'Inventory Management',
                    description:
                      'Real-time tracking of available items and sizes',
                  },
                  {
                    title: 'Order Processing',
                    description: 'Automated workflows for order fulfillment',
                  },
                  {
                    title: 'Reporting Dashboard',
                    description:
                      'Analytics for purchasing trends and inventory status',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Description',
          props: {
            text: "The system integrates with the department's budget tracking system to ensure all purchases are properly accounted for and stay within allocated funds. It also features an approval workflow for certain items that require authorization from superiors.",
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'StatsSection',
          props: {
            stats: [
              {
                label: 'Annual Orders',
                value: 1200,
                unit: '+',
              },
              {
                label: 'Processing Time Reduction',
                value: 75,
                unit: '%',
              },
              {
                label: 'User Satisfaction',
                value: 98,
                unit: '%',
              },
              {
                label: 'Inventory Accuracy',
                value: 99.5,
                unit: '%',
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
            title: 'Project Timeline',
            steps: [
              {
                title: 'Requirements Gathering',
                description:
                  'Interviewed stakeholders to understand needs and pain points',
                date: 'January 2025',
              },
              {
                title: 'Design & Prototyping',
                description:
                  'Created wireframes and iterative prototypes with user testing',
                date: 'February 2025',
              },
              {
                title: 'Development',
                description:
                  'Built the application using Next.js and PayloadCMS',
                date: 'March-April 2025',
              },
              {
                title: 'Testing & Refinement',
                description:
                  'Conducted user acceptance testing and implemented feedback',
                date: 'May 2025',
              },
              {
                title: 'Deployment & Training',
                description:
                  'Launched the platform and trained staff on its usage',
                date: 'June 2025',
              },
            ],
          },
        },
      },
    ],
  },
  'mfd-sharepoint': {
    env: 'development',
    meta: {
      title: 'MFD Sharepoint',
      description: "Sharepoint site for the MFD's department communication",
      image: '/images/Collections.png',
      technologies: ['Sharepoint', 'Power Automate', 'Power BI', 'PowerApps'],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'MFD Sharepoint Integration',
            size: 'xl',
            align: 'center',
            withLine: true,
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Subtitle',
          props: {
            text: 'Modern Digital Workspace for Emergency Services',
            align: 'center',
            size: 'lg',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Description',
          props: {
            text: 'I developed a comprehensive SharePoint solution for the Manhattan Fire Department to centralize communications, streamline document management, and automate workflows. This project transformed how information is shared across the department and significantly improved operational efficiency.',
            align: 'center',
            size: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'TechStack',
          props: {
            title: 'Technologies Used',
            technologies: [
              'SharePoint Online',
              'Power Automate',
              'Power BI',
              'PowerApps',
              'Microsoft Graph API',
              'Azure Functions',
            ],
            variant: 'pills',
            columns: 3,
          },
        },
      },
      {
        type: 'grid',
        title: 'Solution Components',
        items: [
          {
            width: 1,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/Collections.png',
                alt: 'SharePoint Document Collections',
                caption: 'Document management system',
                aspectRatio: '4:3',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'FeatureList',
              props: {
                title: 'Key Implementations',
                features: [
                  {
                    title: 'Command Dashboard',
                    description:
                      'Real-time information hub for department leadership',
                  },
                  {
                    title: 'Document Management System',
                    description:
                      'Centralized repository with version control and approval workflows',
                  },
                  {
                    title: 'Automated Workflows',
                    description:
                      'Equipment maintenance scheduling and inspection tracking',
                  },
                  {
                    title: 'Training Portal',
                    description: 'Course management and certification tracking',
                  },
                  {
                    title: 'Emergency Response Coordination',
                    description:
                      'Real-time incident management and resource allocation',
                  },
                  {
                    title: 'Analytics Dashboard',
                    description: 'Performance metrics and operational insights',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'primary',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        title: 'Technical Accomplishments',
        items: [
          {
            width: 2,
            component: {
              component: 'Description',
              props: {
                text: 'The SharePoint implementation included custom PowerApps that integrated with department systems including the Computer Aided Dispatch (CAD) system. I created workflows with Power Automate to streamline approval processes and notify staff about critical updates. The solution also featured Power BI dashboards that visualized response times, equipment status, and training compliance.',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/AdminDashboard.png',
                alt: 'Admin Dashboard',
                caption: 'Administrative control panel',
                aspectRatio: '16:9',
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
                label: 'Document Search Time Reduction',
                value: 80,
                unit: '%',
              },
              {
                label: 'Administrative Hours Saved Weekly',
                value: 25,
                unit: 'hrs',
              },
              {
                label: 'Department Staff Using Platform',
                value: 98,
                unit: '%',
              },
              {
                label: 'Approval Process Time Reduction',
                value: 65,
                unit: '%',
              },
            ],
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Quote',
          props: {
            text: 'The SharePoint integration has revolutionized how we share information and coordinate operations. What used to take days now happens in minutes.',
            author: 'Fire Chief',
            source: 'Project Feedback',
            variant: 'default',
          },
        },
      },
    ],
  },
  'component-showcase': {
    env: 'production',
    meta: {
      title: 'Component Showcase',
      description: 'A demonstration of all available project components',
      image: '/images/ComponentDisplay.png',
      github: 'https://github.com/tristendillon/portfolio',
      technologies: ['NextJS', 'TailwindCSS', 'TypeScript', 'Framer Motion'],
    },
    sections: [
      {
        type: 'standard',
        component: {
          component: 'Title',
          props: {
            text: 'Component Gallery',
            size: 'xl',
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
            text: "This project demonstrates all the available components that can be used in project pages. Each component is designed to be flexible and customizable to fit various project needs. These are the components that are defined by the 'mark down' file in the portfolio project.",
            align: 'center',
            size: 'lg',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        title: 'Text Components',
        items: [
          {
            width: 1,
            component: {
              component: 'Title',
              props: {
                text: 'Title Component',
                size: 'md',
                withLine: true,
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'Subtitle',
              props: {
                text: 'Subtitle Component',
                size: 'md',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'Description',
              props: {
                text: 'Description component for longer text blocks. This can be used to explain concepts or provide detailed information.',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        title: 'Media Components',
        items: [
          {
            width: 2,
            component: {
              component: 'ImageWithCaption',
              props: {
                src: '/images/Portfolio.png',
                alt: 'Portfolio screenshot',
                caption: 'Image with caption component',
                aspectRatio: '16:9',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'Video',
              props: {
                src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                title: 'Video Component',
                caption: 'YouTube video embedding',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        title: 'Code & Tech Components',
        items: [
          {
            width: 2,
            component: {
              component: 'CodeBlock',
              props: {
                filePath: 'sample.tsx',
                language: 'tsx',
                title: 'Code Block Component',
              },
            },
          },
          {
            width: 1,
            component: {
              component: 'TechStack',
              props: {
                title: 'Tech Stack Component',
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
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'grid',
        title: 'Quote & Testimonial Components',
        items: [
          {
            width: 1,
            component: {
              component: 'Quote',
              props: {
                text: "This is the Quote component. It's great for highlighting important statements or user feedback.",
                author: 'Design Team',
                source: 'Project Documentation',
                variant: 'default',
              },
            },
          },
          {
            width: 2,
            component: {
              component: 'Testimonial',
              props: {
                quote:
                  'The Testimonial component is perfect for showcasing client or user feedback in a more prominent way.',
                author: 'Happy Client',
                role: 'CEO',
                company: 'Example Corp',
              },
            },
          },
        ],
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'LinkGrid',
          props: {
            title: 'Link Components',
            description: 'Showcase of the LinkCard and LinkGrid components',
            links: [
              {
                title: 'GitHub Repository',
                url: 'https://github.com/tristendillon/portfolio',
                description: 'View the source code',
                platform: 'github',
              },
              {
                title: 'Live Demo',
                url: 'https://portfolio.tdilly.com',
                description: 'See it in action',
                platform: 'website',
              },
              {
                title: 'Documentation',
                url: 'https://docs.example.com',
                description: 'Read the docs',
                platform: 'docs',
              },
            ],
            columns: 3,
            variant: 'default',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'ProcessTimeline',
          props: {
            title: 'Process Timeline Component',
            steps: [
              {
                title: 'Step 1: Planning',
                description: 'Initial planning and requirements gathering',
                date: 'January 2025',
              },
              {
                title: 'Step 2: Design',
                description: 'Creating wireframes and mockups',
                date: 'February 2025',
              },
              {
                title: 'Step 3: Development',
                description: 'Building the application',
                date: 'March 2025',
              },
              {
                title: 'Step 4: Testing',
                description: 'Quality assurance and bug fixing',
                date: 'April 2025',
              },
              {
                title: 'Step 5: Deployment',
                description: 'Launching the project',
                date: 'May 2025',
              },
            ],
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'Divider',
          props: {
            type: 'line',
            color: 'muted',
            spacing: 'md',
          },
        },
      },
      {
        type: 'standard',
        component: {
          component: 'StatsSection',
          props: {
            stats: [
              {
                label: 'Components',
                value: 15,
              },
              {
                label: 'Projects',
                value: 10,
              },
              {
                label: 'Variants',
                value: 25,
              },
              {
                label: 'Satisfaction',
                value: 100,
                unit: '%',
              },
            ],
          },
        },
      },
    ],
  },
}
