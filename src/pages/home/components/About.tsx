export default function About() {
  const values = [
    {
      id: 1,
      title: 'Calidad',
      description: 'Seleccionamos la mejor madera de pino y aplicamos rigurosos controles de calidad en cada producto.',
      icon: 'ri-medal-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 2,
      title: 'Puntualidad',
      description: 'Cumplimos con los tiempos de entrega acordados para que tu negocio nunca se detenga.',
      icon: 'ri-time-line',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 3,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas con nuestros clientes basadas en la transparencia y el compromiso.',
      icon: 'ri-shield-check-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 4,
      title: 'Atención personalizada',
      description: 'Cada cliente es único. Ofrecemos asesoría y soluciones adaptadas a las necesidades específicas de tu negocio.',
      icon: 'ri-customer-service-2-line',
      color: 'from-red-600 to-red-800'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
            <i className="ri-team-line text-red-600"></i>
            <span className="text-sm font-semibold text-red-800">Nosotros</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Quiénes somos
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20wooden%20products%20manufacturing%20facility%20with%20pine%20wood%20sticks%20and%20toothpicks%20production%2C%20clean%20modern%20factory%20environment%2C%20workers%20in%20white%20uniforms%20ensuring%20quality%20control%2C%20bright%20industrial%20lighting%2C%20professional%20business%20photography%2C%20organized%20workspace%20with%20wooden%20products&width=800&height=600&seq=about-001&orientation=landscape"
                alt="Las cocineras"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl -z-10 opacity-20"></div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Las cocineras: Tu aliado en productos de madera de pino
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Somos una empresa mexicana dedicada a la <strong>fabricación y distribución de productos de madera de pino</strong> de la más alta calidad. Con años de experiencia en el mercado, nos hemos consolidado como proveedores confiables para negocios de alimentos y el sector médico.
              </p>
              <p>
                Nuestro compromiso es ofrecer productos que cumplan con los más altos estándares de <strong>calidad, higiene y seguridad</strong>, garantizando que cada palillo, cuchara o abatelenguas que sale de nuestra planta sea perfecto para su uso.
              </p>
              <p>
                En <strong>Las cocineras</strong> entendemos las necesidades de tu negocio. Por eso, nos enfocamos en tres pilares fundamentales: <strong>calidad excepcional</strong>, <strong>entregas puntuales</strong> y <strong>atención personalizada</strong>.
              </p>
              <p>
                Ya sea que tengas un restaurante, food truck, heladería, consultorio médico o cualquier negocio que requiera productos de madera, estamos aquí para apoyarte con soluciones profesionales y confiables.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Madera natural</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Atención al cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-1">+500</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 sm:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para trabajar con nosotros?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a cientos de negocios que confían en la calidad y servicio de Las cocineras
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center space-x-2"
          >
            <span>Solicitar cotización</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
