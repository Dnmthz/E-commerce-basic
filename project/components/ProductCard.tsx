'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from './ui/dialog';
import type { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    // Simulate adding to cart
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group bg-[#2d2d2d] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div className="relative h-64 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">{product.name}</h3>
            <p className="text-[#f3f4f6] opacity-75 mb-4">${product.price}</p>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                'Adding...'
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#1a1a1a] text-[#f3f4f6]">
        <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        <div className="grid gap-4 py-4">
          <div className="relative h-96 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-lg">${product.price}</p>
          <p className="opacity-75">{product.description}</p>
          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#6366f1] hover:bg-[#4f46e5]"
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}