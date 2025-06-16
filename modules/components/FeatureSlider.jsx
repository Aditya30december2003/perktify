"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const FeatureSlider = ({ cardData }) => {
  return (
    <div
      className="px-6 sm:px-12 md:px-16 lg:px-0"
      data-anime='{"el":"childs","translateY":[30,0],"scale":[0.8,1],"opacity":[0,1],"duration":500,"delay":0,"staggervalue":200,"easing":"easeOutQuad"}'
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {cardData?.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-[90vw] sm:w-[70vw] md:w-[500px] h-[400px] text-white flex flex-col items-center justify-center shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src={card.icon}
                alt="icon"
                className="h-36 w-36 object-contain mb-4 rounded-lg"
              />
              <h5 className="text-xl font-semibold mb-2 text-center">{card.title}</h5>
              <p className="text-sm text-center text-white/80">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;

