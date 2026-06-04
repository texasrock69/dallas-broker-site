import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Buying() {
  return (
    <Layout>
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Buying a Business
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="section-heading text-2xl mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          Interested in Buying a Business?
        </h2>
        <div className="w-12 h-1 bg-[#00b4c8] mb-6" />
        <p className="text-gray-600 leading-relaxed mb-6">
          Buying a business can be a complicated procedure, from finding the right one to working
          out all the details required for a smooth transfer of ownership. We offer no-charge
          consultations and an excellent inventory of businesses for sale complete with all of the
          information a serious buyer would want to review.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          To view our current listings or learn more about the buying process, explore the sections
          below. A Non-Disclosure Agreement is required to receive full details on any business for
          sale — complete the quick Online NDA to get started.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/listings">
            <button className="btn-teal-solid">View Business Listings</button>
          </Link>
          <Link href="/online-nda">
            <button className="btn-teal">Complete Online NDA</button>
          </Link>
          <Link href="/buying-tutorial">
            <button className="btn-teal">Buying Tutorial</button>
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
