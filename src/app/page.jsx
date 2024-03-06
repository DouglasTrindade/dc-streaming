"use client";

import Header from "@/components/Header";
import InputSubscribe from "@/components/InputSubscribe";
import { useState, useEffect } from "react";
import { LiveShowCarousel } from "@/components/LiveShowCarousel";
import { Carousel } from "@/components/Carousel";

const moviesUrl = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const movieTv = process.env.NEXT_PUBLIC_TV_API;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [theAir, setTheAir] = useState([]);

  const getTheAir = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTheAir(data.results);
  };

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPopularMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?api_key=${apiKey}`;
    const popularMovies = `${moviesUrl}popular?api_key=${apiKey}`;
    const onTheAir = `${movieTv}on_the_air?api_key=${apiKey}`;

    getTheAir(onTheAir);
    getTopRatedMovies(topRatedUrl);
    getPopularMovies(popularMovies);
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
              <LiveShowCarousel theAir={theAir} />
            </div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Most Popular</span>
            <div className="mt-3">
              <Carousel popularMovies={popularMovies} />
            </div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Top Rated</span>
            <div className="mt-3">
              <Carousel theAir={theAir} />
            </div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Latest Music</span>
            <div className="mt-3">Cards</div>
          </section>
        </div>
      </hero>
    </>
  );
};

export default Home;
