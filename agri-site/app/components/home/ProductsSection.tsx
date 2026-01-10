import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';

type Product = {
  slug: string;
  name: string;
  group: string;
  groupLabel: string;
  info: string;
  description: string;
  application: string;
  packing: string;
  specification: string[];
  industry: string[];
  isActive: boolean;
  isFeatured?: boolean;
  image: string;
};

export default function ProductsSection() {
  const products = productsData as Product[];
  const featuredProducts = products.filter(product => product.isFeatured && product.isActive);
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            <span className="font-normal">Our</span> products
          </h2>
          <Link
            href="/products"
            className="px-6 py-2 md:px-8 md:py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-medium transition-colors text-sm md:text-base"
          >
            View Products
          </Link>
        </div>

        {/* Description */}
        <p className="text-primary font-normal text-sm leading-4 text-justify mb-8 w-full">
          We offer a broad portfolio of products, commodities, and ingredients serving the human food,
          aquaculture, and animal feed industries. Our range includes oilseeds, vegetable oils, and related
          agricultural products sourced from multiple origins to meet diverse market and customer requirements.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
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
              <div className="bg-secondary rounded-b-lg py-3 px-4 text-center min-h-[64px] flex items-center justify-center">
                <h3 className="text-primary font-medium text-base line-clamp-2">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
