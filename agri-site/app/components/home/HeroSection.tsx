import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-112 sm:h-125 lg:h-150">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-banner.png)' }}
      />

      {/* Content */}
      <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-between pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
        {/* Hero Text - Left Aligned, Max 50% Width */}
        <div className="max-w-xl lg:max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="mb-4 sm:mb-6">
            <span className="text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">Grannex International</span>{' '}
            <span className="text-white font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              is a leading global company in the trading and brokerage of agricultural commodities.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-bold leading-relaxed">
            Trust in the power of reliable feed materials.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden h-auto">
          {[
            { title: 'Oils and fats', icon: '/oils-and-fats.svg', market: 'oils-and-fats' },
            { title: 'Food ingredients', icon: '/food-ingredients.svg', market: 'food-ingredients' },
            { title: 'Animal feeds ingredients', icon: '/animal-feeds-ingredients.svg', market: 'animal-feed-ingredients' },
            { title: 'Aqua feeds ingredients', icon: '/aqua-feeds-ingredients.svg', market: 'aqua-feeds-ingredients' },
          ].map((category, index) => (
            <Link
              key={category.title}
              href={`/products?market=${encodeURIComponent(category.market)}`}
              className="bg-primary text-secondary px-5 xs:px-10 sm:px-15 md:px-25 lg:p-5 hover:bg-green-medium transition-colors cursor-pointer group flex items-center justify-left lg:justify-center gap-2 md:gap-3 relative min-h-17.5"
              aria-label={`View ${category.title} products`}
            >
              <div className="flex items-center shrink-0">
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={56}
                  height={56}
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
                  />
              </div>
              <h3 className="text-sm sm:text-base font-light leading-tight md:leading-5 text-left">{category.title}</h3>

              {/* Vertical divider between columns */}
              {/* For 2-col layout (< lg): show right border on items 0 and 2 */}
              {/* For 4-col layout (>= lg): show right border on items 0, 1, and 2 */}
              {index === 0 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary"></div>
              )}
              {index === 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary hidden lg:block"></div>
              )}
              {index === 2 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary"></div>
              )}

              {/* Horizontal divider between rows */}
              {/* For 2-col layout (< lg): show top border on items 2 and 3 (second row) */}
              {(index === 2 || index === 3) && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-secondary lg:hidden"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
