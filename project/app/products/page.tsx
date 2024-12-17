import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#f3f4f6] mb-8">All Products</h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}