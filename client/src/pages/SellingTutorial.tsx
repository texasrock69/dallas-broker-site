import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { useState } from "react";
import { Link } from "wouter";

const sections = [
  {
    title: "Is It Time to Sell?",
    content: `Selling your business is one of the most significant financial and emotional decisions you will ever make. You've devoted years — maybe decades — of time, energy, and capital into building something real. Before anything else, the most important question isn't "what is it worth?" It's "do I really want to sell, and do I have realistic expectations?"

If you can answer yes to both, you're ready to take the first steps. If money is the only reason you're considering a sale, you may not be ready yet. The sellers who achieve the best outcomes are those who are motivated, prepared, and clear-eyed about the process.`,
    tip: "The sellers who get the best results are not always the ones with the most valuable businesses — they're the ones who are genuinely ready to sell and trust the process.",
  },
  {
    title: "What Is My Business Worth?",
    content: `This is the first question almost every seller asks — and rightfully so. But here's the truth that most brokers won't tell you upfront: it doesn't matter what you think your business is worth, what your accountant estimates, or what a friend suggests. Only the marketplace determines value.

Business value is typically expressed as a multiple of Seller's Discretionary Earnings (SDE) or EBITDA — the actual cash flow available to an owner-operator. For most small businesses, this multiple ranges from 2× to 5×, depending on industry, growth trajectory, customer concentration, lease terms, and dozens of other factors.

The best way to know your number is to get a professional valuation. Ours is free, confidential, and grounded in real market data.`,
    tip: "Before you consider price, discuss the tax implications of a sale with a qualified tax advisor. The question isn't just how much you'll sell for — it's how much you'll keep.",
  },
  {
    title: "Gathering Your Financial Records",
    content: `Before you can market your business, you need to be able to tell its financial story clearly. Buyers and their advisors will scrutinize your numbers carefully, so the more organized and transparent you are, the smoother the process will be.

Here's what to gather before your first consultation:`,
    list: [
      "Three years of profit and loss statements",
      "Three years of federal income tax returns (business)",
      "A current list of fixtures, equipment, and their condition",
      "A copy of your lease and any lease-related documents",
      "A schedule of any loans against the business",
      "Copies of equipment leases",
      "A copy of your franchise agreement (if applicable)",
      "Current inventory levels and valuation",
      "Names of key advisors (accountant, attorney)",
    ],
    tip: "Don't wait until everything is perfect to start the conversation. We work with business owners at every stage of readiness and can help you identify what needs to be addressed before going to market.",
  },
  {
    title: "Understanding Who Buys Businesses",
    content: `The typical small business buyer may surprise you. Most are not wealthy investors or private equity firms. They are individuals in career transition — recently laid off, burned out from corporate life, or simply ready to be their own boss.

Nearly 50% of buyers have less than $100,000 to invest. Most have never owned a business before. They are motivated by independence and control more than by financial return. Understanding this helps you present your business in a way that resonates with the actual buyer pool.

Common buyer motivations include:`,
    list: [
      "Job loss or involuntary career transition",
      "Desire for independence and control over their future",
      "Early or forced retirement",
      "Dissatisfaction with corporate employment",
      "Desire to build equity rather than earn a salary",
    ],
    tip: "The buyer who ultimately purchases your business is probably not who you'd expect. Keep an open mind — the right buyer is the one who is qualified, motivated, and a good fit for your business culture.",
  },
  {
    title: "What Buyers Look For",
    content: `When a buyer evaluates your business, they are primarily asking one question: "Can I make a living from this business and service any acquisition debt?" Everything else flows from there.

The most important factors buyers evaluate:`,
    list: [
      "Cash flow and owner's discretionary earnings",
      "Stability and predictability of revenue",
      "Customer concentration (is revenue spread across many customers, or dependent on a few?)",
      "Quality and condition of equipment and facilities",
      "Strength and transferability of the lease",
      "Quality and retention of key employees",
      "Reason for sale (sellers with credible reasons sell faster)",
      "Growth potential — what can a new owner do to grow the business?",
    ],
    tip: "If your business has a strong online presence, positive reviews, and a clean digital footprint, it will command a premium in today's market. Buyers research businesses thoroughly before making contact.",
  },
  {
    title: "Preparing Your Business for Sale",
    content: `The time to prepare your business for sale is before you decide to sell — not after. Small improvements in presentation, operations, and documentation can meaningfully increase your sale price and reduce time on market.

Practical steps to take now:`,
    list: [
      "Clean up and organize your physical space — first impressions matter",
      "Repair or replace broken or aging equipment",
      "Update signage and exterior appearance",
      "Maintain consistent inventory levels",
      "Document your processes — an operations manual adds real value",
      "Remove personal items that are not included in the sale",
      "Resolve any outstanding legal, tax, or compliance issues",
      "Ensure your financial records are current and accurate",
    ],
    tip: "Creating an operations manual — even a simple one — demonstrates to buyers that your business can run without you. This is one of the most underrated value-builders in a business sale.",
  },
  {
    title: "Maintaining Confidentiality",
    content: `Confidentiality is not just a preference — it is a necessity. If your employees, customers, suppliers, or competitors learn that your business is for sale before you're ready to announce it, the consequences can be severe: key employees may leave, customers may defect, and suppliers may change terms.

At ${brokerConfig.companyName}, confidentiality is Priority #1. We never disclose your business identity without your explicit consent. Every prospective buyer signs a Non-Disclosure Agreement before receiving any identifying information about your business.

We also recommend:`,
    list: [
      "Do not tell employees until the sale is imminent and certain",
      "Do not post on social media or discuss with business associates",
      "Refer all inquiries to your broker — never engage buyers directly",
      "Keep normal business operations throughout the sale process",
    ],
  },
  {
    title: "The Role of Your Business Broker",
    content: `A professional business broker does far more than list your business. We act as your dedicated agent throughout the entire transaction — from valuation and marketing through negotiation and closing.

Here's what we handle on your behalf:`,
    list: [
      "Professional business valuation grounded in market data",
      "Preparation of a confidential business profile for qualified buyers",
      "Targeted marketing to our network of 6,000+ pre-qualified buyers",
      "Screening and qualifying all prospective buyers",
      "Coordinating meetings and site visits",
      "Negotiating price, terms, and deal structure",
      "Managing due diligence and documentation",
      "Coordinating with attorneys, accountants, and lenders through closing",
    ],
    tip: "The best brokers don't just find buyers — they find the right buyers and negotiate the best possible terms. Representation matters.",
  },
];

export default function SellingTutorial() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Seller's Resource Guide
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Selling Tutorial
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Everything you need to know about selling your business — from valuation to closing.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-4 mb-12 p-5 bg-[#e0f7fa] border border-[#00b4c8] rounded">
          <div className="flex-1 min-w-48">
            <p className="text-gray-700 text-sm leading-relaxed">
              This guide covers the most important topics for business sellers. Read through at
              your own pace, or jump to the sections most relevant to your situation.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <Link href="/sell">
              <button className="btn-teal-solid text-sm whitespace-nowrap">
                Get Free Valuation
              </button>
            </Link>
            <a href={`tel:${brokerConfig.brokerPhone}`} className="text-center text-[#00b4c8] text-sm font-semibold hover:underline">
              Call {brokerConfig.brokerPhoneDisplay}
            </a>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="space-y-3">
          {sections.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-[#00b4c8] font-bold text-sm"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-bold text-gray-800"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {section.title}
                  </span>
                </div>
                <span className="text-[#00b4c8] text-lg font-bold flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                    {section.content}
                  </div>

                  {section.list && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#00b4c8] font-bold mt-0.5 flex-shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.tip && (
                    <div className="mt-5 bg-[#e0f7fa] border-l-4 border-[#00b4c8] px-4 py-3 rounded-r">
                      <span className="font-bold text-[#00b4c8] text-xs uppercase tracking-wide">
                        Key Insight:{" "}
                      </span>
                      <span className="text-gray-700 text-sm">{section.tip}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#0a0a1a] rounded p-8 text-center">
          <h3
            className="text-white font-bold text-xl mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Ready to Take the Next Step?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Start with a free, confidential business valuation. No obligation, no pressure.
          </p>
          <Link href="/sell">
            <button className="btn-teal-solid">Request Free Valuation</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
