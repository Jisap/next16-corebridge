"use client"

import Image from "next/image"
import CountUp from "react-countup"
import Chart from "@/public/Images/about-chart.svg"
import aboutTeam from "@/public/Images/about-team-image.png"
import { motion } from "framer-motion"
import { fadeInUp, fadeInRight, staggerContainer, zoomIn } from "@/app/Components/Animations/variants"





const About = () => {
  return (
    <>
      <section className="px-[8%] lg:px-[16%] py-20" id="about">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-5"
        >
          {/* Izquierda */}
          <motion.div variants={staggerContainer} className="w-full lg:w-1/2">
            <motion.div variants={fadeInUp} className="title">
              <h5 className="Syne text-2xl">( ABOUT US )</h5>
              <h1 className="Syne font-extrabold text-4xl marker:text-6xk">
                Data-Driven SEO Agency With Proven Case Study Results
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg Syne tracking-wider text-gray-500 my-5">
              On average, we've delivered an impressive 780% return on investment for our clients. For example, we helped a software product company grow their organic traffic tenfold - from 20,000 to over 200,000 monthly visitors.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg Syne tracking-wider text-gray-500 my-5">
              These results aren't just exceptions, they're what happens when you invest in sustainable SEO strategies that focus on stable, long-term growth.
            </motion.p>

            <motion.button variants={fadeInUp} className="btn bg-black text-white px-5 py-2 rounded-lg mt-5 border border-black transition-all duration-300 cursor-pointer">
              <div className="btn-text">
                Explore More <i className="bi bi-arrow-right ps-2"></i>
              </div>
            </motion.button>
          </motion.div>

          {/* Derecha */}
          <div className="w-full lg:w-1/2">
            <div className="w-full flex justify-center items-center">
              <motion.div variants={fadeInRight} className="about-info-wrap rounded-2xl bg-white/40 border border-white p-5">
                <div className="rounded-2xl bg-white/50 border border-white p-3">
                  <div className="about-img">
                    <h2 className="Syne text-3xl">
                      Organic search spot
                    </h2>

                    <div className="mt-5">
                      <div className="inline-block text-3xl p-2 rounded-2xl mt-5 border border-gray-200">
                        <CountUp start={0} end={75} duration={8} enableScrollSpy scrollSpyOnce>
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>%

                        <span className="text-[15px] ps-1 text-gray-400 Syne">AVG</span>
                      </div>

                      <Image
                        src={Chart}
                        alt="chart"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* tarjeta flotante1 */}
                <motion.div variants={zoomIn} className="absolute -bottom-40 -md:bottom-10 -left-10 lg:-left-20">
                  <div className="w-1/2 rounded-2xl bg-white/50 border border-white p-3">
                    <div className="rounded-2xl bg-white shadow-lg shadow-gray-300 p-5">
                      <h2 className="text-3xl font-semibold">
                        <CountUp start={0} end={985} duration={5} enableScrollSpy scrollSpyOnce>
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>K
                      </h2>

                      <h3 className="text-gray-600 Syne my-2">Revenue</h3>

                      <h2 className="text-lg">PPC Management</h2>

                      <p className="text-gray-400 tracking-wider Syne text-sm">
                        We plan, manage PPC budget, & measure Google Adwords Pay Per Click
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* tarjeta flotante2 */}
                <motion.div variants={zoomIn} className="absolute top-80 md:-top-10 -right-10 md:-right-30 w-1/2">
                  <div className="rounded-2xl bg-white/50 border border-white p-5">
                    <div className="rounded-2xl bg-white shadow-lg shadow-gray-300 p-5">
                      <Image
                        src={aboutTeam}
                        alt="aboutTeam"
                        className="w-full h-full object-contain mb-5"
                      />

                      <div className="text-center">
                        <h2 className="text-4xl font-semibold">
                          <CountUp start={0} end={100} duration={5} enableScrollSpy scrollSpyOnce>
                            {({ countUpRef }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>+
                        </h2>

                        <p className="text-gray-400 tracking-wider Syne">
                          Expertise Teams
                        </p>
                      </div>

                    </div>


                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default About