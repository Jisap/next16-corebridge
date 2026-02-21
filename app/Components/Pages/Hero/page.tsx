"use client"

import Image from "next/image"
import HeroImg from "@/public/Images/Hero.webp"
import clutchImg from "@/public/Images/clutch.svg"
import arrowImg from "@/public/Images/arrow-shape-1.svg"
import textArrowImg from "@/public/Images/text-arrow.svg"
import CountUp from "react-countup"
import { motion } from "framer-motion"
import { fadeInUp, fadeInRight, staggerContainer, zoomIn, floatVariant, rotateVariant } from "@/app/Components/Animations/variants"


const Hero = () => {
  return (
    <>
      <div className="hero-header relative">
        <div className="container mx-auto px-6 lg:px-[5%] py-10 lg:py-0">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-center min-h-[calc(100vh-80px)] lg:min-h-screen"
          >
            {/* izquierda */}
            <div className="hero-content-wrapper z-10 lg:pr-10">
              <div className="hero-content w-full">
                <motion.h1
                  variants={fadeInUp}
                  className="Syne text-6xl md:text-7xl tracking-wider font-bold mb-2"
                >
                  AGENCY
                </motion.h1>

                <motion.h1
                  variants={fadeInUp}
                  className="Syne text-6xl md:text-7xl tracking-wider font-bold mb-2"
                >
                  <span>
                    OFFERING
                  </span>
                </motion.h1>

                <motion.h1
                  variants={fadeInUp}
                  className="Syne text-6xl md:text-7xl tracking-wider font-bold mb-2"
                >
                  LEAD CAPTURE
                </motion.h1>

                <motion.h1
                  variants={fadeInUp}
                  className="Syne text-6xl md:text-7xl tracking-wider font-bold flex items-center justify-center lg:justify-start gap-2 mb-6"
                >
                  SOFTWARE

                  <Image
                    src={textArrowImg}
                    alt="text-arrow"
                    width={40}
                    height={40}
                    className="w-5 md:w-8"
                  />
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-5 text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0"
                >
                  Success in marketing comes from well-synchronised and steady tactics
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-10 max-w-xl mx-auto lg:mx-0"
                >
                  <div className="flex items-center p-1.5 sm:p-2 bg-white rounded-xl shadow-2xl shadow-gray-400/50 gap-2">
                    <input
                      type="text"
                      placeholder="Enter your E-mail"
                      className="flex-1 outline-none px-4 py-2 text-base bg-transparent min-w-0"
                    />

                    <button
                      className="bg-black px-4 sm:px-6 py-3 text-white rounded-lg flex justify-center items-center gap-2 border border-black hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer group whitespace-nowrap text-sm md:text-base font-semibold shrink-0"
                    >
                      Start for free <i className="bi bi-arrow-up-right group-hover:rotate-45 transition-all duration-300"></i>
                    </button>
                  </div>

                  <p className="tracking-wider text-gray-500 mt-5 text-sm md:text-base">
                    30 Day Free Trial No Credit Card Required
                  </p>
                </motion.div>
              </div>
            </div>

            {/* derecha */}
            <div className="relative h-full flex items-end justify-center lg:justify-end lg:static">
              <div className="hero-img relative lg:absolute lg:bottom-0 lg:right-0 max-w-[90%] lg:max-w-[50%] xl:max-w-[48%] flex items-end">
                <motion.div variants={fadeInRight}>
                  <Image
                    src={HeroImg}
                    alt="hero"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </motion.div>

                <div className="hero-image-wrapper">
                  <motion.div
                    variants={zoomIn}
                    className="clutchImg"
                  >
                    <motion.div animate={floatVariant.animate}>
                      <Image
                        src={clutchImg}
                        alt="clutch"
                        width={60}
                        height={60}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={zoomIn}
                    className="arrowImg"
                  >
                    <motion.div animate={rotateVariant.animate}>
                      <Image
                        src={arrowImg}
                        alt="arrow"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeInRight} className="hero-info-wrap hidden md:block">
                    <div className="hero-info shadow-lg shadow-gray-300 bg-white p-4 md:p-6 rounded-lg">
                      <div className="stars flex gap-1 mb-2">
                        <i className="bi bi-star-fill text-yellow-500"></i>
                        <i className="bi bi-star-fill text-yellow-500"></i>
                        <i className="bi bi-star-fill text-yellow-500"></i>
                        <i className="bi bi-star-fill text-yellow-500"></i>
                        <i className="bi bi-star-fill text-yellow-500"></i>
                      </div>

                      <p className="tracking-wider text-gray-400 font-semibold Syne text-sm">
                        Trusted by 1 Million users
                      </p>
                    </div>

                    <div className="hero-info shadow-lg shadow-gray-300 bg-white p-4 md:p-6 rounded-lg mt-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-xl text-2xl md:text-3xl font-bold border border-gray-100 bg-gray-50 px-3 py-1 md:px-4 md:py-2">
                          <CountUp
                            start={0}
                            end={5}
                            duration={3}
                            enableScrollSpy
                            scrollSpyOnce
                          >
                            {({ countUpRef }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>K
                        </div>

                        <div className="flex flex-col text-gray-600 font-bold Syne leading-tight text-sm md:text-base">
                          <p>Happy</p>
                          <p>Customers</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero