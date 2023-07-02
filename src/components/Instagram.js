import React from "react";
import blobs from "../assets/blobbkg.png";
import "./Instagram.css";
import follow from "../assets/follow-us-on-instagram.svg";
import phone from "../assets/secondPhoneAttemp.png";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Instagram() {
  return (
    <body className="instagram-component">
      <img src={blobs} alt="instagram-blob-background" />
      <img src={phone} alt="Instagram Graffiti" />

      <article className="ic-content">
        <img className="ic-follow" src={follow} alt="Instagram Graffiti" />

        <Spline
          className="is-frame"
          scene="https://prod.spline.design/oNQIT6v5fvWYxXfh/scene.splinecode"
        />
        {/**/}
      </article>
    </body>
  );
}

export default Instagram;
