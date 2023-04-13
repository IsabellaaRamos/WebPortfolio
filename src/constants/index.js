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
    title: "Backend Developer",
    icon: backend,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
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
];

const testimonials = [
  {
    testimonial: 
      "Sass (Syntactically Awesome Style Sheets) é uma extensão do CSS que permite escrever estilos de forma mais fácil e eficiente, com recursos como variáveis, aninhamento, mixins, herança e outras funcionalidades que não são encontradas no CSS puro.",
    name: "Sass",
    icon: sass,
  },
  {
    testimonial:
      "Tailwind CSS é uma biblioteca de classes CSS pré-definidas que facilita a criação de interfaces de usuário responsivas e personalizáveis. Diferente de outras bibliotecas CSS, como o Bootstrap, que oferecem componentes de interface de usuário pré-fabricados, o Tailwind CSS oferece classes que podem ser aplicadas diretamente aos elementos HTML para estilizá-los.",
    name: "Chris Brown",
    icon: tailwind,
  },
  {
    testimonial:
      "Three.js é uma biblioteca JavaScript de código aberto para criar e renderizar gráficos 3D interativos em navegadores web. A biblioteca é construída em cima do WebGL, que é uma API gráfica para navegadores que permite a criação de gráficos 3D acelerados por hardware.",
    name: "Lisa Wang",
    icon: threejs,
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
];

export { services, technologies, experiences, testimonials, projects };
