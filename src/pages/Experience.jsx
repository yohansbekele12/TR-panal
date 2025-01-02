"use client";
import React from "react";
import { WobbleCard } from "../Components/ui/wobble-card";

export function Experience() {
  return (
    <div id="experience" className="exp-container ui scroll-mt-16 min-h-full ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              AI-Powered Resolution Search
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Effortlessly search and access pre-verified solutions from closed
              cases and previous conversations. AI-driven suggestions prioritize
              the most relevant and effective responses, improving efficiency
              and accuracy.
            </p>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1114/1*swWatg841AfExABkiI28kQ.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Seamless Collaboration
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Engage in real-time chats with senior team members, ensuring quick
            access to expertise and reliable resolutions. Share and track
            knowledge for future reference.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Knowledge Management & AI Feedback Loop
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Save and rate solutions from conversations to build a growing
              knowledge base. AI improves over time by prioritizing top-rated
              answers, making future searches faster and more effective.
            </p>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1114/1*swWatg841AfExABkiI28kQ.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
