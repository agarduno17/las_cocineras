import { useState } from 'react';

export default function Products() {
  const [activeImages, setActiveImages] = useState<Record<number, number>>({});

  const products = [
    {
      id: 1,
      title: 'Banderilla de madera de pino',
      description: 'Presentaciones de 15, 20, 25 y 30 cm para alimentos y brochetas.',
      images: [
        '/images/products/banderilla_madera_15cm@4x.webp',
        '/images/products/banderilla_madera_20cm@4x.webp',
        '/images/products/banderilla_madera_25cm@4x.webp',
        '/images/products/banderilla_madera_30cm@4x.webp'
      ],
      variants: ['15 cm', '20 cm', '25 cm', '30 cm'],
      features: [
        '15 cm: caja con 100 bolsas de 50 pzas c/u',
        '20 cm: caja con 70 bolsas de 50 pzas c/u',
        '25 cm: caja con 50 bolsas de 50 pzas c/u',
        '30 cm: caja con 50 bolsas de 50 pzas c/u'
      ],
      icon: 'ri-knife-line'
    },
    {
      id: 2,
      title: 'Botanero de madera de pino',
      description: 'Palillo botanero en medidas de 7 cm y 11 cm.',
      images: [
        '/images/products/botanero_madera_7cm@4x.webp',
        '/images/products/botanero_madera_11cm@4x.webp'
      ],
      variants: ['7 cm', '11 cm'],
      features: [
        '7 cm: caja con 100 bolsas, 100 pzas c/u aprox',
        '11 cm: caja con 80 bolsas, 100 pzas c/u aprox',
        'Madera de pino de alta calidad',
        'Acabado liso y seguro para alimentos'
      ],
      icon: 'ri-restaurant-2-line'
    },
    {
      id: 3,
      title: 'Palillo redondo grueso de madera de pino',
      description: 'Palillo redondo grueso para usos especiales y aplicaciones robustas.',
      images: ['/images/products/palillo_redondo_grueso@4x.webp'],
      features: [
        'Medidas: 30 cm, 45 cm y 60 cm',
        'Mayor resistencia estructural',
        'Fabricado en madera de pino',
        'Ideal para procesos de mayor exigencia'
      ],
      icon: 'ri-ruler-line'
    },
    {
      id: 4,
      title: 'Palillo redondo delgado de madera de pino',
      description: 'Palillo redondo delgado para amplio rango de medidas.',
      images: ['/images/products/palillo_redondo_delgado@4x.webp'],
      features: [
        'Medidas: 7, 8, 11, 15, 20, 25, 30, 45 y 60 cm',
        'Acabado uniforme y liso',
        'Madera de pino seleccionada',
        'Versátil para múltiples aplicaciones'
      ],
      icon: 'ri-ruler-2-line'
    },
    {
      id: 5,
      title: 'Abatelengua de madera de pino',
      description: 'Abatelengua de uso doméstico fabricado en madera de pino.',
      images: ['/images/products/abatelengua_madera@4x.webp'],
      features: [
        'Uso doméstico',
        'Superficie lisa y segura',
        'Madera de pino natural',
        'Empaque higiénico'
      ],
      icon: 'ri-health-book-line'
    },
    {
      id: 6,
      title: 'Cuadrado de madera de pino',
      description: 'Palillo cuadrado de madera de pino para distintas aplicaciones.',
      images: ['/images/products/cuadrado_madera@4x.webp'],
      features: [
        'Presentaciones #9 y #11',
        'Madera de pino de alta calidad',
        'Corte preciso y uniforme',
        'Ideal para procesos personalizados'
      ],
      icon: 'ri-box-3-line'
    },
    {
      id: 7,
      title: 'Kikoleta de madera de pino',
      description: 'Línea kikoleta en medidas troqueladas y aserradas.',
      images: [
        '/images/products/kikoleta_madera_8@4x.webp',
        '/images/products/kikoleta_madera_9_5@4x.webp',
        '/images/products/kikoleta_madera_11_5@4x.webp',
        '/images/products/kikoleta_madera_12@4x.webp'
      ],
      variants: ['#8 troquelada', '#9.5 troquelada', '#11.5 troquelada', '#12 aserrada'],
      features: [
        'Diseño especializado para paletas y postres',
        'Acabado suave al tacto',
        'Fabricación en madera de pino',
        'Presentaciones conforme a catálogo'
      ],
      icon: 'ri-goblet-line'
    },
    {
      id: 8,
      title: 'Durango de madera de pino',
      description: 'Palillo tipo Durango para aplicaciones de servicio y consumo.',
      images: ['/images/products/durango_madera@4x.webp'],
      features: [
        'Madera de pino natural',
        'Buena resistencia y acabado',
        'Producto tradicional del catálogo',
        'Apto para contacto con alimentos'
      ],
      icon: 'ri-restaurant-line'
    },
    {
      id: 9,
      title: 'Cuchara de madera de pino',
      description: 'Cuchara de madera de pino para alimentos y degustaciones.',
      images: ['/images/products/cuchara_madera@4x.webp'],
      features: [
        'Ideal para helados y degustaciones',
        'Biodegradable y ecológica',
        'Superficie lisa y segura',
        'Uso práctico en servicio de alimentos'
      ],
      icon: 'ri-spoon-line'
    },
    {
      id: 10,
      title: 'Elotero de madera de pino',
      description: 'Palillo elotero de madera de pino para antojitos y servicio.',
      images: ['/images/products/elotero_madera@4x.webp'],
      features: [
        'Diseñado para elotes y mazorcas',
        'Mayor firmeza y agarre',
        'Madera de pino resistente',
        'Uso común en negocio de antojitos'
      ],
      icon: 'ri-plant-line'
    }
  ];

  const getActiveImage = (id: number) => activeImages?.[id] ?? 0;

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-4">
            <i className="ri-product-hunt-line text-red-600"></i>
            <span className="text-sm font-semibold text-red-800">Nuestros productos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Catálogo de productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia variedad de palillos y productos de madera de pino para diferentes usos profesionales
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.images[getActiveImage(product.id)]}
                  alt={product.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Image Thumbnails */}
              {product.images.length > 1 && (
                <div className="px-4 pt-3">
                  <div className="flex gap-2">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImages({ ...activeImages, [product.id]: idx })}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          idx === getActiveImage(product.id)
                            ? 'border-red-500'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.title} - variante ${idx + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                  {product.variants && (
                    <p className="text-xs text-gray-500 mt-1">
                      Tamaño: <span className="font-medium text-gray-700">{product.variants[getActiveImage(product.id)]}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-fill text-red-600 flex-shrink-0"></i>
                      <span className="text-sm text-gray-700 leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    window.location.href = `/contacto?producto=${encodeURIComponent(product.title)}`;
                  }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all whitespace-nowrap cursor-pointer mt-auto"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Orders Notice */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center text-white shadow-xl">
          <i className="ri-ruler-line text-5xl mb-4"></i>
          <h3 className="text-2xl font-bold mb-2">¿Necesitas medidas personalizadas?</h3>
          <p className="text-lg mb-6 opacity-90">
            Fabricamos productos con las especificaciones exactas que tu negocio necesita
          </p>
          <button
            onClick={() => {
              window.location.href = '/contacto?producto=Varios%20productos';
            }}
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg whitespace-nowrap cursor-pointer"
          >
            Contactar ahora
          </button>
        </div>
      </div>
    </section>
  );
}