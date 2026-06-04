import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

const industryTypes = [
  "Restaurants & Food Service",
  "Retail & E-Commerce",
  "Auto Service & Repair",
  "Healthcare & Medical",
  "Manufacturing & Distribution",
  "Service Businesses",
  "Construction & Trades",
  "Technology & Software",
  "Franchises",
  "And many more...",
];

export default function Listings() {
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
            For Buyers
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Business Listings
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Confidential listings across {brokerConfig.locationShort} and beyond.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="text-gray-900 font-extrabold text-2xl mb-4"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Why Listings Aren't All Public
            </h2>
            <div className="w-10 h-1 bg-[#00b4c8] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Confidentiality is the foundation of every business sale we handle. When a business
              is publicly listed, employees may leave, customers may defect, and competitors may
              take advantage. That's why most of our listings are never posted publicly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              To protect our seller clients, we require a brief Non-Disclosure Agreement before
              sharing any confidential business details — including the business name, location,
              financials, or owner information.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The NDA is free, takes about 3 minutes, and carries no obligation. It simply
              confirms that you will treat the information you receive with appropriate
              confidentiality.
            </p>
            <Link href="/online-nda">
              <button className="btn-teal-solid">Complete NDA to View Listings</button>
            </Link>
          </div>

          {/* Industries */}
          <div>
            <h3
              className="text-gray-800 font-bold text-lg mb-4"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Industries We Represent
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {industryTypes.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00b4c8] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA box */}
        <div className="bg-[#0a0a1a] rounded p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="text-white font-bold text-xl mb-2"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Ready to See What's Available?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Complete our quick Online NDA to receive our full confidential inventory and speak
                with {brokerConfig.brokerName} about opportunities that match your goals and budget.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/online-nda">
                <button className="btn-teal-solid w-full">Complete Online NDA</button>
              </Link>
              <a href={`tel:${brokerConfig.brokerPhone}`} className="text-center text-[#00b4c8] text-sm font-semibold hover:underline">
                Or call {brokerConfig.brokerPhoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Broker contact card */}
        <div className="border border-gray-200 rounded p-6 flex flex-wrap items-center gap-6">
          {brokerConfig.brokerPhoto && (
            <img
              src={brokerConfig.brokerPhoto}
              alt={brokerConfig.brokerName}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#00b4c8] flex-shrink-0"
            />
          )}
          <div className="flex-1 min-w-48">
            <div
              className="font-bold text-gray-800 text-lg"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              {brokerConfig.brokerName}
            </div>
            <div className="text-[#00b4c8] text-sm font-semibold">{brokerConfig.brokerTitle}</div>
            <div className="text-gray-500 text-xs">{brokerConfig.companyName}</div>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <a href={`tel:${brokerConfig.brokerPhone}`} className="text-[#00b4c8] hover:underline font-semibold">
              {brokerConfig.brokerPhoneDisplay}
            </a>
            <a href={`mailto:${brokerConfig.brokerEmail}`} className="text-gray-500 hover:text-[#00b4c8] transition-colors">
              {brokerConfig.brokerEmail}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
