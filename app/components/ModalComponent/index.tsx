//import { useState } from "react";

import { Wrapper } from "./styled";

export default function ReusableModal() {
  return (
    <Wrapper>
      <label htmlFor="username">USER NAME</label>
      <input type="text" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" required />
      <button type="button"></button>
    </Wrapper>
  );
}
