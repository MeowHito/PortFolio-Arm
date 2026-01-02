"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import FallingPaper from "./FallingPaper";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Falling Paper Effect */}
      <FallingPaper />

      {/* Decorative Arm Image - Right Side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-[2] hidden lg:block"
        style={{ transform: `translateY(calc(-50% + ${scrollY * 0.15}px))` }}
      >
        <div className="relative">
          <Image
            src="/images/arm-1.png"
            alt="Decorative arm"
            width={350}
            height={400}
            className="object-contain opacity-60 hover:opacity-80 transition-opacity duration-500 animate-float"
            style={{ filter: "drop-shadow(0 0 30px rgba(255, 182, 193, 0.3))" }}
            priority
          />
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--accent)]/10 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* Parallax content - moves slower than scroll */}
      <div
        className="text-center z-10 px-4"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--primary)]" />
          <span className="text-[var(--text-secondary)] text-sm tracking-widest uppercase">
            Welcome to my portfolio
          </span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--primary)]" />
        </div>

        {/* Main title with gradient */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text text-glow mb-6 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Creative
          <br />
          Developer
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          Crafting beautiful digital experiences with clean code and stunning designs.
          Explore my latest projects below.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-xl hover:shadow-[var(--accent)]/30 transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-[var(--primary)]/30 text-[var(--primary)] font-semibold hover:bg-[var(--primary)]/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[var(--text-secondary)] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--primary)] to-transparent" />
      </div>
    </section>
  );
}
