"use client";

import { motion } from "motion/react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Triangle BE Logo */}
      <div className="relative w-16 h-16 mb-2">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          {/* Main Triangle Background */}
          <path 
            d="M50 5 L95 85 L5 85 Z" 
            fill="#0B0B0B" 
            stroke="#6BCB1F" 
            strokeWidth="3" 
          />
          {/* BE Letters Styled - Recreating the look from the image */}
          <g transform="translate(25, 35) scale(0.5)">
            {/* B Part */}
            <path 
              d="M0 0 H40 V20 H10 V35 H35 V55 H10 V70 H40 V90 H0 Z" 
              fill="#6BCB1F" 
            />
            {/* E Part */}
            <path 
              d="M50 0 H90 V20 H60 V35 H85 V55 H60 V70 H90 V90 H50 Z" 
              fill="white" 
            />
          </g>
        </svg>
      </div>
      
      <div className="flex flex-col items-center leading-none">
        <div className="flex items-center gap-1">
          <span className="text-xl font-display text-white tracking-tighter uppercase">Body</span>
          <span className="text-xl font-display text-primary tracking-tighter uppercase">Evolution</span>
        </div>
        <div className="flex items-center gap-2 mt-1 w-full">
          <div className="h-[1px] flex-grow bg-white/20" />
          <span className="text-[8px] font-accent text-light/80 tracking-[0.2em] uppercase whitespace-nowrap">
            powered by <span className="text-white font-bold">MATRIX</span>
          </span>
          <div className="h-[1px] flex-grow bg-white/20" />
        </div>
      </div>
    </div>
  );
}
