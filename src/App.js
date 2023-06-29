import "./App.css";
import Apple from "./components/Apple"; //done
import Instagram from "./components/Instagram"; //done and fits in app
import Spotify from "./components/Spotify";
import Tiktok from "./components/Tiktok"; //finalize
import Youtube from "./components/Youtube"; //done
import Contact from "./components/Contact";
import { useEffect } from "react";
function printTest() {
  console.log("poop");
}
function App() {
  useEffect(() => {
    window.addEventListener("scroll", printTest);
  });
  return (
    <div className="App">
      <Youtube />
      <Youtube />
    </div>
  );
}

export default App;
