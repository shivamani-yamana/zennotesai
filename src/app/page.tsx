"use client";
import HeroSection from "@/components/HeroSection";
import LandingPageNavbar from "../components/LandingPageNavbar";
import { FeaturesSection } from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTAdarkSection from "@/components/CTAdarkSection";
import { useLenis } from "@/lib/useLenis";

export default function Home() {
  useLenis();
  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-cover bg-landing-bg dark:bg-landing-bg-dark">
        {/* Sticky Navbar */}
        <div className="top-0 sticky z-50 w-full">
          <LandingPageNavbar />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col px-6 md:px-12 lg:px-20 xl:px-32">
          <HeroSection />
        </div>

        {/* Features, Testimonials, and CTA Section */}
        <div className="relative flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 xl:px-32">
          <FeaturesSection />
          <TestimonialSection />
          <CTAdarkSection />
        </div>

        {/* Footer */}
        <div className="pb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 w-full text-center">
            Made with ❤️ by Nemo &copy; {new Date().getFullYear()} ZenNotes AI.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
