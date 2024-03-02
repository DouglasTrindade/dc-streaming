"use client";
import Header from "@/components/Header";
import InputSubscribe from "@/components/InputSubscribe";
import { useState, useEffect } from "react";
import { LiveShowCarousel } from "@/components/LiveShowCarousel";

const moviesURL = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;

    getTopRatedMovies(topRatedUrl);
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
              <LiveShowCarousel />
            </div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Most Popular</span>
            <div className="mt-3">Cards</div>
          </section>
          <section className="my-12">
            <span className="text-xl font-semibold">Movies for you</span>
            <div className="mt-3">Cards</div>
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
