import React from 'react';
import { AutoSwiper } from '../Components/AutoSwiper';
import { LatestMovies } from '../Components/LatestMovies';

const Home = () => {
  return (
    <section id="home">
      <AutoSwiper />
      <LatestMovies/>
    </section>
  );
};

export default Home;
