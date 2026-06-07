import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  // Determinar si estamos en la página de inicio
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Aplicaciones', path: '/aplicaciones' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Preguntas frecuentes', path: '/preguntas-frecuentes' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Determinar si el header debe tener fondo blanco
  const hasWhiteBg = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasWhiteBg ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            {logoError ? (
              <span
                className={`text-2xl font-bold ${hasWhiteBg ? 'text-red-700' : 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]'}`}
              >
                Las cocineras
              </span>
            ) : (
              <img
                src="https://storage.readdy-site.link/project_files/1a0eebaf-97a2-4ed9-bcce-b7b4db70fd73/69839fad-30ac-4be9-b51c-0e0d0cd37c3a_logo_cocineras.svg?v=9116e715bdda766507c850225f6f01c8"
                alt="Las cocineras"
                className={`h-28 w-auto ${hasWhiteBg ? '' : 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]'}`}
                onError={() => setLogoError(true)}
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive(item.path)
                    ? 'bg-red-600 text-white'
                    : hasWhiteBg
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contacto"
            className="hidden lg:inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            <span>Solicitar cotización</span>
            <i className="ri-arrow-right-line"></i>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
              hasWhiteBg ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                  isActive(item.path)
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-red-700 hover:to-red-900 transition-all shadow-lg whitespace-nowrap cursor-pointer"
            >
              Solicitar cotización
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
