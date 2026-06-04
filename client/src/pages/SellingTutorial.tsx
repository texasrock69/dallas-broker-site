import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";

export default function SellingTutorial() {
  return (
    <Layout>
      <div className="site-header py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-white font-extrabold text-3xl"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Selling Tutorial
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            A comprehensive guide for business sellers
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 prose-like">
        <p className="text-gray-600 leading-relaxed mb-6">
          Is it time to sell? Selling your business is a major decision! You have devoted your time,
          money, and energy into building, running, and operating your business. It may well
          represent your life's work. If you have already decided that now is the right time to
          sell, you want the very best professional guidance you can get. This is when working in
          tandem with a professional business broker can make the difference between just getting
          rid of the business and selling it for the very best price and terms!
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Following are some of the most common topics and questions frequently brought up by
          sellers. If you have any questions that we have not covered, please don't hesitate to
          contact us.
        </p>

        <Section title="For Business Sellers">
          <p>
            If you've gone this far, then selling your business has aroused enough curiosity that
            you are taking the first step. You don't have to make a commitment at this point; you
            are just getting informed about what is necessary to successfully sell your business.
            This section should answer a lot of your questions and help you through the maze of the
            process itself.
          </p>
        </Section>

        <Section title="Question 1: What Is My Business Worth?">
          <p>
            The first question almost every seller asks is: "What is my business worth?" Quite
            frankly, if we were selling our business, that is the first thing we would want to know.
            However, we're going to put this very important issue off for a bit and cover some of
            the things you need to know before you get to that point. Before you ask that question,
            you have to be ready to sell for what the market is willing to pay. If money is the only
            reason you want to sell, then you're not really ready to sell.
          </p>
          <Tip>
            It doesn't make any difference what you think your business is worth, or what you want
            for it. It also doesn't make any difference what your accountant, banker, attorney, or
            best friend thinks your business is worth. Only the marketplace can decide what the
            value of your business is.
          </Tip>
        </Section>

        <Section title="Question 2: Do You Really Want to Sell?">
          <p>
            The second question you have to consider is: "Do you really want to sell this business?"
            If you're really serious and have a solid reason (or reasons) why you want to sell, it
            will most likely happen. You can increase your chances of selling if you can answer yes
            to the second part of this question: "Do you have reasonable expectations?" A yes answer
            to these two questions means you are serious about selling.
          </p>
        </Section>

        <Section title="The First Steps">
          <p>
            Okay, let's assume that you have decided to at least take the first few steps to
            actually selling your business. Before you even think about placing your business for
            sale, there are some things you should do first. The first thing you have to do is to
            gather information about the business.
          </p>
          <p className="font-semibold text-gray-700 mt-4 mb-2">
            Here's a checklist of the items you should get together:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Three years' profit and loss statements</li>
            <li>Federal Income Tax returns for the business</li>
            <li>List of fixtures and equipment</li>
            <li>The lease and lease-related documents</li>
            <li>A list of the loans against the business (amounts and payment schedule)</li>
            <li>Copies of any equipment leases</li>
            <li>A copy of the franchise agreement, if applicable</li>
            <li>An approximate amount of the inventory on hand, if applicable</li>
            <li>The names of any outside advisors</li>
          </ul>
          <p>
            If you're like many small business owners, you'll have to search for some of these
            items. After you gather all of the above items, you should spend some time updating the
            information and filling in the blanks. Make sure the financial statements of the
            business are current and as accurate as you can get them.
          </p>
          <Tip>
            The big question is not really how much your business will sell for, but how much of it
            can you keep? The Federal Tax Laws determine how much money you will actually be able to
            put in the bank. Before you consider price or even selling your business, it is
            important that you discuss the tax implications of a sale with a tax advisor.
          </Tip>
        </Section>

        <Section title="Who Are the Buyers?">
          <p>
            Buyers buy businesses for many of the same reasons that sellers sell businesses. Here
            are just a few of the reasons that buyers buy businesses:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Laid-off, fired, being transferred (or about to be any of these)</li>
            <li>Early retirement (forced or not)</li>
            <li>Job dissatisfaction</li>
            <li>Desire for more control over their lives</li>
            <li>Desire to do his or her own thing</li>
          </ul>
          <p>
            Almost 50 percent of buyers will have less than $100,000 in which to invest in the
            purchase of a business. In many cases the funds, or part of them, will come from
            personal savings followed by financial assistance from family members. The buyer will
            never have owned a business before, and most likely will buy a business he or she had
            never considered until being introduced to it.
          </p>
        </Section>

        <Section title="What Buyers Want">
          <p>
            Here are some questions that you might be asked — and should be prepared to answer:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>How much money is required to buy the business?</li>
            <li>What is the annual increase in sales?</li>
            <li>How much is the inventory?</li>
            <li>What is the debt?</li>
            <li>Will the seller train and stay on for awhile?</li>
            <li>What makes the business different/special/unique?</li>
            <li>What further defines the product or service? Bid work? Repeat business?</li>
            <li>What can be done to grow the business?</li>
            <li>What can the buyer do to add value?</li>
            <li>What is the profit picture in bad times as well as good?</li>
          </ul>
          <p>
            The first thing to keep in mind is that the vast majority of buyers want to buy cash
            flow. Cash flow is not the same thing as profit. Most buyers look at the profit and loss
            statement or tax return, as well as owner or family compensation.
          </p>
          <Tip>
            What about the Internet? If its use is appropriate for your business, then developing a
            web site is important not only to your on-going business, but also to a buyer. Many
            buyers are conscious of what the Internet is doing for many businesses.
          </Tip>
        </Section>

        <Section title="What Can You Do?">
          <h4 className="font-bold text-gray-700 mb-2">Appearances Do Count</h4>
          <p>
            The time to replace that old worn-out piece of equipment is before you decide to sell.
            Fix the sign, replace the carpet, paint the place — make it look good. Even if you're
            not selling, it's just plain good for business.
          </p>

          <h4 className="font-bold text-gray-700 mt-6 mb-2">Everything Has Value</h4>
          <p>
            There are other things that add value to your business. Don't discount the value of
            customer lists, proprietary products and/or techniques, well-maintained equipment,
            secret recipes, customized software programs, or good employees.
          </p>

          <h4 className="font-bold text-gray-700 mt-6 mb-2">Eliminate the Surprises</h4>
          <p>
            Long before you put your business on the market, eliminate the surprises! Review every
            facet of the business and remedy any problems that could appear during the sale process.
            No one likes surprises — most of all potential buyers.
          </p>

          <Tip>
            Create an operations manual. It may actually create added value to the business. Even if
            it doesn't, it will impress buyers that you have your business "act" together and should
            help you sell more quickly and effectively.
          </Tip>

          <p className="mt-4">
            We look forward to working with you in finding a suitable buyer for your business. You,
            as the seller, are an integral part of the total marketing program. Below you will find
            a few friendly recommendations that will help in our marketing efforts when you decide
            you are ready to sell.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mt-3">
            <li>Keep normal operating hours.</li>
            <li>Repair signs, replace outside lights, etc.</li>
            <li>Maintain inventory at a constant level.</li>
            <li>Remove items that are not included in the sale.</li>
            <li>Repair non-operating equipment or remove it.</li>
            <li>Tidy-up outside premises.</li>
            <li>Spruce-up the inside of the business.</li>
          </ul>
        </Section>

        {/* Contact block */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded p-6">
          <div className="font-bold text-gray-800 text-lg mb-1" style={{ fontFamily: "Raleway, sans-serif" }}>
            {brokerConfig.brokerName}
          </div>
          <div className="text-gray-500 text-sm mb-2">{brokerConfig.brokerTitle}</div>
          <div className="text-gray-600 text-sm">{brokerConfig.brokerPhoneDisplay}</div>
          <a href={`mailto:${brokerConfig.brokerEmail}`} className="text-[#00b4c8] hover:underline text-sm">
            {brokerConfig.brokerEmail}
          </a>
        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="section-heading text-xl font-bold mb-4 pb-2 border-b border-gray-200"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#e0f7fa] border-l-4 border-[#00b4c8] px-4 py-3 my-4 rounded-r">
      <span className="font-bold text-[#00b4c8] text-sm uppercase tracking-wide">
        Insider Tip:{" "}
      </span>
      <span className="text-gray-700 text-sm">{children}</span>
    </div>
  );
}
