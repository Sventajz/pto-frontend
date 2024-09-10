"use client";

// import axios from "axios";

import { useState } from "react";

import { Login } from "./styled";
import InputComponent from "../InputFieldComponent";
import { Wrapper } from "../ModalComponent/styled";
import Button from "../ButtonComponent";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      console.log(email, password);
      // const res = await axios.post("/login", {
      //   email: username,
      //   password_hashed: password,
      // });
      // console.log(res);
      // window.location.href = "/dashboard/welcome";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Login>
      <Wrapper>
        <h1>
          <b>PTO system</b>
        </h1>

        <InputComponent
          inputType="text"
          inputID="email"
          labelName="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputComponent
          inputType="password"
          inputID="password"
          labelName="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" onClick={handleLogin} />
      </Wrapper>
    </Login>
  );
};

export default LoginForm;
