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

  // Detecta qué sección de la página está visible actualmente
  // en la pantalla para actualizar el estado activeId
  useEffect(() => {
    const section = document.querySelectorAll("section[id]"); // Obtiene todas las secciones con un id

    const observer = new IntersectionObserver(
      (entries) => {                                           // Recorre todas las secciones 
        entries.forEach((entry) => {
          if (entry.isIntersecting) {                          // Si el elemento está visible
            setActiveId(`#${entry.target.id}`);                // Actualiza el estado activeId
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    section.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, []);

  // Permite que el enlace de inicio se active cuando el usuario está en la parte superior de la página
  useEffect(() => {
    const handleTop = () => {
      if (window.scrollY < 80) {
        setActiveId("/")
      }
    }

    window.addEventListener("scroll", handleTop)
    return () => window.removeEventListener("scroll", handleTop)
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
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveId(link.href)}
                  className={`
                    flex gap-2 text-lg transition-all 
                    ${activeId === link.href
                      ? "font-semibold text-prim border-b-2"
                      : "text-black"
                    }`
                  }
                >
                  <span className='text-gray-700 hover:text-prim transition-colors duration-300'>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right section */}
          <div className='flex items-center gap-4 nav-right'>
            <button
              onClick={() => {
                setIsLogin(true)
                setShowModal(true)
              }}
            >
              <i className='bi bi-person w-10 h-10 flex justify-center items-center border birder-gray-500 rounded-full hover:bg-white hover:border-white hover:shadow-lg transition-all duration-200 cursor-pointer'></i>
            </button>

            {/* Mobile Hamburger */}
            <button
              className='lg:hidden flex flex-col gap-[5px]'
              onClick={() => setOpen(!open)}
            >
              <span className={`block w-6 h-[3px] bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-[3px] bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-[3px] bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`
               lg:hidden fixed top-[60px] bg-white left-0 w-full z-50 transition-all duration-300
               ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-6"}
            `}
          >
            <div className='mx-[5%] rounded-2xl shadow-2xl border border-white/10'>
              <nav className='flex flex-col px-6 py-6 gap-5'>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className='flex items-center justify-between text-black border-b border-black/10 text-lg tracking-wide hover:text-prim transition-all Cirvuler-font'
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar