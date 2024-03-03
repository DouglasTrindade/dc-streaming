import _ from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { LiveShowCard } from "@/components/LiveShowCard";

import "swiper/css";
import "swiper/css/free-mode";

const imageUrl = process.env.NEXT_PUBLIC_IMG;

export const LiveShowCarousel = ({ topMovies }) => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        modules={[FreeMode]}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <LiveShowCard
                src={imageUrl + movie?.poster_path}
                title={movie.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
