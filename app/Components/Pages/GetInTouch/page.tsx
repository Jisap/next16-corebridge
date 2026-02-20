import React from 'react'

const GetInTouch = () => {
  return (
    <>
      <section id="getintouch" className="px-[8%] lg:px-[16%] py-10 lg:py-30">
        <div className='GetInTouch'>
          <div className='text-white h-full flex flex-col justify-center items-center text-center'>
            <h5 className='text-3xl font-light'>
              HAVE A PROJECT IN MIND?
            </h5>

            <h1 className='text-4xl md:text-6xl lg:text-7xl w-full lg:w-[70%] my-5'>
              let's Work On Something Awesome Together
            </h1>

            <button>
              <div className='btn faq-btn text-white text-xl px-6 py-3 rounded-md mt-5 transition-all duration-300 cursor-pointer'>
                <div className='btn-text'>
                  Get In Touch <i className='bi bi-arrow-right ps-2'></i>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInTouch