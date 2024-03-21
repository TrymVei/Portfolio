import React from "react";
import { ProjectCard } from "../molecules/projectCard";

export const Projects = () => {
  return (
    <div className="bg-LightGrayishCyan px-16 pb-16">
      <h2 className="text-russianViolet">Prosjekter</h2>
      <p className="text-russianViolet text-xl my-2">
        Her er noen av prosjektene jeg har jobbet på i løpet av min karriere
      </p>
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
