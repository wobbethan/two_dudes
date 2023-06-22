import React from "react";
import blobs from "../assets/blobbkg.png";
import "./Instagram.css";
import Spline from "@splinetool/react-spline";

function Instagram() {
  return (
    <div className="instagram-component">
      <img src={blobs} alt="instagram-blob-background" />
      <div className="ic-content">
        <Spline
          scene="https://prod.spline.design/zfqj1Tdc8gSJEkXi/scene.splinecode"
          className="is-frame"
        />
      </div>
    </div>
  );
}

export default Instagram;
