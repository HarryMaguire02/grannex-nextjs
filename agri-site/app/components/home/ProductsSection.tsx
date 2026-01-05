import Image from 'next/image';

// Mock product data - will be replaced with real data later
const mockProducts = [
  {
    id: 1,
    name: 'Potato Starch',
    image: '/potato-starch.png',
    category: 'Starches',
  },
  {
    id: 2,
    name: 'Vital Wheat Gluten',
    image: '/vital-wheat-gluten.png',
    category: 'Proteins',
  },
  {
    id: 3,
    name: 'Corn Starch',
    image: '/corn-starch.png',
    category: 'Starches',
  },
  {
    id: 4,
    name: 'Soybean Meal',
    image: '/oils-and-fats.png',
    category: 'Proteins',
  },
];

export default function ProductsSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          <span className="font-normal">Our</span> products
        </h2>

        {/* Description */}
        <p className="text-primary font-normal text-sm leading-4 text-justify mb-8 w-full lg:w-1/2">
          We offer a broad portfolio of products, commodities, and ingredients serving the human food,
          aquaculture, and animal feed industries. Our range includes oilseeds, vegetable oils, and related
          agricultural products sourced from multiple origins to meet diverse market and customer requirements.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="text-sm font-medium text-primary">Filter by:</div>
          <select className="pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary bg-white cursor-pointer hover:bg-primary/5">
            <option>Markets</option>
            <option>Food</option>
            <option>Feed</option>
            <option>Aquaculture</option>
          </select>
          <select className="pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary bg-white cursor-pointer hover:bg-primary/5">
            <option>Segments</option>
            <option>Oils & Fats</option>
            <option>Proteins</option>
            <option>Starches</option>
          </select>
          <select className="pl-4 py-2 border-0 rounded-lg text-sm font-normal text-primary bg-white cursor-pointer hover:bg-primary/5">
            <option>Type</option>
            <option>Organic</option>
            <option>Conventional</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer max-w-xs mx-auto w-full"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Name */}
              <div className="bg-secondary rounded-b-lg py-3 px-4 text-center h-16 flex items-center justify-center">
                <h3 className="text-primary font-medium text-base line-clamp-2">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
