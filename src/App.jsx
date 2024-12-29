import { useState } from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import LandingPage from "./pages/LandingPage";
import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <LandingPage />
      <Experience />
      <About />
    </>
  );
}

export default App;
