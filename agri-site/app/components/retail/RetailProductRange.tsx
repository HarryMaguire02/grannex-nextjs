import Image from 'next/image';

const products = [
  { src: '/retail/retail-oil-1L.png', label: '1 L' },
  { src: '/retail/retail-oil-5L.png', label: '5 L' },
  { src: '/retail/retail-oil-10L.png', label: '10 L' },
  { src: '/retail/retail-oil-20L.png', label: '20 L' },
  { src: '/retail/retail-mayonnaise-430g.png', label: '430 g' },
  { src: '/retail/retail-mayonnaise-850g.png', label: '850 g' },
  { src: '/retail/retail-mayonnaise-4-5kg.png', label: '4.5 kg' },
  { src: '/retail/retail-mustard-900g.png', label: '900 g' },
  { src: '/retail/retail-mustard-4-5kg.png', label: '4.5 kg' },
  { src: '/retail/retail-ketchup-850g.png', label: '850 g' },
  { src: '/retail/retail-ketchup-5kg.png', label: '5 kg' },
  { src: '/retail/retail-sugar-1kg.png', label: '1 kg' },
];

export default function RetailProductRange() {
  return (
    <section className="bg-white pt-8 sm:pt-10 md:pt-12">
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-white" />
        <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Product range</h2>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={`${product.src}-${product.label}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="relative w-full aspect-[3/4] lg:aspect-square p-4">
                <Image
                  src={product.src}
                  alt={product.label}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <hr className="border-secondary/40 mx-4" />
              <p className="text-center text-lg font-medium text-primary py-3">{product.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
