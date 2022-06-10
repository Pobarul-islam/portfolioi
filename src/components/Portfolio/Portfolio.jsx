import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import bank from "../../img/bank.png";
import Package from "../../img/package.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio mt-5 col-12 col-sm-12" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://pobarul-islam.github.io/Penguin-fashion/"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pobarul-islam.github.io/weather-app/"><img src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://stockwatches.netlify.app/"> <img src={MusicApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://manufacturer-tools.netlify.app/"><img src={HOC} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://determined-johnson-1c50e3.netlify.app/">  <img src={Package} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://thirsty-haibt-c09bd1.netlify.app/"> <img src={bank} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
