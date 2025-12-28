export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-150 bg-linear-to-r from-primary to-green-medium">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mb-6">
            Grannex International
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
              is a leading global company in the trading and brokerage of agricultural commodities.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Trust in the power of reliable feed materials.
          </p>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Oils and fats', icon: '🫒' },
              { title: 'Aqua feeds ingredients', icon: '🐟' },
              { title: 'Animal feeds ingredients', icon: '🐄' },
              { title: 'Food ingredients', icon: '🌾' },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-primary text-white p-8 rounded-lg hover:bg-green-medium transition-colors cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-green-medium mb-4">— ABOUT US</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">GRANNEX</h3>
              <div className="space-y-4 text-primary">
                <p>
                  <strong>GRANNEX INTERNATIONAL</strong> is a leading global agriculture commodities trading and brokerage firm.
                </p>
                <p>
                  Our aim is to build and manage a global supply chain for processors and distributors of food and feeds ingredients. We supply processors and distributors with raw materials of consistent quality and use our freight and logistics expertise to ensure smooth and timely delivery to their destinations.
                </p>
                <p>
                  We are confident in our ability to provide COSTUMERS with the GOODS they need to serve the needs of their customers both now and in the future.
                </p>
              </div>
            </div>
            <div className="bg-beige-light rounded-lg h-96 flex items-center justify-center">
              <span className="text-green-medium">Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test scroll content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-green-medium">Scroll to see the header transparency effect</p>
        </div>
      </section>
    </div>
  );
}
