import React from "react";
import BlurFade from "./magicui/blur-fade";
import { ProjectCard } from "./project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

type Props = {
  isHome?: boolean;
};

export default function ProjectSection({ isHome }: Props) {
  const projects = isHome ? DATA.projects.slice(0, 4) : DATA.projects;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
      {projects.map((project, id) => (
        <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
          />
        </BlurFade>
      ))}
    </div>
  );
}
