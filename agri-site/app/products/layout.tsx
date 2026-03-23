import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agricultural Products & Commodities - Grannex LTD',
  description: 'Browse our full range of agricultural commodities including vegetable oils, proteins, starches, sweeteners, animal feed, and aqua feed ingredients.',
  keywords: ['agricultural products', 'vegetable oils', 'animal feed', 'aqua feed', 'proteins', 'starches', 'commodity trading'],
  openGraph: {
    title: 'Agricultural Products & Commodities - Grannex LTD',
    description: 'Browse our full range of agricultural commodities including vegetable oils, proteins, starches, sweeteners, and feed ingredients.',
    type: 'website',
    images: [{ url: '/logo-sharing.png', width: 1225, height: 560, alt: 'Grannex LTD Products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Products & Commodities - Grannex LTD',
    description: 'Browse our full range of agricultural commodities.',
    images: ['/logo-sharing.png'],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
