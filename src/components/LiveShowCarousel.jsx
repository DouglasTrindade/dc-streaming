import _ from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { LiveShowCard } from "@/components/LiveShowCard";

import "swiper/css";
import "swiper/css/free-mode";

const imageUrl = process.env.NEXT_PUBLIC_IMG;

export const LiveShowCarousel = ({ theAir }) => {
  return (
    <>
      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          530: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {theAir.length > 0 &&
          theAir.map((air) => (
            <SwiperSlide key={air.id}>
              <LiveShowCard
                src={imageUrl + air?.poster_path}
                title={air.name}
                view={air.popularity}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
