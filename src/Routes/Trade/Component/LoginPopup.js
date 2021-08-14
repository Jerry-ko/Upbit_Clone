import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.popup ? "visible" : "hidden")};
`;

const Popup = styled.div`l
  width: 410px;
  height: 205px;
  background-color: white;
  position: fixed;
  top: 30%;
  left: 39%;
  z-index: 5;
  padding: 37px 40px;

  h1 {
    font-size: 19.5px;
    font-weight: 700;
  }
  p {
    color: #666;
    font-size: 16px;
    line-height: 23px;
    margin: 18px 0 30px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  button {
    all: unset;
    width: 92px;
    height: 42px;
    border: 1px solid #0062df;
    font-size: 15px;
    font-weight: 600;
    text-align: center;

    &:first-child {
      color: #0062df;
      background-color: white;
      margin-right: 6px;
    }
    &:last-child {
      color: white;
      background-color: #0062df;
    }
  }
`;

const LoginPopup = ({ popup, showPopup }) => {
  return (
    <Container popup={popup}>
      <Popup>
        <h1>로그인 안내</h1>
        <p>관심코인을 추가하려면 로그인이 필요합니다.</p>
        <div>
          <button onClick={showPopup}>취소</button>
          <button onClick={showPopup}>로그인</button>
        </div>
      </Popup>
    </Container>
  );
};

export default LoginPopup;
