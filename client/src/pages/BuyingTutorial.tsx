import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";

export default function BuyingTutorial() {
  return (
    <Layout>
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Buying Tutorial
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            A comprehensive guide for business buyers
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-600 leading-relaxed mb-10">
          Buying a business can be a complicated procedure, from finding the right one to working
          out all the details required for a smooth transfer of ownership. The following guide
          covers the most important topics and questions for prospective buyers.
        </p>

        <Section title="Why Buy a Business?">
          <p>
            Buying an existing business offers many advantages over starting one from scratch.
            An existing business already has customers, cash flow, employees, and an established
            reputation. You can evaluate the track record before you buy, which reduces much of the
            risk associated with new ventures.
          </p>
          <p>
            People buy businesses for many reasons:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Job loss or career transition</li>
            <li>Desire for independence and control</li>
            <li>Early retirement or semi-retirement</li>
            <li>Investment opportunity</li>
            <li>Industry expertise they want to leverage</li>
          </ul>
        </Section>

        <Section title="The Buyer Profile">
          <p>
            Almost 50 percent of buyers will have less than $100,000 to invest. In many cases the
            funds, or part of them, will come from personal savings followed by financial assistance
            from family members. Many buyers have never owned a business before, and most will buy
            a business they had never considered until being introduced to it.
          </p>
          <p>
            Their primary reason for going into business is to get out of their present situation —
            be it unemployment or job disagreement. Prospective buyers want to do their own thing,
            be in charge of their own destiny, and they don't want to work for anyone.
          </p>
          <Tip>
            Money is important, but it's not at the top of the list for most buyers — it probably
            ranks fourth or fifth. The desire for independence and control is usually the primary
            motivator.
          </Tip>
        </Section>

        <Section title="What to Look For in a Business">
          <p>
            When evaluating a business to buy, consider these key factors:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>How much money is required to buy the business?</li>
            <li>What is the annual increase in sales?</li>
            <li>How much is the inventory?</li>
            <li>What is the debt structure?</li>
            <li>Will the seller train and stay on for a transition period?</li>
            <li>What makes the business different, special, or unique?</li>
            <li>What is the profit picture in both good and bad times?</li>
            <li>What can be done to grow the business?</li>
          </ul>
        </Section>

        <Section title="Understanding Cash Flow">
          <p>
            The vast majority of buyers want to buy cash flow. Cash flow is not the same thing as
            profit. Most buyers look at the profit and loss statement or tax return, as well as
            owner or family compensation. They will consider any excess compensation to employees
            and family, large one-time expenses, and non-cash items like depreciation and
            amortization.
          </p>
          <p>
            The key question for most buyers is: "Can I make the payments on the business and still
            make a living?" If the business cannot support a living wage, it will be very difficult
            to sell.
          </p>
        </Section>

        <Section title="Due Diligence">
          <p>
            Before completing a purchase, you will want to conduct due diligence — a thorough
            investigation of the business. This typically includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Review of financial statements (3 years minimum)</li>
            <li>Review of tax returns</li>
            <li>Inspection of equipment and facilities</li>
            <li>Review of leases and contracts</li>
            <li>Verification of customer and supplier relationships</li>
            <li>Legal and environmental review</li>
          </ul>
          <Tip>
            Always work with a qualified business broker, attorney, and accountant during due
            diligence. The cost of professional advice is minimal compared to the risk of making
            a poorly informed purchase decision.
          </Tip>
        </Section>

        <Section title="Financing the Purchase">
          <p>
            There are several ways to finance a business purchase:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Personal savings and assets</li>
            <li>Seller financing (the seller carries part of the note)</li>
            <li>SBA loans (Small Business Administration)</li>
            <li>Conventional bank loans</li>
            <li>Family and investor financing</li>
          </ul>
          <p>
            Seller financing is very common in small business transactions and can be advantageous
            for both parties. It shows the seller has confidence in the business and gives the buyer
            more flexible terms.
          </p>
        </Section>

        <Section title="The Non-Disclosure Agreement (NDA)">
          <p>
            Before receiving detailed financial information about any business for sale, you will
            be required to sign a Non-Disclosure Agreement (NDA). This is standard practice and
            protects the seller's confidential business information.
          </p>
          <p>
            Completing our Online NDA is quick, easy, and carries no obligation. Once completed,
            you will be contacted to discuss businesses that match your interests and budget.
          </p>
        </Section>

        {/* Contact block */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded p-6">
          <div className="font-bold text-gray-800 text-lg mb-1" style={{ fontFamily: "Raleway, sans-serif" }}>
            {brokerConfig.brokerName}
          </div>
          <div className="text-gray-500 text-sm mb-2">{brokerConfig.brokerTitle}</div>
          <div className="text-gray-600 text-sm">{brokerConfig.brokerPhoneDisplay}</div>
          <a href={`mailto:${brokerConfig.brokerEmail}`} className="text-[#00b4c8] hover:underline text-sm">
            {brokerConfig.brokerEmail}
          </a>
        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="section-heading text-xl font-bold mb-4 pb-2 border-b border-gray-200"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#e0f7fa] border-l-4 border-[#00b4c8] px-4 py-3 my-4 rounded-r">
      <span className="font-bold text-[#00b4c8] text-sm uppercase tracking-wide">
        Insider Tip:{" "}
      </span>
      <span className="text-gray-700 text-sm">{children}</span>
    </div>
  );
}
