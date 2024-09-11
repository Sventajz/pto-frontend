"use client";

// import axios from "axios";

import { useState } from "react";
import Image from "next/image";
import InputComponent from "../InputFieldComponent";
import Button from "../ButtonComponent";

import {
  Login,
  LoginWrapper,
  LoginLogoWrapper,
  LoginImgWrapper,
} from "./styled";
import { Wrapper } from "../ModalComponent/styled";

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
    <LoginWrapper>
      <LoginImgWrapper>
        <Image
          src="/loginbackground.png"
          alt="picture of locket for login page"
          height={0}
          width={0}
          sizes="60vw"
          style={{
            width: "100%",
            height: "100%",
            filter: "sepia(50%)",
          }}
        />
      </LoginImgWrapper>
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
      <LoginLogoWrapper>
        <Image
          src="/kantunlogo.svg"
          alt="picture of locket for login page"
          height={0}
          width={0}
          sizes="60vw"
          style={{
            width: "100%",
            height: "100%",
            filter: "sepia(50%)",
          }}
        />
      </LoginLogoWrapper>
    </LoginWrapper>
  );
};

export default LoginForm;
