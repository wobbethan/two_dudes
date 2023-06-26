import { React, useEffect } from "react";
import "./Youtube.css";
import youtubeBkg from "../assets/youtubebkg.mp4";

function Youtube() {
  useEffect(() => {
    const logos = document.querySelectorAll(".yt-logo");
    setTimeout(() => {
      logos.forEach((logo) => {
        logo.classList.remove("active");
      });
      logos[0].classList.add("active");
    }, 4000);
  });

  return (
    <div className="youtube-component">
      <video
        muted
        autoPlay
        src={youtubeBkg}
        alt="background video for youtube"
      />
      <div className="yc-content">
        <img
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
          alt=""
          className="yt-logo"
        />
      </div>
    </div>
  );
}

export default Youtube;
