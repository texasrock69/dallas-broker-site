import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";

export default function BecomeBroker() {
  return (
    <Layout>
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Become a Business Broker
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="section-heading text-2xl mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          Join the Business Broker Development Group
        </h2>
        <div className="w-12 h-1 bg-[#00b4c8] mb-6" />

        <p className="text-gray-500 leading-relaxed mb-6">
          Are you interested in becoming a professional business broker? The Business Broker
          Development Group offers a proven system, comprehensive training, and ongoing support to
          help you build a successful business brokerage practice.
        </p>
        <p className="text-gray-500 leading-relaxed mb-8">
          For more information about joining our network and becoming a business broker in your
          area, please visit our main website.
        </p>

        <a
          href={brokerConfig.becomeBrokerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-teal-solid inline-block"
        >
          Learn More at BizBrokerSuccess.com
        </a>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded p-6">
          <div className="font-bold text-gray-800 text-lg mb-1" style={{ fontFamily: "Raleway, sans-serif" }}>
            {brokerConfig.brokerName}
          </div>
          <div className="text-gray-500 text-sm mb-2">{brokerConfig.brokerTitle}</div>
          <div className="text-gray-500 text-sm">{brokerConfig.brokerPhoneDisplay}</div>
          <a href={`mailto:${brokerConfig.brokerEmail}`} className="text-[#00b4c8] hover:underline text-sm">
            {brokerConfig.brokerEmail}
          </a>
        </div>
      </div>
    </Layout>
  );
}
