import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import bgVideos from "./Videos/bgSpaceVideo.mp4";
import Sidebar from "./Pages/Sidebar";
import bgImage from "./Images/fallbackImage.png";

function App() {

  return (
    <>
      <div className="videoBackground">
        <video autoPlay muted loop id="backgroundVideo" poster={bgImage}>
          <source src={bgVideos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="contentContainer">
        <div className="content">
          <Header />
          <div className="container col-lg-12" style={{ paddingTop: "100px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
          <Sidebar />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;