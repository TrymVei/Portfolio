import Link from "next/link";
import React from "react";
import style from "./gitButton.module.css";

type GitButtonProps = {
  title: string;
  link: string;
};

const GitButton = ({ title, link }: GitButtonProps) => {
  return (
    <Link className={style.gitButton} href={link}>
      {title} repo
    </Link>
  );
};

export default GitButton;
