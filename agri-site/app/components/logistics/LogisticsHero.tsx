import Image from 'next/image';

export default function LogisticsHero() {
  const chartData = [
    { year: '2019', value: 85, label: '85K T' },
    { year: '2020', value: 120, label: '120K T' },
    { year: '2021', value: 180, label: '180K T' },
    { year: '2022', value: 245, label: '245K T' },
    { year: '2023', value: 385, label: '385K T' },
    { year: '2024', value: 500, label: '500K T' },
    { year: '2025', value: 550, label: '550K T' },
  ];

  // Fixed Y-axis labels for cleaner appearance
  const yAxisLabels = ['500K T', '400K T', '300K T', '200K T', '100K T'];
  const yAxisSteps = yAxisLabels.length;
  const chartMaxValue = 500;

  return (
    <section className="relative pb-8 sm:pb-10 md:pb-12 lg:pb-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h1 className="font-bold text-primary mb-6 md:mb-8 text-2xl md:text-[32px] leading-tight md:leading-[38px]">
          Reliable Logistics &amp; Supply
          <br />
          Chain Solutions
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Text */}
          <div className="space-y-4 text-primary font-normal text-sm leading-4 text-justify">
            <p>
             At Grannex, we integrate every stage of the supply chain—from initial procurement and quality testing at the origin to final-mile delivery. 
            </p>
            <p>
              By coordinating storage, multi-modal transportation, and real-time operational oversight, we ensure that our agricultural commodities move seamlessly across borders. 
            </p>
            <p>
              Our deep-rooted relationships with global producers allow us to guarantee consistency, even in the most volatile market conditions.
            </p>
            <p>
              We maintain deep-rooted relationships with global producers across five continents, allowing us to guarantee consistency even in the most volatile market conditions.
            </p>
            <p>
               Before any commodity is loaded, it undergoes comprehensive quality testing to ensure it meets international standards and our clients specific requirements.
            </p>
            <p>
              Efficiency is driven by our ability to move goods through diverse transport channels. We coordinate complex multi-modal solutions including sea freight, rail, and road transport to optimize transit times and reduce costs.
            </p>
          </div>

          {/* Right Side - Bar Chart */}
          <div className="flex flex-col items-center justify-center bg-white rounded-lg">
            <div className="w-full max-w-md pl-12 md:pl-14">
              {/* Chart */}
              <div className="relative h-80 flex items-end justify-between gap-3 mb-4">
                {/* Y-axis labels */}
                {yAxisLabels.map((label, index) => {
                  const position = (index / (yAxisSteps - 1)) * 100;
                  return (
                    <div
                      key={index}
                      className="absolute -left-12 md:-left-14 text-xs text-primary/60 -translate-y-1/2"
                      style={{ top: `${position}%` }}
                    >
                      {label}
                    </div>
                  );
                })}

                {/* Horizontal grid lines */}
                {yAxisLabels.map((_, index) => {
                  const position = (index / (yAxisSteps - 1)) * 100;
                  return (
                    <div
                      key={index}
                      className="absolute left-0 right-0 border-t border-primary/10 pointer-events-none z-0"
                      style={{ top: `${position}%` }}
                    />
                  );
                })}

                {/* Bars */}
                {chartData.map((data) => {
                  const height = (data.value / chartMaxValue) * 100;
                  return (
                    <div key={data.year} className="flex-1 h-full flex items-end justify-center relative z-10">
                      {/* Bar */}
                      <div
                        className="w-full rounded-t-sm transition-all duration-500 hover:opacity-80 cursor-pointer"
                        style={{
                          height: `${height}%`,
                          background: 'linear-gradient(0deg, #315748 0%, #97C2B1 100%)'
                        }}
                        title={data.label}
                      />
                    </div>
                  );
                })}
              </div>

              {/* X-axis labels */}
              <div className="flex items-center justify-between gap-3">
                {chartData.map((data) => (
                  <div key={data.year} className="flex-1 text-center text-xs text-primary font-medium">
                    {data.year}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decoration SVG - Bottom Left */}
      <div className="absolute top-1/4 lg:top-auto lg:bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none">
        <Image
          src="/decoration.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
