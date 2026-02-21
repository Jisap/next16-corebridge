"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, zoomIn } from "@/app/Components/Animations/variants"

const allFeatures = [
  { key: "members", label: "Team Members" },
  { key: "usage", label: "Unlimited usage" },
  { key: "storage", label: "Unlimited Drive storage" },
  { key: "helpCenter", label: "Concierge Help center" },
  { key: "emailSupport", label: "Priority Email Support" },
  { key: "support247", label: "24/7 Support" },
  { key: "strategyCalls", label: "Monthly Strategy Calls" },
  { key: "dedicatedManager", label: "Supervision of a dedicated manager" }
]

const PricingData = [
  {
    id: 1,
    plan: "Basic Plan",
    price: "$39",
    desc: "Perfect for freelancer and small bussiness owners",
    features: {
      members: { included: true, value: "Up to 3 Members" },
      usage: { included: true },
      storage: { included: true },
      helpCenter: { included: true },
      emailSupport: { included: true },
      support247: { included: false },
      strategyCalls: { included: false },
      dedicatedManager: { included: false }
    }
  },
  {
    id: 2,
    plan: "Standard Plan",
    price: "$49",
    desc: "Ideal for growing businesses that need hands-on support",
    features: {
      members: { included: true, value: "Up to 10 Members" },
      usage: { included: true },
      storage: { included: true },
      helpCenter: { included: true },
      emailSupport: { included: true },
      support247: { included: true },
      strategyCalls: { included: true },
      dedicatedManager: { included: false }
    }
  },
  {
    id: 3,
    plan: "Premium Plan",
    price: "$59",
    desc: "Perfect for established businesses needing comprehensive financial guidance",
    features: {
      members: { included: true, value: "Up to 20 Members" },
      usage: { included: true },
      storage: { included: true },
      helpCenter: { included: true },
      emailSupport: { included: true },
      support247: { included: true },
      strategyCalls: { included: true },
      dedicatedManager: { included: true }
    }
  }
]

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="px-[8%] lg:px-[16%] py-10 lg:py-30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className='title text-center w-full lg:w-[50%]'>
            <motion.h5 variants={fadeInUp} className='Syne text-2xl'>
              ( PRICING TABLE )
            </motion.h5>

            <motion.h1 variants={fadeInUp} className='Syne font-extrabold text-4xl md:text-6xl'>
              Select the Best Package To Meet Your Needs
            </motion.h1>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <div className="mt-20 md:mt-30 Pricing-wrap">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {PricingData.map((plan, index) => (
              <motion.div
                variants={zoomIn}
                key={plan.id}
                className={`
                  flex flex-col bg-white/50 border border-white p-4 shadow-lg rounded-lg 
                  ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
                  `
                }>
                <div className="flex flex-col shadow-lg shadow-gray-300 rounded-2xl overflow-hidden w-full">
                  <div className="p-6 pb-2 bg-white/70 Pricing-box">
                    <h1 className="Syne text-2xl font-semibold mb-2">
                      {plan.plan}
                    </h1>

                    <h2 className="Syne text-5xl font-extrabold text-black mb-3">
                      {plan.price}
                      <span className="text-base font-medium text-gray-500">/ month</span>
                    </h2>

                    <p className="tracking-wider mb-5">
                      {plan.desc}
                    </p>

                    <button className="btn bg-white hover:bg-black hover:text-white px-6 py-3 rounded-full mb-5 border border-black/30 transition-all duration-300 cursor-pointer">
                      <div className="btn-text">
                        Buy Plan <i className="bi bi-arrow-right ps-2"></i>
                      </div>
                    </button>
                  </div>

                  <ul className="w-full space-y-2 p-6 bg-white">
                    {allFeatures.map((feature) => {
                      const featureData = plan.features[feature.key as keyof typeof plan.features]                    // value del feature iterado: para members sería "{ included: true, value: "Up to 3 Members" }."
                      const isIncluded = featureData.included                                                         // Accede a la prop "included". 
                      const displayText = feature.key === "members" && featureData.included && "value" in featureData // Si se cumplen las 3 propiedades, se muestra su valor sino solo el label de allFeatures
                        ? featureData.value
                        : feature.label

                      return (
                        <li
                          key={feature.key}
                          className={`flex items-center gap-2 text-lg ${isIncluded ? "text-gray-800" : "text-gray-400 line-through"}`}
                        >
                          <i className={`bi ${isIncluded ? "bi-check2 text-black" : "bi-x text-gray-400"} text-xl`}></i>
                          {displayText}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>

  )
}


export default Pricing
