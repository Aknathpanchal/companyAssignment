import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";

export const LatestMovies = () => {
  const data = useSelector((store) => store.data);
  const [topMovies, setTopMovie] = useState([]);
  console.log("DATAaaaaa", data);
  function tipMoviesFun() {
    let movies = [];
    data.map((el, i) => {
      if (el.year > 1916) {
        movies.push(el);
      }
    });
    setTopMovie(movies);
  }
  console.log("Latest MOVIES", topMovies);
  useEffect(() => {
    tipMoviesFun();
  }, [data]);

  return (
    <>
      <div style={{width:'90%',margin:'auto'}}>
        <h2 style={{textAlign:'left'}}>Latest Movies</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {topMovies.map((el) => (
          <SwiperSlide style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: "90%", height: "200px", margin: "auto" }}
              src="https://img.freepik.com/free-vector/21st-june-yoga-day-event-background-therapy-inspired-theme_1017-44474.jpg?w=996&t=st=1688034163~exp=1688034763~hmac=b94d1482571bc6bb3ea56a9e8ea5963612010aa6d142e5540d67b90e58badd95"
              alt="moviesImage"
            />
            <h5>{el.original_title}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};