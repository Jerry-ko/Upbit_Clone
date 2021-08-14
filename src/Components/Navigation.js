import React from "react";
import styled, { css } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import DownloadDropdown from "Components/Navigation/DownloadDropdown";
import ExchangeDropdown from "./Navigation/ExchangeDropdown";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 1240px;

  ${(props) =>
    props.current !== "/" &&
    css`
      height: 60px;
    `}

  ${(props) =>
    props.current === "/" &&
    css`
      height: 80px;
    `}
`;

const NavigationWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.current !== "/" &&
    css`
      color: #2b2b2b;
    `}
`;

const MainNav = styled.ul`
  display: flex;
  margin: 0 30px;
  flex: 1 1 auto;
`;

const InfoNav = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const MainNavItem = styled.div`
  font-size: 15px;
  padding: 10px 23px;
  text-align: center;
  list-style: none;
  transition: border-bottom 0.2s ease-in-out;
  cursor: pointer;

  &:first-child {
    color: ${(props) => (props.current !== "/" ? "white" : "#2b2b2b")};
  }

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:last-child {
    color: ${(props) =>
      props.current !== "/" ? "rgba(165, 175, 202, 0.6)" : "#2b2b2b"};
  }
`;

const InfoNavItem = styled.div`
  font-size: 13px;
  padding: 15px 15px;
  text-align: center;
  list-style: none;
  color: inherit;
  transition: border-bottom 0.2s ease-in-out;
  cursor: pointer;

  ${(props) =>
    props.current !== "/" &&
    css`
      color: white;
    `}

  ${(props) =>
    props.current === "/" &&
    css`
      color: #2b2b2b;
      top: 200px;
    `}
`;

const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: inherit;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    font-weight: 700;
  }
`;

const NavigationContainer = ({ location: { pathname } }) => {
  return (
    <NavContainer current={pathname}>
      <NavigationWrapper>
        <MainNav>
          <MainNavItem current={pathname}>
            <Slink to="/trade">거래소</Slink>
          </MainNavItem>
          <MainNavItem current={pathname}>
            <Slink to="#">입출금</Slink>
          </MainNavItem>
          <MainNavItem current={pathname}>
            <Slink to="#">투자내역</Slink>
          </MainNavItem>
          <MainNavItem current={pathname}>
            <Slink to="#">코인동향</Slink>
          </MainNavItem>
          <MainNavItem current={pathname}>
            <Slink to="#">고객센터</Slink>
          </MainNavItem>
        </MainNav>

        <InfoNav>
          <InfoNavItem current={pathname}>
            <Slink to="#">로그인</Slink>
          </InfoNavItem>
          <InfoNavItem current={pathname}>
            <Slink to="#">회원가입</Slink>
          </InfoNavItem>
          <DownloadDropdown></DownloadDropdown>
          <ExchangeDropdown></ExchangeDropdown>
        </InfoNav>
      </NavigationWrapper>
    </NavContainer>
  );
};

export default withRouter(NavigationContainer);
