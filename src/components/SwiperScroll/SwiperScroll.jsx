import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
import "./Swiper.css";
import "swiper/css/bundle";

export const SwiperScroll = (className) => {
  return (
    <Swiper
      className="text-[#635D6E] font-ubuntu font-normal text-base padding"
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={15}
      speed={2000}
      autoplay={{ delay: 0 }}
      loop={{ loop: true }}
      wrapperClass="linear"
    >
      <SwiperSlide className="width">BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide className="width"> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide className="width"> AUTODESK |</SwiperSlide>
      <SwiperSlide className="width"> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide className="width"> DYNAMO |</SwiperSlide>
      <SwiperSlide className="width"> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide className="width"> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide className="width"> AUTODESK |</SwiperSlide>
      <SwiperSlide className="width"> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide className="width"> DYNAMO |</SwiperSlide>
      <SwiperSlide className="width"> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide className="width">КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide className="width"> AUTODESK |</SwiperSlide>
      <SwiperSlide className="width"> DYNAMO |</SwiperSlide>
      <SwiperSlide className="width"> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide className="width"> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
    </Swiper>
  );
};
