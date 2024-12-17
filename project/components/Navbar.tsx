'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Cart from './Cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-[#f3f4f6] text-xl font-bold">
              ModernStore
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full bg-[#2d2d2d] border-none text-[#f3f4f6]"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-[#6366f1]" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-[#f3f4f6]" />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5 text-[#f3f4f6]" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <Cart />
              </SheetContent>
            </Sheet>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#f3f4f6]" />
              ) : (
                <Menu className="h-6 w-6 text-[#f3f4f6]" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] p-4">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full bg-[#2d2d2d] border-none text-[#f3f4f6] mb-4"
          />
          <div className="flex justify-around">
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5 text-[#f3f4f6] mr-2" />
              Account
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-5 w-5 text-[#f3f4f6] mr-2" />
                  Cart
                </Button>
              </SheetTrigger>
              <SheetContent>
                <Cart />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      )}
    </nav>
  );
}