import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ProductsPage = lazy(() => import('../pages/products/page'));
const ApplicationsPage = lazy(() => import('../pages/applications/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const FAQPage = lazy(() => import('../pages/faq/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/productos',
    element: <ProductsPage />
  },
  {
    path: '/aplicaciones',
    element: <ApplicationsPage />
  },
  {
    path: '/nosotros',
    element: <AboutPage />
  },
  {
    // La sección "Proceso" fue cancelada por el cliente; redirigimos a Inicio.
    path: '/proceso',
    element: <Navigate to="/" replace />
  },
  {
    path: '/preguntas-frecuentes',
    element: <FAQPage />
  },
  {
    path: '/contacto',
    element: <ContactPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
