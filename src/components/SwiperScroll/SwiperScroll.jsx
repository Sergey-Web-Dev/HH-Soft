import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Swiper.css";
import "swiper/css/bundle";

export const SwiperScroll = () => {
  return (
    <Swiper
      className="text-[#635D6E] font-ubuntu font-normal text-base padding"
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={15}
      speed={2000}
      autoplay={{ delay: 0 }}
      loop={true}
      wrapperClass="linear"
    >
      <SwiperSlide>BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide>КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      {/* <SwiperSlide>BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide> */}
      {/* <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide>КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide>BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide>КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide>BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> ПЛАГИНЫ REVIT |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide>КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide>
      <SwiperSlide> AUTODESK |</SwiperSlide>
      <SwiperSlide> DYNAMO |</SwiperSlide>
      <SwiperSlide> BIM ТЕХНОЛОГИИ |</SwiperSlide>
      <SwiperSlide> КУРСЫ ПО ПРОДУКТАМ |</SwiperSlide> */}
    </Swiper>
  );
};
