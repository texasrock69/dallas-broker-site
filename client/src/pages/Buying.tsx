import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

const buyerSteps = [
  {
    step: "01",
    title: "Complete the NDA",
    desc: "A quick, free Non-Disclosure Agreement is required to receive confidential business details. No obligation — just a standard confidentiality protection for the seller.",
  },
  {
    step: "02",
    title: "Define Your Criteria",
    desc: "We learn about your background, investment range, preferred industry, and goals — so we can match you with businesses that actually fit.",
  },
  {
    step: "03",
    title: "Review Opportunities",
    desc: "We share confidential listings and financial summaries for businesses that match your profile. Not everything is publicly listed.",
  },
  {
    step: "04",
    title: "Meet & Evaluate",
    desc: "We arrange meetings with sellers, facilitate due diligence, and help you evaluate the business thoroughly before making any decisions.",
  },
  {
    step: "05",
    title: "Negotiate & Close",
    desc: "We guide you through the offer, negotiation, financing, and closing process — ensuring a smooth transfer of ownership.",
  },
];

export default function Buying() {
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
            For Business Buyers
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Buying a Business
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Owning a business is one of the most powerful paths to financial independence.
            We help you find the right one — confidentially and efficiently.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="text-gray-900 font-extrabold text-2xl mb-4"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Why Buy an Existing Business?
            </h2>
            <div className="w-10 h-1 bg-[#00b4c8] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Starting a business from scratch is risky. Buying an existing one means you inherit
              an established customer base, proven cash flow, trained employees, and an operating
              history you can evaluate before you invest.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The challenge is finding the right business — one that fits your skills, budget,
              and lifestyle goals. That's exactly what we do. {brokerConfig.companyName} matches
              serious buyers with qualified sellers across {brokerConfig.locationShort} and beyond.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our buyer consultations are completely free. We work with buyers at every investment
              level and help navigate the entire process from search to closing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/online-nda">
                <button className="btn-teal-solid">Complete NDA to View Listings</button>
              </Link>
              <Link href="/buying-tutorial">
                <button className="btn-teal">Buyer's Guide</button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Established Cash Flow",
                desc: "Unlike a startup, an existing business already generates revenue. You can evaluate actual financials before you commit.",
              },
              {
                title: "Existing Customer Base",
                desc: "You're not starting from zero. Customers, relationships, and reputation come with the business.",
              },
              {
                title: "Trained Employees",
                desc: "Existing staff know the business, the customers, and the operations — reducing your learning curve dramatically.",
              },
              {
                title: "Financing Options Available",
                desc: "SBA loans, seller financing, and other options make business acquisition more accessible than most people realize.",
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

        {/* Process steps */}
        <div className="mb-16">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            The Buyer Journey
          </p>
          <h2
            className="text-gray-900 font-extrabold text-2xl mb-10"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            How the Process Works
          </h2>
          <div className="space-y-4">
            {buyerSteps.map((s) => (
              <div key={s.step} className="flex gap-5 p-5 bg-gray-50 border border-gray-200 rounded">
                <div
                  className="text-[#00b4c8] font-extrabold text-xl flex-shrink-0 w-10"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {s.step}
                </div>
                <div>
                  <div
                    className="font-bold text-gray-800 mb-1"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {s.title}
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0a0a1a] rounded p-8 text-center">
          <h3
            className="text-white font-bold text-xl mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Ready to Start Your Search?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Complete our quick Online NDA to receive our confidential listings and speak with{" "}
            {brokerConfig.brokerName} about businesses that match your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/online-nda">
              <button className="btn-teal-solid">Complete Online NDA</button>
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
