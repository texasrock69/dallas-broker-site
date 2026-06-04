import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

const sellerFacts = [
  { stat: "70%", label: "of business owners have no exit strategy" },
  { stat: "80%", label: "of businesses listed for sale never actually sell" },
  { stat: "3–6×", label: "typical earnings multiple for small businesses" },
  { stat: "6–12", label: "months average time to close a business sale" },
];

export default function Selling() {
  return (
    <Layout>
      <div
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0d2030 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            For Business Sellers
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Selling Your Business
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            You've invested years building something valuable. We help you exit on your terms —
            confidentially, professionally, and at maximum value.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {sellerFacts.map((f) => (
            <div key={f.stat} className="text-center p-5 bg-gray-50 border border-gray-200 rounded">
              <div
                className="text-[#00b4c8] font-extrabold text-2xl mb-1"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {f.stat}
              </div>
              <div className="text-gray-500 text-xs leading-tight">{f.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="text-gray-900 font-extrabold text-2xl mb-4"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Is Now the Right Time to Sell?
            </h2>
            <div className="w-10 h-1 bg-[#00b4c8] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Selling your business is one of the most significant financial decisions you'll ever
              make. The difference between a good outcome and a great one often comes down to
              timing, preparation, and the quality of your representation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At {brokerConfig.companyName}, we start every seller relationship with a free,
              confidential business valuation — so you know exactly where you stand before making
              any decisions. There's no pressure, no obligation, and no cost.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              When you're ready to move forward, our 100% performance-based model means we only
              get paid when you do. Your success is our success.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/sell">
                <button className="btn-teal-solid">Get Your Free Valuation</button>
              </Link>
              <Link href="/selling-tutorial">
                <button className="btn-teal">Seller's Guide</button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "No Upfront Fees",
                desc: "Our services are 100% performance based. You pay nothing until your business successfully sells.",
              },
              {
                title: "Complete Confidentiality",
                desc: "Your employees, customers, and competitors will never know your business is for sale. We protect your identity at every step.",
              },
              {
                title: "Active Representation",
                desc: "We don't just list your business — we represent it. We prepare your story, market proactively, and present you to qualified buyers.",
              },
              {
                title: "6,000+ Buyer Network",
                desc: "Years of relationship-building means we can often match sellers with qualified buyers before a business ever hits the open market.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 border border-gray-200 rounded hover:border-[#00b4c8] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#00b4c8] flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-bold text-gray-800 text-sm mb-1"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#0a0a1a] rounded p-8 text-center">
          <h3
            className="text-white font-bold text-xl mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Ready to Find Out What Your Business Is Worth?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Contact {brokerConfig.brokerName} for a free, confidential consultation. No obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/sell">
              <button className="btn-teal-solid">Request Free Valuation</button>
            </Link>
            <a href={`tel:${brokerConfig.brokerPhone}`}>
              <button
                className="px-6 py-2 text-sm font-semibold border-2 border-white/30 text-white hover:border-white/60 transition-all"
                style={{ fontFamily: "Raleway, sans-serif", borderRadius: "2px" }}
              >
                Call {brokerConfig.brokerPhoneDisplay}
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
