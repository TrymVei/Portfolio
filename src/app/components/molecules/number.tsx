import React from "react";

type NumberProps = {
  number: number;
  text: string;
};
export default function Number({ number, text }: NumberProps) {
  return (
    <div className="flex gap-4 items-center">
      <p className="text-languidLavender text-5xl">{number}</p>
      <p className="text-white text-xl">{text}</p>
    </div>
  );
}
