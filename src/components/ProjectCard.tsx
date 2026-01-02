"use client";
import { Project } from "@/data/projects";
import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden glass glass-hover cursor-pointer transition-all duration-500 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Thumbnail */}
      <div className="relative h-64 overflow-hidden">
        {/* Show actual image if thumbnail exists, otherwise fallback gradient */}
        {project.thumbnail && !imageError ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="w-full h-full bg-gradient-to-br from-[var(--surface)] via-[var(--surface-light)] to-[var(--surface)] transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(135deg, 
                rgba(255, 105, 180, 0.1) 0%, 
                rgba(26, 26, 26, 1) 50%, 
                rgba(255, 182, 193, 0.1) 100%)`,
            }}
          />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />
        
        {/* Project number */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass flex items-center justify-center">
          <span className="text-[var(--primary)] font-bold text-lg">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs rounded-full bg-[var(--surface-light)] text-[var(--text-secondary)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "inset 0 0 60px rgba(255, 105, 180, 0.1)",
        }}
      />
      
      {/* View button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          View Project
        </div>
      </div>
    </div>
  );
}
