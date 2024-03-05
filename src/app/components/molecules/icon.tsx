import Image from "next/image";
import React from "react";

type IconProps = {
  src: string;
  alt: string;
};

export default function Icon({ src, alt }: IconProps) {
  return (
    <div className="flex items-center">
      <Image
        className="max-h-10 w-auto"
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </div>
  );
}
