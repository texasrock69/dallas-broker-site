import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            About {brokerConfig.companyName}
          </h1>
          <p className="text-gray-400 mt-1 text-sm">{brokerConfig.companySubtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <h2
          className="section-heading text-3xl mb-2"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          {brokerConfig.companyName}
        </h2>
        <h3 className="text-gray-500 text-lg mb-6">{brokerConfig.companySubtitle}</h3>
        <div className="w-12 h-1 bg-[#00b4c8] mb-8" />

        <p className="text-gray-600 leading-relaxed mb-8">
          We provide services to anyone considering buying or selling a business. We are happy to
          answer any questions about these activities including pricing and valuation issues, exit
          strategies, business financing or any other subjects related to the purchase or sale of a
          business. Make sure to visit the many informative areas of this website. Don't hesitate to
          call us today, or click below for a free business valuation:
        </p>

        <Link href="/sell">
          <button className="btn-teal-solid mb-12">Free Valuation</button>
        </Link>

        {/* Services */}
        <h2
          className="section-heading text-2xl mb-8 uppercase tracking-wide"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Selling */}
          <div className="border-l-4 border-[#00b4c8] pl-6">
            <h3
              className="text-gray-800 font-bold text-xl mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Selling a Business
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Selling businesses is our business and we offer complete advisory and brokerage
              services performed in a strictly confidential manner. If you are thinking of selling,
              or even considering it, why not give us a call. There is no charge for consultation,
              we offer a NO COST VALUATION to let you know what your business is worth in today's
              market, and they are strictly confidential. Why not contact us today. For additional
              information, visit the Selling Your Business section here on our site. There is also a
              short questionnaire there that will help us in our initial consultation.
            </p>
          </div>

          {/* Preparing */}
          <div className="border-l-4 border-[#00b4c8] pl-6">
            <h3
              className="text-gray-800 font-bold text-xl mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Preparing a Business For Sale
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The decision to sell one's business is a serious step. We can't make the decision to
              sell for you, but we can give you the information you need to help make it. We can tell
              you about current market conditions, pricing and structuring the business with a free
              valuation so it will sell, getting it ready for sale and answer any other questions you
              might have. You may also want to review the articles under Selling Tutorial that is
              also available on our site.
            </p>
          </div>

          {/* Buying */}
          <div className="border-l-4 border-[#00b4c8] pl-6">
            <h3
              className="text-gray-800 font-bold text-xl mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Buying a Business
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For anyone considering the purchase of a business, we offer no charge consultations
              and an excellent inventory of businesses for sale complete with all of the information
              a serious buyer would want to review. You might want to visit the Buying a Business
              section of our site for more articles on buying a business. There is also a
              Questionnaire that helps us to help you in your search for the best business for you,
              as well as a question and answer section that might be helpful. We are happy to answer
              any questions you might have that are not covered in our Buying a Business section.
              Call us today!
            </p>
          </div>
        </div>

        {/* Contact block */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded p-6">
          <div
            className="font-bold text-gray-800 text-xl mb-1"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            {brokerConfig.brokerName}
          </div>
          <div className="text-gray-500 text-sm mb-3">{brokerConfig.brokerTitle}</div>
          <div className="text-gray-600 text-sm">{brokerConfig.brokerPhoneDisplay}</div>
          <a
            href={`mailto:${brokerConfig.brokerEmail}`}
            className="text-[#00b4c8] hover:underline text-sm block"
          >
            {brokerConfig.brokerEmail}
          </a>
          {brokerConfig.brokerEmail2 && (
            <a
              href={`mailto:${brokerConfig.brokerEmail2}`}
              className="text-[#00b4c8] hover:underline text-sm block"
            >
              {brokerConfig.brokerEmail2}
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
}
