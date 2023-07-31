import React from "react";
import "./Apple.css";
import apple from "../assets/applebkg.jpg";
import staticPhone from "../assets/staticphone.png";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
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
    }, 1000);
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
        <img src={apple} alt="apple os background" className="ac-bkg" />

        <article className="model_container">
          <Spline
            className="phone_model"
            scene="https://prod.spline.design/nVBRymFrPz8-8KZp/scene.splinecode"
          />
          <motion.a
            href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001"
            className="apple_logo_laptop"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/1024px-Podcasts_%28iOS%29.svg.png"
              alt="Podcast logo"
            />
          </motion.a>
          <a href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001">
            <img
              src={staticPhone}
              alt="static IPhone"
              className="static-phone"
            />
          </a>
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
