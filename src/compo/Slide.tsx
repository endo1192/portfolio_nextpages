import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
//import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
//import { Swiper as SwiperType } from 'swiper'; // Swiperの型をインポート
// Import Swiper React components
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { Autoplay,EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "../styles/slide.module.css"

function Slide() {
    return(
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
            slidesPerView={1}
            spaceBetween={0}  
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            navigation={true}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
        >
        <SwiperSlide>
            <Simg src="/images/sbm.png" />
        </SwiperSlide>
        <SwiperSlide>
            <Simg src="/images/myokoji.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <Simg src="/images/sadokur120.png" />
        </SwiperSlide>
        </Swiper>
    );
}

const Simg =styled.img`
    width: 85%;
    height: auto;
    object-fit: cover; 
`;

export default Slide;