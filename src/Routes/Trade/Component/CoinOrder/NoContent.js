import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  font-size: 12px;
  height: 432px;
  padding: 14px;
  color: #666666;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  height: 360px;
  line-height: 360px;
`;

const Info = styled.div``;

const Access = styled.div`
  display: flex;
  width: 462px;
  justify-content: space-between;
`;

const SignUp = styled.div`
  background-color: #0c3887;
  font-size: 14px;
  width: 108px;
  height: 44px;
  line-height: 44px;
  color: white;
  text-align: center;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = styled.div`
  background-color: #115dcb;
  width: 344px;
  height: 44px;
  font-size: 14px;
  line-height: 44px;
  color: white;
  text-align: center;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NoContent = () => {
  return (
    <Container>
      <Content>
        <span>로그인 후 확인할 수 있습니다.</span>
      </Content>
      <Info>
        <Access>
          <SignUp>회원가입</SignUp>
          <Login>로그인</Login>
        </Access>
      </Info>
    </Container>
  );
};
export default NoContent;
