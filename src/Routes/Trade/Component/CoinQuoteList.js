import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import GeneralQuotes from "Routes/Trade/Component/CoinQuoteList/GeneralQuotes";
import CumulativeQuotes from "Routes/Trade/Component/CoinQuoteList/CumulativeQuotes.js";
import OrderQuotes from "Routes/Trade/Component/CoinQuoteList/OrderQuotes";

const Container = styled.div`
  text-align: center;
  margin: 10px 10px 0 0;
  background-color: #fff;
  box-shadow: 2px 2px 4px #dee1e7;
  flex: 1;
`;

const Tabs = styled.ul`
  float: left;
  width: 100%;
  display: table;
  table-layout: fixed;

  > li {
    float: left;
    width: ${(props) => (props.countTabs > 0 ? 100 / props.countTabs : "100")}%;
  }
`;
const TabItem = styled.li`
  display: block;
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #d4d6dc;
  line-height: 42px;
  color: #2b2b2b;
  font-size: 16px;
  font-weight: 500;
  font-family: Noto Sans KR, sans-serif;
  text-align: center;

  > a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  ${(props) =>
    props.current &&
    css`
      height: 42px;
      border-bottom: 3px solid #115dcb;
      color: #115dcb;
      font-weight: 700;
    `}
`;
const TabContainer = styled.div`
  width: 100%;
  height: 742px;
  overflow: hidden;
  position: relative;
  font-size: 13px;

  display: ${(props) => (props.isView ? "flex" : "none")};
  flex-direction: column;

  table {
    width: 100%;
    table-layout: fixed;

    td {
      vertical-align: middle;
    }
  }

  ${(props) => (props.tabActive === 1) & css``}
`;

const Slink = styled(Link)``;

const CoinQuoteListContainer = () => {
  // 탭 전환
  const [tabActive, setTabActive] = useState(1);
  const handleClickTabActive = (tab) => {
    setTabActive(tab);
  };

  return (
    <Container>
      <div>
        <Tabs countTabs={3}>
          <TabItem
            current={tabActive === 1}
            onClick={() => handleClickTabActive(1)}
          >
            <Slink to="#" title="일반호가">
              일반호가
            </Slink>
          </TabItem>
          <TabItem
            current={tabActive === 2}
            onClick={() => handleClickTabActive(2)}
          >
            <Slink to="#" title="정보">
              누적호가
            </Slink>
          </TabItem>
          <TabItem
            current={tabActive === 3}
            onClick={() => handleClickTabActive(3)}
          >
            <Slink to="#" title="호가주문">
              호가주문
            </Slink>
          </TabItem>
        </Tabs>
      </div>
      <div>
        <TabContainer isView={tabActive === 1} tabActive={tabActive}>
          <GeneralQuotes></GeneralQuotes>
        </TabContainer>
        <TabContainer isView={tabActive === 2}>
          <CumulativeQuotes></CumulativeQuotes>
        </TabContainer>
        <TabContainer isView={tabActive === 3}>
          <OrderQuotes></OrderQuotes>
        </TabContainer>
      </div>
    </Container>
  );
};

export default CoinQuoteListContainer;
