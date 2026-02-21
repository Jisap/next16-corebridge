"use client"

import React from 'react'
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/app/Components/Animations/variants"

const GetInTouch = () => {
  return (
    <>
      <section id="getintouch" className="px-[8%] lg:px-[16%] py-10 lg:py-30">
        <div className='GetInTouch'>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='text-white h-full flex flex-col justify-center items-center text-center'
          >
            <motion.h5 variants={fadeInUp} className='text-3xl font-light'>
              HAVE A PROJECT IN MIND?
            </motion.h5>

            <motion.h1 variants={fadeInUp} className='text-4xl md:text-6xl lg:text-7xl w-full lg:w-[70%] my-5'>
              let's Work On Something Awesome Together
            </motion.h1>

            <motion.button variants={fadeInUp}>
              <div className='btn faq-btn text-white text-xl px-6 py-3 rounded-md mt-5 transition-all duration-300 cursor-pointer'>
                <div className='btn-text'>
                  Get In Touch <i className='bi bi-arrow-right ps-2'></i>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default GetInTouch