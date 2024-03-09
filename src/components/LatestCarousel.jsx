import _ from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { CardMovie } from "@/components/Card";

import "swiper/css";
import "swiper/css/free-mode";

const imageUrl = process.env.NEXT_PUBLIC_IMG;

export const LatestCarousel = ({ latestMovies }) => {
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
        {latestMovies &&
          latestMovies.map((latestMovie) => (
            <SwiperSlide key={latestMovie.id}>
              <CardMovie
                src={imageUrl + latestMovie?.backdrop_path}
                alt={latestMovie.title}
                title={latestMovie.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
