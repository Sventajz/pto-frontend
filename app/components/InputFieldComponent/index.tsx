"use client";

import { Input, InputWrapper, LabelStyle } from "./styled";

export default function InputComponent({
  inputType,
  inputID,
  labelName,
  value,
  onChange,
}: {
  inputType: string;
  inputID: string;
  labelName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <InputWrapper>
      <LabelStyle htmlFor={labelName}>{labelName}</LabelStyle>
      <Input type={inputType} id={inputID} value={value} onChange={onChange} />
    </InputWrapper>
  );
}
