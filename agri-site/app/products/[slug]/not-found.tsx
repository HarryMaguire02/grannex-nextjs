import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Product Not Found
        </h1>
        <p className="text-lg text-primary/80 mb-8">
          Sorry, we couldn&apos;t find the product you&apos;re looking for.
        </p>
        <Link
          href="/products"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-green-medium transition-colors"
        >
          View All Products
        </Link>
      </div>
    </main>
  );
}
