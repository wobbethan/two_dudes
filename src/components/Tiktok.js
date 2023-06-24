import React from "react";
import "./Tiktok.css";
import tiktokVid from "../assets/RPReplay_Final1687570500.mp4";
function Tiktok() {
  return (
    <div className="tiktok-component">
      <img
        src="https://cdn.vox-cdn.com/thumbor/0poVEM8qaDDHJNSxu6EzGSRXAlM=/0x0:2040x1360/2000x1333/filters:focal(1081x748:1082x749)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951408/STK051_VRG_Illo_N_Barclay_4_tiktok.jpg"
        alt=""
      />
      <div className="tc-content">
        <section className="tc-c-text">
          <h1>2 Dudes and A Tiktok</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            soluta saepe blanditiis dolorem unde magni perspiciatis provident
            iusto libero, fuga vero minus optio, odit possimus esse fugit
            molestiae accusamus sit.
          </p>
        </section>
        <div className="tc-c-phone-styles">
          <img
            src="https://freepngimg.com/save/68671-android-white-iphone-telephone-free-transparent-image-hq/1258x944"
            alt=""
            className="tc-c-phone"
          />
          <video
            className="tc-c-p-video"
            src={tiktokVid}
            muted
            autoplay
            loop
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Tiktok;
