export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  link?: string;
  github?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SojuAI",
    description: "SojuAI is a AI chatbot that can help you with your daily tasks.",
    thumbnail: "/images/Soju1.png",
    tags: ["Next.js", "API", "Tailwind"],
    link: "https://juju-tau.vercel.app/",
    github: "https://github.com/penrat/juju.git",
  },
  {
    id: 2,
    title: "Happy Birthday",
    description: "Happy Birthday is a website that celebrates the birthday of a person.",
    thumbnail: "/images/Cake.png",
    tags: ["Tailwind","Animate"],
    link: "https://1-clickforcake.vercel.app/"
  },
  {
    id: 3,
    title: "Mobile Website REG Maejo University",
    description: "Mobile Website REG Maejo University is a website designed for the Maejo University REG department.",
    thumbnail: "/images/Reg.png",
    tags: ["Tailwind"],
    link: "https://term1-3zei.vercel.app/",
  },
  {
    id: 4,
    title: "BMI Calculator",
    description: "BMI Calculator is a website that calculates the body mass index of a person.",
    thumbnail: "/images/BMI.png",
    tags: ["Tailwind","required"],
    link: "https://bmi-calculator.vercel.app/",
  },
  {
    id: 5,
    title: "Shopping Website",
    description: "Shopping Website is a website that sells products.",
    thumbnail: "/images/Shop30.png",
    tags: ["Tailwind","required"],
    link: "https://shoppee-ashy.vercel.app/",
  },
  {
    id: 6,
    title: "To Do List",
    description: "To Do List is a website that helps you manage your tasks.",
    thumbnail: "/images/Todo.png",
    tags: ["Tailwind","required"],
    link: "https://todo-sepia-mu.vercel.app/",
  },
];
