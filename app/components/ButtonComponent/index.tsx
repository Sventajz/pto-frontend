"use client";

import { ButtonStyle } from "./styled";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}
