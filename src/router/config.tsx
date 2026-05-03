import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ProductsPage = lazy(() => import('../pages/products/page'));
const ApplicationsPage = lazy(() => import('../pages/applications/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ProcessPage = lazy(() => import('../pages/process/page'));
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
    path: '/proceso',
    element: <ProcessPage />
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
