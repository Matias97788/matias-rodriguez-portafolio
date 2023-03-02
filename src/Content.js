// import images
import Hero_person from "./assets/images/Hero/persona.png";

import shopifylogo from "./assets/images/Skills/shopifylogo.png";
import mongodblogo from "./assets/images/Skills/mongodblogo.png";
import zappierlogo from "./assets/images/Skills/zappierlogo.png";
import logowordpress from "./assets/images/Skills/logowordpress.png";
import reactjs from "./assets/images/Skills/react.png";
import woocommercelogo from "./assets/images/Skills/woocommercelogo.png";
import python from "./assets/images/Skills/python.png";
import klaviyo from "./assets/images/Skills/klaviyo.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/asesoria.png";

import email from "./assets/images/Services/email.png"
import personaProjecto from "./assets/images/Services/personaproyectos.png"


//import project1 from "./assets/images/projects/img1.png";
//import project2 from "./assets/images/projects/img2.png";
//import project3 from "./assets/images/projects/img3.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Desarrollo Full Stack",
    firstName: "MATIAS",
    LastName: "RODRIGUEZ",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Años de experiencia en desarrollo web",
      },
      {
        count: "20+",
        text: "Proyectos trabajados en mi carrera",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "MIS HABILIDADES PRINCIPALES",
    skills_content: [
      {
        name: "Shopify",
        para: "Implementación de tiendas online",
        logo: shopifylogo,
      },
      {
        name: "WordPress",
        para: "Desarrollo de sitio webs",
        logo: logowordpress,
      },
      {
        name: "Woocommerce",
        para: "Creación de tiendas online",
        logo: woocommercelogo,
      },
      {
        name: "React js",
        para: "Desarollo web a medida",
        logo: reactjs,
      },
      {
        name: "Zappier",
        para: "Integración de app con zappier",
        logo: zappierlogo,
      },
      {
        name: "Mongodb",
        para: "Manejo de base datos con mongodb",
        logo: mongodblogo,
      },
      {
        name: "klaviyo",
        para: "Implementación de campañas de email marketing",
        logo: klaviyo,
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Servicios",
    subtitle: "LO QUE OFREZCO",
    service_content: [
      {
        title: "Desarrollo de sitio webs",
        para: "Obtén una presencia en línea profesional y efectiva con nuestro servicio de desarrollo web. Me encargo de crear sitios web personalizados y optimizados para dispositivos móviles que reflejen la identidad de tu marca y te ayuden a destacar en el mercado.",
        logo: services_logo1,
      },
      {
        title: "Email marketing",
        para: "Impulsa tus ventas y conecta con tus clientes de manera efectiva a través de nuestro servicio de email marketing. Envía correos personalizados y relevantes que generen interacción y aumenten tu tasa de conversión.",
        logo: email,
      },
      {
        title: "Asesoría en tecnologías",
        para: "Orientación y asistencia técnica en la selección, implementación y uso de diferentes tecnologías y herramientas de software",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: personaProjecto,
    project_content: [
      {
        title: "Gym Website",
        //image: project1,
      },
      {
        title: "Social Media web",
        //image: project2,
      },
      {
        title: "Creative Website",
        //image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Contáctame",
    subtitle: "PARA TUS PROYECTOS",
    image1: Hero_person,
    image2: Hero_person,
    para: "Si está buscando un profesional confiable y experimentado, entonces estoy seguro de que puedo ofrecerte un servicio excepcional. Mi experiencia y habilidades en el desarrollo web me permiten diseñar y construir sitios web y aplicaciones en línea que no solo se ven atractivos, sino que también son altamente funcionales y escalables.",
    btnText: "Contratame",
  },
  Contact: {
    title: "Contáctame",
    social_media: [
      {
        text: "matiasrodriguezsandoval@outlook.com",
        icon: GrMail,
        link: "mailto:matiasrodriguezsandoval@outlook.com",
      },
      {
        text: "+56979428207",
        icon: MdCall,
        link: "https://wa.me/56979428207",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
