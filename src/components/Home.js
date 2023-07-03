import React, { useEffect } from "react";
import igWindow from "../assets/instagramWindow.png";
import tiktokWindow from "../assets/tiktokWindow.png";
import appleWindow from "../assets/apWindow.png";
import youtubeWindow from "../assets/youtubeWindow.png";
import spotifyWindow from "../assets/spotifyWindow.png";
import homebkg from "../assets/luca-bravo-VowIFDxogG4-unsplash.jpg";
import "./Home.css";
function Home() {
  useEffect(() => {
    const contents = document.querySelectorAll(".image-track");
    setTimeout(() => {
      contents.forEach((content) => {
        content.classList.remove("it-active");
        content.classList.add("it-active");
      });
    }, 2000);

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
    <body className="home-component">
      <img
        className="home-bkg"
        src="https://icons.veryicon.com/png/o/miscellaneous/streamline/umbrella-27.png"
        alt="home page background"
        draggable="false"
      />

      <nav
        className="image-track"
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <section className="it-container">
          <a href="/applepodcasts" className="it-c-link" draggable="false">
            Learn More
          </a>
          <img
            className="it-image"
            src={appleWindow}
            alt="podcast window"
            draggable="false"
          />
        </section>
        <section className="it-container">
          <a href="/tiktok" className="it-c-link" draggable="false">
            Learn More
          </a>
          <img
            className="it-image"
            src={tiktokWindow}
            alt="tiktok window"
            draggable="false"
          />
        </section>
        <section className="it-container">
          <a href="/instagram" className="it-c-link" draggable="false">
            Learn More
          </a>
          <img
            className="it-image"
            src={igWindow}
            alt="instagram window"
            draggable="false"
          />
        </section>
        <section className="it-container">
          <a href="/youtube" className="it-c-link" draggable="false">
            Learn More
          </a>
          <img
            className="it-image"
            src={youtubeWindow}
            alt="youtube window"
            draggable="false"
          />
        </section>
        <section className="it-container">
          <a href="/spotify" className="it-c-link" draggable="false">
            Learn More
          </a>
          <img
            className="it-image"
            src={spotifyWindow}
            alt="spotify window"
            draggable="false"
          />
        </section>
      </nav>
    </body>
  );
}

export default Home;
