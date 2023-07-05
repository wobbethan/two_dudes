import React from "react";
import blobs from "../assets/blobbkg.png";
import "./Instagram.css";
import follow from "../assets/follow-us-on-instagram.svg";
import phone from "../assets/secondPhoneAttemp.png";
import { Helmet } from "react-helmet-async";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Instagram() {
  return (
    <>
      <Helmet>
        <title>2 Dudes and an Umbrella Podcast | Instagram</title>
        <meta
          name="description"
          content="Connect with our podcast and the dudes themselves on Instagram"
        />
        <link rel="canonical" href="/instagram"></link>
      </Helmet>
      <div className="instagram-component">
        <img src={blobs} alt="instagram-blob-background" />
        <img src={phone} alt="Instagram Graffiti" />

        <div className="ic-content">
          <img className="ic-follow" src={follow} alt="Instagram Graffiti" />
          <Spline
            className="is-frame"
            scene="https://prod.spline.design/oNQIT6v5fvWYxXfh/scene.splinecode"
          />
        </div>
      </div>
    </>
  );
}

export default Instagram;
