import { useState } from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import LandingPage from "./pages/LandingPage";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <LandingPage />
      <Experience />
      <About />
      <Contact />
    </>
  );
}

export default App;
