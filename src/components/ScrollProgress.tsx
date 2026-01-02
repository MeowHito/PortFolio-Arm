"use client";
import { useEffect, useRef, useState } from "react";

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 z-[100] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      <div
        className="h-full bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--highlight)] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
