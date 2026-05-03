export default function Process() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Selección de la madera',
      description: 'Elegimos cuidadosamente madera de pino de primera calidad, verificando que cumpla con nuestros estándares de resistencia y pureza.',
      icon: 'ri-tree-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 2,
      number: '02',
      title: 'Corte y fabricación',
      description: 'Utilizamos maquinaria especializada para cortar la madera con precisión, asegurando medidas exactas y uniformidad en cada pieza.',
      icon: 'ri-scissors-cut-line',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 3,
      number: '03',
      title: 'Lijado y control de calidad',
      description: 'Cada producto pasa por un proceso de lijado para eliminar astillas y garantizar una superficie perfectamente lisa y segura.',
      icon: 'ri-checkbox-circle-line',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 4,
      number: '04',
      title: 'Empaque higiénico',
      description: 'Empacamos los productos en ambientes controlados, asegurando la máxima higiene y protección hasta que lleguen a tus manos.',
      icon: 'ri-box-3-line',
      color: 'from-red-600 to-red-800'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Calidad garantizada',
      description: 'Productos certificados',
      icon: 'ri-award-line'
    },
    {
      id: 2,
      title: 'Apto para alimentos',
      description: 'Contacto seguro',
      icon: 'ri-restaurant-2-line'
    },
    {
      id: 3,
      title: 'Higiene certificada',
      description: 'Procesos controlados',
      icon: 'ri-shield-check-line'
    },
    {
      id: 4,
      title: '100% Natural',
      description: 'Madera de pino pura',
      icon: 'ri-leaf-line'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
            <i className="ri-settings-3-line text-red-600"></i>
            <span className="text-sm font-semibold text-red-800">Proceso</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nuestro proceso de fabricación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada producto pasa por un riguroso proceso que garantiza la máxima calidad e higiene
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-red-300 to-red-200 -z-10"></div>
              )}

              {/* Step Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                {/* Step Number */}
                <div className="text-6xl font-bold text-red-100 mb-4 group-hover:text-red-200 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <i className={`${step.icon} text-3xl text-white`}></i>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Estándares de calidad y seguridad
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cumplimos con las normas más estrictas de seguridad alimentaria e higiene
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <i className={`${cert.icon} text-3xl text-white`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <i className="ri-shield-check-line text-3xl text-red-400 flex-shrink-0 mt-1"></i>
                <div>
                  <h4 className="text-white font-semibold mb-2">Seguridad alimentaria</h4>
                  <p className="text-gray-300 text-sm">Todos nuestros productos son aptos para contacto directo con alimentos, cumpliendo con las normativas sanitarias vigentes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <i className="ri-microscope-line text-3xl text-red-400 flex-shrink-0 mt-1"></i>
                <div>
                  <h4 className="text-white font-semibold mb-2">Control de calidad</h4>
                  <p className="text-gray-300 text-sm">Cada lote pasa por rigurosas inspecciones para garantizar que no haya astillas, defectos o impurezas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <i className="ri-recycle-line text-3xl text-red-400 flex-shrink-0 mt-1"></i>
                <div>
                  <h4 className="text-white font-semibold mb-2">Responsabilidad ambiental</h4>
                  <p className="text-gray-300 text-sm">Utilizamos madera de fuentes responsables y nuestros productos son 100% biodegradables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
