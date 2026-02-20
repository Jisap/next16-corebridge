"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  // General Questions
  {
    id: 1,
    category: "general",
    question: "Why does the pricing look different?",
    answer: "We believe that meaningfull change starts with purpose-driven people. Our pricing reflects our commitment to quality, innovation, and long-term partnerships. We focus on delivering measurable results and building trust through transparency and integrity."
  },
  {
    id: 2,
    category: "general",
    question: "How do I get started with Corebridge?",
    answer: "Getting started is easy! Simply sign up for an account, choose the plan that best fits your needs, and follow our onboarding guide. Our team is also available to assist you with the initial setup to ensure a smooth transition."
  },
  {
    id: 3,
    category: "general",
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all new users. This gives you full access to our platform's features so you can experience the benefits firsthand before making a commitment. No credit card is required to start."
  },
  {
    id: 4,
    category: "general",
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Absolutely. You can adjust your plan at any time directly from your account dashboard. Whether your business is growing or you need to scale back, our flexible subscription model allows you to change your plan to match your current requirements."
  },
  // Support Questions
  {
    id: 5,
    category: "support",
    question: "How can I contact customer support?",
    answer: "You can reach our support team via email, live chat, or through our dedicated support portal. We are committed to providing timely and effective assistance to resolve any issues you may encounter."
  },
  {
    id: 6,
    category: "support",
    question: "What is your average response time?",
    answer: "Our team typically responds to inquiries within 24 hours during business days. For urgent matters, our premium plans offer priority support with faster response times to ensure your operations run smoothly."
  },
  {
    id: 7,
    category: "support",
    question: "Do you offer 24/7 support?",
    answer: "We offer 24/7 support for our Enterprise plan customers. For other plans, our support team is available during standard business hours, but we have an extensive knowledge base accessible at any time."
  },
  {
    id: 8,
    category: "support",
    question: "Where can I find tutorials or documentation?",
    answer: "We have a comprehensive Help Center featuring step-by-step tutorials, video guides, and detailed documentation. It's designed to help you navigate our platform and make the most of its features independently."
  },
  // License Questions
  {
    id: 9,
    category: "license",
    question: "What kind of licenses do you offer?",
    answer: "We offer a variety of licensing options including single-user, team, and enterprise licenses. Each license tier comes with specific usage rights and feature sets tailored to different organizational sizes and needs."
  },
  {
    id: 10,
    category: "license",
    question: "Can I use the product for multiple clients?",
    answer: "Yes, our Agency and Enterprise licenses allow you to use the product for multiple client projects. Please check the specific terms of your license agreement for details on the number of allowed projects or clients."
  },
  {
    id: 11,
    category: "license",
    question: "Do I need to renew my license annually?",
    answer: "Our standard licenses operate on an annual subscription basis, which includes updates and support. We also offer lifetime licenses for specific products, which provide perpetual access with optional support renewals."
  },
  {
    id: 12,
    category: "license",
    question: "What happens if I cancel my subscription?",
    answer: "If you cancel your subscription, you will retain access to the product until the end of your current billing cycle. After that, your account will revert to a free tier or be deactivated, depending on the specific product terms."
  }
];

const tabs = [
  { id: "general", label: "General" },
  { id: "support", label: "Support" },
  { id: "license", label: "License" },
];

const Faqs = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFaqs = faqData.filter((faq) => faq.category === activeTab);

  return (
    <>
      <section id="faqs" className="px-[8%] lg:px-[16%] py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <div className='title'>
              <h5 className='Syne text-2xl text-gray-500'>
                ( ASK ANY QUESTIONS )
              </h5>
              <h1 className='Syne font-extrabold text-5xl md:text-6xl mt-2'>
                Client Queries & Our Responses
              </h1>
              <p className="tracking-wide text-xl text-gray-600 mt-5">
                While WordPress themes offer customization, they often follow common design patterns, making it difficult to achieve true uniqueness.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex space-x-4 border-b border-gray-300">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative py-2 px-4 text-lg font-medium transition-colors duration-300 
                      ${activeTab === tab.id ? "text-gray-800" : "text-gray-600"}
                    `}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-blue-500"
                        layoutId="underline"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <AnimatePresence mode="wait">
                  {filteredFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      className="border-b border-gray-200 py-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <h3 className="text-gray-800 text-xl font-semibold">
                          {faq.question}
                        </h3>
                        <i className={`bi text-2xl ${activeId === faq.id ? "bi-dash" : "bi-plus"}`}></i>
                      </div>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === faq.id ? "max-h-screen mt-3" : "max-h-0"}`}>
                        <p className="px-1 text-gray-600 tracking-wide">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 sticky top-20 left-0 h-full">
            <div className="faq-form-wrap">
              <div className="bg-white/40 backdrop-blur-2xl border border-white p-5 rounded-xl">
                <div className="bg-white rounded-xl p-6">
                  <h2 className="text-3xl">Ask An Question</h2>
                  <div className="flex flex-col mt-5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400 text-lg border border-gray-200 transition-all duration-300"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400 text-lg border border-gray-200 transition-all duration-300 mt-4"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400 text-lg border border-gray-200 transition-all duration-300 mt-4"
                    />
                    <textarea
                      rows={5}
                      placeholder="Message"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400 text-lg border border-gray-200 transition-all duration-300 mt-4"
                    />
                    <button className="btn faq-btn text-white text-xl px-6 py-3 rounded-md mt-5 transition-all duration-300 cursor-pointer">
                      <div className="btn-text">
                        Ask Questions <i className="bi bi-arrow-right ps-2"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
