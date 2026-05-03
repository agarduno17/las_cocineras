import { useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: '¿Venden al mayoreo?',
      answer: 'Sí, nos especializamos en venta al mayoreo para negocios. Ofrecemos precios competitivos y descuentos por volumen. Contáctanos para conocer nuestras opciones de compra al mayoreo y obtener una cotización personalizada según tus necesidades.'
    },
    {
      id: 2,
      question: '¿Hay medidas personalizadas disponibles?',
      answer: 'Absolutamente. Entendemos que cada negocio tiene necesidades específicas. Podemos fabricar palillos y productos de madera con las medidas exactas que requieras. Solo necesitamos conocer tus especificaciones y el volumen de pedido para preparar una cotización.'
    },
    {
      id: 3,
      question: '¿Hacen envíos a toda la república?',
      answer: 'Sí, realizamos envíos a toda la República Mexicana. Trabajamos con transportistas confiables para garantizar que tus productos lleguen en perfectas condiciones y en los tiempos acordados. Los costos de envío varían según la ubicación y el volumen del pedido.'
    },
    {
      id: 4,
      question: '¿Cuál es el tiempo de entrega aproximado?',
      answer: 'El tiempo de entrega depende del volumen del pedido y tu ubicación. Para pedidos estándar, generalmente entregamos en 5-10 días hábiles. Para pedidos personalizados o de gran volumen, el tiempo puede variar. Te proporcionaremos un tiempo estimado específico al momento de tu cotización.'
    },
    {
      id: 5,
      question: '¿Los palillos son aptos para uso con alimentos calientes?',
      answer: 'Sí, nuestros palillos de madera de pino son perfectamente aptos para uso con alimentos calientes. La madera de pino es resistente al calor y no libera sustancias tóxicas. Son ideales para brochetas asadas, elotes calientes, y cualquier alimento que requiera contacto con temperaturas elevadas.'
    },
    {
      id: 6,
      question: '¿Los abatelenguas son de grado médico?',
      answer: 'Sí, nuestros abatelenguas cumplen con los estándares de grado médico. Son fabricados con madera de pino de primera calidad, perfectamente lijados para evitar astillas, y empacados en condiciones higiénicas controladas. Son aptos para uso en consultorios, clínicas y hospitales.'
    },
    {
      id: 7,
      question: '¿Cómo puedo solicitar una cotización?',
      answer: 'Solicitar una cotización es muy fácil. Puedes llenar el formulario de contacto en esta página, enviarnos un correo electrónico, o llamarnos directamente. Necesitaremos conocer qué productos te interesan, las cantidades aproximadas, y si requieres medidas personalizadas. Te responderemos en menos de 24 horas con una cotización detallada.'
    },
    {
      id: 8,
      question: '¿Ofrecen muestras de productos?',
      answer: 'Sí, podemos proporcionar muestras de nuestros productos para que evalúes la calidad antes de hacer un pedido grande. Contáctanos para coordinar el envío de muestras. En algunos casos, las muestras pueden tener un costo que se reembolsa con tu primer pedido.'
    },
    {
      id: 9,
      question: '¿Qué formas de pago aceptan?',
      answer: 'Aceptamos diversas formas de pago para tu comodidad: transferencia bancaria, depósito en efectivo, y pago con tarjeta. Para clientes frecuentes, también ofrecemos opciones de crédito. Los detalles específicos se acordarán al momento de confirmar tu pedido.'
    },
    {
      id: 10,
      question: '¿Los productos son biodegradables?',
      answer: 'Sí, todos nuestros productos son 100% biodegradables y ecológicos. Al estar fabricados con madera de pino natural, sin químicos ni aditivos, se descomponen naturalmente sin dañar el medio ambiente. Son una excelente alternativa sustentable a los productos plásticos.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
                <i className="ri-question-line text-red-600"></i>
                <span className="text-sm font-semibold text-red-800">FAQ</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Preguntas frecuentes
              </h1>
              <p className="text-xl text-gray-600">
                Encuentra respuestas a las dudas más comunes sobre nuestros productos y servicios
              </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? 'bg-gradient-to-br from-red-600 to-red-800' : 'bg-gray-100'}`}>
                        <i className={`ri-question-line text-xl ${openIndex === index ? 'text-white' : 'text-gray-600'}`}></i>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openIndex === index ? 'bg-red-100 rotate-180' : 'bg-gray-100'}`}>
                      <i className={`ri-arrow-down-s-line text-xl ${openIndex === index ? 'text-red-600' : 'text-gray-600'}`}></i>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                <i className="ri-customer-service-2-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿Tienes más preguntas?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Nuestro equipo está listo para ayudarte. Contáctanos y resolveremos todas tus dudas
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg whitespace-nowrap cursor-pointer"
              >
                <span>Contactar ahora</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
