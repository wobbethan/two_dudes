import React from "react";
import Spline from "@splinetool/react-spline";
import "./Apple.css";
import apple from "../assets/applebkg.jpg";
function Apple() {
  return (
    <div className="apple-component">
      <div className="apple-bkg">
        <img src={apple} alt="" />
        <a
          href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001"
          target="_blank"
          className="spline-a-left"
        >
          <Spline
            className="ab-spline-left"
            scene="https://prod.spline.design/nVBRymFrPz8-8KZp/scene.splinecode"
          />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001"
          target="_blank"
          className="spline-a-right"
        >
          <Spline
            className="ab-spline-right"
            scene="https://prod.spline.design/mvdokveiGFuSae2N/scene.splinecode"
          />
        </a>
      </div>
    </div>
  );
}

export default Apple;
