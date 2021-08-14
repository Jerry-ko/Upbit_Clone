import React, { useState } from "react";
import styled, { css } from "styled-components";
import BuyContent from "Routes/Trade/Component/CoinOrder/BuyContent";
import SellContent from "Routes/Trade/Component/CoinOrder/SellContent";
import NoContent from "Routes/Trade/Component/CoinOrder/NoContent";

const Container = styled.div`
  margin: 10px 10px 0 0;
  box-shadow: 2px 2px 4px #dee1e7;
`;

const ButtonContainer = styled.div`
  padding: 0;
  width: 490px;
`;

const Button = styled.button`
  display: inline-block;
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 0;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: white;
  outline: none;
  width: 25%;

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.activeTab &&
    css`
      &:nth-child(${props.activeTab}) {
        border-bottom: 3px solid transparent;
        ${(props) =>
          props.activeTab === 1 &&
          css`
            color: #6127dc;
            border-bottom-color: #6127dc;
          `}
        ${(props) =>
          props.activeTab === 2 &&
          css`
            color: #6127dc;
            border-bottom-color: #6127dc;
          `}
        ${(props) =>
          props.activeTab >= 3 &&
          css`
            color: #6127dc;
            border-bottom-color: #6127dc;
          `}
      }
    `}
`;
const ContentPanel = styled.div`
  display: ${(props) => (props.isView ? "block" : "none")};
`;
const CoinOrderContainer = () => {
  // 탭 전환용
  const [tabActive, setTabActive] = useState(1);
  const handleClickTab = (tab) => {
    setTabActive(tab);
  };

  return (
    <Container>
      <ButtonContainer>
        <Button activeTab={tabActive} onClick={() => handleClickTab(1)}>
          매수
        </Button>
        <Button activeTab={tabActive} onClick={() => handleClickTab(2)}>
          매도
        </Button>
        <Button activeTab={tabActive} onClick={() => handleClickTab(3)}>
          간편주문
        </Button>
        <Button activeTab={tabActive} onClick={() => handleClickTab(4)}>
          거래내역
        </Button>
      </ButtonContainer>
      <ContentPanel isView={tabActive === 1}>
        <BuyContent></BuyContent>
      </ContentPanel>
      <ContentPanel isView={tabActive === 2}>
        <SellContent></SellContent>
      </ContentPanel>
      <ContentPanel isView={tabActive > 2}>
        <NoContent></NoContent>
      </ContentPanel>
    </Container>
  );
};

export default CoinOrderContainer;
