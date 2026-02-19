"use client"

import Image from "next/image"
import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import test1 from "@/public/Images/testimoni-01.jpg"
import test2 from "@/public/Images/testimoni-02.jpg"
import quote from "@/public/Images/quote-left.png"
import sectionBG from "@/public/Images/section-bg.webp"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css/navigation"
import "swiper/css"

const AUTOPLAY_DELAY = 3000

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

const pad = (n: number) => String(n).padStart(2, "0")

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)
  const total = testimonialData.length

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex)
    setProgressKey(k => k + 1)
  }, [])

  const goNext = () => swiperRef.current?.slideNext()
  const goPrev = () => swiperRef.current?.slidePrev()

  return (
    <section
      id="testimonials"
      className="relative px-5 sm:px-10 md:px-[8%] lg:px-[10%] xl:px-[16%] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
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
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={test1}
                alt="Testimonial 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-10 -right-4 sm:-bottom-12 sm:-right-6 lg:-bottom-10 lg:-right-8
                            w-[55%] sm:w-[50%] p-3 sm:p-4
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
        <div className="w-full lg:w-1/2 mt-16 sm:mt-20 lg:mt-0 flex flex-col justify-center">

          {/* Header */}
          <div>
            <h5 className="Syne text-lg sm:text-xl text-gray-500 tracking-wider">
              ( TESTIMONIALS )
            </h5>
            <h1 className="Syne font-extrabold text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-1">
              FROM TRUSTED CLIENTS
            </h1>
            <p className="tracking-wide text-base sm:text-lg text-gray-600 mt-4 max-w-prose">
              We&apos;re proud to be trusted by clients who believe in our vision. Their experiences reflect our dedication to delivering results that truly make an impact.
            </p>
          </div>

          {/* Slider */}
          <div className="mt-8 lg:mt-10 relative">
            <Image
              src={quote}
              alt="quote"
              width={70}
              height={70}
              className="mb-4 opacity-80"
            />

            {/* Decorative slide number — gigante, semi-transparente, detrás del texto */}
            <div className="absolute -top-2 right-0 pointer-events-none select-none leading-none">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="Syne font-extrabold text-[8rem] sm:text-[10rem] text-black/[0.055] leading-none"
                >
                  {pad(activeIndex + 1)}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Swiper */}
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev"
              }}
              modules={[Autoplay, Navigation]}
              onSwiper={(swiper) => { swiperRef.current = swiper }}
              onSlideChange={handleSlideChange}
            >
              {testimonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="pb-2 min-h-[160px]">
                    {/* Quote text — siempre visible, no se anima para no competir */}
                    <p className="tracking-wide text-lg sm:text-xl lg:text-2xl leading-snug text-gray-800">
                      {item.title}
                    </p>

                    {/* Nombre y cargo con slide-up al cambiar slide */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${item.id}-meta`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                      >
                        <h2 className="Syne text-2xl sm:text-3xl font-semibold mt-5">
                          {item.name}
                        </h2>
                        <h5 className="text-lg sm:text-xl text-gray-500 mt-1">
                          {item.position}
                        </h5>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ── Controles ── */}
            <div className="mt-6 flex flex-col gap-4">

              {/* ② Barra de progreso animada con contador */}
              <div className="flex items-center gap-3">
                <span className="Syne text-sm font-semibold text-gray-400 tabular-nums w-6">
                  {pad(activeIndex + 1)}
                </span>

                {/* Track */}
                <div className="relative flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    key={progressKey}
                    className="absolute inset-y-0 left-0 bg-black rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                  />
                </div>

                <span className="Syne text-sm text-gray-300 tabular-nums w-6 text-right">
                  {pad(total)}
                </span>
              </div>

              {/* Botones prev / next */}
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="swiper-btn-prev w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300
                             flex items-center justify-center
                             hover:bg-black hover:text-white transition-all duration-300"
                >
                  <i className="bi bi-arrow-left text-xl" />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="swiper-btn-next w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300
                             flex items-center justify-center
                             hover:bg-black hover:text-white transition-all duration-300"
                >
                  <i className="bi bi-arrow-right text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials