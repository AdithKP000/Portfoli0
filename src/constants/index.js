import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  c,
  bootstrap,
  nodejs,
  mongodb,
  git,
  aithon,
  freelancer,
  shopify,
  sas,
  carrent,
  jobit,
  tripguide,
  threejs,
  ieee,
  IEEE,
  ieee_pho,
  lenienttree,
  PHO,
  Sharetaste,
  Medhouse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ThreeJs Developer ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "C",
    icon: c,
  },
];

const experiences = [
  {
    title: "Cheif Software officer ",
    company_name: "Lenient Tree",
    icon: lenienttree,
    iconBg: "#383E56",
    date: "February 2025 - ",
    points: [
      "Cheif Software Officer at Leninte tree",
      "Three JS Lead At Lenient Tree"
      
    ],
  },
  {
    title: "Webmaster IEEE PHO Kerala Chapter",
    company_name: "IEEE Photonics Society Kerala Chapter",
    icon:ieee_pho,
    iconBg: "#383E56",
    date: "May 2024- January 2025",
    points: [
      "Developed websites for IEEE Photonics Society Kerala Chapter",
      "Developed a wordpress Website and hosted  it on Cpannel for IEEE PHO Kerala Chapter"
      
    ],
  },
  {
    title: "Webmaster IEEE SB CEK",
    company_name: "College of engineering Karunagapally",
    icon:ieee,
    iconBg: "#383E56",
    date: "May 2023- February 2025",
    points: [
      "Developed and managed websites for IEEE Stundent Branch College of Engineering Karunagappally",
      
    ],
  },
  {
    title: "Aithon 2022 Winner",
    company_name: "College of engineering Karunagapally",
    icon: aithon,
    iconBg: "#383E56",
    date: "Novermber 25-27",
    points: [
      "An Artifical Intelligence based hackathon Conducted at the College of Engineering Karunagappaly.",
      "Developing an Artificial intelligence within 24 hours that is capable of recognising human emotions based on photos uploaded .",
      "Implementing different tools and languages like tensorflow pandas and teachable machine to develop the base and providing separate testing and training data to get working AI."
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "GBHSS Cherukunnu",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2018- Februaury 2020",
    points: [
      "Developing and maintaining web applications of my School to promote publicity and increase demand of our School.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Desigining Champion",
    company_name: "Shashthrolsavam",
    icon: sas,
    iconBg: "#E6DEDD",
    date: "November 10 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adith proved me wrong.",
    name: "Joana Doe",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adith does.",
    name: "Jhon Doe",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Adith optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ni Hao",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Medhouse",
    description:" An online medical store providing a user-friendly platform for purchasing medicines and healthcare products. Features include secure transactions, timely delivery, and easy access to a wide range of pharmaceutical and wellness items. ",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.JS",
        color: "pink-text-gradient",
      },
    ],
    image: Medhouse,
    source_code_link: "https://medhouse.onrender.com/",
  },
  {
    name: "ShareTaste",
    description:" A full-stack web platform connecting food enthusiasts with chefs, home cooks, and recipe creators. Includes features like chef discovery, recipe management, and user reviews enhancing culinary collaboration and local community engagement ",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.JS",
        color: "pink-text-gradient",
      },
    ],
    image: Sharetaste,
    source_code_link: "https://client-lqzc.onrender.com/",
  },
  {
    name: "IEEE PHO Kerala Chapter",
    description:
      " Designed and developed the official homepage using WordPress. The site features an intuitive layout, responsive design, and easy navigation to highlight events, publications, and chapter initiative ",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "IEEE",
        color: "green-text-gradient",
      },
      {
        name: "Cpannel",
        color: "pink-text-gradient",
      },
    ],
    image: PHO,
    source_code_link: "https://photonics.ieeekerala.org/",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };