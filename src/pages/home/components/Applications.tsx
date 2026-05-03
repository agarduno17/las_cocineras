export default function Applications() {
  const applications = [
    {
      id: 1,
      title: 'Restaurantes y cocinas',
      description: 'Palillos para botanas, brochetas y presentaciones elegantes en restaurantes de todo tipo.',
      icon: 'ri-restaurant-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 2,
      title: 'Food trucks',
      description: 'Productos resistentes y prácticos para negocios móviles de comida callejera.',
      icon: 'ri-truck-line',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 3,
      title: 'Puestos de antojitos',
      description: 'Palillos para elotes, esquites, brochetas y todo tipo de antojitos mexicanos.',
      icon: 'ri-store-2-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 4,
      title: 'Heladerías y paleterías',
      description: 'Palitos para paletas, cucharas para helados y productos para postres congelados.',
      icon: 'ri-contrast-drop-2-line',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 5,
      title: 'Pastelerías y cafeterías',
      description: 'Palillos decorativos, cucharas de madera y productos para repostería.',
      icon: 'ri-cake-3-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 6,
      title: 'Clínicas y consultorios',
      description: 'Abatelenguas de grado médico para uso profesional en el sector salud.',
      icon: 'ri-hospital-line',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 7,
      title: 'Organizadores de eventos',
      description: 'Productos para banquetes, bodas, fiestas y eventos corporativos.',
      icon: 'ri-calendar-event-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 8,
      title: 'Hoteles y catering',
      description: 'Soluciones profesionales para servicios de alimentos en hoteles y catering.',
      icon: 'ri-hotel-line',
      color: 'from-red-600 to-red-800'
    }
  ];

  return (
    <section id="aplicaciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
            <i className="ri-apps-line text-red-600"></i>
            <span className="text-sm font-semibold text-red-800">Aplicaciones</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ¿Quién usa nuestros productos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros palillos de madera son la elección preferida de profesionales en diversos sectores
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <i className={`${app.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {app.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Use Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-800 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full mb-6 shadow-xl">
              <i className="ri-star-fill text-4xl text-white"></i>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Productos pensados para uso intensivo y profesional
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Diseñados para soportar las demandas de negocios que requieren calidad, higiene y confiabilidad en cada producto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <i className="ri-shield-check-line text-2xl text-red-400"></i>
                <div className="text-left">
                  <p className="text-white font-semibold">Calidad garantizada</p>
                  <p className="text-gray-300 text-sm">Productos certificados</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <i className="ri-time-line text-2xl text-red-400"></i>
                <div className="text-left">
                  <p className="text-white font-semibold">Entregas puntuales</p>
                  <p className="text-gray-300 text-sm">Cumplimiento asegurado</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <i className="ri-customer-service-2-line text-2xl text-red-400"></i>
                <div className="text-left">
                  <p className="text-white font-semibold">Atención personalizada</p>
                  <p className="text-gray-300 text-sm">Asesoría experta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
