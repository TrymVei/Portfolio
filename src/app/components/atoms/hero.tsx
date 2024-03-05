import Image from "next/image";
import React from "react";
import img from "/public/img/20221121_114935_A00816DA.jpg";

export default function Hero() {
  return (
    <div className="flex flex-row gap-4 justify-center m-8">
      <div className="flex flex-col justify-center">
        <h1>Trym Veiby</h1>
        <p className="text-xl text-white">Frontend-utvikler</p>
      </div>
      <Image
        className="border-2 rounded-xl border-languidLavender"
        src={img}
        alt={"bilde av meg"}
        width={400}
        height={200}
      />
    </div>
  );
}
