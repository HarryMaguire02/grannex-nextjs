import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import productsData from '@/data/productsv2.json';
import ProductPageClient from './ProductPageClient';

type ProductPdf = {
  name: string;
  url: string;
};

type Product = {
  slug: string;
  name: string;
  market: string;
  marketLabel: string;
  info: string;
  description: string;
  application: string;
  packing: string;
  specification: string[];
  industry: string[];
  image: string;
  pdfs: ProductPdf[];
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static params for all products (enables static generation)
export async function generateStaticParams() {
  const products = productsData as Product[];
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found - Grannex LTD',
    };
  }

  return {
    title: `${product.name} - Grannex LTD`,
    description: product.info,
    keywords: [product.name, product.marketLabel, ...product.industry],
    openGraph: {
      title: `${product.name} - Grannex LTD`,
      description: product.info,
      type: 'website',
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
