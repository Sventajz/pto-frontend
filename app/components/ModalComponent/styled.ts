import styled from "styled-components";

export const LoginModal = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ModalWindow = styled.div`
  position: relative;
  min-width: 36%;
  max-width: 90vw;
  height: auto;
`;

export const Wrapper = styled.div`
  border-radius: 24px;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
