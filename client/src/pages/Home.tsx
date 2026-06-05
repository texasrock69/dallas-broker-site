import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const testimonials = [
  {
    quote:
      "The service we received from Toby @ ProPlus Business Alliance definitely exceeded any expectations. I would highly recommend Toby & ProPlus to any business owner who is entertaining their options or just curious about the value of their business. Our business sold in five months and for pretty close to the estimated value from our initial visit.",
    author: "Joey G.",
    role: "Former Business Owner",
  },
  {
    quote:
      "Toby was professional, knowledgeable, and kept everything completely confidential throughout the entire process. He found us a qualified buyer quickly and guided us through every step of the closing. I couldn't have asked for a better experience selling my business.",
    author: "Sandra M.",
    role: "Former Restaurant Owner, Dallas",
  },
  {
    quote:
      "As a first-time business buyer, I had a lot of questions and concerns. Toby took the time to walk me through everything — from the NDA to due diligence to financing. He was always available and genuinely had my best interests in mind. I'm now the proud owner of a thriving business.",
    author: "Marcus T.",
    role: "Business Buyer, Fort Worth",
  },
];

const trustMetrics = [
  { value: "6,000+", label: "Qualified Buyers in Network" },
  { value: "100%", label: "Performance Based — No Upfront Fees" },
  { value: "Free", label: "Confidential Business Valuation" },
  { value: "30+", label: "Years of Combined Industry Experience" },
];

const processSteps = [
  {
    step: "01",
    title: "Free Valuation",
    desc: "We start with a confidential, no-obligation valuation so you know exactly what your business is worth in today's market.",
  },
  {
    step: "02",
    title: "Strategic Marketing",
    desc: "We represent your business — not just list it. Our targeted approach reaches qualified buyers while protecting your confidentiality.",
  },
  {
    step: "03",
    title: "Qualified Buyers",
    desc: "We screen every buyer against your business profile. You only meet serious, financially qualified candidates.",
  },
  {
    step: "04",
    title: "Successful Close",
    desc: "We guide you through negotiations, due diligence, and closing — ensuring you get the best possible price and terms.",
  },
];

const whyUs = [
  {
    icon: "🔒",
    title: "Confidentiality First",
    desc: "Your employees, customers, and competitors will never know your business is for sale until you're ready to announce it.",
  },
  {
    icon: "💼",
    title: "We Represent You",
    desc: "Unlike listing services, we act as your dedicated agent — advocating for your interests at every step of the transaction.",
  },
  {
    icon: "📊",
    title: "Data-Driven Pricing",
    desc: "Our valuations are grounded in current market data, comparable sales, and deep industry knowledge — not guesswork.",
  },
  {
    icon: "🤝",
    title: "No Sale, No Fee",
    desc: "We only get paid when you do. Our 100% performance-based model means our success is completely aligned with yours.",
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const goTo = (index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, "right");
  const next = () => goTo((current + 1) % testimonials.length, "left");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("left");
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
        setAnimating(false);
      }, 350);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            What Our Clients Say
          </p>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Prev button */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#00b4c8] hover:text-[#00b4c8] transition-colors"
            aria-label="Previous"
          >
            &#8592;
          </button>

          {/* Card */}
          <div
            className="flex-1 text-center px-4"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "left" ? "-40px" : "40px"})`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <div className="text-[#00b4c8] text-4xl leading-none mb-4">&ldquo;</div>
            <blockquote
              className="text-gray-700 text-lg leading-relaxed font-medium italic mb-5 max-w-2xl mx-auto"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              {t.quote}
            </blockquote>
            <cite className="not-italic">
              <span className="block font-bold text-gray-800 text-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
                {t.author}
              </span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">{t.role}</span>
            </cite>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#00b4c8] hover:text-[#00b4c8] transition-colors"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "left" : "right")}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === current ? "#00b4c8" : "#d1d5db" }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* ── PARALLAX HERO ── */}
      <section
        className="parallax-hero"
        style={{ backgroundImage: `url(${brokerConfig.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="hero-inner">
          <div className="max-w-2xl">
            <p
              className="text-[#00b4c8] text-xs uppercase tracking-[0.25em] font-semibold mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              {brokerConfig.locationShort} · Business Brokerage
            </p>
            <h1
              className="text-white font-extrabold leading-none mb-4"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Selling Your Business
              <br />
              <span style={{ color: "#00b4c8" }}>Is Our Business.</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
              Experience matters. {brokerConfig.companyName} delivers confidential, results-driven
              representation for business owners ready to sell — and buyers ready to invest.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/sell">
                <button className="btn-teal-solid px-8 py-3 text-sm">
                  Get Your Free Valuation
                </button>
              </Link>
              <Link href="/online-nda">
                <button
                  className="px-8 py-3 text-sm font-semibold border-2 border-white/60 text-white hover:border-white hover:bg-white/10 transition-all"
                  style={{ fontFamily: "Raleway, sans-serif", borderRadius: "2px" }}
                >
                  I'm a Buyer — Start Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST METRICS BAR ── */}
      <section className="bg-[#0a0a1a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustMetrics.map((m, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className="text-[#00b4c8] font-extrabold text-2xl md:text-3xl"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {m.value}
                </span>
                <span className="text-gray-400 text-xs mt-1 leading-tight">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELL / BUY SPLIT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded overflow-hidden shadow-sm">
            {/* Sell */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center mb-4">
                <span className="text-[#00b4c8] text-lg">↑</span>
              </div>
              <h2
                className="text-gray-900 font-bold text-2xl mb-3"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Thinking About Selling?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                You've built something valuable. We help you maximize that value with a confidential,
                professional sale process — no upfront costs, no guesswork, no surprises.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Free, confidential business valuation",
                  "No upfront fees — 100% performance based",
                  "Access to 6,000+ pre-qualified buyers",
                  "Full confidentiality throughout the process",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#00b4c8] mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/sell">
                  <button className="btn-teal-solid text-sm">Get Free Valuation</button>
                </Link>
                <Link href="/selling">
                  <button className="btn-teal text-sm">Learn More</button>
                </Link>
              </div>
            </div>

            {/* Buy */}
            <div className="p-10 bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center mb-4">
                <span className="text-[#00b4c8] text-lg">↓</span>
              </div>
              <h2
                className="text-gray-900 font-bold text-2xl mb-3"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Ready to Buy a Business?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                Owning a business is one of the most powerful wealth-building decisions you can make.
                We match serious buyers with the right opportunities — confidentially and efficiently.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Free buyer consultations — no obligation",
                  "Confidential listings across all industries",
                  "Guidance from search through closing",
                  "Financing resources available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#00b4c8] mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/online-nda">
                  <button className="btn-teal-solid text-sm">Complete NDA to View Listings</button>
                </Link>
                <Link href="/buy">
                  <button className="btn-teal text-sm">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p
              className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              The Process
            </p>
            <h2
              className="text-white font-extrabold text-3xl"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              How We Sell Your Business
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="relative">
                <div
                  className="text-5xl font-extrabold mb-4"
                  style={{ color: "rgba(0,180,200,0.15)", fontFamily: "Raleway, sans-serif" }}
                >
                  {s.step}
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                {/* connector line */}
                <div className="hidden md:block absolute top-6 right-0 w-1/2 h-px bg-[#00b4c8]/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About text */}
            <div>
              <p
                className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Why {brokerConfig.companyName}
              </p>
              <h2
                className="text-gray-900 font-extrabold text-3xl mb-4"
                style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.01em" }}
              >
                We Don't Just List Businesses.
                <br />
                <span className="text-[#00b4c8]">We Represent Them.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Most brokers post your business on a website and wait for calls. We take a
                fundamentally different approach — acting as your dedicated agent, understanding
                the emotional weight of selling, and working proactively to find the right buyer
                at the right price.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Affiliated with Business Broker Development Group, LLC, {brokerConfig.companyName}{" "}
                brings a proven, systematic process to every engagement — with confidentiality as
                the non-negotiable foundation.
              </p>

              {/* Broker card */}
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded bg-gray-50">
                {brokerConfig.brokerPhoto && (
                  <img
                    src={brokerConfig.brokerPhoto}
                    alt={brokerConfig.brokerName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00b4c8]"
                  />
                )}
                <div>
                  <div
                    className="font-bold text-gray-800"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {brokerConfig.brokerName}
                  </div>
                  <div className="text-gray-500 text-xs mb-1">{brokerConfig.brokerTitle}</div>
                  <a
                    href={`tel:${brokerConfig.brokerPhone}`}
                    className="text-[#00b4c8] text-sm font-semibold hover:underline"
                  >
                    {brokerConfig.brokerPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Why us grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="p-5 border border-gray-100 rounded bg-gray-50 hover:border-[#00b4c8] hover:shadow-sm transition-all"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3
                    className="font-bold text-gray-800 mb-2 text-sm"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL CAROUSEL ── */}
      <TestimonialCarousel />

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #0d2030 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Ready to Get Started?
          </p>
          <h2
            className="text-white font-extrabold text-3xl mb-4"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.01em" }}
          >
            Your Next Chapter Starts With a Conversation.
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you're selling a business you've built over decades or looking for your next
            investment, {brokerConfig.brokerName} is ready to help — confidentially, professionally,
            and at no upfront cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sell">
              <button className="btn-teal-solid px-8 py-3">Free Business Valuation</button>
            </Link>
            <Link href="/online-nda">
              <button
                className="px-8 py-3 text-sm font-semibold border-2 border-white/40 text-white hover:border-white hover:bg-white/10 transition-all"
                style={{ fontFamily: "Raleway, sans-serif", borderRadius: "2px" }}
              >
                Complete Online NDA
              </button>
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-6">
            Or call directly:{" "}
            <a
              href={`tel:${brokerConfig.brokerPhone}`}
              className="text-[#00b4c8] hover:underline font-semibold"
            >
              {brokerConfig.brokerPhoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
