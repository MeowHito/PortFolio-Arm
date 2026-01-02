"use client";
import { useEffect, useState } from "react";

interface PaperPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function FallingPaper() {
  const [papers, setPapers] = useState<PaperPiece[]>([]);

  useEffect(() => {
    // Generate paper pieces only on client side
    const pieces: PaperPiece[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    }));
    setPapers(pieces);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {papers.map((paper) => (
        <div
          key={paper.id}
          className="falling-paper absolute"
          style={{
            left: `${paper.left}%`,
            width: `${paper.size}px`,
            height: `${paper.size}px`,
            animationDelay: `${paper.delay}s`,
            animationDuration: `${paper.duration}s`,
            transform: `rotate(${paper.rotation}deg)`,
          }}
        >
          <div
            className="w-full h-full rounded-sm"
            style={{
              background: `linear-gradient(135deg, rgba(255, 182, 193, 0.4) 0%, rgba(255, 105, 180, 0.2) 100%)`,
              boxShadow: `0 0 10px rgba(255, 182, 193, 0.3)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
