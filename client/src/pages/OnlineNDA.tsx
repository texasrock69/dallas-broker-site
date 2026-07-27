import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";

// Web3Forms access key - user needs to register at web3forms.com (free) and replace this
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY_HERE";

export default function OnlineNDA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    businessOfInterest: "",
    investmentRange: "",
    timeframe: "",
    currentOccupation: "",
    agreeToNDA: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#1a1a2e";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsDrawing(true);
    setHasSigned(true);
    const pos = getPos(e, canvas);
    setLastPos(pos);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pos = getPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setLastPos(pos);
  };

  const stopDraw = () => setIsDrawing(false);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.agreeToNDA) {
      setError("You must agree to the Non-Disclosure Agreement terms to proceed.");
      return;
    }
    if (!hasSigned) {
      setError("Please provide your signature in the signature box above.");
      return;
    }

    const signatureData = canvasRef.current?.toDataURL("image/png") || "";

    setSubmitting(true);
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Online NDA Submission - ${form.fullName} | ${brokerConfig.companyName}`,
        from_name: form.fullName,
        email: form.email,
        message: `
ONLINE NON-DISCLOSURE AGREEMENT SUBMISSION
==========================================
Broker: ${brokerConfig.brokerName} | ${brokerConfig.companyName}
Submitted: ${new Date().toLocaleString()}

BUYER INFORMATION
-----------------
Full Name: ${form.fullName}
Email: ${form.email}
Phone: ${form.phone}
Address: ${form.address}, ${form.city}, ${form.state} ${form.zip}

BUSINESS INTEREST
-----------------
Business of Interest: ${form.businessOfInterest}
Investment Range: ${form.investmentRange}
Purchase Timeframe: ${form.timeframe}
Current Occupation: ${form.currentOccupation}

NDA AGREEMENT
-------------
Agreed to NDA Terms: YES
Electronic Signature: Provided (drawn signature captured)
Signature Data: ${signatureData.substring(0, 100)}... [full signature image captured]

This submission constitutes a legally binding electronic signature under the E-SIGN Act.
        `.trim(),
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Submission failed. Please try again or call us directly.");
      }
    } catch {
      setError("Network error. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 bg-[#00b4c8] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2
            className="text-3xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            NDA Submitted Successfully
          </h2>
          <p className="text-gray-600 mb-2">
            Thank you! Your Non-Disclosure Agreement has been received by{" "}
            <strong>{brokerConfig.brokerName}</strong>.
          </p>
          <p className="text-gray-600 mb-6">
            We will reach out to you shortly to discuss your interest in buying a business. Because
            of confidentiality, we will NOT leave a message unless you indicated otherwise.
          </p>
          <div className="text-sm text-gray-500">
            Questions? Call us at{" "}
            <a href={`tel:${brokerConfig.brokerPhone}`} className="text-[#00b4c8] hover:underline">
              {brokerConfig.brokerPhoneDisplay}
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Online Non-Disclosure Agreement
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header info */}
        <div className="mb-8">
          <div className="font-bold text-gray-800 text-lg" style={{ fontFamily: "Raleway, sans-serif" }}>
            {brokerConfig.companyName}
          </div>
          <div className="text-gray-500 text-sm">{brokerConfig.parentCompany}</div>
          <div className="mt-2 text-sm text-gray-600">{brokerConfig.brokerName}</div>
          <div className="text-sm text-gray-600">{brokerConfig.brokerPhoneDisplay}</div>
          <a href={`mailto:${brokerConfig.brokerEmail}`} className="text-[#00b4c8] hover:underline text-sm">
            {brokerConfig.brokerEmail}
          </a>
        </div>

        <div className="w-12 h-1 bg-[#00b4c8] mb-8" />

        <p className="text-gray-600 leading-relaxed mb-4">
          A Non Disclosure is required to learn about our businesses for sale. Our contract with
          our business seller clients requires that we collect simple buyer qualification data and a
          Non-Disclosure. ALL business buyer information is kept strictly confidential and used
          solely by our company for the purpose of buyer related communication as well as the
          qualification and non-disclosure.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Once you complete the quick process below then we will reach out to you to discuss your
          interest in buying a business and/or with full disclosure on your business of interest.
          There is <strong>NO Obligation</strong> by completing the online NDA below.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded p-2 mb-8">
          <p className="text-gray-500 text-sm text-center">
            Complete the form below or call us at{" "}
            <a href={`tel:${brokerConfig.brokerPhone}`} className="text-[#00b4c8] hover:underline">
              {brokerConfig.brokerPhoneDisplay}
            </a>{" "}
            to set up a meeting. Because of confidentiality we will NOT leave a message if we do
            not reach you directly (unless you indicate otherwise).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h3
            className="section-heading text-lg font-bold"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Buyer Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={form.fullName}
                onChange={handleChange}
                className="form-input"
                placeholder="Your full legal name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="(555) 555-5555"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Current Occupation
              </label>
              <input
                type="text"
                name="currentOccupation"
                value={form.currentOccupation}
                onChange={handleChange}
                className="form-input"
                placeholder="Your current job/industry"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="form-input"
              placeholder="123 Main Street"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="form-input"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                className="form-input"
                placeholder="TX"
                maxLength={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">ZIP</label>
              <input
                type="text"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                className="form-input"
                placeholder="75201"
              />
            </div>
          </div>

          <h3
            className="section-heading text-lg font-bold pt-4"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Business Interest
          </h3>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Type of Business / Business of Interest
            </label>
            <input
              type="text"
              name="businessOfInterest"
              value={form.businessOfInterest}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., Restaurant, Auto Repair, Retail, Any"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Investment Range
              </label>
              <select
                name="investmentRange"
                value={form.investmentRange}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select range...</option>
                <option value="Under $50,000">Under $50,000</option>
                <option value="$50,000 - $100,000">$50,000 – $100,000</option>
                <option value="$100,000 - $250,000">$100,000 – $250,000</option>
                <option value="$250,000 - $500,000">$250,000 – $500,000</option>
                <option value="$500,000 - $1,000,000">$500,000 – $1,000,000</option>
                <option value="Over $1,000,000">Over $1,000,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Purchase Timeframe
              </label>
              <select
                name="timeframe"
                value={form.timeframe}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select timeframe...</option>
                <option value="Immediately">Immediately</option>
                <option value="1-3 months">1–3 months</option>
                <option value="3-6 months">3–6 months</option>
                <option value="6-12 months">6–12 months</option>
                <option value="Just researching">Just researching</option>
              </select>
            </div>
          </div>

          {/* NDA Agreement Text */}
          <div className="bg-gray-50 border border-gray-300 rounded p-5 text-sm text-gray-600 leading-relaxed">
            <h4
              className="font-bold text-gray-800 text-base mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Non-Disclosure Agreement
            </h4>
            <p className="mb-3">
              In consideration of {brokerConfig.companyName} ("Broker") furnishing me with
              information about businesses for sale, I hereby agree that:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                I will keep all information received from Broker strictly confidential and will not
                disclose it to any third party without prior written consent from Broker.
              </li>
              <li>
                I will use the information solely for the purpose of evaluating the potential
                purchase of a business.
              </li>
              <li>
                I will not contact the business owner, employees, customers, or suppliers directly
                without Broker's prior written consent.
              </li>
              <li>
                I understand that all information is provided in good faith and that Broker makes no
                representations or warranties as to its accuracy or completeness.
              </li>
              <li>
                I acknowledge that any breach of this agreement may cause irreparable harm to the
                Broker and the business seller.
              </li>
            </ol>
            <p className="mt-3 text-xs text-gray-500">
              This agreement is governed by the laws of the State of Texas. This electronic
              signature is legally binding under the Electronic Signatures in Global and National
              Commerce Act (E-SIGN Act).
            </p>
          </div>

          {/* Signature Pad */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Electronic Signature <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Sign your name in the box below using your mouse or finger (on touch devices).
            </p>
            <canvas
              ref={canvasRef}
              width={600}
              height={150}
              className="signature-canvas w-full border-2 border-dashed border-gray-300 rounded bg-white"
              style={{ touchAction: "none", cursor: "crosshair", maxWidth: "100%" }}
              onMouseDown={startDraw}
              onMouseMove={draw}
              onMouseUp={stopDraw}
              onMouseLeave={stopDraw}
              onTouchStart={startDraw}
              onTouchMove={draw}
              onTouchEnd={stopDraw}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-400">
                {hasSigned ? "✓ Signature captured" : "Draw your signature above"}
              </span>
              <button
                type="button"
                onClick={clearSignature}
                className="text-xs text-gray-500 hover:text-red-500 underline"
              >
                Clear Signature
              </button>
            </div>
          </div>

          {/* Agreement checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agreeToNDA"
              name="agreeToNDA"
              checked={form.agreeToNDA}
              onChange={handleChange}
              className="mt-1 w-4 h-4 accent-[#00b4c8]"
            />
            <label htmlFor="agreeToNDA" className="text-sm text-gray-600 leading-relaxed">
              I have read and agree to the Non-Disclosure Agreement above. I understand that my
              electronic signature and this checkbox constitute my legal agreement to the terms of
              this NDA. <span className="text-red-500">*</span>
            </label>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-teal-solid w-full py-3 text-base disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Non-Disclosure Agreement"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Your information is kept strictly confidential and used solely for buyer qualification
            and communication purposes.
          </p>
        </form>
      </div>
    </Layout>
  );
}
