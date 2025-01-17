import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html_logo,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  iit_bhu,
  threejs,
  express,
  clogo,
  cplus_logo,
  c_plus_stl,
  dsa_logo,
  oops_logo,
  mern,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mern,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html_logo,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C",
    icon: clogo,
  },  
  {
    name: "C++",
    icon: cplus_logo,
  },
  {
    name: "C++ (STL)",
    icon: c_plus_stl,
  },
  {
    name: "DSA",
    icon: dsa_logo,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "OOPs",
    icon: oops_logo,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "IIT-BHU, Varanasi",
    icon: iit_bhu,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "I have completed my internship at IIT-BHU , under the guidance of Dr. A.R. Jack Fredo.",
      "I worked on ' Emotion detection using electrodermal activity signals and machine learning algorithms '.",
      "I was trained in pre-processing, feature extraction during the period. The dataset I worked on is CEAP-360* VR in which I had to discriminate different emotional states.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials };
