import {
  Globe,
  Smartphone,
  Code2,
  Brain,
  Cloud,
  Server,
  Cog,
  Database,
} from "lucide-react";

export const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription:
      "Build scalable and responsive web applications using modern technologies.",
    fullDescription:
      "We create powerful, scalable web applications that deliver exceptional user experiences. From single-page applications to complex enterprise platforms, we use cutting-edge technologies to build solutions that grow with your business.",
    technologies: ["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
    features: [
      "Responsive & Mobile-First Design",
      "Progressive Web Applications",
      "Real-time Features",
      "SEO Optimized",
      "Performance Focused",
      "Scalable Architecture",
    ],
    process: [
      "Requirements Analysis",
      "UI/UX Design",
      "Frontend Development",
      "Backend Integration",
      "Testing & QA",
      "Deployment & Support",
    ],
  },
  {
    id: "android-development",
    icon: Smartphone,
    title: "Android Applications",
    shortDescription:
      "Modern Android applications designed for real-world users and businesses.",
    fullDescription:
      "We develop intuitive, high-performance Android applications that users love. Our mobile solutions are designed with real-world usability in mind, ensuring smooth experiences across devices.",
    technologies: ["Flutter", "Kotlin", "Android SDK", "Firebase", "REST APIs"],
    features: [
      "Native & Cross-Platform",
      "Offline Capable",
      "Push Notifications",
      "Secure Authentication",
      "Analytics Integration",
      "Play Store Deployment",
    ],
    process: [
      "Discovery & Planning",
      "Wireframing",
      "UI/UX Design",
      "Development",
      "Testing on Devices",
      "Play Store Launch",
    ],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software",
    shortDescription:
      "Business-specific software designed around unique workflows.",
    fullDescription:
      "Every business has unique challenges. We build custom software solutions that fit your specific workflows, automating processes and improving efficiency. No off-the-shelf compromises.",
    technologies: ["Node.js", "Python", "React", "MongoDB", "PostgreSQL"],
    features: [
      "Tailored to Your Workflow",
      "Process Automation",
      "Role-Based Access",
      "Reporting & Analytics",
      "Integration Ready",
      "Scalable Design",
    ],
    process: [
      "Business Analysis",
      "System Design",
      "Development Sprints",
      "User Testing",
      "Deployment",
      "Continuous Improvement",
    ],
  },
  {
    id: "ai-solutions",
    icon: Brain,
    title: "AI Solutions",
    shortDescription:
      "AI-powered applications, document intelligence, chatbots and automation.",
    fullDescription:
      "Harness the power of artificial intelligence. We build intelligent applications that can understand documents, automate decisions, and provide smart interactions through chatbots and AI-powered features.",
    technologies: ["Python", "OpenAI", "LangChain", "RAG", "Vector DBs"],
    features: [
      "Document Intelligence",
      "Smart Chatbots",
      "Automated Processing",
      "RAG Applications",
      "AI-Powered Search",
      "Custom AI Models",
    ],
    process: [
      "Use Case Definition",
      "Data Assessment",
      "Model Selection",
      "Development & Training",
      "Integration",
      "Monitoring & Optimization",
    ],
  },
  {
    id: "saas-products",
    icon: Cloud,
    title: "SaaS Products",
    shortDescription:
      "Scalable cloud-based products designed for recurring business value.",
    fullDescription:
      "We help you build Software-as-a-Service products from the ground up. Multi-tenant architecture, subscription management, and scalable infrastructure — everything you need to launch and grow a SaaS business.",
    technologies: ["React", "Node.js", "MongoDB", "Cloud", "Stripe"],
    features: [
      "Multi-Tenant Architecture",
      "Subscription Management",
      "User Dashboard",
      "Admin Panel",
      "API First Design",
      "Auto Scaling",
    ],
    process: [
      "Market Research",
      "MVP Definition",
      "Architecture Design",
      "Core Development",
      "Beta Launch",
      "Scale & Iterate",
    ],
  },
  {
    id: "api-backend",
    icon: Server,
    title: "API & Backend Development",
    shortDescription: "Secure and scalable APIs and backend systems.",
    fullDescription:
      "We build robust, secure, and scalable backend systems and APIs that power your applications. RESTful APIs, real-time communication, authentication, and data management — all built for performance.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
    features: [
      "RESTful API Design",
      "Authentication & Authorization",
      "Real-time Communication",
      "Database Design",
      "Caching Strategies",
      "API Documentation",
    ],
    process: [
      "API Architecture",
      "Database Design",
      "Endpoint Development",
      "Security Implementation",
      "Load Testing",
      "Documentation",
    ],
  },
  {
    id: "cloud-solutions",
    icon: Database,
    title: "Cloud Solutions",
    shortDescription:
      "Cloud infrastructure setup, deployment and management.",
    fullDescription:
      "We help businesses migrate to the cloud and optimize their infrastructure. From initial setup to ongoing management, we ensure your applications run smoothly in the cloud.",
    technologies: ["AWS", "Docker", "CI/CD", "MongoDB Atlas", "Nginx"],
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "CI/CD Pipelines",
      "Monitoring & Alerts",
      "Auto Scaling",
      "Cost Optimization",
    ],
    process: [
      "Infrastructure Audit",
      "Migration Planning",
      "Cloud Setup",
      "Application Deployment",
      "Monitoring Setup",
      "Ongoing Management",
    ],
  },
  {
    id: "automation",
    icon: Cog,
    title: "Business Automation",
    shortDescription:
      "Automate repetitive tasks and streamline business processes.",
    fullDescription:
      "Eliminate manual, repetitive tasks with intelligent automation. We design and implement automation solutions that save time, reduce errors, and let your team focus on what matters most.",
    technologies: ["Python", "Node.js", "APIs", "Webhooks", "Cron Jobs"],
    features: [
      "Workflow Automation",
      "Email Automation",
      "Report Generation",
      "Data Processing",
      "Notification Systems",
      "Integration Automation",
    ],
    process: [
      "Process Mapping",
      "Automation Design",
      "Development",
      "Testing",
      "Deployment",
      "Monitoring",
    ],
  },
];

export const technologies = {
  frontend: [
    { name: "React 19", color: "#61DAFB" },
    { name: "Next.js 15", color: "#ffffff" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Vue.js", color: "#42B883" },
    { name: "Vite", color: "#646CFF" },
  ],
  backend: [
    { name: "Node.js", color: "#339933" },
    { name: "Express.js", color: "#ffffff" },
    { name: "NestJS", color: "#E0234E" },
    { name: "Python / FastAPI", color: "#009688" },
    { name: "GraphQL", color: "#E10098" },
    { name: "RESTful APIs", color: "#4c8dff" },
  ],
  database: [
    { name: "MongoDB Atlas", color: "#47A248" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Redis Cache", color: "#DC382D" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "Prisma ORM", color: "#5A67D8" },
  ],
  mobile: [
    { name: "Flutter", color: "#02569B" },
    { name: "React Native", color: "#61DAFB" },
    { name: "Android (Kotlin)", color: "#7F52FF" },
    { name: "iOS (Swift)", color: "#F05138" },
    { name: "Dart", color: "#0175C2" },
    { name: "Expo", color: "#ffffff" },
  ],
  ai: [
    { name: "Python AI/ML", color: "#3776AB" },
    { name: "OpenAI / GPT-4o", color: "#10A37F" },
    { name: "LangChain & LlamaIndex", color: "#1C3C3C" },
    { name: "PyTorch & TensorFlow", color: "#EE4C2C" },
    { name: "Vector DB (Pinecone)", color: "#8b5cf6" },
    { name: "RAG Architectures", color: "#d4af37" },
  ],
  infrastructure: [
    { name: "AWS Cloud", color: "#FF9900" },
    { name: "Docker Containers", color: "#2496ED" },
    { name: "Kubernetes (K8s)", color: "#326CE5" },
    { name: "CI/CD (GitHub Actions)", color: "#FC6D26" },
    { name: "Nginx & Reverse Proxy", color: "#009639" },
    { name: "Cloudflare & CDN", color: "#F38020" },
  ],
};

export const solutions = [
  {
    title: "Education",
    description:
      "Digital platforms for schools, colleges and training organizations. Student management, learning management and assessment systems.",
    icon: "🎓",
  },
  {
    title: "E-Commerce",
    description:
      "Complete online store solutions with product management, payments, inventory tracking and customer management.",
    icon: "🛒",
  },
  {
    title: "Hospitality",
    description:
      "Hotel and restaurant management systems. Reservations, operations, billing and guest experience platforms.",
    icon: "🏨",
  },
  {
    title: "Healthcare",
    description:
      "Patient management, appointment scheduling, medical records and healthcare administration solutions.",
    icon: "🏥",
  },
  {
    title: "Startups",
    description:
      "MVP development, rapid prototyping and scalable architecture for early-stage technology companies.",
    icon: "🚀",
  },
  {
    title: "Small Businesses",
    description:
      "Affordable digital solutions to manage operations, reach customers and grow your business online.",
    icon: "🏪",
  },
  {
    title: "Enterprise",
    description:
      "Large-scale enterprise solutions with complex integrations, security requirements and multi-department workflows.",
    icon: "🏢",
  },
  {
    title: "Automation",
    description:
      "Workflow automation, data processing pipelines and intelligent systems that reduce manual effort.",
    icon: "⚙️",
  },
];

export const projects = [
  {
    id: "school-management",
    title: "School Management System",
    category: "Education",
    shortDescription:
      "Student management, attendance, fees, examinations and notifications.",
    overview:
      "A comprehensive school management platform designed to streamline daily operations of educational institutions. The system manages students, teachers, attendance, fees, examinations and parent communication in one unified platform.",
    problem:
      "Schools often rely on manual processes and disconnected tools for managing student records, attendance, fees and examinations. This leads to inefficiency, data errors and poor communication with parents.",
    solution:
      "We built an integrated web application that centralizes all school operations. Teachers can mark attendance digitally, administrators can manage fee collection, and parents receive automated notifications about their children's progress.",
    features: [
      "Student & Teacher Management",
      "Digital Attendance System",
      "Fee Management & Payment Tracking",
      "Examination & Grade Management",
      "Automated Parent Notifications",
      "Timetable Management",
      "Report Generation",
      "Role-based Access Control",
    ],
    architecture:
      "Built with a React frontend and Node.js/Express backend, using MongoDB for flexible data storage. The system supports role-based access for administrators, teachers, students and parents.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    challenges: [
      "Designing a flexible data model to support different school structures",
      "Building real-time notification system for parents",
      "Ensuring data security for student records",
    ],
    outcome:
      "The system streamlines school operations, reduces manual paperwork and improves parent-school communication through automated notifications.",
    color: "#4c8dff",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "E-Commerce",
    shortDescription:
      "Products, cart, orders, authentication and administration.",
    overview:
      "A full-featured e-commerce platform enabling businesses to sell products online with a smooth shopping experience, secure payments and comprehensive administration tools.",
    problem:
      "Small and medium businesses need affordable, customizable e-commerce solutions that don't come with the limitations and fees of third-party platforms.",
    solution:
      "We developed a custom e-commerce platform with product management, shopping cart, order processing, user authentication and an admin dashboard for complete business control.",
    features: [
      "Product Catalog with Categories",
      "Shopping Cart & Wishlist",
      "Order Processing & Tracking",
      "User Authentication & Profiles",
      "Admin Dashboard",
      "Inventory Management",
      "Search & Filtering",
      "Responsive Design",
    ],
    architecture:
      "MERN stack architecture with separate frontend and backend. The admin panel provides real-time analytics and order management capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    challenges: [
      "Building a performant product search with filtering",
      "Cart state management across sessions",
      "Secure payment integration",
    ],
    outcome:
      "The platform enables businesses to manage their online store independently with full control over products, orders and customer data.",
    color: "#8b5cf6",
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    category: "Hospitality",
    shortDescription: "Hotel operations, reservations and administration.",
    overview:
      "A modern hotel management system that handles room reservations, guest check-in/check-out, billing, housekeeping and operational reporting.",
    problem:
      "Many hotels still manage operations with spreadsheets or outdated software, leading to booking conflicts, billing errors and poor guest experience.",
    solution:
      "We created a web-based hotel management system that provides real-time room availability, streamlined reservation management and automated billing — all accessible from any device.",
    features: [
      "Room Reservation System",
      "Check-in & Check-out Management",
      "Guest Management",
      "Billing & Invoice Generation",
      "Housekeeping Management",
      "Room Availability Calendar",
      "Reporting & Analytics",
      "Multi-property Support",
    ],
    architecture:
      "Built as a responsive web application with real-time data synchronization. The system supports multiple user roles and provides a clean dashboard for quick operational overview.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    challenges: [
      "Preventing double bookings with concurrent access",
      "Building a flexible pricing engine",
      "Real-time room status updates",
    ],
    outcome:
      "Hotels can manage their complete operations from a single platform, reducing errors and improving guest satisfaction.",
    color: "#06b6d4",
  },
  {
    id: "attendance-notification",
    title: "Attendance Notification System",
    category: "Education",
    shortDescription:
      "Attendance management with automated parent notifications.",
    overview:
      "An automated attendance management system that tracks student presence and sends real-time notifications to parents when their child is marked absent.",
    problem:
      "Schools need an efficient way to track attendance and immediately inform parents about absences to ensure student safety and accountability.",
    solution:
      "We built a system where teachers can quickly mark attendance through a simple interface, and the system automatically sends notifications to parents when absences are recorded.",
    features: [
      "Quick Attendance Marking",
      "Automated Parent Notifications",
      "Attendance Reports & Analytics",
      "Class-wise Dashboard",
      "Monthly/Annual Reports",
      "Leave Management",
    ],
    architecture:
      "Lightweight web application optimized for quick data entry on tablets and phones. The notification system uses automated messaging to reach parents instantly.",
    technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
    challenges: [
      "Ensuring reliable notification delivery",
      "Optimizing for quick attendance entry on mobile devices",
      "Building comprehensive attendance analytics",
    ],
    outcome:
      "Schools can track attendance efficiently and parents stay informed about their children's attendance in real-time.",
    color: "#f59e0b",
  },
  {
    id: "enterprise-ai-platform",
    title: "Enterprise AI Platform",
    category: "AI",
    shortDescription:
      "Secure document search and AI-powered question answering.",
    overview:
      "An enterprise-grade AI platform that enables organizations to search through their document repositories using natural language queries and get intelligent, contextual answers.",
    problem:
      "Organizations accumulate vast amounts of documents and knowledge that becomes difficult to search and utilize effectively. Traditional search provides keyword matches, not answers.",
    solution:
      "We built an AI-powered platform using RAG (Retrieval-Augmented Generation) technology that understands document content and provides intelligent answers to user queries, complete with source citations.",
    features: [
      "Natural Language Document Search",
      "AI-Powered Question Answering",
      "Source Citations",
      "Document Upload & Processing",
      "Secure Access Control",
      "Conversation History",
      "Admin Dashboard",
      "API Access",
    ],
    architecture:
      "The platform uses vector databases for efficient semantic search, combined with large language models for generating accurate, contextual answers. Documents are processed and embedded during upload.",
    technologies: ["Python", "React", "OpenAI", "Vector DB", "Node.js"],
    challenges: [
      "Ensuring answer accuracy and relevance",
      "Processing large document sets efficiently",
      "Maintaining document security and access control",
    ],
    outcome:
      "Organizations can unlock the knowledge in their documents, enabling faster decision-making and reducing time spent searching for information.",
    color: "#ec4899",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business problem.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define features, architecture and roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive UI/UX.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop the web, mobile and backend systems.",
  },
  {
    number: "05",
    title: "Test",
    description: "Perform quality, security and performance testing.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deploy and provide ongoing support.",
  },
];

export const whyDmanbray = [
  {
    title: "Business First",
    description:
      "We focus on solving the actual problem, not just writing code.",
    icon: "🎯",
  },
  {
    title: "Modern Technology",
    description: "We use modern and scalable technologies.",
    icon: "⚡",
  },
  {
    title: "Scalable Architecture",
    description: "Products are designed with future growth in mind.",
    icon: "📈",
  },
  {
    title: "Clean User Experience",
    description: "Technology should be powerful and easy to use.",
    icon: "✨",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We can continue supporting and improving products after launch.",
    icon: "🤝",
  },
];

export const projectTypes = [
  "Web Application",
  "Android Application",
  "Custom Software",
  "AI Solution",
  "SaaS Product",
  "API / Backend",
  "Other",
];

export const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000+",
  "Let's Discuss",
];

export const founders = [
  {
    id: "founder-1",
    name: "Avula Dharaneeswar Reddy",
    role: "Co-Founder & CEO",
    initials: "AD",
    social: {
      linkedin: "https://www.linkedin.com/in/dharaneeswar-reddy-avula-6600912aa",
      twitter: "https://x.com/Dharaneeswar_",
      instagram: "https://www.instagram.com/dharaneeswar_reddy_avula797/",
    },
  },
  {
    id: "founder-2",
    name: "Amireddy Rakesh Reddy",
    role: "Co-Founder & CTO",
    initials: "AR",
    social: {
      linkedin: "https://www.linkedin.com/in/amireddy-rakesh-reddy-13540b279/",
      twitter: "https://x.com/RakeyRakesh8",
      instagram: "https://www.instagram.com/amireddy__rakey_/",
    },
  },
  {
    id: "founder-3",
    name: "Yenumula Narshimha Reddy",
    role: "Co-Founder & COO",
    initials: "YN",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://x.com",
      instagram: "https://www.instagram.com",
    },
  },
];
