"use client"

import Image from 'next/image'
import sectionBG from "@/public/Images/section-bg.webp"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, fadeInLeft } from "@/app/Components/Animations/variants"

interface HistoryItem {
  year: string
  title: string
  description: string
}

const historyData: HistoryItem[] = [
  {
    year: "2005",
    title: "Launch Corebridge 1.0",
    description: "Corebridge was established with a clear mission: to simplify complex financial strategies and empower businesses of all sizes with smarter financial solutions."
  },
  {
    year: "2012",
    title: "AWARDED FOR EXCELLENCE",
    description: "Corebridge was recognized by a leading industry association for excellence in corporate financial strategy, validating our commitment to ethical guidance and measurable results."
  },
  {
    year: "2016",
    title: "REGIONAL OFFICE OPENED",
    description: "To better serve clients outside the founding city, Xelo opened its first regional office, extending its reach and strengthening client relationships across the region."
  },
  {
    year: "2026",
    title: "CELEBRATING 20 YEARS",
    description: "Corebridge 20th anniversary marked the launch of a bold new vision: empowering clients with financial strategies built for sustainability, resilence, and growth."
  }
]

const HistoryCard = ({ year, title, description }: HistoryItem) => (
  <div className='history-card bg-white p-7 rounded-lg'>
    <div className='history-box flex flex-col gap-3 bg-[#f4f3f8] p-8 rounded-2xl'>
      <div>
        <span className='px-4 py-2 bg-white text-xl shadow rounded-lg'>
          {year}
        </span>
      </div>
      <h2 className='mt-5 text-4xl'>{title}</h2>
    </div>
    <div className='px-5 pt-3'>
      <p className='text-gray-500 font-light text-lg tracking-wide'>
        {description}
      </p>
    </div>
  </div>
)

const History = () => {
  return (
    <>
      <section id="history" className='px-[8%] lg:px-[16%] py-10 md:py-20 lg:py-30 relative'>
        <Image
          src={sectionBG}
          alt="sectionBG"
          className='absolute top-20 left-0  w-full h-full object-cover -z-1'
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col lg:flex-row justify-between gap-5 z-5'>
          <motion.div
            variants={fadeInLeft}
            className='w-full lg:w-1/2 lg:sticky top-40 left-0 h-full'>
            <div className='title'>
              <h5 className='Syne text-2xl'>
                ( OUR HISTORY )
              </h5>

              <h1 className='Syne font-extrabold text-4xl md:text-6xl'>
                A HISTORY OF INNOVATION AND IMPACT
              </h1>

              <p className='tracking-wide text-xl text-gray-600 w-full mt-5 lg:w-[80%]'>
                We're passionate about solving problems through creative communications.
              </p>

              <button className='mt-5 border border-gray-400 px-6 py-2 text-2xl rounded-full hover:bg-black hover:text-white transition-all durarion-300 cursor-pointer'>
                Explore More <i className='bi bi-arrow-right ps-3 text-2xl'></i>
              </button>
            </div>
          </motion.div>

          <div className='w-full lg:w-1/2 lg:mt-0 mt-5'>
            <motion.div variants={staggerContainer} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6'>
              {historyData.map((item) => (
                <motion.div variants={fadeInUp} key={item.year}>
                  <HistoryCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default History
