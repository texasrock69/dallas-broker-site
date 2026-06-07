import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "f02028ed-7d76-42d5-ad5c-369b700f2d45";

const NDA_LEGAL_TEXT = `ONLINE NON-DISCLOSURE TERMS ARE NOT NEGOTIABLE. BY SIGNING BELOW, YOU ARE AGREEING TO THE FOLLOWING NON-DISCLOSURE AGREEMENT IN ITS ENTIRETY.

It is understood and agreed to that we the BROKER identified herein will provide disclosure of confidential Information that must not be disclosed or shared with anyone other than the BROKER, SELLER, and their financial and legal advisors. To ensure the protection of such Information, and to preserve any confidentiality necessary under patent and/or trade secret laws, it is agreed to the following terms of this Non-Disclosure Agreement.

BUYER agrees all information provided by BROKER to BUYER is confidential and its disclosure to others may be damaging and detrimental to the business. BUYER acknowledges that by signing this Agreement, they are creating a formal record of their engagement with BROKER. BROKER may maintain records of all businesses disclosed to BUYER, and BUYER agrees that this Agreement serves as acknowledgment of that disclosure relationship.

BUYER agrees not to provide information regarding a disclosed business to anyone except those who may be directly involved in a sale and their financial or legal advisors or as ordered by law. BUYER expressly agrees NOT to contact SELLER(s), nor any person related to the business (including but not limited to employees, suppliers, landlords, or business associates), directly at any time, for any reason, without the prior written consent of BROKER. All communications, inquiries, offers, negotiations, and requests directed to SELLER must be conducted exclusively through BROKER. Any direct contact by BUYER with SELLER or parties related to the business, without BROKER's express written consent, shall constitute a material breach of this Agreement.

BUYER agrees that he or she may be liable for BROKER'S full fee if either of the following conditions occurs: (1) BUYER purchases a business disclosed to them by the BROKER without the involvement of the BROKER; or (2) BUYER leases, manages, or otherwise becomes involved with a business disclosed to them by BROKER.

TWO-YEAR TAIL PERIOD: BUYER further agrees that if BUYER purchases, leases, manages, or otherwise acquires any direct or indirect interest in any business that was introduced to or shown to BUYER by BROKER, within a period of twenty-four (24) months from the date of this Agreement or from the date such business was disclosed to BUYER (whichever is later), BUYER shall be liable to BROKER for BROKER's full commission fee, regardless of whether BROKER's listing agreement with SELLER remains in effect at the time of such transaction. This obligation survives the expiration or termination of any listing agreement between BROKER and SELLER. BUYER acknowledges that this two-year tail provision is a material term of this Agreement and constitutes fair and reasonable consideration for the confidential business information disclosed by BROKER.

BUYER agrees that he/she will be personally liable to pay BROKER for the BROKER's fee paid by SELLER if BUYER does any act that results in harm to SELLER's business or BROKER's contract rights with the SELLER. Such acts include but are not limited to BUYER making any information disclosed to them on a business public thereby breaking the strict confidentiality of the transaction or BUYER using any information provided by SELLER for their own personal gain other than purchasing SELLER's business or anything associated with said business.

BUYER understands that the SELLER has supplied all Information without BROKER's confirmation. It is the BUYER's responsibility to confirm the accuracy of any and all information provided to the BUYER. BUYER also agrees to indemnify and hold BROKER and its agents harmless from any claims or damages which may occur from the inaccuracy or incompleteness of any information provided to BUYER with respect to any business disclosed or purchased.

BUYER agrees and understands that BROKER represents the SELLER and his or her interests based on a contract with the SELLER and that BROKER has no contracted rights with the BUYER. Be it understood that the BROKER's duty is limited only to negotiating the sale of the business at mutually agreed upon terms and conditions between BUYER and SELLER. Our compensation will be received from the SELLER unless other arrangements are made with you in writing.

This agreement is governed by the laws of the State of Texas. This electronic signature constitutes a legally binding agreement under the Electronic Signatures in Global and National Commerce Act (E-SIGN Act), 15 U.S.C. § 7001 et seq.`;

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
    occupation: "",
    fundsAvailable: "",
    creditScore: "",
    workHistory: "",
    listingOfInterest: "",
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
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: ((e as React.MouseEvent).clientX - rect.left) * scaleX,
      y: ((e as React.MouseEvent).clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsDrawing(true);
    setHasSigned(true);
    const pos = getPos(e, canvas);
    setLastPos(pos);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
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

    setSubmitting(true);
    try {
      // Capture signature as base64 PNG image
      const signatureDataUrl = canvasRef.current?.toDataURL("image/png") || "";

      const submittedAt = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });

      const htmlMessage = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body { font-family: Arial, sans-serif; color: #1a1a2e; font-size: 14px; line-height: 1.6; }
  h1 { background: #1a1a2e; color: #ffffff; padding: 16px 20px; font-size: 18px; margin: 0; }
  h2 { color: #00b4c8; font-size: 14px; border-bottom: 2px solid #00b4c8; padding-bottom: 4px; margin-top: 24px; }
  .content { padding: 20px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
  td { padding: 6px 8px; border-bottom: 1px solid #eee; }
  td:first-child { font-weight: bold; width: 200px; color: #555; }
  .nda-text { background: #f8f9fa; border-left: 4px solid #00b4c8; padding: 16px; font-size: 12px; color: #444; white-space: pre-wrap; margin-top: 8px; }
  .sig-box { border: 2px solid #1a1a2e; border-radius: 6px; padding: 12px; background: #fff; display: inline-block; margin-top: 8px; }
  .footer { background: #f0f0f0; padding: 12px 20px; font-size: 12px; color: #666; margin-top: 24px; }
</style></head>
<body>
<h1>ONLINE NON-DISCLOSURE AGREEMENT — COMPLETED SUBMISSION</h1>
<div class="content">
  <table><tr><td>Broker</td><td>${brokerConfig.brokerName}</td></tr><tr><td>Company</td><td>${brokerConfig.companyName}</td></tr><tr><td>Submitted</td><td>${submittedAt}</td></tr></table>

  <h2>SECTION 1 — BUYER CONTACT INFORMATION</h2>
  <table>
    <tr><td>Full Name</td><td>${form.fullName}</td></tr>
    <tr><td>Email Address</td><td>${form.email}</td></tr>
    <tr><td>Phone Number</td><td>${form.phone}</td></tr>
    <tr><td>Street Address</td><td>${form.address}</td></tr>
    <tr><td>City</td><td>${form.city}</td></tr>
    <tr><td>State</td><td>${form.state}</td></tr>
    <tr><td>ZIP Code</td><td>${form.zip}</td></tr>
  </table>

  <h2>SECTION 2 — BUYER QUALIFICATION</h2>
  <table>
    <tr><td>Current Occupation</td><td>${form.occupation || "Not provided"}</td></tr>
    <tr><td>Funds Available</td><td>${form.fundsAvailable || "Not provided"}</td></tr>
    <tr><td>Credit Score Range</td><td>${form.creditScore || "Not provided"}</td></tr>
    <tr><td>Work History (Last 10 Years)</td><td>${form.workHistory || "Not provided"}</td></tr>
  </table>

  <h2>SECTION 3 — BUSINESS INTEREST</h2>
  <table>
    <tr><td>Listing / Business of Interest</td><td>${form.listingOfInterest || "Not specified"}</td></tr>
  </table>

  <h2>SECTION 4 — ELECTRONIC SIGNATURE</h2>
  <p><strong>Agreed to NDA Terms:</strong> YES — Checkbox confirmed<br>
  <strong>Agreement Timestamp:</strong> ${submittedAt}</p>
  <p><strong>Buyer's Drawn Signature:</strong></p>
  <div class="sig-box"><img src="${signatureDataUrl}" width="400" height="120" alt="Buyer Signature" style="display:block;" /></div>

  <h2>SECTION 5 — FULL NDA TEXT AGREED TO</h2>
  <div class="nda-text">${NDA_LEGAL_TEXT.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
</div>
<div class="footer">This submission constitutes a legally binding electronic signature under the E-SIGN Act, 15 U.S.C. § 7001 et seq.</div>
</body></html>
      `.trim();

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `NDA Submission — ${form.fullName} | ${brokerConfig.companyName}`,
        from_name: form.fullName,
        email: form.email,
        message: `NDA Submission from ${form.fullName} — ${submittedAt}`,
        html_message: htmlMessage,
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
          <p className="text-gray-500 mb-2">
            Thank you, <strong>{form.fullName}</strong>. Your Non-Disclosure Agreement has been
            received by <strong>{brokerConfig.brokerName}</strong>.
          </p>
          <p className="text-gray-500 mb-6">
            We will reach out to you shortly to discuss your interest in buying a business. Because
            of confidentiality, we will <strong>NOT</strong> leave a message if we do not reach you
            directly, unless you indicated otherwise.
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
            Online Non-Disclosure Agreement
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            A Non-Disclosure Agreement is required before we can share confidential details about
            any business for sale. Complete the form below to get started — there is no obligation
            and no cost.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Broker header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-bold text-gray-800 text-lg" style={{ fontFamily: "Raleway, sans-serif" }}>
              {brokerConfig.companyName}
            </div>
            <div className="text-gray-500 text-sm">{brokerConfig.parentCompany}</div>
          </div>
          <div className="text-sm text-gray-500 text-right">
            <div className="font-semibold text-gray-800">{brokerConfig.brokerName}</div>
            <div className="text-gray-500 text-xs">{brokerConfig.brokerTitle}</div>
            <a href={`tel:${brokerConfig.brokerPhone}`} className="text-[#00b4c8] hover:underline block">{brokerConfig.brokerPhoneDisplay}</a>
            <a href={`mailto:${brokerConfig.brokerEmail}`} className="text-[#00b4c8] hover:underline block">{brokerConfig.brokerEmail}</a>
          </div>
        </div>

        <div className="w-12 h-1 bg-[#00b4c8] mb-8" />

        <p className="text-gray-500 leading-relaxed mb-4">
          A Non-Disclosure is required to learn about our businesses for sale. Our contract with our
          business seller clients requires that we collect simple buyer qualification data and a
          Non-Disclosure. ALL business buyer information is kept strictly confidential and used
          solely by our company for the purpose of buyer-related communication as well as
          qualification and non-disclosure purposes.
        </p>
        <p className="text-gray-500 leading-relaxed mb-8">
          Once you complete the quick process below, {brokerConfig.brokerName} will reach out to
          discuss your interest in buying a business and/or provide full disclosure on your business
          of interest. There is <strong>NO obligation</strong> by completing the online NDA below.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-10">
          <p className="text-gray-500 text-sm text-center">
            Complete the form below or call us at{" "}
            <a href={`tel:${brokerConfig.brokerPhone}`} className="text-[#00b4c8] hover:underline font-semibold">
              {brokerConfig.brokerPhoneDisplay}
            </a>{" "}
            to set up a meeting. Because of confidentiality we will <strong>NOT</strong> leave a
            message if we do not reach you directly (unless you indicate otherwise), so please
            provide your direct contact information below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ── SECTION 1: Contact Info ── */}
          <h3 className="section-heading text-lg font-bold" style={{ fontFamily: "Raleway, sans-serif" }}>
            Buyer Contact Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input type="text" name="fullName" required value={form.fullName} onChange={handleChange} className="form-input" placeholder="Your full legal name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="form-input" placeholder="(555) 555-5555" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Street Address</label>
              <input type="text" name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="123 Main Street" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">City</label>
              <input type="text" name="city" value={form.city} onChange={handleChange} className="form-input" placeholder="City" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">State</label>
              <input type="text" name="state" value={form.state} onChange={handleChange} className="form-input" placeholder="TX" maxLength={2} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">ZIP</label>
              <input type="text" name="zip" value={form.zip} onChange={handleChange} className="form-input" placeholder="75201" />
            </div>
          </div>

          {/* ── SECTION 2: Buyer Qualification ── */}
          <h3 className="section-heading text-lg font-bold pt-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            Buyer Qualification
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Current Occupation <span className="text-red-500">*</span>
              </label>
              <input type="text" name="occupation" required value={form.occupation} onChange={handleChange} className="form-input" placeholder="Your current job or industry" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Funds Available <span className="text-red-500">*</span>
              </label>
              <select name="fundsAvailable" required value={form.fundsAvailable} onChange={handleChange} className="form-input">
                <option value="">Select range...</option>
                <option value="Less Than $50,000">Less Than $50,000</option>
                <option value="$50,000 - $100,000">$50,000 – $100,000</option>
                <option value="$100,000 - $250,000">$100,000 – $250,000</option>
                <option value="$250,000 - $500,000">$250,000 – $500,000</option>
                <option value="$500,000 - $1,000,000">$500,000 – $1,000,000</option>
                <option value="Over $1,000,000">Over $1,000,000</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Credit Score <span className="text-red-500">*</span>
              </label>
              <select name="creditScore" required value={form.creditScore} onChange={handleChange} className="form-input">
                <option value="">Select credit range...</option>
                <option value="Excellent — 750 or above">Excellent — 750 or above</option>
                <option value="Good — 700–749">Good — 700–749</option>
                <option value="Fair — 650–699">Fair — 650–699</option>
                <option value="Below 650">Below 650</option>
                <option value="Unknown / Not Sure">Unknown / Not Sure</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              About You — Brief Resume of Last 10 Years Work Experience <span className="text-red-500">*</span>
            </label>
            <textarea
              name="workHistory"
              required
              value={form.workHistory}
              onChange={handleChange}
              rows={4}
              className="form-input resize-none"
              placeholder="Please provide a brief summary of your professional background and relevant experience over the last 10 years..."
            />
          </div>

          {/* ── SECTION 3: Business Interest ── */}
          <h3 className="section-heading text-lg font-bold pt-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            Business of Interest
          </h3>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Listing of Interest — If you do not have a specific business in mind, please put N/A <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="listingOfInterest"
              required
              value={form.listingOfInterest}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., Restaurant on Listing #1234, or N/A — open to any opportunity"
            />
          </div>

          {/* ── SECTION 4: Full NDA Legal Text ── */}
          <div className="mt-8">
            <h3 className="section-heading text-lg font-bold mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
              Non-Disclosure Agreement
            </h3>
            <div
              className="bg-gray-50 border border-gray-300 rounded p-5 text-xs text-gray-600 leading-relaxed space-y-3"
              style={{ maxHeight: "320px", overflowY: "auto", fontFamily: "Georgia, serif" }}
            >
              <p className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                Online Non-Disclosure Terms Are Not Negotiable. You Are Agreeing to the Non-Disclosure.
              </p>
              <p>
                It is understood and agreed to that we the BROKER identified herein will provide
                disclosure of confidential Information that must not be disclosed or shared with
                anyone other than the BROKER, SELLER, and their financial and legal advisors. To
                ensure the protection of such Information, and to preserve any confidentiality
                necessary under patent and/or trade secret laws, it is agreed to the following terms
                of this Non-Disclosure Agreement.
              </p>
              <p>
                BUYER agrees all information provided by BROKER to BUYER is confidential and its
                disclosure to others may be damaging and detrimental to the business and that BUYER
                agrees to sign a Memo Record of Showing or provide similar acknowledgement on every
                business disclosed by BROKER to BUYER providing proof that a business(s) was
                disclosed to the BUYER.
              </p>
              <p>
                BUYER agrees not to provide information regarding a disclosed business to anyone
                except those who may be directly involved in a sale and their financial or legal
                advisors or as ordered by law. <strong>BUYER expressly agrees NOT to contact
                SELLER(s), nor any person related to the business (including but not limited to
                employees, suppliers, landlords, or business associates), directly at any time, for
                any reason, without the prior written consent of BROKER.</strong> All communications,
                inquiries, offers, negotiations, and requests directed to SELLER must be conducted
                exclusively through BROKER. Any direct contact by BUYER with SELLER or parties
                related to the business, without BROKER's express written consent, shall constitute
                a material breach of this Agreement.
              </p>
              <p>
                BUYER agrees that he or she may be liable for BROKER'S full fee if either of the
                following conditions occurs: (1) BUYER purchases a business disclosed to them by the
                BROKER without the involvement of the BROKER; or (2) BUYER leases, manages, or
                otherwise becomes involved with a business disclosed to them by BROKER.
              </p>
              <p>
                <strong>TWO-YEAR TAIL PERIOD:</strong> BUYER further agrees that if BUYER purchases,
                leases, manages, or otherwise acquires any direct or indirect interest in any
                business that was introduced to or shown to BUYER by BROKER, within a period of{" "}
                <strong>twenty-four (24) months</strong> from the date of this Agreement or from the
                date such business was disclosed to BUYER (whichever is later), BUYER shall be
                liable to BROKER for BROKER's full commission fee, regardless of whether BROKER's
                listing agreement with SELLER remains in effect at the time of such transaction.
                This obligation survives the expiration or termination of any listing agreement
                between BROKER and SELLER. BUYER acknowledges that this two-year tail provision is
                a material term of this Agreement and constitutes fair and reasonable consideration
                for the confidential business information disclosed by BROKER.
              </p>
              <p>
                BUYER agrees that he/she will be personally liable to pay BROKER for the BROKER's
                fee paid by SELLER if BUYER does any act that results in harm to SELLER's business
                or BROKER's contract rights with the SELLER. Such acts include but are not limited
                to BUYER making any information disclosed to them on a business public thereby
                breaking the strict confidentiality of the transaction or BUYER using any
                information provided by SELLER for their own personal gain other than purchasing
                SELLER's business or anything associated with said business.
              </p>
              <p>
                BUYER understands that the SELLER has supplied all Information without BROKER's
                confirmation. It is the BUYER's responsibility to confirm the accuracy of any and
                all information provided to the BUYER. BUYER also agrees to indemnify and hold
                BROKER and its agents harmless from any claims or damages which may occur from the
                inaccuracy or incompleteness of any information provided to BUYER with respect to
                any business disclosed or purchased.
              </p>
              <p>
                BUYER agrees and understands that BROKER represents the SELLER and his or her
                interests based on a contract with the SELLER and that BROKER has no contracted
                rights with the BUYER. Be it understood that the BROKER's duty is limited only to
                negotiating the sale of the business at mutually agreed upon terms and conditions
                between BUYER and SELLER. Our compensation will be received from the SELLER unless
                other arrangements are made with you in writing.
              </p>
              <p className="text-gray-500 italic">
                This agreement is governed by the laws of the State of Texas. This electronic
                signature constitutes a legally binding agreement under the Electronic Signatures in
                Global and National Commerce Act (E-SIGN Act), 15 U.S.C. § 7001 et seq.
              </p>
            </div>
          </div>

          {/* ── Signature Pad ── */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Electronic Signature <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">
              I hereby understand and agree to the Non-Disclosure Terms outlined herein. Please use
              mouse or finger to draw your signature below.
            </p>
            <canvas
              ref={canvasRef}
              width={700}
              height={160}
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
              <span className={`text-xs font-semibold ${hasSigned ? "text-green-600" : "text-gray-400"}`}>
                {hasSigned ? "✓ Signature captured" : "Draw your signature above"}
              </span>
              <button type="button" onClick={clearSignature} className="text-xs text-gray-500 hover:text-red-500 underline">
                Clear Signature
              </button>
            </div>
          </div>

          {/* ── Agreement Checkbox ── */}
          <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded p-4">
            <input
              type="checkbox"
              id="agreeToNDA"
              name="agreeToNDA"
              checked={form.agreeToNDA}
              onChange={handleChange}
              className="mt-1 w-4 h-4 accent-[#00b4c8] flex-shrink-0"
            />
            <label htmlFor="agreeToNDA" className="text-sm text-gray-600 leading-relaxed">
              I have read, understand, and agree to the Non-Disclosure Agreement above in its
              entirety. I understand that my electronic signature and this checkbox constitute my
              full legal agreement to the terms of this NDA, and that these terms are{" "}
              <strong>not negotiable</strong>. <span className="text-red-500">*</span>
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
            className="btn-teal-solid w-full py-4 text-base font-bold disabled:opacity-60"
          >
            {submitting ? "Submitting NDA..." : "SUBMIT NDA →"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Your information is kept strictly confidential and used solely for buyer qualification
            and communication purposes. This submission is date and time stamped.
          </p>
        </form>
      </div>
    </Layout>
  );
}
