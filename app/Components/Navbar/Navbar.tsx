"use client"


import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      {
        label: "Service 1",
        href: "/services/service-1",
      },
      {
        label: "Service 2",
        href: "/services/service-2",
      },
    ],
  },
  {
    label: "Testimonial",
    href: "#testimonial",
  },
  {
    label: "Pricing Plan",
    href: "#pricing",
  },
  {
    label: "Blogs",
    href: "#blog"
  },
  {
    label: "Faq's",
    href: "#faqs"
  }
];

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Login & Register Modal
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sectiona = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    sectiona.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className={`
        px-[8%] lg:px-[10%] fixed top-0 left-0 w-full z-50 navbar transition-all duration-300 
        ${scrolled
          ? "bg-white backdrop-blur-md shadow-lg px-[8%] lg:px-[16%]"
          : "bg-transparent"
        }  
      `}>
        <div className='flex justify-between items-center gap-5 py-5'>
          <div className='flex items-center gap-8'>
            <Link href="/">
              <div className='flex items-center gap-2 overflow-hidden'>
                <h1 className='Merriweather text-4xl font-bold tracking-wider text-purple-700'>
                  Core<span className='text-[#0D0D0D]'>Bridge</span>
                </h1>
              </div>
            </Link>
          </div>

          <div className='hidden lg:flex items-center gap-3'>
            <nav className='hidden lg:flex space-x-6 menu-link relative z-40'>
              {navLinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  <span className='text-gray-700 hover:text-purple-700 transition-colors duration-300'>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right section */}
          <div className='flex items-center gap-4 nav-right'>
            <button>
              <i className='bi bi-person w-10 h-10 flex justify-center items-center border birder-gray-500 rounded-full hover:bg-white hover:border-white hover:shadow-lg transition-all duration-200 cursor-pointer'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar