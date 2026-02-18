"use client"

import Image from "next/image"
import ServiceIcon1 from "@/public/Images/service-icon1.svg"
import ServiceIcon2 from "@/public/Images/service-icon2.svg"
import ServiceIcon3 from "@/public/Images/service-icon3.svg"
import ServiceIcon4 from "@/public/Images/service-icon4.svg"
import ServiceIcon5 from "@/public/Images/service-icon5.svg"
import ServiceIcon6 from "@/public/Images/service-icon6.svg"

const ServiceData = [
  {
    id: 1,
    img: ServiceIcon1,
    title: "Social Influence Tactics",
    desc: "We identify influential voices the content.",
  },
  {
    id: 2,
    img: ServiceIcon2,
    title: "Targeted Social Advertising",
    desc: "Strategic social ads designed to reachideal customers. Maximize engagement, and improve measurable conversions.",
  },
  {
    id: 3,
    img: ServiceIcon3,
    title: "Paid Media Strategy",
    desc: "DAta-driven paid media strategies focused on boosting visibility, traffic and consistent campaign performance.",
  },
  {
    id: 4,
    img: ServiceIcon4,
    title: "More Clicks Rise Media",
    desc: "Optimiezed media camapaigns built to increase clicks, grow reach, and deliver meaningful audience interactions.",
  },
  {
    id: 5,
    img: ServiceIcon5,
    title: "Social Media Strategy",
    desc: "Customized social strategies that build trust, grow communities and encourage long-term customer engagement.",
  },
  {
    id: 6,
    img: ServiceIcon6,
    title: "Social Impact Studio",
    desc: "Creative solutions that aling brand values with impactful storytelling across multiple social platforms.",
  },
]

const Services = () => {
  return (
    <>
      <section id="services" className="px-[8%] lg:px-[16%] py-30 pt-40 lg:pt-30">
        <div className="title text-center">
          <h5 className="Syne text-2xl">( POTENTIAL SERVICES )</h5>
          <h1 className="Syne font-extrabold text-4xl md:text-6xl">
            OUR BEST SERVICES
          </h1>
        </div>

        <div className="mt-20 services-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ServiceData.map((service, index) => (
              <div
                key={index}
                className="service-card flex flex-col items-center bg-white/50 border border-white  p-4 shadow-lg shadow-gray-200 rounded-lg"
              >
                <div className="bg-white flex flex-col items-center shadow-lg shadow-gray-300 rounded-2xl p-5">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={60}
                    height={60}
                  />

                  <h1 className="Syne text-2xl hover:text-prim cursor-pointer transition-all duration-300 font-semibold my-5">
                    {service.title}
                  </h1>

                  <p className="text-center tracking-wider">
                    {service.desc}
                  </p>

                  <button className="servive-btn bg-black text-white px-5 py-2 rounded-lg mt-5 border border-black transition-all duration-300 cursor-pointer">
                    <div className="servicec-btn-text">
                      Read More <i className="bi bi-arrow-right ps-2"></i>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services