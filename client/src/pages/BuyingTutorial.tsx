import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { useState } from "react";
import { Link } from "wouter";

const sections = [
  {
    title: "Why Buy an Existing Business?",
    content: `Starting a business from scratch is one of the riskiest things a person can do. The failure rate for new businesses in the first five years remains stubbornly high — often cited above 50%. Buying an existing business is fundamentally different.

When you acquire an existing business, you inherit:`,
    list: [
      "An established customer base and revenue stream",
      "Trained employees who know the operations",
      "Supplier relationships already in place",
      "A physical location with existing foot traffic or brand recognition",
      "A financial track record you can evaluate before you invest",
    ],
    tip: "The biggest advantage of buying an existing business is that you can evaluate actual performance — not projections. You're buying a proven model, not a bet.",
  },
  {
    title: "Who Buys Businesses?",
    content: `The typical business buyer is not a wealthy investor or a private equity firm. Most buyers are individuals in career transition — recently laid off, burned out from corporate employment, or simply ready to control their own destiny.

Nearly 50% of buyers have less than $100,000 to invest. Most have never owned a business before. Their primary motivations are independence and control — not just financial return.

Common buyer profiles include:`,
    list: [
      "Corporate professionals seeking an exit from employment",
      "Recently laid-off executives with severance to invest",
      "Semi-retired individuals seeking active income with flexibility",
      "Entrepreneurs looking to acquire rather than start",
      "Investors seeking cash-flowing assets",
    ],
    tip: "You don't need to have run a business before to buy one successfully. Many of the best business owners are first-time buyers who brought fresh energy and outside perspective to an established operation.",
  },
  {
    title: "What to Look For in a Business",
    content: `Not all businesses are created equal. Before falling in love with a concept, evaluate the fundamentals that determine whether a business is actually a good investment.

Key evaluation criteria:`,
    list: [
      "Cash flow: Can the business support your living expenses and service any acquisition debt?",
      "Revenue stability: Is income consistent, or highly seasonal or cyclical?",
      "Customer concentration: Is revenue spread across many customers, or dependent on one or two?",
      "Reason for sale: Does the seller's reason make sense? Is it credible?",
      "Lease terms: Is the lease transferable? How long is remaining? What are the terms?",
      "Employee stability: Are key employees likely to stay after the sale?",
      "Growth potential: What can a new owner do to grow the business?",
      "Industry trends: Is the industry growing, stable, or declining?",
    ],
    tip: "The most important number in any business acquisition is Seller's Discretionary Earnings (SDE) — the total financial benefit to a full-time owner-operator. This is the foundation of business valuation.",
  },
  {
    title: "The Non-Disclosure Agreement (NDA)",
    content: `Before receiving any confidential information about a business for sale — including the business name, financial statements, or location — you will be required to sign a Non-Disclosure Agreement.

This is completely standard practice and protects the seller's confidential information. It is not a commitment to buy, and it carries no financial obligation.

Our Online NDA takes about 3 minutes to complete. Once received, we will contact you to discuss your interests and share appropriate listings.`,
    tip: "Completing the NDA is the single fastest way to move from 'curious' to 'informed.' It opens the door to our full confidential inventory and a personal consultation with your broker.",
  },
  {
    title: "Conducting Due Diligence",
    content: `Due diligence is the process of verifying everything the seller has represented about the business before you commit to a purchase. It is your opportunity to confirm the numbers, understand the risks, and make an informed decision.

Standard due diligence typically includes:`,
    list: [
      "Review of 3 years of financial statements and tax returns",
      "Verification of revenue and expense claims",
      "Inspection of equipment, inventory, and physical assets",
      "Review of the lease and any real estate considerations",
      "Legal review of contracts, licenses, and any pending litigation",
      "Conversations with key employees (with seller's permission)",
      "Review of customer and supplier relationships",
      "Environmental and regulatory compliance review (if applicable)",
    ],
    tip: "Never skip due diligence to speed up a deal. The cost of professional advisors during this phase is minimal compared to the risk of discovering a problem after closing.",
  },
  {
    title: "Financing Your Purchase",
    content: `Many buyers assume they need to pay cash for a business. In reality, most small business acquisitions involve some form of financing — and multiple options are available.

Common financing structures:`,
    list: [
      "SBA 7(a) Loans: The most common financing tool for business acquisitions, with favorable terms and down payments as low as 10%",
      "Seller Financing: The seller carries part of the purchase price as a note, often at favorable interest rates",
      "Conventional Bank Loans: Available for well-qualified buyers with strong collateral",
      "ROBS (Rollover for Business Startups): Use retirement funds to buy a business without penalties",
      "Combination Financing: Most deals use a mix of buyer equity, seller financing, and bank debt",
    ],
    tip: "Seller financing is a strong signal of confidence. When a seller is willing to carry a note, it means they believe in the business's ability to perform — and it aligns their interests with yours post-closing.",
  },
  {
    title: "Negotiating and Closing the Deal",
    content: `Once you've identified the right business and completed due diligence, the final phase is negotiating the terms and closing the transaction.

Key deal elements to negotiate:`,
    list: [
      "Purchase price and payment structure",
      "Allocation of the purchase price (affects taxes for both parties)",
      "Seller training and transition period (typically 2–4 weeks)",
      "Non-compete agreement terms",
      "Inventory included in the sale",
      "Lease assignment or new lease terms",
      "Representations and warranties",
      "Closing date and conditions",
    ],
    tip: "The closing process typically takes 30–90 days from accepted offer to final transfer. Having experienced advisors — broker, attorney, and accountant — on your team makes this process significantly smoother.",
  },
];

export default function BuyingTutorial() {
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
            Buyer's Resource Guide
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Buying Tutorial
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            A complete guide to buying a business — from your first search to closing day.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-4 mb-12 p-5 bg-[#e0f7fa] border border-[#00b4c8] rounded">
          <div className="flex-1 min-w-48">
            <p className="text-gray-700 text-sm leading-relaxed">
              Whether you're a first-time buyer or an experienced acquirer, this guide walks you
              through every stage of the business buying process.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <Link href="/online-nda">
              <button className="btn-teal-solid text-sm whitespace-nowrap">
                Complete NDA to Start
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
            Ready to Find Your Business?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Complete our quick Online NDA to receive our confidential listings and speak with{" "}
            {brokerConfig.brokerName} about opportunities that match your goals.
          </p>
          <Link href="/online-nda">
            <button className="btn-teal-solid">Complete Online NDA</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
