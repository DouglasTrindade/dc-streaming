import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { LiveShowCard } from "@/components/LiveShowCard";

import "swiper/css";
import "swiper/css/free-mode";

const imageUrl = process.env.NEXT_PUBLIC_IMG;

export const LiveShowCarousel = ({ movie }) => {
  return (
    <>
      <Swiper
        spaceBetween={180}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode]}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <LiveShowCard />
          {/* <img src={imageUrl + movie?.poster_path} alt={movie?.title} /> */}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};
