//import { useState } from "react";

import Button from "../ButtonComponent";
import InputComponent from "../InputFieldComponent";
import { Wrapper } from "./styled";

export default function ReusableModal({
  title,
  onClick,
}: {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Wrapper>
      <h1>
        <b>{title}</b>
      </h1>

      <InputComponent
        inputType="text"
        inputID="username"
        labelName="username"
      />

      <InputComponent
        inputType="password"
        inputID="password"
        labelName="password"
      />
      <Button text="Login" onClick={onClick} />
    </Wrapper>
  );
}
