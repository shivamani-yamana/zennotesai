"use client";
import React, { useState } from "react";

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render anything if the banner is closed

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-center py-2 z-50 flex items-center justify-center">
      <p className="font-semibold">This page is still in development</p>
      <button
        onClick={handleClose}
        className="absolute right-0 pr-4 text-2xl font-bold text-white"
      >
        ×
      </button>
    </div>
  );
};

export default DevelopmentBanner;
