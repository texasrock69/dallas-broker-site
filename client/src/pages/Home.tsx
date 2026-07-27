import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Parallax Hero */}
      <section
        className="parallax-hero flex flex-col justify-end"
        style={{ backgroundImage: `url(${brokerConfig.heroImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero text */}
        <div className="relative z-10 px-6 pb-12 max-w-3xl">
          <p
            className="text-white/80 text-sm uppercase tracking-widest mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            SELLING YOUR BUSINESS
          </p>
          <h1
            className="text-white font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Raleway, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            IS OUR BUSINESS
          </h1>
          <p className="text-white/90 text-lg mb-6">
            Experience Matters. Connect With Us For A Free Business Valuation
          </p>
          <Link href="/sell">
            <button className="btn-teal text-white border-white hover:bg-white hover:text-black">
              No Obligation Consult
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stat-bar py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-around gap-4 text-center">
            {brokerConfig.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <div className="hidden md:block w-px h-10 bg-white/30" />
                )}
                <span
                  className="text-white font-bold text-sm md:text-base tracking-wide"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two column: Sell / Buy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Selling */}
            <div>
              <h2
                className="section-heading text-2xl mb-4"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Business For Sale
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                Click here to request our current business for sale listings. Not all business
                listings we have for sale are listed due to confidentiality.
              </p>
              <Link href="/listings">
                <button className="btn-teal mb-8 text-sm">Business Listings</button>
              </Link>

              <h2
                className="section-heading text-2xl mb-4"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Selling a Business
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Selling your business is a major decision! You have devoted your time, money, and
                energy into building, running, and operating your business. We never charge upfront
                fees and our professional seller representation services are 100% performance based.
                Get started today and request your free business valuation.
              </p>
              <Link href="/selling">
                <button className="btn-teal text-sm">Learn More</button>
              </Link>
            </div>

            {/* Buying */}
            <div>
              <h2
                className="section-heading text-2xl mb-4"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Buying a Business
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Buying a business can be a complicated procedure, from finding the right one to
                working out all the details required for a smooth transfer of ownership.
              </p>
              <Link href="/buy">
                <button className="btn-teal text-sm">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="section-heading text-3xl mb-2"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {brokerConfig.companyName}
              </h2>
              <div className="w-12 h-1 bg-[#00b4c8] mb-6" />

              <h3
                className="text-gray-800 font-bold text-lg mb-3 uppercase tracking-wide"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                The Difference:
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {brokerConfig.companyName}, affiliated with Business Broker Development Group, LLC.
                is a one stop shop with a unique service for every situation. Most importantly, we
                do not "list" businesses; we represent them. Understanding the emotions of selling
                a business is at the core of our services!
              </p>

              <h3
                className="text-gray-800 font-bold text-lg mb-3 uppercase tracking-wide"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Our Philosophy:
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Confidentiality is Priority #1. Our one-on-one philosophy is a unique systematic
                approach to selling a business. The business owner becomes an integral part of the
                process because who knows their business better than them? We act as their business
                agent with the business owner as the star, meaning we represent their interests,
                allowing them to present their business.
              </p>

              {/* Broker info */}
              <div className="border-l-4 border-[#00b4c8] pl-4">
                <div
                  className="font-bold text-gray-800 text-lg"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {brokerConfig.brokerName}
                </div>
                <div className="text-gray-500 text-sm">{brokerConfig.brokerTitle}</div>
                <div className="mt-2 text-sm text-gray-600">{brokerConfig.brokerPhoneDisplay}</div>
                <a
                  href={`mailto:${brokerConfig.brokerEmail}`}
                  className="text-sm text-[#00b4c8] hover:underline block"
                >
                  {brokerConfig.brokerEmail}
                </a>
                {brokerConfig.brokerEmail2 && (
                  <a
                    href={`mailto:${brokerConfig.brokerEmail2}`}
                    className="text-sm text-[#00b4c8] hover:underline block"
                  >
                    {brokerConfig.brokerEmail2}
                  </a>
                )}
              </div>
            </div>

            {/* Right column: teamwork image + testimonial */}
            <div className="flex flex-col gap-6">
              <img
                src="/manus-storage/teamwork_36b3c992.jpg"
                alt="Business team"
                className="w-full rounded shadow-md object-cover"
                style={{ maxHeight: "320px" }}
              />

              {brokerConfig.testimonial && (
                <div className="bg-white border-l-4 border-[#00b4c8] p-6 shadow-sm">
                  <h4
                    className="text-gray-500 text-xs uppercase tracking-widest mb-3"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    Client Testimonial
                  </h4>
                  <blockquote className="text-gray-600 italic leading-relaxed mb-3">
                    "{brokerConfig.testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-gray-700 not-italic">
                    — {brokerConfig.testimonial.author}
                  </cite>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="stat-bar py-10 text-center">
        <h2
          className="text-white font-bold text-2xl mb-3"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Ready to Buy or Sell a Business?
        </h2>
        <p className="text-white/80 mb-5">
          Contact {brokerConfig.brokerName} today for a free, confidential consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/sell">
            <button className="btn-teal-solid">Free Business Valuation</button>
          </Link>
          <Link href="/online-nda">
            <button
              className="border-2 border-white text-white px-6 py-2 font-semibold text-sm hover:bg-white hover:text-[#00b4c8] transition-all"
              style={{ fontFamily: "Raleway, sans-serif", borderRadius: "2px" }}
            >
              Complete Online NDA
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
