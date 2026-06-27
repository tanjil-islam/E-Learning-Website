import React from 'react'
import Title from './Title'
import { testimonialsItems } from '../constant/data'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Autoplay } from 'swiper/modules'

const Testimonials = () => {
  return (
    <section className='section'>
      <div className='container'>
        {/* Title */}
        <Title
          title='Our Testimonials'
          text='Hear what our students have to say about their learning experience.'
          link='View All'
        />

        {/* Card Wrapper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1280: {
              slidesPerView: 2.5,
            },
          }}
          loop={true}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className='mt-14 lg:mt-16'
        >
          {testimonialsItems.map((item) => (
            // Card
            <SwiperSlide
              key={item.id}
              className='bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3'
            >
              <p>{item.text}</p>
              <div className='flex items-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4'>
                <div className='flex items-center gap-3'>
                  {/* image */}
                  <div>
                    <img
                      src={item.img}
                      alt={item.author}
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* Author  */}
                  <p className='font-medium'>{item.author}</p>
                </div>
              </div>
              <button className='secondary-btn'>Read Full Story</button>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigations btns */}
        <div className='flex items-center justify-center mt-18 gap-5'>
          <button
            className='bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors
          active:bg-orange-75/80 prev-btn'
          >
            <RiArrowLeftLine size={30} />
          </button>
          <button
            className='bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors
          active:bg-orange-75/80 next-btn'
          >
            <RiArrowRightLine size={30} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
