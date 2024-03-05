import React from "react";
import Number from "../molecules/number";
import { getTimeAsDeveloper } from "@/app/utils/getTimeAsDeveloper";
import Icon from "../molecules/icon";

export default function Experience() {
  return (
    <div className="bg-darkPurple flex gap-8 px-16 mt-8 py-2">
      <Number number={getTimeAsDeveloper()} text={"Års erfaring"} />
      <Number number={0} text={"Prosjekter fullført"} />
      <Icon src={"/img/icons/React-icon.png"} alt={"react icon"} />
      <Icon src={"/img/icons/nextjs-icon.png"} alt={"nextjs icon"} />
      <Icon src={"/img/icons/typescript-icon.png"} alt={"typescript icon"} />
      <Icon src={"/img/icons/vue-icon.png"} alt={"vue icon"} />
      <Icon src={"/img/icons/nvim-icon.png"} alt={"nvim icon"} />
    </div>
  );
}
