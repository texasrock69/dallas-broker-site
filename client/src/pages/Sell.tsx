import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY_HERE";

export default function Sell() {
  const [form, setForm] = useState({
    ownerName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    yearsInBusiness: "",
    annualRevenue: "",
    annualProfit: "",
    numberOfEmployees: "",
    reasonForSelling: "",
    askingPrice: "",
    additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Free Business Valuation Request - ${form.businessName} | ${brokerConfig.companyName}`,
        from_name: form.ownerName,
        email: form.email,
        message: `
FREE BUSINESS VALUATION REQUEST
================================
Broker: ${brokerConfig.brokerName} | ${brokerConfig.companyName}
Submitted: ${new Date().toLocaleString()}

OWNER INFORMATION
-----------------
Owner Name: ${form.ownerName}
Email: ${form.email}
Phone: ${form.phone}

BUSINESS INFORMATION
--------------------
Business Name: ${form.businessName}
Type of Business: ${form.businessType}
Years in Business: ${form.yearsInBusiness}
Annual Revenue: ${form.annualRevenue}
Annual Profit / Cash Flow: ${form.annualProfit}
Number of Employees: ${form.numberOfEmployees}
Reason for Selling: ${form.reasonForSelling}
Asking Price (if known): ${form.askingPrice}

Additional Information:
${form.additionalInfo}
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
            Request Received!
          </h2>
          <p className="text-gray-600 mb-2">
            Thank you! Your free business valuation request has been received by{" "}
            <strong>{brokerConfig.brokerName}</strong>.
          </p>
          <p className="text-gray-600 mb-6">
            We will contact you shortly to schedule your confidential, no-obligation consultation.
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
            Free Business Valuation
          </h1>
          <p className="text-gray-400 mt-1 text-sm">No obligation · 100% confidential</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="section-heading text-2xl mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          Request Your No-Cost Business Valuation
        </h2>
        <div className="w-12 h-1 bg-[#00b4c8] mb-6" />

        <p className="text-gray-600 leading-relaxed mb-4">
          Thinking about selling your business? Get started with a FREE, confidential business
          valuation. There is absolutely no cost and no obligation. We will review your information
          and contact you to discuss what your business is worth in today's market.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          We never charge upfront fees — our services are 100% performance based. You only pay when
          your business sells.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <h3
            className="section-heading text-lg font-bold"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Your Contact Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="ownerName"
                required
                value={form.ownerName}
                onChange={handleChange}
                className="form-input"
                placeholder="Business owner's name"
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
          </div>

          <h3
            className="section-heading text-lg font-bold pt-4"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Business Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                className="form-input"
                placeholder="Your business name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Type of Business <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="businessType"
                required
                value={form.businessType}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., Restaurant, Auto Repair, Retail"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Years in Business
              </label>
              <input
                type="text"
                name="yearsInBusiness"
                value={form.yearsInBusiness}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., 5 years"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Number of Employees
              </label>
              <input
                type="text"
                name="numberOfEmployees"
                value={form.numberOfEmployees}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., 8"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Annual Revenue (Gross Sales)
              </label>
              <input
                type="text"
                name="annualRevenue"
                value={form.annualRevenue}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., $500,000"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Annual Profit / Cash Flow
              </label>
              <input
                type="text"
                name="annualProfit"
                value={form.annualProfit}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., $120,000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Reason for Selling
            </label>
            <select
              name="reasonForSelling"
              value={form.reasonForSelling}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select reason...</option>
              <option value="Retirement">Retirement</option>
              <option value="Health reasons">Health reasons</option>
              <option value="Relocation">Relocation</option>
              <option value="Pursuing other interests">Pursuing other interests</option>
              <option value="Partnership dissolution">Partnership dissolution</option>
              <option value="Financial reasons">Financial reasons</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Asking Price (if you have one in mind)
            </label>
            <input
              type="text"
              name="askingPrice"
              value={form.askingPrice}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., $350,000 or 'Not sure'"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={form.additionalInfo}
              onChange={handleChange}
              className="form-input"
              rows={4}
              placeholder="Any other details about your business or the sale you'd like to share..."
            />
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
            {submitting ? "Submitting..." : "Request Free Business Valuation"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            All information is kept strictly confidential. No obligation. We never charge upfront
            fees — our services are 100% performance based.
          </p>
        </form>
      </div>
    </Layout>
  );
}
