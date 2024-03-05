import React from "react";
import Number from "../molecules/number";

export default function Experience() {
  return (
    <div className="bg-darkPurple flex gap-8 px-16 mt-8 py-2">
      <Number number={2} text={"Års erfaring"} />
      <Number number={0} text={"Prosjekter fullført"} />
    </div>
  );
}
