"use client"

import Image from "next/image"
import starImg from "@/public/Images/Stars-spage.svg"

const MarqueeData = [
  { id: 1, title: "Analysis", img: starImg },
  { id: 2, title: "Tracking", img: starImg },
  { id: 3, title: "Research", img: starImg },
  { id: 4, title: "Strategy", img: starImg },
  { id: 5, title: "Growth", img: starImg },
  { id: 6, title: "Marketing", img: starImg },
  { id: 7, title: "Tracking", img: starImg },
  { id: 8, title: "Innovation", img: starImg },
  { id: 9, title: "Success", img: starImg },
  { id: 10, title: "Planning", img: starImg },
]


const MarqueeText = () => {
  return (
    <>
      <div className="marquee-wrapper py-20 pt-10">
        <div className="marquee-track">
          {[...MarqueeData, ...MarqueeData].map((item, index) => (
            <div key={index} className="marquee-item">
              <Image
                src={item.img}
                alt={item.title}
                width={80}
                height={80}
                className="me-6"
              />
              <span className="text-7xl md:text-8xl font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MarqueeText