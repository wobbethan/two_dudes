import React from "react";
import blobs from "../assets/blobbkg.png";
import "./Instagram.css";
import Spline from "@splinetool/react-spline";
import follow from "../assets/follow-us-on-instagram.svg";
function Instagram() {
  return (
    <div className="instagram-component">
      <img src={blobs} alt="instagram-blob-background" />
      <div className="ic-content">
        <img className="ic-follow" src={follow} alt="Instagram Graffiti" />
        <Spline
          className="is-frame"
          scene="https://prod.spline.design/zfqj1Tdc8gSJEkXi/scene.splinecode"
        />
      </div>
    </div>
  );
}

export default Instagram;
