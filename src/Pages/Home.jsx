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
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CraftSection from "../components/CraftSection/CraftSection";

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
            <SwiperSlide>
              <img src="https://i.ibb.co/4fWQGRC/311-3ca91.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/gVtyMFC/most-popular-painters-artists-world.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/Q6LQHPh/Action-Painting.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/jGGfrRG/Screen-Shot-2020-05-08-at-8-18-29-PM-d1513b0a-3294-46d4-bf3a-2de7ff4c7811-2184x.png"></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>{user && <CraftSection></CraftSection>}</div>
    </div>
  );
};

export default Home;
