"use client";

export default function ParallaxBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 182, 193, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 182, 193, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating Blob 1 */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 105, 180, 0.15) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />

      {/* Floating Blob 2 */}
      <div
        className="absolute top-1/3 -left-32 w-80 h-80 rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 182, 193, 0.12) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Floating Blob 3 */}
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 192, 203, 0.1) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Small decorative circles */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 rounded-full bg-[var(--primary)] opacity-30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-2/3 left-1/4 w-3 h-3 rounded-full bg-[var(--accent)] opacity-20 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 rounded-full bg-[var(--highlight)] opacity-40 animate-float" style={{ animationDelay: "5s" }} />
    </div>
  );
}
