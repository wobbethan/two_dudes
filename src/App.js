import "./App.css";
import Apple from "./components/Apple"; //done
import Instagram from "./components/Instagram"; //done and fits in app
import Spotify from "./components/Spotify";
import Tiktok from "./components/Tiktok"; //finalize
import Youtube from "./components/Youtube"; //done
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ion-icon className="home-icon" name="home-outline"></ion-icon>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/applepodcasts" element={<Apple />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/tiktok" element={<Tiktok />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
