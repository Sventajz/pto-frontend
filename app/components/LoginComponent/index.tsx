"use client";

import { Login } from "./styled";
import ReusableModal from "../ModalComponent";

const LoginForm = () => {
  // const handleLogin = async (username: string, password: string) => {
  //   try {
  //     const res = await apiClient.post("/login", {
  //       email: username,
  //       password_hashed: password,
  //     });
  //     window.location.href = "/dashboard/welcome";
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Login>
      <ReusableModal />
    </Login>
  );
};

export default LoginForm;
