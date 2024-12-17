'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-[#2d2d2d] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#f3f4f6] mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-[#f3f4f6] opacity-75 mb-6">
          Stay updated with our latest products and offers
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-[#1a1a1a] border-none text-[#f3f4f6]"
            required
          />
          <Button
            type="submit"
            className="bg-[#6366f1] hover:bg-[#4f46e5]"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        {status === 'success' && (
          <p className="text-green-400 mt-4">Successfully subscribed!</p>
        )}
      </div>
    </div>
  );
}