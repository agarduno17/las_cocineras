import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function ContactPage() {
  const location = useLocation();
  const productOptions = [
    'Banderilla de madera de pino',
    'Botanero de madera de pino',
    'Palillo redondo grueso de madera de pino',
    'Palillo redondo delgado de madera de pino',
    'Abatelengua de madera de pino',
    'Cuadrado de madera de pino',
    'Kikoleta de madera de pino',
    'Durango de madera de pino',
    'Cuchara de madera de pino',
    'Elotero de madera de pino',
    'Varios productos'
  ];

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    producto: '',
    cantidad: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedProduct = params.get('producto');

    if (selectedProduct && productOptions.includes(selectedProduct)) {
      setFormData(prev => ({ ...prev, producto: selectedProduct }));
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4h72aker93evkarro6g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          producto: '',
          cantidad: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
                <i className="ri-mail-line text-red-600"></i>
                <span className="text-sm font-semibold text-red-800">Contacto</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Solicita tu cotización
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <form id="contact-form" onSubmit={handleSubmit} data-readdy-form>
                  <div className="space-y-6">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all text-sm"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all text-sm"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-gray-900 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all text-sm"
                        placeholder="(55) 1234-5678"
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-semibold text-gray-900 mb-2">
                        Nombre de tu negocio
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all text-sm"
                        placeholder="Nombre de tu restaurante, heladería, etc."
                      />
                    </div>

                    {/* Producto */}
                    <div>
                      <label htmlFor="producto" className="block text-sm font-semibold text-gray-900 mb-2">
                        Producto de interés *
                      </label>
                      <select
                        id="producto"
                        name="producto"
                        value={formData.producto}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-8 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all text-sm cursor-pointer"
                      >
                        <option value="">Selecciona un producto</option>
                        {productOptions.map((product) => (
                          <option key={product} value={product}>{product}</option>
                        ))}
                      </select>
                    </div>

                    {/* Cantidad */}
                    <div>
                      <label htmlFor="cantidad" className="block text-sm font-semibold text-gray-900 mb-2">
                        Cantidad aproximada
                      </label>
                      <input
                        type="text"
                        id="cantidad"
                        name="cantidad"
                        value={formData.cantidad}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all text-sm"
                        placeholder="Ej: 10,000 piezas, 50 cajas, etc."
                      />
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-900 mb-2">
                        Mensaje adicional
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all text-sm resize-none"
                        placeholder="Cuéntanos más sobre tus necesidades, medidas especiales, frecuencia de pedidos, etc."
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">Máximo 500 caracteres</p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer inline-flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar solicitud</span>
                          <i className="ri-send-plane-fill"></i>
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                        <i className="ri-checkbox-circle-fill text-2xl text-green-600 flex-shrink-0"></i>
                        <div>
                          <p className="font-semibold text-green-900">¡Mensaje enviado con éxito!</p>
                          <p className="text-sm text-green-700">Nos pondremos en contacto contigo pronto.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                        <i className="ri-error-warning-fill text-2xl text-red-600 flex-shrink-0"></i>
                        <div>
                          <p className="font-semibold text-red-900">Error al enviar</p>
                          <p className="text-sm text-red-700">Por favor, intenta nuevamente.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-2xl"></i>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Teléfono</p>
                        <p className="text-white/90">(55) 1234-5678</p>
                        <p className="text-white/90">(55) 8765-4321</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-mail-line text-2xl"></i>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Correo electrónico</p>
                        <p className="text-white/90">ventas@lascocineras.com</p>
                        <p className="text-white/90">contacto@lascocineras.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-2xl"></i>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Horario de atención</p>
                        <p className="text-white/90">Lunes a Viernes: 9:00 - 18:00</p>
                        <p className="text-white/90">Sábados: 9:00 - 14:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-2xl"></i>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Ubicación</p>
                        <p className="text-white/90">Ciudad de México, México</p>
                        <p className="text-white/90">Envíos a toda la república</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-fill text-xl text-red-600 mt-1 flex-shrink-0"></i>
                      <div>
                        <p className="font-semibold text-gray-900">Respuesta rápida</p>
                        <p className="text-sm text-gray-600">Te contactamos en menos de 24 horas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-fill text-xl text-red-600 mt-1 flex-shrink-0"></i>
                      <div>
                        <p className="font-semibold text-gray-900">Cotizaciones sin compromiso</p>
                        <p className="text-sm text-gray-600">Solicita precios sin obligación de compra</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-fill text-xl text-red-600 mt-1 flex-shrink-0"></i>
                      <div>
                        <p className="font-semibold text-gray-900">Asesoría personalizada</p>
                        <p className="text-sm text-gray-600">Te ayudamos a elegir el producto ideal</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-fill text-xl text-red-600 mt-1 flex-shrink-0"></i>
                      <div>
                        <p className="font-semibold text-gray-900">Precios competitivos</p>
                        <p className="text-sm text-gray-600">Mejor relación calidad-precio del mercado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <i className="ri-shield-check-line text-4xl text-red-600 mb-2"></i>
                    <p className="font-semibold text-gray-900 text-sm">Calidad garantizada</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <i className="ri-truck-line text-4xl text-red-600 mb-2"></i>
                    <p className="font-semibold text-gray-900 text-sm">Envíos seguros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
