import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css'

import './SliderComponent.scss'
import { Link } from "react-router-dom";

const vineImg = [
  {src:'img/1.jpeg'},
  {src:'img/2.jpeg'},
  {src:'img/3.jpeg'},
  {src:'img/4.jpeg'},
  {src:'img/1.jpeg'},
  {src:'img/2.jpeg'},
  {src:'img/3.jpeg'},
  {src:'img/4.jpeg'},
  {src:'img/1.jpeg'},
  {src:'img/2.jpeg'},
  {src:'img/3.jpeg'},
]

export const SliderComponent = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="slider-component">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{
          type: "fraction",
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {vineImg.map(one => {
          return (
            <SwiperSlide>
              <Link to='wines'>
                <img
                  alt="wine"
                  src={one.src}
                  className="slider-component__img"
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
