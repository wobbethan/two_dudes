import { React } from "react";
import "./Youtube.css";
import youtubeBkg from "../assets/youtubebkg.mp4";
import { Helmet } from "react-helmet-async";

function Youtube() {
  function playing() {
    const logos = document.querySelectorAll(".yt-logo, .yt-bkg-vid");
    setTimeout(() => {
      logos.forEach((logo) => {
        logo.classList.remove("active");
        logo.classList.add("active");
      });
    }, 5000);
  }

  return (
    <>
      <Helmet>
        <title>Umbrella Boys | Youtube</title>
        <meta
          name="description"
          content="Listen and watch our full length podcasts on youtube.com"
        />
        <link rel="canonical" href="/youtube"></link>
      </Helmet>

      <body className="youtube-component">
        <video
          muted
          autoPlay
          src={youtubeBkg}
          type="video/mp4"
          alt="background video for youtube"
          className="yt-bkg-vid"
          playsInline
          onPlay={playing}
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
      </body>
    </>
  );
}

export default Youtube;
