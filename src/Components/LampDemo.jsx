// LampDemo.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../Components/ui/lamp"; //

import { Button } from "../Components/ui/moving-border";
/**
 * LampDemo Component
 * Displays a demo with animated heading inside the LampContainer.
 */
export function LampDemo() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          TR PANEL
          <br /> Effective Collaboration For Effective Service <br />
          <Button
            className="outlinedBtn ca"
            onClick={() => {
              console.log("Log In Clicked");
            }}
          >
            {" "}
            Log In
          </Button>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
