import Image from 'next/image';

const services = [
  { label: 'Production & Bottling', src: '/retail/production-and-bottling.png' },
  { label: 'Compliant Labeling', src: '/retail/compliant-labeling.png' },
  { label: 'Versatile Packaging', src: '/retail/versatile-packing.png' },
  { label: 'Quality Assurance', src: '/retail/quality-assurance.png' },
];

export default function RetailServices() {
  return (
    <>
      {/* Our Core Services */}
      <section className="bg-white pt-8 sm:pt-10 md:pt-12">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-white" />
          <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Core Services</h2>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 mt-8 pb-8 sm:pb-10 md:pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.label} className="flex flex-col items-center gap-4">
                <div className="relative w-[110px] h-[110px]">
                  <Image
                    src={service.src}
                    alt={service.label}
                    fill
                    className="object-contain"
                    sizes="110px"
                  />
                </div>
                <p className="text-sm font-medium text-primary text-center">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-content mx-auto px-12 md:px-16 lg:px-20">
        <hr className="border-t-[3px] border-secondary/30" />
      </div>

      {/* Flexible Packaging Solutions */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-bold text-2xl sm:text-3xl text-primary leading-tight mb-6">
                Flexible Packaging Solutions
              </h2>
              <div className="space-y-4 text-sm text-primary font-normal leading-5 text-justify">
                <p>
                  We provide an extensive range of packaging formats for both crude and refined oils
                  at competitive rates — catering to everything from retail bottles and food service
                  packs to bulk shipments.
                </p>
                <p>
                  As a leading producer of packaged oils, we possess the infrastructure to meet
                  high-volume demands consistently and efficiently.
                </p>
                <p>
                  Our solutions include fully customizable labeling tailored to your market, with
                  complete private label services available for retail and catering partners.
                </p>
              </div>
            </div>
            <div className="relative w-full min-h-[240px] lg:min-h-[320px]">
              <Image
                src="/retail/flexible-packing-solutions.png"
                alt="Flexible packaging solutions — oil bottles in various sizes"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
