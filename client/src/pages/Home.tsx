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
    label: "Another Testimonial",
    image: "/manus-storage/testimonial_joey_778975a2.jpg",
    textSide: "left" as const,
    // Joey: blurred office background — person is centered/right, text goes left
  },
  {
    quote:
      "I was looking to retire after thirty years, and gave myself a timeline that if my business didn't sell I was simply going to shut down. Toby and ProPlus Business Alliance was able to market and sell my business in less than three months! I couldn't be more satisfied with the professionalism that was displayed. Selling a business can be very emotional and Toby handled the transaction with white glove service from start to finish.",
    author: "Ann G.",
    role: "Former Business Owner",
    label: "Former Business Owner",
    image: "/manus-storage/testimonial_ann_0756a48f.jpg",
    textSide: "left" as const,
    // Ann: face is on the right side of the photo — text goes left
  },
  {
    quote:
      "Working with ProPlus Business Alliance made our business buying experience very enjoyable! Toby was able to consult with us on the process every step of the way. We were looking for a small business we could grow and build a legacy business for our family — we found just that and are now enjoying being small business owners.",
    author: "Richard and Darby P.",
    role: "Business Owners",
    label: "What People Say",
    image: "/manus-storage/testimonial_richard_d500dfa6.jpg",
    textSide: "right" as const,
    // Richard: man walking on bridge is on the left — text goes right
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
    }, 500);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, "right");
  const next = () => goTo((current + 1) % testimonials.length, "left");

  useEffect(() => {
    const timer = setInterval(() => next(), 7000);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];

  // Gradient direction: if text is on left, fade from white-left to transparent-right; if right, reverse
  const gradientStyle = t.textSide === "right"
    ? "linear-gradient(to left, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 65%)"
    : "linear-gradient(to right, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 65%)";

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "480px" }}
    >
      {/* Full-bleed background photo — full brightness, sharpened */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${t.image})`,
          opacity: animating ? 0 : 1,
          transition: "opacity 0.5s ease",
          filter: "brightness(1.08) contrast(1.05) saturate(1.1)",
        }}
      />
      {/* Gradient only on the text side — keeps photo bright on the person's side */}
      <div className="absolute inset-0" style={{ background: gradientStyle }} />

      {/* Full-width content row — text floats to correct side, person stays clear */}
      <div
        className="relative z-10 flex items-center py-16 px-8 md:px-16"
        style={{
          minHeight: "480px",
          justifyContent: t.textSide === "right" ? "flex-end" : "flex-start",
        }}
      >
        {/* Text block — max 45% width so it never reaches the person */}
        <div style={{ maxWidth: "44%", minWidth: "280px" }}>
          {/* Label */}
          <p
            className="text-xs uppercase tracking-[0.25em] font-bold mb-4"
            style={{ fontFamily: "Raleway, sans-serif", color: "#0d2d3a" }}
          >
            {t.label}:
          </p>

          {/* Quote */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "left" ? "-40px" : "40px"})`
                : "translateX(0)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <blockquote
              className="italic leading-relaxed mb-5"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                color: "#0d1f2a",
                fontWeight: 700,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <cite className="not-italic">
              <span
                className="block text-sm font-extrabold"
                style={{ fontFamily: "Raleway, sans-serif", color: "#0d2d3a" }}
              >
                -{t.author}, {t.role}
              </span>
            </cite>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-sm transition-colors"
              style={{ borderColor: "rgba(0,0,0,0.35)", color: "rgba(0,0,0,0.55)" }}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "left" : "right")}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{ background: i === current ? "#00b4c8" : "rgba(0,0,0,0.25)" }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-sm transition-colors"
              style={{ borderColor: "rgba(0,0,0,0.35)", color: "rgba(0,0,0,0.55)" }}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)" }} />
        <div className="hero-inner">
          <div className="max-w-2xl">
            <p
              className="uppercase tracking-[0.25em] font-bold mb-3"
              style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#4dd9ec", textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              {brokerConfig.locationShort} · Business Brokerage
            </p>
            <h1
              className="text-white font-extrabold leading-none mb-4"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 12px rgba(0,0,0,0.75), 0 1px 4px rgba(0,0,0,0.9)",
              }}
            >
              Selling Your Business
              <br />
              <span style={{ color: "#00b4c8" }}>Is Our Business.</span>
            </h1>
            <p className="text-white text-xl mb-8 max-w-xl leading-relaxed font-medium" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
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
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
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
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
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
                  style={{ color: "rgba(0,180,200,0.45)", fontFamily: "Raleway, sans-serif" }}
                >
                  {s.step}
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
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
          <p className="text-gray-500 text-xs mt-6">
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
