import { brokerConfig } from "@/brokerConfig";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Become a Broker", href: brokerConfig.becomeBrokerUrl, external: true },
  { label: "About", href: "/about" },
  {
    label: "Sell",
    href: "/sell",
    children: [
      { label: "No Obligation Consult", href: "/sell" },
      { label: "Selling a Business", href: "/selling" },
      { label: "Selling Tutorial", href: "/selling-tutorial" },
    ],
  },
  {
    label: "Buy",
    href: "/buy",
    children: [
      { label: "Buying a Business", href: "/buy" },
      { label: "Buying Tutorial", href: "/buying-tutorial" },
      { label: "Business Listings", href: "/listings" },
    ],
  },
  { label: "ONLINE NDA", href: "/online-nda" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="site-header sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo / Company Name */}
            <Link href="/" className="flex flex-col no-underline">
              <span
                className="text-white font-bold leading-tight"
                style={{ fontFamily: "Raleway, sans-serif", fontSize: "1.25rem" }}
              >
                {brokerConfig.companyName}
              </span>
              <span className="text-gray-400 text-xs mt-0.5">{brokerConfig.locationShort}</span>
            </Link>

            {/* Broker info - desktop */}
            <div className="hidden md:flex flex-col items-end text-right">
              <span
                className="font-semibold"
                style={{ color: "#00b4c8", fontFamily: "Raleway, sans-serif" }}
              >
                {brokerConfig.brokerName}
              </span>
              <span className="text-gray-300 text-sm">{brokerConfig.brokerPhone}</span>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
              <div className="w-6 h-0.5 bg-white transition-all" />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center border-t border-gray-700">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                      location === link.href
                        ? "text-white border-b-2 border-[#00b4c8]"
                        : "text-gray-300 hover:text-white"
                    }`}
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-[#0a0a1a] border border-gray-700 min-w-48 shadow-xl z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-700 bg-[#0a0a1a]">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-semibold text-gray-300 border-b border-gray-800"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm font-semibold text-gray-300 border-b border-gray-800"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
                {link.children && (
                  <div className="bg-gray-900">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-8 py-2.5 text-sm text-gray-400 border-b border-gray-800"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-3 text-sm text-gray-400">
              {brokerConfig.brokerName} · {brokerConfig.brokerPhone}
            </div>
          </nav>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="site-header text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <div
                className="text-white font-bold text-lg mb-1"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {brokerConfig.companyName}
              </div>
              <div className="text-xs text-gray-500">{brokerConfig.companySubtitle}</div>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks
                .filter((l) => !l.external)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
            </nav>
            <div className="text-sm text-right">
              <div className="text-white font-semibold">{brokerConfig.brokerName}</div>
              <div>{brokerConfig.brokerPhone}</div>
              <a
                href={`mailto:${brokerConfig.brokerEmail}`}
                className="hover:text-white transition-colors"
              >
                {brokerConfig.brokerEmail}
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-4 text-xs text-center text-gray-600">
            {brokerConfig.copyrightYear} Copyright {brokerConfig.parentCompany}
          </div>
        </div>
      </footer>
    </div>
  );
}
