import React from "react";
import Spline from "@splinetool/react-spline";
import "./Apple.css";
import apple from "../assets/applebkg.jpg";
function Apple() {
  return (
    <div className="apple-component">
      <div className="apple-bkg">
        <img src={apple} alt="" />
        <div className="apple-content">
          <h1>Find us on apple podcasts</h1>
          <h2>2Dudes and an umbrella is also available on apple podcasts</h2>
        </div>
        <Spline
          className="ab-spline"
          scene="https://prod.spline.design/mvdokveiGFuSae2N/scene.splinecode"
        />
      </div>
    </div>
  );
}

export default Apple;
