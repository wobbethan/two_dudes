import { React, useEffect } from "react";
import "./Spotify.css";
import Spline from "@splinetool/react-spline";
import mac from "../assets/proDisplay.png";
import { Helmet } from "react-helmet-async";
function Spotify() {
  useEffect(() => {
    const contents = document.querySelectorAll(".spotify-content");
    setTimeout(() => {
      contents.forEach((content) => {
        content.classList.remove("sc-active-sc");
        content.classList.add("sc-active-sc");
      });
    }, 2000);
  });
  return (
    <>
      <Helmet>
        <title>Umbrella Boys | Spotify</title>
        <meta
          name="description"
          content="Take our podcast on the go by listening on Spotify!"
        />
        <link rel="canonical" href="/spotify"></link>
      </Helmet>
      <div className="spotify-component">
        <Spline
          className="spotify-background"
          scene="https://prod.spline.design/WIc0l0zAGQjNac6s/scene.splinecode"
        />
        <article
          className="spotify-content"
          href="https://open.spotify.com/show/6zyRcflHKIfvbhpFTvLdba"
          target="_blank"
        >
          <a
            target="_blank"
            className="spotify-link"
            rel="noreferrer"
            href="https://open.spotify.com/show/6zyRcflHKIfvbhpFTvLdba?si=62b45c14b0f5483e"
          >
            <img src={mac} alt="spotify page on a mock computer" />
          </a>
        </article>
        <div className="spotify-transition-bkg"></div>
      </div>
    </>
  );
}

export default Spotify;
