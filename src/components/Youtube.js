import { React, useEffect } from "react";
import "./Youtube.css";
import youtubeBkg from "../assets/youtubebkg.mp4";
function Youtube() {
  useEffect(() => {
    const logos = document.querySelectorAll(".yt-logo, .yt-bkg-vid");
    setTimeout(() => {
      logos.forEach((logo) => {
        logo.classList.remove("active");
        logo.classList.add("active");
      });
    }, 5000);
  });

  return (
    <div className="youtube-component">
      <video
        muted
        autoPlay
        src={youtubeBkg}
        alt="background video for youtube"
        className="yt-bkg-vid"
      />
      {/* */}
      <a
        className="yc-content"
        href="https://www.youtube.com/@2dudesandanumbrella"
        target="_blank"
      >
        <img
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
          alt=""
          className="yt-logo"
        />
      </a>
    </div>
  );
}

export default Youtube;
