import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-20 lg:py-30 lg:pb-15 relative'>
        <div className='footer-shape'></div>
        <div className='footer-shape2'></div>

        <footer>
          <div className='footer-grid'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5'>
              <div className='footer-col'>
                <h2 className='text-3xl tracking-wide mb-5'>
                  Useful links
                </h2>

                <div className='flex flex-col gap-2'>
                  <Link
                    href="#about"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    About
                  </Link>
                  <Link
                    href="#services"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Services
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#blogs"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="#faqs"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Faqs
                  </Link>
                </div>
              </div>

              <div className='footer-col'>
                <h2 className='text-3xl tracking-wide mb-5'>
                  Our company
                </h2>

                <div className='flex flex-col gap-2'>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    News Article
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Terms of Services
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Case Study
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className='footer-col'>
                <h2 className='text-3xl tracking-wide mb-5'>
                  Follow Us
                </h2>

                <div className='flex flex-col gap-2'>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Twitter/X
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Dribble
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="text-xl text-gray-800 hover:text-prim hover:ps-1 transition-all duration-200"
                  >
                    Pinterest
                  </Link>
                </div>
              </div>

              <div className='footer-col'>
                <h2 className='text-3xl tracking-wide mb-5'>
                  Contact Info
                </h2>

                <p className='text-xl tracking-wide text-gray-800 font-light'>
                  Address: 123 Main St, Anytown, USA
                </p>

                <h2 className='text-3xl my-2 text-gray-800'>
                  Example@support.com
                </h2>

                <h5 className='text-xl tracking-wide text-gray-800 cursor-pointer hover:text-prim transition-all duration-200'>
                  +(91) 123 456 7890
                </h5>
              </div>
            </div>
          </div>

          <div className='footer-bottom pt-20'>
            <div className='flex flex-wrap justify-center lg:justify-between items-center text-center gap-3 border-t border-gray-300 pt-10'>
              <p className='text-xl text-gray-600'>
                Copyright © 2026 <span className='text-prim'>CoreBridge</span>. All Rights Reserved.
              </p>

              <div className='flex flex-wrap justify-center items-center gap-3 lg:gap-8'>
                <Link
                  href="#"
                  className="text-xl text-gray-800 hover:text-prim hover:-translate-y-1 transition-all duration-200"
                >
                  TERMS & CONDITIONS
                </Link>
                <Link
                  href="#"
                  className="text-xl text-gray-800 hover:text-prim hover:-translate-y-1 transition-all duration-200"
                >
                  PRIVACY POLICY
                </Link>
                <Link
                  href="#"
                  className="text-xl text-gray-800 hover:text-prim hover:-translate-y-1 transition-all duration-200"
                >
                  SECURITY
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer