import "../Styles/Home.css";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/Header.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CraftSection from "../components/CraftSection/CraftSection";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="main_slider_container">
        <div className="main_inner_slider_container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {/* <SwiperSlide><img src="https://i.ibb.co/xF8ShYt/jr-korpa-KZTpv43fve8-unsplash.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/BL424wH/europeana-TF3g66-Jhs50-unsplash.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/BqbxzBN/boston-public-library-6-EDezf-Yu3uk-unsplash.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/4gsty2v/birmingham-museums-trust-4-GNk7lexu-Hw-unsplash.jpg"></img></SwiperSlide> */}
          </Swiper>
        </div>
        <div>{user && <CraftSection></CraftSection>}</div>
      </div>
    </div>
  );
};

export default Home;
