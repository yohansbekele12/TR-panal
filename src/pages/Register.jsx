import React from "react";
import "./Register.css";
import Hero from "../Components/Hero";
import Reginpute from "../Components/Reginpute";

function Register() {
  return (
    <div id="signup" className="font-[sans-serif] ui md:h-screen scroll-mt-16">
      <div className="grid md:grid-cols-2 items-center justify-center  gap-8 h-800">
        <Hero />
        <Reginpute />
      </div>
    </div>
  );
}

export default Register;
