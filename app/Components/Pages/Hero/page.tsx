"use client"

import Image from "next/image"
import HeroImg from "@/public/Images/Hero.webp"
import clutchImg from "@/public/Images/clutch.svg"
import arrowImg from "@/public/Images/arrow-shape-1.svg"
import textArrowImg from "@/public/Images/text-arrow.svg"
import CountUp from "react-countup"


const Hero = () => {
  return (
    <>
      <div className="hero-header flex items-center relative">
        <div className="ps-[8%] lg:ps-[16%] pe-[8%] md:pe-0 py-10">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3">
            {/* izquierda */}
            <div className="w-full lg:w-1/2">
              <div className="hero-content w-full">
                <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold">
                  AGENCY
                </h1>

                <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold">
                  <span>
                    OFFERING
                  </span>
                </h1>

                <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold">
                  LEAD CAPTURE
                </h1>

                <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold flex items-center gap-2">
                  SOFTWARE

                  <Image
                    src={textArrowImg}
                    alt="text-arrow"
                    width={40}
                    height={40}
                  />
                </h1>

                <p className="mt-5 text-xl">
                  Success in marketing comes from well-synchronised and steady tactics
                </p>

                <div className="mt-10">
                  <div className="flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-lg shadow-gray-200">
                    <input
                      type="text"
                      placeholder="Enter your E-mail"
                      className="w-[60%] lg:w-[70%] outline-none"
                    />

                    <button
                      className="bg-black px-4 py-3 text-white rounded-lg flex gap-2 border border-black hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer group"
                    >
                      Start for free <i className="bi bi-arrow-up-right group-hover:rotate-45 transition-all duration-300 cursor-pointer"></i>
                    </button>
                  </div>

                  <p className="tracking-wider text-gray-700 mt-5">
                    30 Day Free Trial No Credit Card Required
                  </p>
                </div>
              </div>
            </div>

            {/* derecha */}
            <div className="w-full lg:w-1/2">
              <p className="opacity-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.
              </p>

              <div className="hero-img relative lg:absolute bottom-0 right-0">
                <Image
                  src={HeroImg}
                  alt="hero"
                  className="w-full h-full"
                />

                <div className="hero-image-wrapper">
                  <div className="clutchImg">
                    <Image
                      src={clutchImg}
                      alt="clutch"
                    />
                  </div>

                  <div className="arrowImg">
                    <Image
                      src={arrowImg}
                      alt="arrow"
                    />
                  </div>

                  <div className="hero-info-wrap hidden md:block">
                    <div className="hero-info shadow-lg shadow-gray-300 bg-white p-6 rounded-lg">
                      <div className="stars flex gap-1">
                        <i className="bi bi-star-fill text-yellow-400"></i>
                        <i className="bi bi-star-fill text-yellow-400"></i>
                        <i className="bi bi-star-fill text-yellow-400"></i>
                        <i className="bi bi-star-fill text-yellow-400"></i>
                        <i className="bi bi-star-fill text-yellow-400"></i>
                      </div>

                      <p className="tracking-wider text-gray-300 font-semibold Syne">
                        Trusted by 1 Million users
                      </p>
                    </div>

                    <div className="hero-info shadow-lg shadow-gray-300 bg-white p-6 rounded-lg mt-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center rounded-xl text-3xl font-semibold border border-gray-300 px-4 py-2">
                          <CountUp
                            start={0}
                            end={5}
                            duration={5}
                            enableScrollSpy
                            scrollSpyOnce
                          />K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero