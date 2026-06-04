import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Listings() {
  return (
    <Layout>
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Business Listings
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="section-heading text-2xl mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          Our Current Listings
        </h2>
        <div className="w-12 h-1 bg-[#00b4c8] mb-6" />

        <p className="text-gray-600 leading-relaxed mb-4">
          Not all business listings we have for sale are listed here due to confidentiality. To
          receive full details on any business for sale, a Non-Disclosure Agreement is required.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Please complete the Online NDA below to receive our current confidential listings and to
          be contacted by {brokerConfig.brokerName} regarding businesses that match your interests.
        </p>

        <div className="bg-[#e0f7fa] border border-[#00b4c8] rounded p-6 mb-8">
          <h3
            className="text-[#00b4c8] font-bold text-lg mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Request Current Listings
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Complete our quick Online NDA to receive our full, confidential list of businesses
            currently available for purchase in the {brokerConfig.locationShort} area and beyond.
          </p>
          <Link href="/online-nda">
            <button className="btn-teal-solid">Complete Online NDA to View Listings</button>
          </Link>
        </div>

        {/* Contact */}
        <div className="bg-gray-50 border border-gray-200 rounded p-6">
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
