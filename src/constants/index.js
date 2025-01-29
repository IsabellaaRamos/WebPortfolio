import { color } from "framer-motion";
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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sass,
  portfolio,
  projeto,
  myst,
  Ancient,
  Antolin,
  ciber,
  site,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Ciber Security",
    icon: ciber,
  },
  {
    title: "Front-end Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "E-commerce",
    company_name: "Dona de uma Página de Vendas",
    icon: html,
    iconBg: "#383E56",
    date: "Nov 2022",
    points: [
      "Esse projeto foi desenvolvido com as seguintes tecnologias",
      "Html e Css",
      "JavaScript",
      
    ],
  },
  {
    title: "Netflix",
    company_name: "API",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Nov 2022",
    points: [
      "Esse projeto foi desenvolvido com as seguintes tecnologias",
      "Html e Css",
      "JavaScript",
      "React",
    ],
  },
  {
    title: "Portfólio",
    company_name: "Portfólio",
    icon: sass,
    iconBg: "#383E56",
    date: "- Nov 2022",
    points: [
      "Esse projeto foi desenvolvido com as seguintes tecnologias",
      "Html e Css",
      "JavaScript",
      "React e Sass",
    ],
  },
  {
    title: "Nlw-Habits",
    company_name: "Habits",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Esse projeto foi desenvolvido com as seguintes tecnologias",
      "Html e Css",
      "JavaScript",
      "Figma",
    ],
  },
  {
    title: "Antolin",
    company_name: "business",
    icon: Antolin,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Out 2024",
    points: [
      "Estagiária de Suporte de TI.",
      "Suporte técnico aos usuários administrativos e de produção, com domínio em Windows, Linux eMacOS, além da criação de usuários e resolução de problemas em ambiente corporativo.",
    ],
  },
];

const testimonials = [
  {
    testimonial: 
      "Desenvolvimento Web: HTML, CSS, JavaScript, criação de sites com foco em responsividade e usabilidade.  Front-End Básico: Interfaces amigáveis e otimizadas para melhorar a experiência do usuário, Experiência com interface em React.",
     name: "Html e Css",
    icon: web, 
  },
  {
    testimonial:
      "UI/UX Design: Experiência com Figma para prototipagem e design de interfaces amigáveis e eficientes.",
    name: "Figama",
    icon: figma,
  },
  {
    testimonial:
      "Automação e Programação: Power Automate, soluções de automação para TI. Sistemas Operacionais: Windows, Linux, MacOS",
    name: "TI",
    icon: Antolin,
  },
];

const projects = [
  {
    name: "Game-Start",
    description:
      "Programa Criado em Html, Css e JavaScript, seleção de personagens. Efeito Criado usando a Biblioteca Vanilla-tilt.js.",
    tags: [
      {
        name: "Html e Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla-titj.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://isabellaaramos.github.io/Game-Start/",
  },
  {
    name: "Music",
    description:
      "Esse projeto foi desenvolvido com as seguintes tecnologias",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
     
    ],
    image: jobit,
    source_code_link: "https://isabellaaramos.github.io/Music/",
  },
  {
    name: "projeto-Clima",
    description:
      " projeto consiste em uma página web simples criada usando as linguagens HTML e CSS. A página exibe o clima atual, o tempo e o dia da semana para uma localização específica. O layout é composto por uma imagem de fundo representando um céu com nuvens e uma seção principal no centro da página que exibe as informações sobre o clima e o tempo. Essa seção é dividida em duas colunas...",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/IsabellaaRamos/ProjetoClima",
  },
  {
    name: "Meu Primeio Portfólio",
    description:
      " Estudante de Engenharia da Computação, gosto de criar sites, e personalizá-los. Tenho conhecimento em front-end e atualmente estudo React.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "Sass",
      color: "pink-text-gradient",
    },
    ],
    image: portfolio,
    source_code_link: "https://isabellaramos.netlify.app/",
  },
  {
    name: "Dev-links",
    description:
      "Esse projeto tem como objetivo mostrar o DevLinks. DevLinks é um agregador de links responsivo e com troca de tema que você pode usar como cartão de visitas nas suas redes sociais 📱",
    tags: [
      {
        name: "Html e Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      
    ],
    image: projeto,
    source_code_link: "https://github.com/IsabellaaRamos/site-de-vendas?tab=readme-ov-file",
  },
  {
    name: "Pagina de Vendas",
    description:
      "Página de Vendas",
    tags: [
      {
        name: "Html e Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      
    ],
    image: myst,
    source_code_link: "https://github.com/IsabellaaRamos/Website",
  },
  {
    name: "Ancient Greece",
    description:
      "Pagina de livros Carregando...",
    tags: [
      {
        name: "Html e Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      
    ],
    image: Ancient,
    // source_code_link: "https://github.com/IsabellaaRamos/Website",
  },

  {
    name: "Software",
    description:
      "Site Carregando...",
    tags: [
      {
        name: "React e tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      
    ],
    image: site,
    // source_code_link: "https://github.com/IsabellaaRamos/Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
