"use client"

import Image from "next/image"
import test1 from "@/public/Images/testimoni-01.jpg"
import test2 from "@/public/Images/testimoni-02.jpg"
import quote from "@/public/Images/quote-left.png"
import sectionBG from "@/public/Images/section-bg.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation"
import "swiper/css"

const testimonialData = [
  {
    id: 1,
    title: "They turned our idea into a fully functional product",
    name: "Thomas Lopez",
    position: "Product Manager"
  },
  {
    id: 2,
    title: "The team at Corebridge went above and beyond. Their creative approach transformed our ideas into a powrful online presence",
    name: "Marvin Mackinney",
    position: "UX Designer"
  },
  {
    id: 3,
    title: "From UI design to deployment, everything was handled with precision and care. Highly recommend!",
    name: "Amber Page",
    position: "Developer"
  }
]

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className='px-[8%] lg:px-[16%] py-20 lg:py-30 relative'>
        <Image
          src={sectionBG}
          alt="sectionBG"
          className='absolute top-0 left-0 opacity-80 w-full h-full object-cover -z-1'
        />

        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <div className="md:w-2/3 lg:w-1/2 relative">
            <div className="test-image-wrap w-full lg:w-3/4">
              <div className="test-img">
                <Image
                  src={test1}
                  alt="test1"
                  className="w-full h-full rounded-2xl"
                />
              </div>

              <div className="p-5 w-full lg:w-2/3 bg-white/50 backdrop-blur-2xl rounded-2xl shadow-lg absolute -bottom-50 md:bottom-10 right-0 md:-right-70 lg:-right-10">
                <Image
                  src={test2}
                  alt="test2"
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-55 md:mt-0">
            <div>
              <div className='title'>
                <h5 className='Syne text-2xl'>
                  ( TESTIMONIALS )
                </h5>

                <h1 className='Syne font-extrabold text-4xl md:text-6xl'>
                  FORM TRUSTED CLIENTS
                </h1>

                <p className='tracking-wide text-xl text-gray-600 w-full mt-5 lg:w-[80%]'>
                  We're proud to be trusted by clients who believe in our vision. Their experiences reflect, and delivering results that truly make an impact.
                </p>
              </div>
            </div>

            <div className="mt-5 lg:mt-0 p-0 lg:p-8">
              <div className="flex gap-1 lg:gap-5">
                <div className="w-full">
                  <Image
                    src={quote}
                    alt="quote"
                    width={90}
                    height={90}
                  />

                  <div className="w-full lg:w-2/3">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={0}
                      loop={true}
                      autoplay={{
                        delay: 3000
                      }}
                      navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom"
                      }}
                      modules={[Autoplay, Navigation]}
                    >
                      {testimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="test-card">
                            <p className="tracking-wide text-2xl">
                              {item.title}
                            </p>

                            <h1 className="Syne text-3xl font-semibold mt-5">
                              {item.name}
                            </h1>

                            <h5 className="text-2xl text-gray-500">
                              {item.position}
                            </h5>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="flex gap-4 mt-3 md:mt-6">
                      <div className="swiper-button-prev-custom cursor-pointer w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                        <i className="bi bi-arrow-left text-2xl"></i>
                      </div>
                      <div className="swiper-button-next-custom cursor-pointer w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                        <i className="bi bi-arrow-right text-2xl"></i>
                      </div>
                    </div>
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

export default Testimonials