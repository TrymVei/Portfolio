import React from "react";
import { ProjectCard } from "../molecules/projectCard";

export const Projects = () => {
  return (
    <div className="bg-LightGrayishCyan px-16 pb-16">
      <ProjectCard
        title={"Variant Håndbok"}
        image={"/img/handbook.png"}
        link={"https://github.com/varianter/handbook"}
      >
        description her
      </ProjectCard>
    </div>
  );
};
