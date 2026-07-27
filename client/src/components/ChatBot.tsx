import { brokerConfig } from "@/brokerConfig";
import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const FAQ: { q: string; a: string }[] = [
  {
    q: "how much is my business worth",
    a: `Great question! Business value depends on several factors including annual revenue, cash flow, industry, years in operation, and current market conditions. ${brokerConfig.brokerName} offers a FREE, no-obligation business valuation — just fill out our quick form at the "Free Valuation" page or call ${brokerConfig.brokerPhoneDisplay}.`,
  },
  {
    q: "how do i sell my business",
    a: `Selling a business involves several steps: gathering financial records, getting a valuation, marketing confidentially to qualified buyers, negotiating terms, and closing. ${brokerConfig.companyName} handles all of this for you — and we never charge upfront fees. Our services are 100% performance based. Visit our Selling page or call ${brokerConfig.brokerPhoneDisplay} to get started.`,
  },
  {
    q: "how do i buy a business",
    a: `Buying a business starts with completing our Online NDA, then we'll share our confidential listings and help match you with businesses that fit your budget and interests. We offer free consultations for buyers. Visit the Buy page or complete the Online NDA to get started.`,
  },
  {
    q: "what is an nda",
    a: `An NDA (Non-Disclosure Agreement) is a standard confidentiality agreement required before we can share detailed information about a business for sale. It protects the seller's confidential information. Our Online NDA is quick, free, and carries no obligation.`,
  },
  {
    q: "how long does it take to sell",
    a: `The average small business sale takes 6–12 months, though some sell faster. Factors include pricing, the type of business, market conditions, and how prepared the financials are. ${brokerConfig.companyName} works to sell your business as efficiently as possible.`,
  },
  {
    q: "do you charge upfront fees",
    a: `No! We never charge upfront fees. Our professional seller representation services are 100% performance based — you only pay when your business successfully sells.`,
  },
  {
    q: "how many buyers do you have",
    a: `${brokerConfig.companyName} has access to a network of over 6,000 qualified buyers, which significantly increases the chances of finding the right match for your business quickly.`,
  },
  {
    q: "contact",
    a: `You can reach ${brokerConfig.brokerName} at:\n📞 ${brokerConfig.brokerPhoneDisplay}\n📧 ${brokerConfig.brokerEmail}\n\nOr fill out any form on this website and we'll contact you promptly.`,
  },
  {
    q: "listings",
    a: `We maintain a confidential list of businesses for sale. Not all listings are publicly posted to protect seller confidentiality. Complete our Online NDA to receive our full current listings.`,
  },
];

function getBotResponse(userInput: string): string {
  const lower = userInput.toLowerCase();
  for (const item of FAQ) {
    const keywords = item.q.split(" ");
    const matchCount = keywords.filter((k) => lower.includes(k)).length;
    if (matchCount >= Math.ceil(keywords.length * 0.5)) {
      return item.a;
    }
  }
  // Fallback
  return `Thanks for your question! For the most accurate answer, please contact ${brokerConfig.brokerName} directly at ${brokerConfig.brokerPhoneDisplay} or ${brokerConfig.brokerEmail}. You can also fill out any form on this site and we'll reach out promptly.`;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: `Hi! I'm the virtual assistant for ${brokerConfig.companyName}. I can answer common questions about buying or selling a business. How can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(trimmed);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setTyping(false);
    }, 700);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-20 right-4 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col"
          style={{ maxHeight: "480px" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-t-lg"
            style={{ backgroundColor: "#0a0a1a" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00b4c8] flex items-center justify-center text-white text-xs font-bold">
                {brokerConfig.companyName.charAt(0)}
              </div>
              <div>
                <div className="text-white text-sm font-semibold" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {brokerConfig.companyName}
                </div>
                <div className="text-gray-400 text-xs">Virtual Assistant</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-[#00b4c8] text-white rounded-br-none"
                      : "bg-gray-100 text-gray-700 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-500 px-3 py-2 rounded-lg rounded-bl-none text-sm">
                  <span className="animate-pulse">Typing...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          <div className="px-3 pb-2 flex flex-wrap gap-1">
            {["How to sell?", "View listings", "Contact us", "No upfront fees?"].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setInput(q);
                  setTimeout(() => {
                    setMessages((prev) => [...prev, { role: "user", text: q }]);
                    setInput("");
                    setTyping(true);
                    setTimeout(() => {
                      const response = getBotResponse(q);
                      setMessages((prev) => [...prev, { role: "bot", text: response }]);
                      setTyping(false);
                    }, 700);
                  }, 0);
                }}
                className="text-xs bg-gray-100 hover:bg-[#e0f7fa] text-gray-600 hover:text-[#00b4c8] px-2 py-1 rounded-full border border-gray-200 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question..."
              className="flex-1 text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00b4c8]"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="bg-[#00b4c8] text-white px-3 py-2 rounded hover:bg-[#0090a0] transition-colors disabled:opacity-40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: open ? "#0a0a1a" : "#00b4c8" }}
        aria-label="Open chat"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
}
