export type Question = {
  type: "multiple" | "short";
  prompt: string;
  options?: string[];
  answer: string;
  image: string;
};

export const questions: Question[] = [
  // Identity + inside joke
  {
    type: "multiple",
    prompt: "What is my official duty title in your life?",
    options: [
      "CCP (Chloe Chow Patrol)",
      "Chief Snack Distributor",
      "Design Department Intern",
      "Galaxy Bodyguard",
    ],
    answer: "CCP (Chloe Chow Patrol)",
    image: "/ccp.jpeg",
  },

  // Timeline anchors
  {
    type: "multiple",
    prompt: "What date did we become exclusive?",
    options: [
      "May 16, 2025",
      "May 26, 2025",
      "July 5, 2025",
      "January 9, 2026",
    ],
    answer: "May 26, 2025",
    image: "/exclusive.webp",
  },
  {
    type: "multiple",
    prompt: "When did we officially start dating?",
    options: [
      "July 5, 2025 11:30pm",
      "July 5, 2025 7:00pm",
      "May 26, 2025",
      "January 1, 2026",
    ],
    answer: "July 5, 2025 11:30pm",
    image: "/dating.jpeg",
  },

  // Meaningful preference questions (not just “facts”)
  {
    type: "multiple",
    prompt: "When you are upset, what’s the fastest way to help?",
    options: [
      "Argue harder (for fun)",
      "Food + patience + a hug",
      "Send 17 memes immediately",
      "Ask her to do math problems",
    ],
    answer: "Food + patience + a hug",
    image: "/hug.jpg",
  },
  {
    type: "multiple",
    prompt: "What are you most likely doing on a random day?",
    options: [
      "NYT Games",
      "Rewatching Fleabag",
      "Looking at design inspo",
      "All of the above",
    ],
    answer: "All of the above",
    image: "/chill.webp",
  },

  // Date memory: specific & story-like
  {
    type: "multiple",
    prompt: "Which date night was a full chaotic combo?",
    options: [
      "Bowling + Karaoke + Photobooth",
      "Museum + silent reading",
      "Cooking class + pottery",
      "Beach picnic + stargazing",
    ],
    answer: "Bowling + Karaoke + Photobooth",
    image: "/karaoke.gif",
  },
  {
    type: "multiple",
    prompt: "Which one did we do with fireworks as part of the day?",
    options: [
      "Brunch @ Café Maud",
      "Brooklyn Food Market + Video Game Cafe",
      "Queen Center Mall hangout",
      "NY Public Library day",
    ],
    answer: "Brooklyn Food Market + Video Game Cafe",
    image: "/fireworks.avif",
  },
  {
    type: "multiple",
    prompt: "Which one is a real ‘we stayed late’ kind of memory?",
    options: [
      "Suram Japanese Food + Pizza (6 months)",
      "Nan Xiang + walking around + Ball Drop",
      "Ice skating in the city + dorm games",
      "All of them, honestly",
    ],
    answer: "All of them, honestly",
    image: "/late.jpg",
  },

  // Food: personalized but sweet
  {
    type: "multiple",
    prompt: "If Chloe is angry, what should I do first?",
    options: [
      "Give her space",
      "Get her a burrito",
      "Explain my logic",
      "Ask if she wants to debate",
    ],
    answer: "Get her a burrito",
    image: "/angry.webp",
  },
  {
    type: "multiple",
    prompt: "Which is the ‘Chloe snack’ energy?",
    options: [
      "Coca-Cola gummies",
      "Popcorn",
      "Saltine crackers",
      "Protein bar",
    ],
    answer: "Coca-Cola gummies",
    image: "/snacks.jpg",
  },
  {
    type: "multiple",
    prompt: "What’s the ‘special chocolate’ that always hits?",
    options: ["KitKat", "Ferrero Rocher", "Hershey’s", "Twix"],
    answer: "Ferrero Rocher",
    image: "/chocolate.webp",
  },

  // Soft romantic: “how well do you know what I love about you”
  {
    type: "multiple",
    prompt: "What’s the kind of design Chloe loves most?",
    options: [
      "UX/UI + communicative design",
      "Industrial engineering diagrams",
      "Finance dashboards only",
      "Compiler optimization charts",
    ],
    answer: "UX/UI + communicative design",
    image: "/design.jpeg",
  },

  // Romance + respect
  {
    type: "multiple",
    prompt: "What’s the most ‘Justin’ way to show love to Chloe?",
    options: [
      "Build something thoughtful for her",
      "Write a 50-page contract",
      "Send a single emoji and disappear",
      "Ask her to do my homework",
    ],
    answer: "Build something thoughtful for her",
    image: "/build.png",
  },

  // Safeword + short answers
  {
    type: "short",
    prompt: "Vault keyword (the safe word):",
    answer: "Lego",
    image: "/lock.jpg",
  },

  {
    type: "multiple",
    prompt: "Which moment feels the most ‘us’?",
    options: [
      "Laughing in a photobooth",
      "Sharing food after a long day",
      "Walking around with no plan",
      "Smacking Chloe's booty aota",
    ],
    answer: "Smacking Chloe's booty aota",
    image: "/IMG_8807.jpeg",
  },
];
