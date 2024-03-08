// NAVIGATION
export const NAV_LINKS = [
  { href: "/nosotros", key: "sobre_nosotros", label: "Sobre nosotros" },
  { href: "/noticias", key: "noticias", label: "Noticias " },
  { href: "/contacto", key: "contacto", label: "Contacto" },
];

// Remix icons

import {
  RiFileList3Line,
  RiHandHeartLine,
  RiShoppingBasketLine
} from "react-icons/ri";

import { TbShoppingCartHeart } from "react-icons/tb";

export const NAV_LINKS_PRIVATE = [
  { href: "/donations", key: "donations", label: "Donaciones", icon: RiHandHeartLine },
  { href: "/products", key: "products", label: "Productos", icon: RiShoppingBasketLine },
  { href: "/donations/list", key: "list", label: "Aportes", icon: RiFileList3Line }
];

// CAMP SECTION
export const PEOPLE_URL = ["/person-1.png", "/person-2.png", "/person-3.png", "/person-4.png"];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Misión y Visión",
    icon: "graph-up-arrow.svg",
    variant: "green",
    description:
      "Nuestra misión es proporcionar ayuda humanitaria rápida y efectiva a las comunidades afectadas por desastres naturales en todo el mundo. Nos esforzamos por ofrecer apoyo inmediato y sostenible para ayudar a reconstruir vidas y comunidades después de tragedias naturales",
  },
  {
    title: "Historia y Antecedentes",
    icon: "/clock-history.svg",
    variant: "green",
    description:
      "Smart Help nació en 2024 con un propósito claro: brindar ayuda inmediata a comunidades afectadas por desastres naturales. Desde entonces, hemos estado entregando suministros de emergencia, proporcionando refugio temporal y ayudando en la reconstrucción de comunidades.  ",
  },
  {
    title: "Equipo",
    icon: "/people.svg",
    variant: "green",
    description:
      "El equipo de Smart Help está compuesto por profesionales dedicados con experiencia en diversas áreas, incluyendo ayuda humanitaria, tecnología, gestión de proyectos y comunicación.",
  },
  {
    title: "Valores y Compromisos",
    icon: "/hand-thumbs-up.svg",
    variant: "orange",
    description:
      "En Smart Help, nos guiamos por valores fundamentales de integridad, transparencia, solidaridad y respeto. Estamos comprometidos a ser transparentes en todas nuestras operaciones, a utilizar eficazmente los recursos donados",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  { title: "Politica de privacidad", url: "/politica" },
  { title: "Contacto", url: "/contacto" },
];
