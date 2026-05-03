import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Artistic%20wooden%20pine%20toothpicks%20and%20wooden%20sticks%20arranged%20beautifully%20with%20fresh%20appetizers%20and%20street%20food%2C%20professional%20food%20photography%2C%20warm%20amber%20and%20golden%20tones%20creating%20strong%20contrast%20with%20text%2C%20soft%20bokeh%20background%2C%20elegant%20presentation%2C%20high%20quality%20commercial%20photography&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
          alt="Las cocineras - Palillos de madera"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <i className="ri-leaf-line text-white"></i>
          <span className="text-sm font-semibold text-white">100% Madera de pino natural</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Palillos de madera de pino<br />para alimentos y uso médico
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Fabricación y venta de palillos de calidad para botanas, elotes, helados, paletas, abatelenguas y más
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/productos"
            className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            <span>Ver productos</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-900 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            <span>Solicitar cotización</span>
            <i className="ri-send-plane-fill"></i>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="ri-shield-check-line text-3xl text-white"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Calidad garantizada</h3>
            <p className="text-white/80 text-sm">Productos certificados y seguros para contacto con alimentos</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="ri-truck-line text-3xl text-white"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Entregas puntuales</h3>
            <p className="text-white/80 text-sm">Cumplimos con los tiempos acordados en toda la república</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="ri-customer-service-2-line text-3xl text-white"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Atención personalizada</h3>
            <p className="text-white/80 text-sm">Asesoría experta para las necesidades de tu negocio</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white text-sm font-medium">Descubre más</span>
          <i className="ri-arrow-down-line text-2xl text-white"></i>
        </div>
      </div>
    </section>
  );
}
