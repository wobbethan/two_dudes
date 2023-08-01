import React from "react";
import "./Tiktok.css";
import tiktokMockup from "../assets/tiktoktestmockup.png";
import tiktokBkg from "../assets/tiktokbkg.png";
import { Helmet } from "react-helmet-async";
function Tiktok() {
  return (
    <>
      <Helmet>
        <title>Umbrella Boys | Tiktok</title>
        <meta
          name="description"
          content="Find short-form podcast highlights on our tiktok page."
        />
        <link rel="canonical" href="/tiktok"></link>
      </Helmet>
      <body className="tiktok-component">
        <img src={tiktokBkg} alt="background for Tiktok" />
        <article className="tc-content">
          <a
            href="https://www.tiktok.com/@2dudesandanumbrella"
            target="_blank"
            className="tc-mockup"
            rel="noreferrer"
          >
            <img src={tiktokMockup} alt="mockup for Tiktok" />
          </a>
          <img
            src="https://www.enchanted.media/wp-content/uploads/2021/10/Free-Confetti-Effect-Overlay-Colored-Transparent.png"
            alt="raining confetti"
            className="tc-hearts-hover"
          />
        </article>
      </body>
    </>
  );
}

export default Tiktok;
