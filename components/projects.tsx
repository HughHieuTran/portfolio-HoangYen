"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Dự Án", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Các Dự Án</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Link href={`projects/${project.path}`} key={index}>
            <Project {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
}
