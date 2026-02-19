"use client"


const PricingData = [
  {
    id: 1,
    plan: "Basic Plan",
    price: "$39",
    desc: "Perfect for freelancer and small bussiness owners",
    includes: [
      "Up to 3 Members",
      "Unlimited usage",
      "Unlimited Drive storage",
      "Concierge Help center",
      "Priority Email Support"
    ]
  },
  {
    id: 2,
    plan: "Standard Plan",
    price: "$49",
    desc: "Ideal for growing businesses that need hands-on support",
    includes: [
      "Up to 10 Members",
      "Unlimited usage",
      "Unlimited Drive storage",
      "Concierge Help center",
      "Priority Email Support",
      "24/7 Support",
      "Monthly Strategy Calls"
    ]
  },
  {
    id: 3,
    plan: "Premium Plan",
    price: "$59",
    desc: "Perfect for established businesses needing comprehensive financial guidance",
    includes: [
      "Up to 20 Members",
      "Unlimited usage",
      "Unlimited Drive storage",
      "Concierge Help center",
      "Priority Email Support",
      "24/7 Support",
      "Monthly Strategy Calls",
      "Supervision of a dedicated manager"
    ]
  }
]

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="px-[8%] lg-[px-[16%] py-10 lg:py-30">
        <div className="flex flex-col items-center">
          <div className='title text-center w-full lg:w-[50%]'>
            <h5 className='Syne text-2xl'>
              ( PRICING TABLE )
            </h5>

            <h1 className='Syne font-extrabold text-4xl md:text-6xl'>
              Select the Best Package To Meet Your Needs
            </h1>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mt-20 md:mt-30 Pricing-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PricingData.map((plan) => (
              <div key={plan.id} className="flex flex-col bg-white/50 border border-white p-4 shadow-lg rounded-lg">
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
                    {plan.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-lg text-gray-800">
                        <i className="bi bi-check2 text-xl text-black"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  )
}


export default Pricing
