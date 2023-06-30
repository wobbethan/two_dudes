import React from "react";
import "./Apple.css";
import apple from "../assets/applebkg.jpg";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Apple() {
  return (
    <div className="apple-component">
      <img src={apple} alt="apple os background" />
      <div className="ac-models">
        <a
          className="ac-model-container"
          href="https://podcasts.apple.com/us/podcast/000-the-launch-of-our-podcast/id1686538001?i=1000611998431"
          target="_blank"
          rel="noreferrer"
        >
          <Spline
            className="needs-adjust"
            scene="https://prod.spline.design/nVBRymFrPz8-8KZp/scene.splinecode"
          />
        </a>
        <div className="ac-model-container div-container">
          <Spline scene="https://prod.spline.design/vKVNonf2fsf-Fiu9/scene.splinecode" />
        </div>
        <a
          className="ac-model-container"
          href="https://podcasts.apple.com/us/podcast/001-fast-food-friends-and-faith/id1686538001?i=1000613111590"
          target="_blank"
          rel="noreferrer"
        >
          <Spline scene="https://prod.spline.design/mvdokveiGFuSae2N/scene.splinecode" />
        </a>
      </div>
      <a
        href="https://podcasts.apple.com/us/podcast/2-dudes-and-an-umbrella/id1686538001"
        target="_blank"
        className="ac-title"
        rel="noreferrer"
      >
        <h1>Listen Now On Apple Podcasts!</h1>
      </a>
    </div>
  );
}

export default Apple;
