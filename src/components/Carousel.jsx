import _ from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { CardMovie } from "@/components/CardMovie";

import "swiper/css";
import "swiper/css/free-mode";

const imageUrl = process.env.NEXT_PUBLIC_IMG;

export const Carousel = ({ popularMovies }) => {
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          610: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          930: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          1560: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
      >
        {popularMovies &&
          popularMovies.map((popularMovie) => (
            <SwiperSlide key={popularMovie.id}>
              <CardMovie
                src={imageUrl + popularMovie?.poster_path}
                alt={popularMovie.title}
                title={popularMovie.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
