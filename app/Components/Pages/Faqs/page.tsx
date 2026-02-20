"use client"

import { useState } from "react";

const GeneralFaqData = [
  {
    id: 1,
    question: "Why does the pricing look different?",
    answer: "We believe that meaningfull change starts with purpose-driven people. Our pricing reflects our commitment to quality, innovation, and long-term partnerships. We focus on delivering measurable results and building trust through transparency and integrity."
  },
  {
    id: 2,
    question: "How do I get started with Corebridge?",
    answer: "Getting started is easy! Simply sign up for an account, choose the plan that best fits your needs, and follow our onboarding guide. Our team is also available to assist you with the initial setup to ensure a smooth transition."
  },
  {
    id: 3,
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all new users. This gives you full access to our platform's features so you can experience the benefits firsthand before making a commitment. No credit card is required to start."
  },
  {
    id: 4,
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Absolutely. You can adjust your plan at any time directly from your account dashboard. Whether your business is growing or you need to scale back, our flexible subscription model allows you to change your plan to match your current requirements."
  }
];

const SupportFaqData = [
  {
    id: 1,
    question: "How can I contact customer support?",
    answer: "You can reach our support team via email, live chat, or through our dedicated support portal. We are committed to providing timely and effective assistance to resolve any issues you may encounter."
  },
  {
    id: 2,
    question: "What is your average response time?",
    answer: "Our team typically responds to inquiries within 24 hours during business days. For urgent matters, our premium plans offer priority support with faster response times to ensure your operations run smoothly."
  },
  {
    id: 3,
    question: "Do you offer 24/7 support?",
    answer: "We offer 24/7 support for our Enterprise plan customers. For other plans, our support team is available during standard business hours, but we have an extensive knowledge base accessible at any time."
  },
  {
    id: 4,
    question: "Where can I find tutorials or documentation?",
    answer: "We have a comprehensive Help Center featuring step-by-step tutorials, video guides, and detailed documentation. It's designed to help you navigate our platform and make the most of its features independently."
  }
]

const LicenseFaqData = [
  {
    id: 1,
    question: "What kind of licenses do you offer?",
    answer: "We offer a variety of licensing options including single-user, team, and enterprise licenses. Each license tier comes with specific usage rights and feature sets tailored to different organizational sizes and needs."
  },
  {
    id: 2,
    question: "Can I use the product for multiple clients?",
    answer: "Yes, our Agency and Enterprise licenses allow you to use the product for multiple client projects. Please check the specific terms of your license agreement for details on the number of allowed projects or clients."
  },
  {
    id: 3,
    question: "Do I need to renew my license annually?",
    answer: "Our standard licenses operate on an annual subscription basis, which includes updates and support. We also offer lifetime licenses for specific products, which provide perpetual access with optional support renewals."
  },
  {
    id: 4,
    question: "What happens if I cancel my subscription?",
    answer: "If you cancel your subscription, you will retain access to the product until the end of your current billing cycle. After that, your account will revert to a free tier or be deactivated, depending on the specific product terms."
  }
]

const Faqs = () => {

  const [activeId, setActiveId] = useState<number | null>(null)
  const [activeSupportId, setActiveSupportId] = useState<number | null>(null)
  const [activeLicenseId, setActiveLicenseId] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  const toggleSupportFaq = (id: number) => {
    setActiveSupportId(activeSupportId === id ? null : id)
  }

  const toggleLicenceFaq = (id: number) => {
    setActiveLicenseId(activeLicenseId === id ? null : id)
  }

  return (
    <>
      <section id="faqs" className="px-[8%] lg:[px-[16%] py-10 lg:py-30">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-1/1">
            <div className='title'>
              <h5 className='Syne text-2xl'>
                ( ASK AN QUESTIONS )
              </h5>

              <h1 className='Syne font-extrabold text-5xl md:text-6xl'>
                Client Queries And Our Responses
              </h1>

              <p className="tracking-wide text-xl text-gray-600 w-full mt-5">
                While WordPress themes offer customization, they often follow common design patterns,
                making it difficult to achieve true uniqueness. many users rely on pre-built themes,
                resulting in websites that look similar, reducing brand differentation.
              </p>
            </div>

            <div>
              <div className="border-b border-gray-400 my-5"></div>

              <div>
                <h2 className="text-3xl text-gray-700 w-full mt-5">
                  General Questions
                </h2>

                <p className="tracking-wide text-xl text-gray-600 w-full mt-5">
                  Gain insights into WordPress themes and their role in building a unique website,
                  ensuring seamless compatibility, incorporating demo content, and assisting with setup
                  and installation.
                </p>

                <div>
                  {GeneralFaqData.map((faq) => (
                    <div key={faq.id} className="mt-5">
                      <div
                        onClick={() => toggleFaq(faq.id)}
                        className="faq-question flex justify-between items-center bg-white p-5 gap-3 cursor-pointer"
                      >
                        <h3 className="text-gray-700 text-xl">
                          Q &nbsp;{faq.question}
                        </h3>
                        <i className={`bi ${activeId === faq.id ? "bi-dash" : "bi-plus"}`}></i>
                      </div>

                      <div className={`
                        overflow-hidden transition-all duration-300 ease-in-out 
                        ${activeId === faq.id
                          ? "max-h-40 opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 pb-2 text-gray-600 tracking-wide">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

                    <button>
                      <div className="btn faq-btn text-white text-xl px-6 py-3 rounded-md mt-5 transition-all duration-300 cursor-pointer">
                        <div className="btn-text">
                          Ask Questions <i className="bi bi-arrow-right ps-2"></i>
                        </div>
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
  )
}

export default Faqs