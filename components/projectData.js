// projectData.js
export const projectSections = [
  {
    id: 'Kubernetes ArgoCD',
    label: 'Kubernetes ArgoCD',
    bgColor: 'bg-blue-500',
    image: require('../assets/images/kubernetes.png'),
    items: [
      {
        title: 'Chess Multiplayer Game with websockets',
        description:
          'Enhancing the use of websockets for peer to peer game connectivity',
        badge: 'sockets',
        codeLink: 'https://github.com/JaguarsCodehub/chess',
      },
      {
        title: 'Seamless Chess UI with valid moves',
        description: 'User Interface powered by Core React and best practices',
      },
      {
        title: 'Type Safe Socket Server with Node js and Typescript',
        badge: 'typescript',
      },
    ],
  },
  {
    id: 'chess',
    label: 'Chess',
    bgColor: 'bg-lime-500',
    image: require('../assets/images/chess.png'),
    items: [
      {
        title: 'Chess Multiplayer Game with websockets',
        description:
          'Enhancing the use of websockets for peer to peer game connectivity',
        badge: 'sockets',
        codeLink: 'https://github.com/JaguarsCodehub/chess',
      },
      {
        title: 'Seamless Chess UI with valid moves',
        description: 'User Interface powered by Core React and best practices',
      },
      {
        title: 'Type Safe Socket Server with Node js and Typescript',
        badge: 'typescript',
      },
    ],
  },
  {
    id: 'chatting',
    label: 'Chatting',
    bgColor: 'bg-black',
    image: require('../assets/images/1.png'),
    items: [
      {
        title: 'Scalable Chat Application with High Level System Design',
        description: 'High Level Scaling Design with Redis',
        badge: 'System Design',
        codeLink:
          'https://github.com/JaguarsCodehub/scalable-chat-redis-socket-node',
      },
      {
        title: 'Pub - Sub Architecture with Redis Insight',
        description:
          'Using Redis as a Key Storage to store messages as values for faster caching',
        badge: 'Redis',
      },
      {
        title: 'Kafka Streaming and Consumer',
        description:
          'Kafka used for consuming our messages so that our DB does not gets blocked...',
      },
    ],
  },
  // Add other sections in the same format...
];
