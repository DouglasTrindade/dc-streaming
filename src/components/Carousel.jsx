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
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        modules={[FreeMode]}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
