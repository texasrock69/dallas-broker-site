import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Selling() {
  return (
    <Layout>
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Selling a Business
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="section-heading text-2xl mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          Ready to Sell Your Business?
        </h2>
        <div className="w-12 h-1 bg-[#00b4c8] mb-6" />
        <p className="text-gray-600 leading-relaxed mb-6">
          Selling your business is a major decision! You have devoted your time, money, and energy
          into building, running, and operating your business. It may well represent your life's
          work. If you have already decided that now is the right time to sell, you want the very
          best professional guidance you can get. This is when working in tandem with a professional
          business broker can make the difference between just getting rid of the business and
          selling it for the very best price and terms!
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          We never charge upfront fees and our professional seller representation services are 100%
          performance based. Get started today and request your free business valuation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/sell">
            <button className="btn-teal-solid">Request Free Valuation</button>
          </Link>
          <Link href="/selling-tutorial">
            <button className="btn-teal">Selling Tutorial</button>
          </Link>
        </div>

        {/* Contact */}
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
