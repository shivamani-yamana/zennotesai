"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "This platform has completely transformed our workflow! Highly recommended.",
    name: "Alice Brown",
    position: "CEO, InnovateX",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s",
  },
  {
    id: 2,
    text: "Exceptional service with outstanding results. A pleasure to work with!",
    name: "David Wilson",
    position: "Marketing Director, BrightCorp",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s",
  },
  {
    id: 3,
    text: "It's unbelievable how smooth an online block-note editor can be.",
    name: "Sudarshan Rao",
    position: "UI/UX Dev, PCBCupid",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s",
  },
];

function TestimonialSection() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 md:px-8 max-w-7xl"
      id="testimonials"
    >
      <h4 className="w-full text-3xl font-medium tracking-tight text-center text-black lg:text-5xl lg:leading-tight dark:text-white">
        What they say about us!
      </h4>
      <div className="grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col justify-between p-5 space-y-6 transition-all duration-500 ease-in-out bg-white border border-gray-100 rounded-lg shadow-2xl md:p-6 dark:bg-gray-950 dark:border-gray-900 shadow-gray-100/70 dark:shadow-gray-800/80 hover:scale-105">
      <p className="font-medium text-gray-700 dark:text-gray-300">
        {testimonial.text}
      </p>
      <div className="flex items-start gap-4">
        <Image
          src={testimonial.image}
          alt="Author avatar"
          width={48}
          height={48}
          className="flex object-cover w-12 h-12 rounded-full"
        />
        <div className="flex-1 space-y-1">
          <h2 className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-200">
            {testimonial.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {testimonial.position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
