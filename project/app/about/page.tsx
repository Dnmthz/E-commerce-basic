export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#f3f4f6] mb-8">About ModernStore</h1>
        <div className="prose prose-invert">
          <p className="text-[#f3f4f6] opacity-90 mb-6">
            ModernStore is your premier destination for contemporary lifestyle products. We curate the finest selection of modern furniture, lighting, electronics, and accessories to enhance your living space.
          </p>
          <p className="text-[#f3f4f6] opacity-90 mb-6">
            Our mission is to make high-quality, beautifully designed products accessible to everyone. We work directly with manufacturers and designers to bring you exceptional value without compromising on quality.
          </p>
          <h2 className="text-2xl font-bold text-[#f3f4f6] mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-[#f3f4f6] opacity-90 space-y-2">
            <li>Quality craftsmanship</li>
            <li>Sustainable practices</li>
            <li>Customer satisfaction</li>
            <li>Innovation in design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}