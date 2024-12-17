export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#111111] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#f3f4f6] mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#2d2d2d] p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-[#f3f4f6] mb-2">{faq.question}</h2>
              <p className="text-[#f3f4f6] opacity-75">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping is 2-3 business days."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Items must be unused and in original packaging."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to select international destinations. Shipping costs vary by location."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email."
  }
];