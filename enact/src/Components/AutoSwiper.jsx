import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

export const AutoSwiper = () => {
  const data = useSelector((store) => store.data);
  const [topMovies, setTopMovie] = useState([]);
  function tipMoviesFun() {
    let movies = [];
    data.map((el, i) => {
      if (el.avg_vote > 7) {
        movies.push(el);
      }
    });
    setTopMovie(movies);
  }

  console.log("TOP MOVIES", topMovies);
  useEffect(() => {
    tipMoviesFun();
  }, [data]);

  return (
    <div style={{height: "50vh"}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {topMovies.map((el) => (
          <SwiperSlide style={{display:'flex',flexDirection:'column'}}>
            {  el ? (
      <>
        {/* ImageHeader component */}
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1686740761875-c81ab18f82fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%",
          }}
        />

        {/* Main content */}
        <div
          style={{
            color: "#fff",
            padding: "2rem",
            marginTop:"-10rem",
          }}
        >
          {/* Media content */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* Poster */}
            <div
              style={{
                width: "40%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Poster"
                style={{ width: "100%" }}
              />
            </div>

            {/* Media info */}
            <div
              style={{
              maxWidth: "60%",
              color: "#000",
              margin:"10%",
              maxHeight:"150px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
                
              }}
            >
              {/* Title */}
              <h4 style={{ fontSize: "2rem", fontWeight: "700" ,width:"100%" }}>
                {`${el.original_title|| el.name} `}
              </h4>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div>Loading...</div>
    )}
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
