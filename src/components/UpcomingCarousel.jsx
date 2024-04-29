import _ from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { CardMovie } from "./Card";

import "swiper/css";
import "swiper/css/free-mode";

const imageUrl = process.env.NEXT_PUBLIC_IMG;

export const UpcomingCarousel = ({ upcomingMovies }) => {
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
        560: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        780: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1560: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {upcomingMovies &&
        upcomingMovies.map((upcomingMovie) => (
          <SwiperSlide key={upcomingMovie.id}>
            <CardMovie
              src={imageUrl + upcomingMovie?.backdrop_path}
              alt={upcomingMovie.title}
              title={upcomingMovie.title}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
