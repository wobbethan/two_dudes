import { React } from "react";
import "./Youtube.css";
import youtubeBkg from "../assets/youtubebkg.mp4";
function Youtube() {
  function animation() {
    const logos = document.querySelectorAll(".yt-logo, .yt-bkg-vid");
    setTimeout(() => {
      logos.forEach((logo) => {
        logo.classList.remove("active");
        logo.classList.add("active");
      });
    }, 5000);
  }

  return (
    <div className="youtube-component">
      <video
        muted
        autoPlay
        src={youtubeBkg}
        type="video/mp4"
        alt="background video for youtube"
        className="yt-bkg-vid"
        onPlaying={animation}
      />
      {/* */}
      <a
        className="yc-content"
        href="https://www.youtube.com/@2dudesandanumbrella"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
          alt="youtube logo"
          className="yt-logo"
        />
      </a>
    </div>
  );
}

export default Youtube;
