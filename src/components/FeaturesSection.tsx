"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { motion } from "framer-motion";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export function FeaturesSection() {
  const features = [
    {
      title: "Seamless Collaboration",
      description:
        "Work together in real-time with instant updates and live cursors. See your team&apos;s edits as they happen—no delays, no confusion, just seamless teamwork.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "AI Tools on the GO",
      description:
        "Leverage cutting-edge AI for intelligent note structuring, quick summaries, and content enhancements. Let AI do the heavy lifting while you focus on what matters.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Built on top tech.",
      description:
        "ZenNotes AI is powered by Next.js, Liveblocks, and Firestore, ensuring lightning-fast performance, real-time updates, and robust scalability for any project.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Advanced Block-Based Editor",
      description:
        "Organize your thoughts effortlessly with our intuitive block-based editor. Structure your notes, tasks, and projects with ease—customize your workflow, your way.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 flex flex-col items-center justify-center py-10 mx-auto lg:py-40 max-w-7xl">
      <div className="px-8">
        <h4 className="max-w-5xl mx-auto text-3xl font-medium tracking-tight text-center text-black lg:text-5xl lg:leading-tight dark:text-white">
          Packed with Thousands of Features
        </h4>

        <p className="max-w-2xl mx-auto my-4 text-sm font-normal text-center lg:text-base text-neutral-500 dark:text-neutral-300">
          Experience the power of AI-driven note-taking with ZenNotes AI.
          Whether you&apos;re brainstorming, planning, or collaborating, our
          feature-rich platform streamlines your workflow and enhances
          productivity.
        </p>
      </div>

      <div className="relative max-w-7xl" id="features">
        <div className="grid grid-cols-1 mt-12 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="w-full h-full ">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `p-4 sm:p-8 relative overflow-hidden rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl`,
        className
      )}
      style={{ backgroundColor: "rgba(252, 252, 252, 0.4)" }}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-xl tracking-tight text-left text-black dark:text-white md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="w-full h-full p-5 mx-auto bg-white shadow-2xl dark:bg-neutral-900 group">
        <div className="flex flex-col flex-1 w-full space-y-2 max-h-48 ">
          {/* TODO */}
          <Image
            src="/images/lp-ss-1.png"
            alt="header"
            width={1920}
            height={1080}
            className="object-cover object-left-top w-full h-full rounded-sm aspect-square"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-40 w-full pointer-events-none h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent" />
      <div className="absolute inset-x-0 top-0 z-40 w-full pointer-events-none h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://github.com"
      target="__blank"
      className="relative flex gap-10 h-72 group/image"
    >
      <div className="flex w-full h-full mx-auto bg-transparent dark:bg-transparent group">
        <div className="relative flex flex-col flex-1 w-full h-full space-y-2">
          {/* TODO */}
          <IconBrandGithub className="absolute inset-0 z-10 w-20 h-20 m-auto text-white opacity-0 group-hover:opacity-100" />
          <Image
            src="/images/lp-ss-1.png"
            alt="header"
            width={1920}
            height={1920}
            className="object-cover object-center w-full h-full transition-all duration-200 rounded-sm aspect-square blur-none group-hover/image:blur-md"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-start h-full gap-10 p-8 overflow-hidden">
      {/* TODO */}
      <div className="flex flex-col flex-1 w-full h-full space-y-2 ">
        {/* TODO */}
        <Image
          src="/images/lp-ss-1.png"
          alt="header"
          width={1920}
          height={1080}
          className="object-cover object-left-top w-full h-full rounded-sm aspect-square"
        />
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative flex flex-col items-center mt-10 bg-transparent h-60 md:h-60 dark:bg-transparent">
      <div className="w-full h-full p-5 mx-auto bg-white shadow-2xl dark:bg-neutral-900 group">
        <div className="flex flex-col flex-1 w-full h-full space-y-2 ">
          {/* TODO */}
          <Image
            src="/images/lp-ss-1.png"
            alt="header"
            width={1920}
            height={1080}
            className="object-cover object-left-top w-full h-full rounded-sm aspect-square"
          />
        </div>
      </div>
    </div>
  );
};
