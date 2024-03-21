import Image from "next/image";
import React, { ReactNode } from "react";
import GitButton from "./gitbutton/gitButton";

type ProjectCardProps = {
  title: string;
  image: string;
  link: string;
  children: ReactNode;
};

export const ProjectCard = ({
  title,
  image,
  link,
  children,
}: ProjectCardProps) => {
  return (
    <div className="w-fit p-4 bg-languidLavender rounded-xl border-2 border-darkPurple border-opacity-30">
      <Image
        src={image}
        alt={`${title} project image`}
        width={300}
        height={300}
      />
      <h3 className="mt-2">{title}</h3>
      <p className="mb-2">{children}</p>
      <GitButton title={title} link={link} />
    </div>
  );
};
