export const products = [
  {
    id: '1',
    name: 'Modern Desk Lamp',
    description: 'Sleek and minimalist desk lamp with adjustable brightness',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    category: 'lighting'
  },
  {
    id: '2',
    name: 'Ergonomic Chair',
    description: 'Premium office chair with lumbar support',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
    category: 'furniture'
  },
  {
    id: '3',
    name: 'Wireless Speaker',
    description: 'High-fidelity wireless speaker with deep bass',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800',
    category: 'electronics'
  },
  {
    id: '4',
    name: 'Minimalist Watch',
    description: 'Classic design with modern features',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    category: 'accessories'
  }
] as const;

export const categories = [
  {
    id: 'all',
    name: 'All Products',
    description: 'Browse all our products'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    description: 'Modern lighting solutions'
  },
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Contemporary furniture'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest electronics'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Trendy accessories'
  }
] as const;