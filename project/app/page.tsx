'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { products, categories } from '@/lib/data';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const featuredProducts = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="min-w-full h-full relative"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-2xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-white/80 mb-8">
                    {product.description}
                  </p>
                  <Button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1))}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
          onClick={() => setCurrentSlide((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1))}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex overflow-x-auto pb-4 gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-[#6366f1] hover:bg-[#4f46e5]'
                  : 'text-[#f3f4f6] border-[#2d2d2d]'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}