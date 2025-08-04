"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import { LuCircleArrowLeft, LuCircleArrowRight } from "react-icons/lu";

const Features = () => {
  const features = [
    {
      name: "Unified Analytics Hub",
      tag: "See the full picture instantly.",
      image: "/assets/features/analytics.avif",
      description: "Track performance across all your social and ad platforms in one dashboard. No more switching tabs or exporting spreadsheets, just clear, connected insights."
    },
    {
      name: "Smart Budget Optimization",
      tag: "Spend less. Perform better.",
      image: "/assets/features/budget.avif",
      description: "Track performance across all your social and ad platforms in one dashboard. No more switching tabs or exporting spreadsheets, just clear, connected insights."
    },
    {
      name: "Predictive AI Insights",
      tag: "Know what's next—before it happens.",
      image: "/assets/features/ai_prediction.webp",
      description: "Leverage machine learning to forecast campaign performance, audience shifts, and emerging trends. Make proactive, data-backed decisions with confidence."
    },
    {
      name: "Cross-Platform ROI Tracking",
      tag: "Understand what really drives growth.",
      image: "/assets/features/social_apps.jpg",
      description: "Graff helps you attribute conversions and revenue to the right channels, creatives, and campaigns—giving you clarity on where to double down."
    },
    {
      name: "Custom Dashboards & Reports",
      tag: "Tailored to your team, your goals.",
      image: "/assets/features/status-report.png",
      description: "Build views that match your KPIs. Whether you're a marketer, agency, or founder—create and share dashboards that deliver insights, not clutter."
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = window.innerWidth < 768 ? containerWidth : containerWidth / 2.5;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = window.innerWidth < 768 ? containerWidth : containerWidth / 2.5;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className='flex flex-col gap-4'>
      <div className="flex ml-auto gap-8">
        <LuCircleArrowLeft
          size={40}
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onClick={scrollLeft}
        />
        <LuCircleArrowRight
          size={40}
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onClick={scrollRight}
        />
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-[calc(40%-8px)]">
            <Image
              src={feature.image}
              alt={feature.name}
              width={500}
              height={500}
              className="rounded-xl w-full h-80 object-cover mb-4"
            />
            <p className="text-2xl font-bold">{index + 1} {feature.name}</p>
            <p className="text-xl font-semibold">{feature.tag}</p>
            <p className="text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
