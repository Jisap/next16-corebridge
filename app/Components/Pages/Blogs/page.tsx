"use client"

import Image from "next/image";
import Blog1 from "@/public/Images/blog-1.jpg";
import Blog2 from "@/public/Images/blog-2.jpg";
import Blog3 from "@/public/Images/blog-3.jpg";
import Blog4 from "@/public/Images/blog-4.jpg";
import Blog5 from "@/public/Images/blog-5.jpg";
import Blog6 from "@/public/Images/blog-6.jpg";
import Blog7 from "@/public/Images/blog-7.jpg";
import Blog8 from "@/public/Images/blog-8.jpg";
import Blog9 from "@/public/Images/blog-9.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/app/Components/Animations/variants"

const BlogsData = [
  {
    id: 1,
    img: Blog1,
    tag: "Business",
    date: "January 28, 2026",
    title: "Fueling Business Dreams With Digital Power",
    desc: "Before you can grow your presence online, you need to your brand statands for good vibe."
  },
  {
    id: 2,
    img: Blog2,
    tag: "Business",
    date: "February 27, 2026",
    title: "Top Trend Shaping Digital Marketing in 2026",
    desc: "The future of digital marketing is here. Experiences, and data analytics are the key to success."
  },
  {
    id: 3,
    img: Blog3,
    tag: "Business",
    date: "March 25, 2026",
    title: "Why Most Software Projects Fail-How Agencies Prevent It",
    desc: "At the heart of every business dream experiences lies the power of digital marketing."
  },
  {
    id: 4,
    img: Blog4,
    tag: "Business",
    date: "may 25, 2026",
    title: "A complete Guide to Creating Your Digital Presence",
    desc: "Your Blueprint to Shine in the Digital World is more than just a website."
  },
  {
    id: 5,
    img: Blog5,
    tag: "Business",
    date: "June 25, 2026",
    title: "Color as Defining Element of Brand Identity",
    desc: "Choosing the right digital agency is one of the most important decisions you can make for your business."
  },
  {
    id: 6,
    img: Blog6,
    tag: "Business",
    date: "July 25, 2026",
    title: "The Power of Data-Driven Marketing for Growth.",
    desc: "The power of data-driven marketing lies in its ability to help businesses make data-driven decisions."
  },
  {
    id: 7,
    img: Blog7,
    tag: "Business",
    date: "August 25, 2026",
    title: "How to Choose the Right Digital Agency for Your Business",
    desc: "Choose the right digital agency for your business is one of the most important decisions you can make for your business."
  },
  {
    id: 8,
    img: Blog8,
    tag: "Business",
    date: "September 25, 2026",
    title: "Your Blueprint to Shine in the Digital World",
    desc: "Your Blueprint is the best way to shine in the digital world."
  },
  {
    id: 9,
    img: Blog9,
    tag: "Business",
    date: "October 25, 2026",
    title: "Digital Marketing as the Catalyst for Success",
    desc: "Success in the digital world is a result of effective digital marketing."
  },

]

const Blog = () => {

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section id="blog" className="px-[8%] lg:px-[16%] py-10 lg:py-30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className='title text-center w-full lg:w-[50%]'>
            <motion.h5 variants={fadeInUp} className='Syne text-2xl'>
              ( OUR BLOG )
            </motion.h5>

            <motion.h1 variants={fadeInUp} className='Syne font-extrabold text-4xl md:text-6xl'>
              READ OUR LATEST ARTICLES
            </motion.h1>
          </div>
        </motion.div>

        {/* Blogs Cards */}
        <div className="mt-20 md:mt-30 Blogs-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {(showAll ? BlogsData : BlogsData.slice(0, 6)).map((blog) => (
                <motion.div
                  key={blog.id}
                  layout
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="flex flex-col bg-white/30 border border-white p-4 shadow-lg shadow-gray-200 rounded-lg"
                >
                  <div className="group flex flex-col cursor-pointer shadow-lg shadow-gray-300 rounded-2xl overflow-hidden w-full">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full rounded-2xl group-hover:scale-105 transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div className="p-6 pb-2 bg-white/70 blog-box">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">{blog.tag}</span>
                        <span className="text-xl">·</span>
                        <span className="text-gray-700">{blog.date}</span>
                      </div>

                      <h1 className="Syne text-2xl font-semibold my-2 hover:text-prim transition-all duration-300">
                        {blog.title}
                      </h1>

                      <p className="tracking-wide">
                        {blog.desc}
                      </p>

                      <button className="btn bg-white/20 backdrop-blur-xl text-xl mt-5 w-full hover:bg-black hover:text-white px-6 py-3 rounded-xl mb-5 border border-black/30 transition-all duration-300 cursor-pointer">
                        <div className="btn-text">
                          Read More <i className="bi bi-arrow-right ps-2"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="w-full flex justify-center items-center mt-12">
            <button onClick={() => setShowAll(!showAll)}>
              <div
                className="btn bg-white/20 backdrop-blur-xl text-xl mt-5 w-full hover:bg-black hover:text-white px-6 py-3 rounded-xl mb-5 border border-black/30 transition-all duration-300 cursor-pointer">
                {showAll ? "Show Less" : "Show More"} <i className="bi bi-arrow-right ps-2"></i>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog