export const projects = [
  {
    title: 'Chess Multiplayer Game',
    slug: 'chess',
    icon: '♟️',
    description: 'Enhancing the use of websockets for peer to peer game connectivity. User Interface powered by Core React and a Type Safe Socket Server with Node.js and TypeScript.',
    tags: ['WebSockets', 'React', 'TypeScript'],
    image: require('../assets/images/chess.png'),
    resources: [
      { type: 'GITHUB', title: 'Chess Multiplayer Repo', url: 'https://github.com/JaguarsCodehub/chess', description: 'Source code for the React client and Node.js socket server.' }
    ]
  },
  {
    title: 'Scalable Chat Application',
    slug: 'scalable-chat',
    icon: '💬',
    description: 'High Level Scaling Design with Redis Pub-Sub architecture to store messages for caching. Utilizes Kafka Streaming for consuming messages to prevent DB blocking.',
    tags: ['System Design', 'Redis', 'Kafka', 'Node.js'],
    image: require('../assets/images/1.png'),
    resources: [
      { type: 'GITHUB', title: 'Scalable Chat Repo', url: 'https://github.com/JaguarsCodehub/scalable-chat-redis-socket-node', description: 'Source code demonstrating Redis Pub-Sub and Kafka integration.' }
    ]
  },
  {
    title: 'Vercel Clone Code Deploy Service',
    slug: 'vercel-clone',
    icon: '🚀',
    description: 'A Node.js Server to handle project submissions to AWS ECS. Docker containers build the projects into an HTML file stored in S3, served via a Reverse Proxy Server.',
    tags: ['Docker', 'AWS ECS', 'Proxy'],
    image: require('../assets/images/vercel-deploy.png'),
    resources: [
      { type: 'GITHUB', title: 'Vercel Infrastructure Clone', url: 'https://github.com/JaguarsCodehub/vercel-infrastructure', description: 'Source code for the deployment pipeline and reverse proxy.' }
    ]
  },
  {
    title: 'Socket 3D Multiplayer Game',
    slug: 'socket-3d-game',
    icon: '🎮',
    description: 'A React Game built with react-three-fiber. A Node.js Socket server handles character events and synchronizes movements with other peers.',
    tags: ['React Three Fiber', 'WebSockets', 'Node.js'],
    image: require('../assets/images/socket-3d-game.png'),
    resources: [
      { type: 'GITHUB', title: '3D Multiplayer Game Repo', url: 'https://github.com/JaguarsCodehub/socket-3d-game', description: 'Source code for the 3D client and socket server.' }
    ]
  },
  {
    title: 'Notion Clone Note Taking App',
    slug: 'note-taking',
    icon: '📝',
    description: 'Real-time collaborative editor powered by React and Convex functions. Features Clerk Authentication and secure, scalable architecture.',
    tags: ['React', 'Convex', 'Clerk Auth'],
    image: require('../assets/images/note-taking.png'),
    resources: [
      { type: 'GITHUB', title: 'Note Taking App Repo', url: 'https://github.com/JaguarsCodehub/note-taking', description: 'Source code for the real-time collaborative editor.' }
    ]
  },
  {
    title: 'Discord Clone Community Platform',
    slug: 'team-chat-platform',
    icon: '🎧',
    description: 'Integrated chat features including text, audio, and video channels. Modern UI built with Tailwind CSS and ShadcnUI.',
    tags: ['WebRTC', 'Tailwind CSS', 'ShadcnUI'],
    image: require('../assets/images/discord.png'),
    resources: [
      { type: 'GITHUB', title: 'Discord Clone Repo', url: 'https://github.com/JaguarsCodehub/team-chat-platform', description: 'Source code for the community platform with voice/video features.' }
    ]
  },
  {
    title: 'Profanity Detection API',
    slug: 'profane-api',
    icon: '🤬',
    description: 'Custom built API from scratch using Hono.js, Cloudflare, and TypeScript. Uses Upstash Vector Database to calculate a profane score for sentences.',
    tags: ['Hono.js', 'Cloudflare', 'Upstash'],
    image: require('../assets/images/profane-detection.png'),
    resources: [
      { type: 'GITHUB', title: 'Profanity API Repo', url: 'https://github.com/JaguarsCodehub/api-profane-production', description: 'Source code for the edge-deployed detection API.' }
    ]
  },
  {
    title: 'Advanced Backend Food API',
    slug: 'food-api',
    icon: '🍔',
    description: 'Robust Food API built with Express, TypeScript, and MongoDB, adhering strictly to the MVC folder structure.',
    tags: ['Node.js', 'Express', 'MongoDB', 'MVC'],
    image: require('../assets/images/backend-food-api.png'),
    resources: [
      { type: 'GITHUB', title: 'Food API Repo', url: 'https://github.com/JaguarsCodehub/backend-food-advanced-api', description: 'Source code for the MVC structured Express API.' }
    ]
  },
  {
    title: 'Video Calling App (Omegle Clone)',
    slug: 'video-calling',
    icon: '📹',
    description: 'WebRTC API frontend using STUN Server logic and ICE Candidates to stream video and audio, backed by a WebSocket server.',
    tags: ['WebRTC', 'WebSockets', 'React'],
    image: require('../assets/images/omegle-2.png'),
    resources: [
      { type: 'GITHUB', title: 'Video Calling App Repo', url: 'https://github.com/JaguarsCodehub/omegle-ws', description: 'Source code demonstrating peer-to-peer WebRTC connections.' }
    ]
  },
];

export const devopsProjects = [
  {
    title: 'DevSecOps Pipeline Implementation',
    slug: 'devsecops-pipeline',
    icon: '🛡️',
    description: 'Implementation details of a secure, automated CI/CD pipeline incorporating security scanning and best practices.',
    tags: ['DevSecOps', 'CI/CD', 'Security'],
    image: require('../assets/images/diagram.png'),
    resources: [
      { type: 'DOCS', title: 'DevSecOps Guide', url: 'https://simple-bookcase-dc9.notion.site/DevSecOps-Pipeline-Implementation-1d707659b93480fd96c4dac74ca8a43a?pvs=74', description: 'Detailed Notion documentation on the pipeline architecture.' }
    ]
  },
  {
    title: 'Nginx Deep Dive: Full-Stack Deployment on AWS EC2',
    slug: 'nginx-deep-dive',
    icon: '🌐',
    description: 'Comprehensive guide to deploying full-stack applications using Nginx as a reverse proxy on AWS EC2 instances.',
    tags: ['Nginx', 'AWS EC2', 'Deployment'],
    image: require('../assets/images/scene4.jpg'),
    resources: [
      { type: 'DOCS', title: 'Nginx Deployment Guide', url: 'https://simple-bookcase-dc9.notion.site/Nginx-Deep-Dive-1d707659b93480eba96cd2bb05a0bc94?pvs=74', description: 'Detailed Notion documentation on Nginx configuration.' }
    ]
  },
  {
    title: 'AWS Devops with Argo CD',
    slug: 'aws-argo-cd',
    icon: '🐙',
    description: 'GitOps workflow implementation using Argo CD for continuous delivery to Kubernetes clusters on AWS.',
    tags: ['Argo CD', 'Kubernetes', 'AWS', 'GitOps'],
    image: require('../assets/images/kubernetes.png'),
    resources: [
      { type: 'DOCS', title: 'Argo CD Setup Guide', url: 'https://simple-bookcase-dc9.notion.site/AWS-Devops-with-Argo-CD-1d807659b93480e4bbe2d7065714479e?pvs=4', description: 'Detailed Notion documentation on Argo CD integration.' }
    ]
  },
  {
    title: 'Terraform Infrastructure Deployment',
    slug: 'terraform-infra',
    icon: '🏗️',
    description: 'Infrastructure as Code implementation using Terraform to provision EC2, S3, and DynamoDB resources.',
    tags: ['Terraform', 'IaC', 'AWS'],
    image: require('../assets/images/terraform.png'),
    resources: [
      { type: 'DOCS', title: 'Terraform Infrastructure Guide', url: 'https://simple-bookcase-dc9.notion.site/Terraform-Infra-1d707659b9348079b37ec5dcf8093b60?pvs=4', description: 'Detailed Notion documentation on the Terraform modules used.' }
    ]
  },
  {
    title: 'App Deployment using Linode',
    slug: 'linode-deployment',
    icon: '☁️',
    description: 'Complete deployment pipeline utilizing Circle CI, Linode instances, and Helm charts for Kubernetes management.',
    tags: ['Linode', 'Circle CI', 'Helm'],
    image: require('../assets/images/linode.png'),
    resources: [
      { type: 'GITHUB', title: 'Deployment Demo Repo', url: 'https://github.com/JaguarsCodehub/development-demo', description: 'Source code containing the CI/CD configuration and Helm charts.' }
    ]
  },
];

export function getProjectBySlug(slug) {
  const allProjects = [...projects, ...devopsProjects];
  return allProjects.find(project => project.slug === slug);
}
