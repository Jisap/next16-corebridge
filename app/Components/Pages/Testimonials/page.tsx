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
    title: "The team at Corebridge went above and beyond. Their creative approach transformed our ideas into a powerful online presence",
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
    <section id="testimonials" className="relative px-5 sm:px-10 md:px-[8%] lg:px-[10%] xl:px-[16%] py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <Image
        src={sectionBG}
        alt="sectionBG"
        fill
        className="opacity-80 object-cover -z-10"
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">

        {/* ── LEFT: Images ── */}
        <div className="w-full lg:w-1/2">
          {/* Wrapper keeps a defined aspect-ratio so the floating card has room */}
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={test1}
                alt="Testimonial 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card — anchored to the bottom-right of the main image */}
            <div className="absolute -bottom-10 -right-4 sm:-bottom-12 sm:-right-6 lg:-bottom-10 lg:-right-8
                            w-[55%] sm:w-[50%]
                            p-3 sm:p-4
                            bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl">
              <Image
                src={test2}
                alt="Testimonial 2"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text + Slider ── */}
        {/* Extra top margin on mobile to clear the floating card */}
        <div className="w-full lg:w-1/2 mt-16 sm:mt-20 lg:mt-0 flex flex-col justify-center">

          {/* Header */}
          <div>
            <h5 className="Syne text-lg sm:text-xl text-gray-500 tracking-wider">
              ( TESTIMONIALS )
            </h5>
            <h1 className="Syne font-extrabold text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-1 leading-tight">
              FROM TRUSTED CLIENTS
            </h1>
            <p className="tracking-wide text-base sm:text-lg text-gray-600 mt-4 max-w-prose">
              We&apos;re proud to be trusted by clients who believe in our vision. Their experiences reflect our dedication to delivering results that truly make an impact.
            </p>
          </div>

          {/* Slider */}
          <div className="mt-8 lg:mt-10">
            <Image
              src={quote}
              alt="quote"
              width={70}
              height={70}
              className="mb-4 opacity-80"
            />

            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom"
              }}
              modules={[Autoplay, Navigation]}
            >
              {testimonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="pb-2">
                    <p className="tracking-wide text-lg sm:text-xl lg:text-2xl leading-snug">
                      {item.title}
                    </p>
                    <h2 className="Syne text-2xl sm:text-3xl font-semibold mt-5">
                      {item.name}
                    </h2>
                    <h5 className="text-lg sm:text-xl text-gray-500 mt-1">
                      {item.position}
                    </h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="flex gap-3 mt-6">
              <button
                aria-label="Previous testimonial"
                className="swiper-button-prev-custom cursor-pointer w-11 h-11 sm:w-12 sm:h-12
                           rounded-full border border-gray-300 flex items-center justify-center
                           hover:bg-black hover:text-white transition-all duration-300"
              >
                <i className="bi bi-arrow-left text-xl" />
              </button>
              <button
                aria-label="Next testimonial"
                className="swiper-button-next-custom cursor-pointer w-11 h-11 sm:w-12 sm:h-12
                           rounded-full border border-gray-300 flex items-center justify-center
                           hover:bg-black hover:text-white transition-all duration-300"
              >
                <i className="bi bi-arrow-right text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials