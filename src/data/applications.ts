// Mapeo de aplicaciones -> productos relevantes.
// Los productIds corresponden a los ids del arreglo `products` en
// src/pages/products/page.tsx.
//
// Pendiente del cliente: "Cochauata" (en heladerias-paleterias) no
// existe como producto en el catalogo actual; se omite hasta que el
// cliente confirme o envie el producto.

export interface Application {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  slug: string;
  // IDs de productos a mostrar cuando se filtra por esta aplicacion.
  // Si es undefined, el enlace lleva al catalogo completo sin filtro.
  productIds?: number[];
}

export const applications: Application[] = [
  {
    id: 1,
    title: 'Restaurantes y cocinas',
    description: 'Palillos para botanas, brochetas y presentaciones elegantes en restaurantes de todo tipo.',
    icon: 'ri-restaurant-line',
    color: 'from-red-500 to-red-700',
    slug: 'restaurantes',
    // Brochetas (15,20,25,30), Botanero, Elotero
    productIds: [1, 2, 10]
  },
  {
    id: 2,
    title: 'Food trucks',
    description: 'Productos resistentes y prácticos para negocios móviles de comida callejera.',
    icon: 'ri-truck-line',
    color: 'from-red-600 to-red-800',
    slug: 'food-trucks',
    // Brochetas, Botaneros, Kikoletas (troqueladas + aserrada), Elotero
    productIds: [1, 2, 7, 11, 10]
  },
  {
    id: 3,
    title: 'Puestos de antojitos',
    description: 'Palillos para elotes, esquites, brochetas y todo tipo de antojitos mexicanos.',
    icon: 'ri-store-2-line',
    color: 'from-red-500 to-red-700',
    slug: 'antojitos',
    // Brochetes, Cuchara, Abatelengua, Botanero, Elotero, Cuadrado
    productIds: [1, 9, 5, 2, 10, 6]
  },
  {
    id: 4,
    title: 'Heladerías y paleterías',
    description: 'Palitos para paletas, cucharas para helados y productos para postres congelados.',
    icon: 'ri-contrast-drop-2-line',
    color: 'from-red-600 to-red-800',
    slug: 'heladerias-paleterias',
    // Palillo redondo delgado (7,8,11), Abatelengua, Durango,
    // Kikoleta aserrada + troquelada, Cuadrado.
    // Cochauata pendiente (no existe en catalogo).
    productIds: [4, 5, 8, 7, 11, 6]
  },
  {
    id: 5,
    title: 'Pastelerías y cafeterías',
    description: 'Palillos decorativos, cucharas de madera y productos para repostería.',
    icon: 'ri-cake-3-line',
    color: 'from-red-500 to-red-700',
    slug: 'pastelerias-cafeterias'
    // Sin mapeo especifico: muestra catalogo completo.
  },
  {
    id: 7,
    title: 'Organizadores de eventos',
    description: 'Productos para banquetes, bodas, fiestas y eventos corporativos.',
    icon: 'ri-calendar-event-line',
    color: 'from-red-500 to-red-700',
    slug: 'eventos',
    // Brocheta, Abatelengua, Botanero, Palillo redondo (delgado + grueso)
    productIds: [1, 5, 2, 4, 3]
  },
  {
    id: 8,
    title: 'Hoteles y catering',
    description: 'Soluciones profesionales para servicios de alimentos en hoteles y catering.',
    icon: 'ri-hotel-line',
    color: 'from-red-600 to-red-800',
    slug: 'hoteles-catering'
    // Sin mapeo especifico: muestra catalogo completo.
  }
];

// Helper: aplica el filtro de aplicacion a un arreglo de productos.
// Devuelve los productos en el orden definido por productIds.
export function filterProductsByApplication<T extends { id: number }>(
  products: T[],
  slug: string | null
): { filtered: T[]; application: Application | undefined } {
  const application = applications.find((app) => app.slug === slug);
  if (!application || !application.productIds || application.productIds.length === 0) {
    return { filtered: products, application };
  }
  const byId = new Map(products.map((p) => [p.id, p]));
  const filtered = application.productIds
    .map((id) => byId.get(id))
    .filter((p): p is T => Boolean(p));
  return { filtered, application };
}
