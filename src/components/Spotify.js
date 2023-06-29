import { React, useEffect } from "react";
import "./Spotify.css";
import Spline from "@splinetool/react-spline";
import mac from "../assets/proDisplay.png";
function Spotify() {
  useEffect(() => {
    const contents = document.querySelectorAll(".spotify-content");
    setTimeout(() => {
      contents.forEach((content) => {
        content.classList.remove("sc-active-sc");
        content.classList.add("sc-active-sc");
      });
    }, 5000);
  });
  return (
    <div className="spotify-component">
      <Spline scene="https://prod.spline.design/CIkZS7Am9DUxXkyf/scene.splinecode" />
      <div
        className="spotify-content"
        href="https://open.spotify.com/show/6zyRcflHKIfvbhpFTvLdba"
        target="_blank"
      >
        <img src={mac} alt="" />
      </div>
    </div>
  );
}

export default Spotify;
