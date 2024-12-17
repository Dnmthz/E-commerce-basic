import { categories } from '@/lib/data';
import Link from 'next/link';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#f3f4f6] mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="bg-[#2d2d2d] p-6 rounded-lg hover:bg-[#363636] transition-colors"
            >
              <h2 className="text-xl font-semibold text-[#f3f4f6] mb-2">{category.name}</h2>
              <p className="text-[#f3f4f6] opacity-75">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}