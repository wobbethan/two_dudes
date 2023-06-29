import React from "react";
import "./Tiktok.css";
import tiktokMockup from "../assets/tiktoktestmockup.png";
import tiktokBkg from "../assets/tiktokbkg.png";

function Tiktok() {
  return (
    <div className="tiktok-component">
      <img src={tiktokBkg} alt="background for Tiktok" />
      <div className="tc-content">
        <a href="https://www.tiktok.com/@2dudesandanumbrella" target="_blank">
          <img src={tiktokMockup} alt="mockup for Tiktok" />
        </a>
        <img
          src="https://www.enchanted.media/wp-content/uploads/2021/10/Free-Confetti-Effect-Overlay-Colored-Transparent.png"
          alt=""
          className="tc-hearts-hover"
        />
        <div className="tc-c-text">
          <img
            src="https://theislandnow.com/wp-content/uploads/2023/06/buy-1000-tiktok-followers-theislandnow.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Tiktok;
