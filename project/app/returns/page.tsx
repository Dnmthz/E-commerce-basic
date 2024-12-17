export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#f3f4f6] mb-8">Returns & Refunds</h1>
        <div className="space-y-8 text-[#f3f4f6]">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <div className="bg-[#2d2d2d] p-6 rounded-lg prose prose-invert">
              <p className="opacity-90">
                We accept returns within 30 days of delivery for most items. Items must be unused
                and in their original packaging.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
            <div className="bg-[#2d2d2d] p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-4 opacity-90">
                <li>Log into your account and initiate a return request</li>
                <li>Print the provided return shipping label</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Drop off the package at any authorized shipping location</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <div className="bg-[#2d2d2d] p-6 rounded-lg prose prose-invert">
              <p className="opacity-90">
                Refunds are processed within 5-7 business days of receiving your return.
                The refund will be issued to your original payment method.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}