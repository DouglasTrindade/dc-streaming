"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import InputSubscribe from "@/components/InputSubscribe";
import { useState, useEffect } from "react";
import { LiveShowCarousel } from "@/components/LiveShowCarousel";
import { MostPopularCarousel } from "@/components/MostPopularCarousel";
import { TopRatedCarousel } from "@/components/TopRatedCarousel";
import { UpcomingCarousel } from "@/components/UpcomingCarousel";

const moviesUrl = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const movieTvUrl = process.env.NEXT_PUBLIC_TV_API;

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [liveShow, setLiveShow] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getLiveShow = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setLiveShow(data.results);
  };

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopRatedMovies(data.results);
  };

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPopularMovies(data.results);
  };

  const getUpcomingMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setUpcomingMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?api_key=${apiKey}`;
    const popularMovieUrl = `${moviesUrl}popular?api_key=${apiKey}`;
    const liveShowUrl = `${movieTvUrl}on_the_air?api_key=${apiKey}`;
    const upcomingMovieUrl = `${moviesUrl}upcoming?api_key=${apiKey}`;

    getLiveShow(liveShowUrl);
    getTopRatedMovies(topRatedUrl);
    getPopularMovies(popularMovieUrl);
    getUpcomingMovies(upcomingMovieUrl);
  }, []);

  return (
    <>
      <main className="relative bg-[url('/bg-subscribe.png')] bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/20 to-black" />
        <div className="relative z-10">
          <Header />
          <section className="container grid grid-cols-2 mt-16 text-white drop-shadow-lg">
            <div className="">
              <span>Welcome to DC Streaming</span>
              <div className="text-5xl font-semibold mt-6">
                Download Unlimited Movies, Drama, Music Vídeo and More Content.
              </div>
              <div className="mt-8">
                Enjoy exclusive Music Video popular movies and Live shows.
              </div>
              <div>Subscribe DC Streaming now</div>
              <InputSubscribe className="mt-4 mb-16" />
            </div>
          </section>
        </div>
      </main>
      <hero className=" bg-slate-900 text-white">
        <div className="container">
          <section className="my-12">
            <span className="text-xl font-semibold">Live Show</span>
            <div className="mt-3 w-full">
              <LiveShowCarousel liveShow={liveShow} />
            </div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Most Popular</span>
            <div className="mt-3">
              <MostPopularCarousel popularMovies={popularMovies} />
            </div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Top Rated</span>
            <div className="mt-3">
              <TopRatedCarousel topRatedMovies={topRatedMovies} />
            </div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Upcoming Movies</span>
            <div className="mt-3">
              <UpcomingCarousel upcomingMovies={upcomingMovies} />
            </div>
          </section>
        </div>
        <Footer />
      </hero>
    </>
  );
};

export default Home;
