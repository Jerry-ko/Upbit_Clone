import React, { useState } from "react";
import styled, { css } from "styled-components";
import ConcludeData from "./Conclude/ConCludeData";
import DayOnDayData from "./Conclude/DayOnDayData";

const Container = styled.div`
  text-align: center;
  margin: 10px 10px 0 0;
  flex: 1;
  height: 435px;
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
`;

const Wrap = styled.div`
  display: flex;
  bottom: 620px;
  width: 100%;
  height: 43px;
  line-height: 42px;
  font-weight: 700;
  border-bottom: 1px solid #d4d6dc;
  color: #2b2b2b;

  & div {
    width: 50%;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.div`
  ${(props) =>
    props.activeView &&
    css`
      outline: none;
      border-bottom: 3px solid #115dcb;
      color: #115dcb;
    `};
`;

const DataPanel = styled.div`
  display: ${(props) => (props.isview ? "block" : "none")};
`;

const ConcludeContainer = () => {
  //탭용
  const [isConclude, setIsConclude] = useState(1);
  const handleClickTab = (tab) => {
    setIsConclude(tab);
  };

  return (
    <Container>
      <Wrap>
        <Title activeView={isConclude === 1} onClick={() => handleClickTab(1)}>
          체결
        </Title>
        <Title activeView={isConclude === 2} onClick={() => handleClickTab(2)}>
          일별
        </Title>
      </Wrap>
      <DataPanel isview={isConclude === 1}>
        <ConcludeData></ConcludeData>
      </DataPanel>
      <DataPanel isview={isConclude === 2}>
        <DayOnDayData></DayOnDayData>
      </DataPanel>
    </Container>
  );
};

export default ConcludeContainer;
