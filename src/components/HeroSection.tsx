"use client";
import Image from "next/image";

function HeroSection() {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center"
        id="hero-section"
      >
        <div className="flex flex-col flex-1 w-full h-fit md:min-h-screen gap-8 text-center max-w-screen">
          <div className="flex items-center justify-center gap-2 flex-col z-[5] px-4 md:px-8 lg:px-16 mt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-snug">
              Your Intelligent Workspace
              <br />
              for Real-Time Collaboration
            </h1>
            <p className="text-base sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed">
              ZenNotes AI combines a powerful block-based editor, real-time
              collaboration, and AI-driven features to help you work smarter,
              faster, and better.
            </p>
            <div className="relative flex items-center justify-center flex-1 mt-6 md:mt-10 lg:mt-12 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/lp-ss-1.png"
                width="1920"
                height="1080"
                className="w-full max-w-[1200px] h-auto"
                alt="Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
