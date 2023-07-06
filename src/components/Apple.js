import React from "react";
import "./Apple.css";
import apple from "../assets/applebkg.jpg";
import staticPhone from "../assets/staticphone.png";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Apple() {
  useEffect(() => {
    const contents = document.querySelectorAll(".static-phone");
    const logos = document.querySelectorAll(".ap-logo-container");

    setTimeout(() => {
      contents.forEach((content) => {
        content.classList.remove("sp-active");
        content.classList.add("sp-active");
      });
      logos.forEach((logo) => {
        logo.classList.remove("sl-active");
        logo.classList.add("sl-active");
      });
    }, 2000);
  });
  return (
    <>
      <Helmet>
        <title>2 Dudes and an Umbrella Podcast | Apple Podcasts</title>
        <meta
          name="description"
          content="Our podcast is also available to listen to on Apple Podcasts"
        />
        <link rel="canonical" href="/applepodcasts"></link>
      </Helmet>

      <div className="apple-component">
        <img src={apple} alt="apple os background" />
        <a href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001">
          <img src={staticPhone} alt="static IPhone" className="static-phone" />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001"
          className="ap-logo-container"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/1200px-Podcasts_%28iOS%29.svg.png"
            alt="static IPhone"
            className="static-logo"
          />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001"
          target="_blank"
          className="ac-title"
          rel="noreferrer"
        >
          <h1>Available on Apple Podcasts</h1>
        </a>
        <article className="model_container">
          <Spline
            className="phone_model"
            scene="https://prod.spline.design/nVBRymFrPz8-8KZp/scene.splinecode"
          />
          <Spline
            className="ap-watch"
            scene="https://prod.spline.design/vKVNonf2fsf-Fiu9/scene.splinecode"
          />

          <Spline
            scene="https://prod.spline.design/mvdokveiGFuSae2N/scene.splinecode"
            className="phone_model"
          />
        </article>
      </div>
    </>
  );
}

export default Apple;
