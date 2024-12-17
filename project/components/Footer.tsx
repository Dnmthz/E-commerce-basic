import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f3f4f6] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="opacity-75">
            Modern e-commerce platform offering premium products for your lifestyle.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products" className="opacity-75 hover:opacity-100">
                Products
              </Link>
            </li>
            <li>
              <Link href="/categories" className="opacity-75 hover:opacity-100">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="opacity-75 hover:opacity-100">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="opacity-75 hover:opacity-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/shipping" className="opacity-75 hover:opacity-100">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="/returns" className="opacity-75 hover:opacity-100">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/faq" className="opacity-75 hover:opacity-100">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 opacity-75">
            <li>Email: support@modernstore.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Commerce St, NY 10001</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#2d2d2d] text-center opacity-75">
        <p>&copy; 2024 ModernStore. All rights reserved.</p>
      </div>
    </footer>
  );
}