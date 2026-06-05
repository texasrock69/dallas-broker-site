import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Listings() {
  // Load BizBuySell dependencies once
  useEffect(() => {
    // jQuery
    if (!document.getElementById("bbs-jquery")) {
      const jq = document.createElement("script");
      jq.id = "bbs-jquery";
      jq.src = "https://code.jquery.com/jquery-2.2.4.min.js";
      jq.integrity = "sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=";
      jq.crossOrigin = "anonymous";
      document.head.appendChild(jq);
    }

    // iFrame Resizer
    if (!document.getElementById("bbs-resizer")) {
      const resizer = document.createElement("script");
      resizer.id = "bbs-resizer";
      resizer.src =
        "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.js";
      resizer.onload = () => {
        try {
          // @ts-ignore
          if (window.iFrameResize) window.iFrameResize({ checkOrigin: false }, "#bbs");
        } catch (e) {}
      };
      document.head.appendChild(resizer);
    }
  }, []);

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
            For Buyers
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Current Business Listings
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Browse our available businesses for sale across {brokerConfig.locationShort} and
            nationwide. When you find one that interests you, complete our Online NDA to
            receive confidential details.
          </p>
        </div>
      </div>

      {/* Intro strip */}
      <div className="bg-[#00b4c8]/10 border-b border-[#00b4c8]/20 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-700 text-sm">
            <strong>25+ listings nationwide</strong> — see something you like? Complete our Online NDA to unlock confidential details, financials, and seller information.
          </p>
          <Link href="/online-nda">
            <button className="btn-teal-solid text-xs px-5 py-2 whitespace-nowrap">
              Complete Online NDA
            </button>
          </Link>
        </div>
      </div>

      {/* BizBuySell Embed */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Reset window.define so BizBuySell scripts load correctly in React */}
        <script
          dangerouslySetInnerHTML={{ __html: "window.define = undefined;" }}
        />
        <iframe
          id="bbs"
          src="https://www.bizbuysell.com/brokerdirectory/Profile/ViewAllListings.aspx?J=b&I=35082&m_dmr=1"
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          style={{ borderStyle: "none", width: "100%", minHeight: "800px" }}
          title="Business Listings"
        />
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-gray-900 font-extrabold text-2xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Interested in a Listing?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Complete our Online NDA to receive full details — including
            financials, business name, and seller information — on any listing that interests you.
            No obligation, takes about 3 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/online-nda">
              <button className="btn-teal-solid px-8 py-3">Complete Online NDA</button>
            </Link>
            <a
              href={`tel:${brokerConfig.brokerPhone}`}
              className="px-8 py-3 text-sm font-semibold border-2 border-gray-300 text-gray-700 hover:border-[#00b4c8] hover:text-[#00b4c8] transition-all"
              style={{ fontFamily: "Raleway, sans-serif", borderRadius: "2px" }}
            >
              Call {brokerConfig.brokerPhoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
