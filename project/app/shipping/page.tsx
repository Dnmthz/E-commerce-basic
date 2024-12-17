export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#f3f4f6] mb-8">Shipping Information</h1>
        <div className="space-y-8 text-[#f3f4f6]">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Methods</h2>
            <div className="bg-[#2d2d2d] p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold">Standard Shipping</h3>
                <p className="opacity-75">5-7 business days - Free for orders over $50</p>
              </div>
              <div>
                <h3 className="font-semibold">Express Shipping</h3>
                <p className="opacity-75">2-3 business days - $15</p>
              </div>
              <div>
                <h3 className="font-semibold">Next Day Delivery</h3>
                <p className="opacity-75">Next business day - $25</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
            <div className="bg-[#2d2d2d] p-6 rounded-lg prose prose-invert">
              <p className="opacity-90">
                We ship to all 50 US states and select international destinations. Orders are processed
                within 24-48 hours of payment confirmation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}