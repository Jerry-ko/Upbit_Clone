import React, { useState } from "react";
import styled, { css } from "styled-components";
import MarketContent from "./GraphMiniChart/MarketContent";
import ChartContent from "./GraphMiniChart/ChartContent";

const Container = styled.div`
  text-align: center;
  margin: 10px 10px 0 0;
  height: 301px;
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
`;

const HeaderContainer = styled.div`
  color: 2b2b2b;
  display: flex;
  height: 43px;
  line-height: 43px;
  width: 490px;
  border-bottom: 1px solid #d4d6dc;
`;

const ContentPanel = styled.div`
  display: ${(props) => (props.View ? "block" : "none")};
`;

const TabTooltipButton = styled.div`
  display: ${(props) => (props.View === 2 ? "block" : "none")};

  & > span {
    font-size: 12px;
  }
`;

const TabTooltipContainer = styled.span`
  display: ${(props) => (props.activeView ? "block" : "none")};
`;

const Tab = styled.li`
  width: 245px;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: white;
  box-sizing: border-box;

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.activeView &&
    css`
      border-bottom: 3px solid #115dcb;
      color: #115dcb;
    `}
  & > ${TabTooltipButton} {
    position: absolute;
    right: 17px;
    top: 28%;
    margin-top: -9px;
    color: #2b2b2b;
    font-weight: 100;
    white-space: nowrap;
  }
`;

const Arrow = styled.a`
  display: inline-block;
  margin-left: 4px;
  position: relative;
  background-color: white;
  color: #999;
  cursor: pointer;
  height: 0px;
`;

const Days = styled.div`
  z-index: 100;
  top: 36px;
  right: -68px;
  position: absolute;
  background: #fff;
  color: #2b2b2b;
  width: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px #dee1e7;
  margin: 5px 0 0;
  padding: 10px 0 3px;
  height: 334px;

  & div:not(:nth-child(4)) {
    padding: 0 20px;
    clear: both;
    line-height: 27px;
    height: 27px;
    display: block;
    font-size: 13px;
    width: 100%;
    text-align: left;
  }

  & div:hover {
    background: #f4f5f8;
  }
`;

const Separate = styled.div`
  border-top: 1px solid #ccc;
  margin: 10px 0;
  display: block;
`;

const GraphMiniChartContainer = () => {
  //화살표용
  const [isArrow, setIsArrow] = useState(false);
  const handleClickArrow = () => {
    setIsArrow(!isArrow);
  };

  //탭용
  const [isView, setIsView] = useState(1);
  const handleClickContent = (num) => {
    setIsView(num);
  };

  return (
    <Container>
      <HeaderContainer>
        <Tab activeView={isView === 1} onClick={() => handleClickContent(1)}>
          마켓뎁스
        </Tab>
        <Tab activeView={isView === 2} onClick={() => handleClickContent(2)}>
          미니차트
          <TabTooltipButton View={isView} onClick={handleClickArrow}>
            <span>1일</span>
            <Arrow>
              <i className="fas fa-chevron-down fa-xs"></i>
              <TabTooltipContainer activeView={isArrow}>
                <Days>
                  <div>1일</div>
                  <div>1주</div>
                  <div>한 달</div>
                  <Separate></Separate>
                  <div>1분</div>
                  <div>3분</div>
                  <div>5분</div>
                  <div>10분</div>
                  <div>15분</div>
                  <div>30분</div>
                  <div>1시간</div>
                  <div>4시간</div>
                </Days>
              </TabTooltipContainer>
            </Arrow>
          </TabTooltipButton>
        </Tab>
      </HeaderContainer>
      <ContentPanel View={isView === 1}>
        <MarketContent></MarketContent>
      </ContentPanel>
      <ContentPanel View={isView === 2}>
        <ChartContent></ChartContent>
      </ContentPanel>
    </Container>
  );
};

export default GraphMiniChartContainer;
