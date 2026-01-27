import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-112.5 sm:h-125 lg:h-150">
      {/* Background Image */}
      <Image
        src="/hero-banner.png"
        alt="Agricultural field background"
        fill
        priority
        className="object-cover object-center sm:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-between pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
        {/* Hero Text - Left Aligned, Max 50% Width */}
        <div className="max-w-xl lg:max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="mb-4 sm:mb-6">
            <span className="text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">Grannex LTD</span>{' '}
            <span className="text-white font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              is a leading global company in the trading and brokerage of agricultural commodities.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-bold leading-relaxed">
            Trust in the power of reliable feed materials.
          </p>
        </div>

        {/* Category Cards */}
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-primary rounded-2xl overflow-hidden">
            {[
              { title: 'Oils and fats', icon: '/oils-and-fats.svg', filter: 'market', value: 'oils-and-fats' },
              { title: 'Food ingredients', icon: '/food-ingredients.svg', filter: 'industry', value: 'food-and-beverage' },
              { title: 'Animal feeds ingredients', icon: '/animal-feeds-ingredients.svg', filter: 'industry', value: 'animal-feed' },
              { title: 'Aqua feeds ingredients', icon: '/aqua-feeds-ingredients.svg', filter: 'industry', value: 'aquaculture' },
            ].map((category, index) => (
              <Link
                key={category.title}
                href={`/products?${category.filter}=${encodeURIComponent(category.value)}`}
                className="text-secondary p-3 md:p-4 lg:p-5 hover:bg-green-medium transition-colors cursor-pointer flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 relative min-h-20 md:min-h-17.5"
                aria-label={`View ${category.title} products`}
              >
                <div className="flex items-center justify-center shrink-0">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={56}
                    height={56}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-light leading-tight text-center md:text-left">{category.title}</h3>

                {/* Vertical divider - right side of left column items */}
                {/* 2-col (< md): items 0 and 2 get right border */}
                {/* 4-col (>= md): items 0, 1, 2 get right border */}
                {(index === 0 || index === 2) && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary md:hidden"></div>
                )}
                {index < 3 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary hidden md:block"></div>
                )}

                {/* Horizontal divider - bottom of top row items */}
                {/* 2-col (< md): items 0 and 1 get bottom border */}
                {(index === 0 || index === 1) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-secondary md:hidden"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
