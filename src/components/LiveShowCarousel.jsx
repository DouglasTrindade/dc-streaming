import _ from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { LiveShowCard } from "./LiveShowCard";

import "swiper/css";
import "swiper/css/free-mode";

const imageUrl = process.env.NEXT_PUBLIC_IMG;

export const LiveShowCarousel = ({ liveShow }) => {
  return (
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
      {liveShow.length > 0 &&
        liveShow.map((live) => (
          <SwiperSlide key={live.id}>
            <LiveShowCard
              src={imageUrl + live?.poster_path}
              title={live.name}
              view={live.popularity}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
