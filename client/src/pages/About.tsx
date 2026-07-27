import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

const values = [
  {
    title: "Confidentiality Above All",
    desc: "Every engagement begins and ends with discretion. We protect your identity, your employees, and your business relationships throughout the entire sale process.",
  },
  {
    title: "Representation, Not Just Listings",
    desc: "We act as your dedicated business agent — advocating for your interests, preparing your story, and presenting your business to the right buyers at the right time.",
  },
  {
    title: "Performance-Based Partnership",
    desc: "We don't charge upfront fees. Our compensation is tied entirely to your success, which means we are as motivated to close as you are.",
  },
  {
    title: "Buyer Network of 6,000+",
    desc: "Years of relationship-building have created a deep network of pre-qualified buyers actively seeking acquisition opportunities across industries.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <div
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0d2030 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Who We Are
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            About {brokerConfig.companyName}
          </h1>
          <p className="text-gray-400 text-sm">{brokerConfig.companySubtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Intro section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="text-gray-900 font-extrabold text-2xl mb-4"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              A Different Kind of Business Broker
            </h2>
            <div className="w-10 h-1 bg-[#00b4c8] mb-6" />
            <p className="text-gray-500 leading-relaxed mb-4">
              {brokerConfig.companyName}, affiliated with Business Broker Development Group, LLC,
              was built on a simple but powerful belief: selling a business is one of the most
              significant decisions a person will ever make — and it deserves more than a listing
              on a website.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              We provide comprehensive advisory and brokerage services to business owners and
              buyers across {brokerConfig.locationShort} and beyond. Whether you are ready to sell
              today or simply exploring your options, we offer a free, confidential consultation
              with no obligation.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our approach is personal, systematic, and results-driven. We don't just find buyers —
              we find the <em>right</em> buyers, negotiate the best terms, and guide every
              transaction from first conversation to final closing.
            </p>
            <Link href="/sell">
              <button className="btn-teal-solid">Request a Free Valuation</button>
            </Link>
          </div>

          {/* Broker card */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                {brokerConfig.brokerPhoto && (
                  <img
                    src={brokerConfig.brokerPhoto}
                    alt={brokerConfig.brokerName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#00b4c8] flex-shrink-0"
                  />
                )}
                <div>
                  <div
                    className="font-bold text-gray-900 text-lg"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {brokerConfig.brokerName}
                  </div>
                  <div className="text-[#00b4c8] text-sm font-semibold">{brokerConfig.brokerTitle}</div>
                  <div className="text-gray-500 text-xs mt-1">{brokerConfig.companyName}</div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <a
                  href={`tel:${brokerConfig.brokerPhone}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#00b4c8] transition-colors"
                >
                  <span>📞</span> {brokerConfig.brokerPhoneDisplay}
                </a>
                <a
                  href={`mailto:${brokerConfig.brokerEmail}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#00b4c8] transition-colors"
                >
                  <span>✉️</span> {brokerConfig.brokerEmail}
                </a>
                {brokerConfig.brokerEmail2 && (
                  <a
                    href={`mailto:${brokerConfig.brokerEmail2}`}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#00b4c8] transition-colors"
                  >
                    <span>✉️</span> {brokerConfig.brokerEmail2}
                  </a>
                )}
              </div>
            </div>

            {/* Testimonial */}
            {brokerConfig.testimonial && (
              <div className="bg-white border-l-4 border-[#00b4c8] p-5 shadow-sm">
                <p className="text-gray-500 italic text-sm leading-relaxed mb-3">
                  "{brokerConfig.testimonial.quote}"
                </p>
                <cite className="text-xs font-bold text-gray-500 not-italic uppercase tracking-widest">
                  — {brokerConfig.testimonial.author}
                </cite>
              </div>
            )}
          </div>
        </div>

        {/* Values grid */}
        <div>
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2 text-center"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Our Core Values
          </p>
          <h2
            className="text-gray-900 font-extrabold text-2xl mb-10 text-center"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 border border-gray-200 rounded hover:border-[#00b4c8] hover:shadow-sm transition-all"
              >
                <div className="w-8 h-1 bg-[#00b4c8] mb-4" />
                <h3
                  className="font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-gray-900 font-extrabold text-2xl mb-10"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Our Services
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Selling a Business",
                body: `Selling businesses is our business. We offer complete advisory and brokerage services performed in a strictly confidential manner. There is no charge for consultation, and we provide a no-cost valuation so you know exactly what your business is worth in today's market. We never charge upfront fees — our services are 100% performance based.`,
                cta: { label: "Learn About Selling", href: "/selling" },
              },
              {
                title: "Preparing a Business for Sale",
                body: `The decision to sell is serious, and preparation makes all the difference. We advise on current market conditions, pricing strategy, and how to position your business for maximum value. We help you eliminate surprises before they become deal-killers, and ensure your business is presented in the strongest possible light.`,
                cta: { label: "Selling Tutorial", href: "/selling-tutorial" },
              },
              {
                title: "Buying a Business",
                body: `For anyone considering the purchase of a business, we offer no-charge consultations and a curated inventory of businesses for sale. We guide buyers from initial search through due diligence and closing — ensuring you find the right business at the right price, with the right terms.`,
                cta: { label: "Learn About Buying", href: "/buy" },
              },
            ].map((s) => (
              <div key={s.title} className="border-l-4 border-[#00b4c8] pl-6">
                <h3
                  className="text-gray-800 font-bold text-lg mb-2"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-3">{s.body}</p>
                <Link href={s.cta.href}>
                  <button className="btn-teal text-xs">{s.cta.label}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
