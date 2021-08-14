import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 200px;
  text-align: left;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
`;
const WrapperContainer = styled.div`
  margin: 0 -40px;
`;
const ItemColumn = styled.div`
  float: left;
  width: 33.3333%;
  padding: 0 40px;

  & h3 {
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    display: flex;
    margin: 60px 0 24px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    letter-spacing: 0.3px;

    & > i {
      width: 50px;
      height: 50px;
      display: inline-block;
      background: transparent
        url("/assets/img/mainCustomer/img-icon-customer.png") no-repeat 0 0;
      background-size: 50px;
      margin-right: 10px;

      ${(props) =>
        props.item === "mail" &&
        css`
          background-position: 0 -75px;
        `}

      ${(props) =>
        props.item === "app" &&
        css`
          background-position: 0 -150px;
        `}
    }
  }
`;
const TextrCustomerNumber = styled.p`
  height: 47px;
  color: #2b2b2b;
  font-size: 34px;
  font-weight: 300;
  line-height: 47px;
  font-weight: 300;

  > span {
    font-size: 18px;
    margin-left: 15px;
    vertical-align: middle;
    height: 40px;
    line-height: 40px;
  }
`;
const BtnCustomerKakaotalk = styled.p`
  position: relative;
  bottom: auto;
  color: #999;
  font-size: 16px;

  > a {
    line-height: 43px;
    margin-top: 15px;
    margin-right: 7px;
    border: 1px solid #ddd;
    display: inline-block;
    text-decoration: none;
    height: 46px;
    line-height: 46px;
    padding: 0 18px;
    font-size: 16px;
    color: #666;
    letter-spacing: -0.5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 0.2px;
  }
`;
const IconComnpany = styled.i`
  text-indent: -1000em;
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: sub;
  background: transparent url("/assets/img/mainCustomer/img-icon-company.png")
    no-repeat;
  background-size: 18px;

  ${(props) =>
    props.item === "kakao" &&
    css`
      margin-right: 5px;
    `}

  ${(props) =>
    props.item === "google" &&
    css`
      background-position: 0 -26px;
    `}

    ${(props) =>
    props.item === "apple" &&
    css`
      background-position: 0 -58px;
    `}
`;
const TextrCustomerRounge = styled.p`
  color: #999;
  font-size: 16px;
  letter-spacing: 0.8px;
  line-height: 23px;
`;
const TextrCustomerRoungeItem = styled.ul`
  margin-top: 12px;

  > li {
    position: relative;
    padding-left: 10px;
    line-height: 24px;
    font-size: 16px;
    color: #999;

    &:before {
      content: "";
      display: block;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #999;
      position: absolute;
      left: 0;
      top: 12px;
    }
  }
`;
const AppContainer = styled.div`
  position: relative;
  padding-left: 120px;
`;
const AppQrcode = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 14px;
  border: 1px solid #ddd;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  img {
    vertical-align: top;
  }
`;
const AppLinks = styled.div`
  > a {
    margin-right: 7px;
    border: 1px solid #ddd;
    display: inline-block;
    text-decoration: none;
    height: 46px;
    line-height: 46px;
    padding: 0 18px;
    font-size: 16px;
    color: #666;
    letter-spacing: -0.5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    min-width: 144px;
    margin-top: 14px;
    margin-right: 0;
    line-height: 43px;
    letter-spacing: 0.3px;

    &:first-child {
      margin-top: 362px;
      margin-left: 55px;
    }
  }
`;

const CustomerContainer = () => {
  return (
    <Container>
      <Wrapper className="clearfix">
        <WrapperContainer>
          <ItemColumn item={"mail"}>
            <h3>
              <i></i>
              업비트 고객센터
            </h3>
            <TextrCustomerNumber>
              1588-5682
              <span>
                (<span>평일</span> <span>09:00~18:00</span>)
              </span>
            </TextrCustomerNumber>
            <BtnCustomerKakaotalk>
              <a href="/#" title="카카오톡 상담하기(24시간)">
                <IconComnpany item="kakao"></IconComnpany>
                카카오톡 상담하기(24시간)
              </a>
            </BtnCustomerKakaotalk>
          </ItemColumn>
          <ItemColumn item={"phone"}>
            <h3>
              <i></i>
              업비트 라운지
            </h3>
            <TextrCustomerRounge>
              방문 상담은 업비트라운지를 이용해주십시오.
              <br />
              라운지는 회원님을 위한 상담과 교류의 공간입니다.
            </TextrCustomerRounge>
            <TextrCustomerRoungeItem>
              <li>운영시간: 평일 09:00~18:00</li>
              <li>서울특별시 강남구 테헤란로4길 14, 미림타워 2층</li>
            </TextrCustomerRoungeItem>
          </ItemColumn>
          <ItemColumn item={"app"}>
            <h3>
              <i></i>
              업비트 앱
            </h3>
            <AppContainer>
              <AppQrcode>
                <img
                  src={"/assets/img/mainCustomer/img-qrcode.png"}
                  height="76"
                  width="76"
                  alt="QR Code"
                />
              </AppQrcode>
              <AppLinks>
                <a href="javascript;" title="Google play">
                  <IconComnpany item="google"></IconComnpany> 안드로이드앱
                </a>
                <a href="javascript;" title="App Store">
                  <IconComnpany item="apple"></IconComnpany> 아이폰앱
                </a>
              </AppLinks>
            </AppContainer>
          </ItemColumn>
        </WrapperContainer>
      </Wrapper>
    </Container>
  );
};

export default CustomerContainer;
