import styled from "styled-components";

import { breakPoints } from "@/app/breakpoints";

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  max-height: 400px;
  width: 90%;
  min-width: 400px;
  margin: auto;
  color: black;
  grid-column-start: 2;
  position: absolute;
  top: 25%;
  left: -10%;
  @media (max-width: ${breakPoints.mobile}) {
    position: initial;
    min-width: 90%;
  }
`;

export const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: ${breakPoints.mobile}) {
    display: flex;
  }
`;

export const LoginLogoWrapper = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 88%;
  left: 90%;
  @media (max-width: ${breakPoints.mobile}) {
    display: none;
  }
`;

export const LoginImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: ${breakPoints.mobile}) {
    display: none;
  }
`;
