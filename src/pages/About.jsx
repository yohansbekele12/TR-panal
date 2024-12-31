import React from "react";
import { AnimatedTestimonialsDemo } from "../Components/AnimatedTestimonialsDemo";

export default function About() {
  return (
    <div
      id="about"
      className="bg-gray-100 min-h-screen flex ui justify-center scroll-mt-16" // Added pt-16
    >
      <div className="max-w-4xl w-full p-8 rounded-lg">
        <h1 className="text-3xl  text-center  mb-4">About TR- PANEL</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          TR- PANEL is a web app designed to support technology and operations
          teams by facilitating real-time communication and knowledge sharing.
          Our platform empowers agents, developers, and team members to
          efficiently resolve issues by leveraging past conversations, AI-driven
          recommendations, and expert guidance.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          With TR- PANEL, you can
        </p>
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
}
