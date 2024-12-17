'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate form submission
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <div className="min-h-screen bg-[#111111] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#f3f4f6] mb-8">Contact Us</h1>
        
        <div className="bg-[#2d2d2d] p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#f3f4f6] mb-2">Name</label>
              <Input
                id="name"
                type="text"
                required
                className="w-full bg-[#1a1a1a] border-none text-[#f3f4f6]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[#f3f4f6] mb-2">Email</label>
              <Input
                id="email"
                type="email"
                required
                className="w-full bg-[#1a1a1a] border-none text-[#f3f4f6]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-[#f3f4f6] mb-2">Message</label>
              <Textarea
                id="message"
                required
                className="w-full bg-[#1a1a1a] border-none text-[#f3f4f6] min-h-[150px]"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-[#6366f1] hover:bg-[#4f46e5]"
              disabled={status !== 'idle'}
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}