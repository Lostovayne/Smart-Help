export interface CategoryData {
  id: number;
  name: Category;
  icon: string;
}

export enum Category {
  BEBIDA = "Bebidas",
  ALIMENTOS_SECOS = "Arroz, Granos y Pastas",
  ALIMENTOS_CONSERVADOS = "Conservas, Enlatados y Condimentos",
  PRODUCTOS_HIGIENE = "Cuidado Personal",
  PRODUCTOS_LIMPIEZA = "Aseo del Hogar",
  ALIMENTOS_NECESIDAD = "Despensa Primordial",
  ALIMENTOS_MASCOTAS = "Mascotas",
  LACTEOS = "Leche y Huevos",
  ALLITEMS ="Todos los productos"
}

// Iconos para el Sidebar

export const CategoryDat: CategoryData[] = [
  {
    id: 1,
    name: Category.ALLITEMS,
    icon: "/icons/allFilter.png",
  },
  {
    id: 2,
    name: Category.BEBIDA,
    icon: "/icons/bebidas.png",
  },
  {
    id: 3,
    name: Category.ALIMENTOS_SECOS,
    icon: "/icons/alimentos-secos.png",
  },
  {
    id: 4,
    name: Category.ALIMENTOS_CONSERVADOS,
    icon: "/icons/alimentos-conservados.png",
  },
  {
    id: 5,
    name: Category.PRODUCTOS_HIGIENE,
    icon: "/icons/higiene.png",
  },
  {
    id: 6,
    name: Category.PRODUCTOS_LIMPIEZA,
    icon: "/icons/limpieza.png",
  },
  {
    id: 7,
    name: Category.ALIMENTOS_NECESIDAD,
    icon: "/icons/necesidad.png",
  },
  {
    id: 8,
    name: Category.LACTEOS,
    icon: "/icons/lacteos.png",
  },
  {
    id: 9,
    name: Category.ALIMENTOS_MASCOTAS,
    icon: "/icons/mascotas.png",
  },
];
