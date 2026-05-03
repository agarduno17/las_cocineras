import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="https://storage.readdy-site.link/project_files/1a0eebaf-97a2-4ed9-bcce-b7b4db70fd73/69839fad-30ac-4be9-b51c-0e0d0cd37c3a_logo_cocineras.svg?v=9116e715bdda766507c850225f6f01c8"
                alt="Las cocineras"
                className="h-28 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fabricación y venta de palillos de madera de pino de alta calidad para alimentos y uso médico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/aplicaciones" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Aplicaciones
                </Link>
              </li>
              <li>
                <Link to="/proceso" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Proceso
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Productos</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Palillos para botanas</li>
              <li className="text-gray-400">Palillos para brochetas</li>
              <li className="text-gray-400">Palillos para elotes</li>
              <li className="text-gray-400">Cucharas de madera</li>
              <li className="text-gray-400">Palillos para paletas</li>
              <li className="text-gray-400">Abatelenguas médicos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-red-400 mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-gray-400">(55) 1234-5678</p>
                  <p className="text-gray-400">(55) 8765-4321</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-red-400 mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-gray-400">ventas@lascocineras.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-red-400 mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-gray-400">Ciudad de México</p>
                  <p className="text-gray-400">México</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Las cocineras. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
