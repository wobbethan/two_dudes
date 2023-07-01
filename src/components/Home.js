import React, { useEffect } from "react";
import igWindow from "../assets/instagramWindow.png";
import tiktokWindow from "../assets/tiktokWindow.png";
import appleWindow from "../assets/apWindow.png";
import youtubeWindow from "../assets/youtubeWindow.png";
import spotifyWindow from "../assets/spotifyWindow.png";

import "./Home.css";
function Home() {
  useEffect(() => {
    const track = document.getElementById("image-track");

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 50),
          -50
        );

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${-50 + nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("it-image")) {
        image.animate(
          {
            objectPosition: `${50 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };
    window.onmousedown = (e) => handleOnDown(e);

    window.ontouchstart = (e) => handleOnDown(e.touches[0]);

    window.onmouseup = (e) => handleOnUp(e);

    window.ontouchend = (e) => handleOnUp(e.touches[0]);

    window.onmousemove = (e) => handleOnMove(e);

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  });

  return (
    <div className="home-component">
      <div
        className="image-track"
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <img
          className="it-image"
          src={appleWindow}
          alt="poop"
          draggable="false"
        />

        <img
          className="it-image"
          src={tiktokWindow}
          alt="poop"
          draggable="false"
        />
        <img className="it-image" src={igWindow} alt="poop" draggable="false" />
        <img
          className="it-image"
          src={youtubeWindow}
          alt="poop"
          draggable="false"
        />
        <img
          className="it-image"
          src={spotifyWindow}
          alt="poop"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Home;
