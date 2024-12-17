'use client';

import { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import type { CartItem } from '@/types';

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between pb-4 border-b border-[#2d2d2d]">
        <h2 className="text-lg font-semibold flex items-center">
          <ShoppingCart className="mr-2 h-5 w-5" /> Shopping Cart
        </h2>
        <X className="h-5 w-5 cursor-pointer" />
      </div>

      {items.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[#f3f4f6] opacity-75">Your cart is empty</p>
        </div>
      ) : (
        <ScrollArea className="flex-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b border-[#2d2d2d]"
            >
              <div className="w-20 h-20 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm opacity-75">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="outline">-</Button>
                  <span>{item.quantity}</span>
                  <Button size="sm" variant="outline">+</Button>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </ScrollArea>
      )}

      <div className="mt-auto pt-4 border-t border-[#2d2d2d]">
        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span>${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
        </div>
        <Button className="w-full bg-[#6366f1] hover:bg-[#4f46e5]">
          Checkout
        </Button>
      </div>
    </div>
  );
}