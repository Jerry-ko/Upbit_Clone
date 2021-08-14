import React from "react";
import styled from "styled-components";

// Components Embeded
import TopNotice from 'Routes/Trade/Component/TopNotice';
import GraphChart from "Routes/Trade/Component/GraphChart";
import CoinQuoteRight from "Routes/Trade/Component/CoinQuoteRight";
import CoinQuoteList from "Routes/Trade/Component/CoinQuoteList";
import GraphMiniChart from "Routes/Trade/Component/GraphMiniChart";
import CoinOrder from "Routes/Trade/Component/CoinOrder";
import Conclude from "Routes/Trade/Component/Conclude";

const Container = styled.div`
  margin: 10px 0;
`;

const ContainerHorizontal = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;
const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TradePresenter = () => {
  return (
    <Container>
      <ContainerHorizontal>
        <ContainerVertical>
          {/*  공지사항 */}
          <TopNotice></TopNotice>
          {/* 차트영역 */}
          <GraphChart></GraphChart>
          <ContainerHorizontal>
            {/* 호가정보 영역 */}
            <CoinQuoteList></CoinQuoteList>
            <ContainerVertical>
              {/* 매수/매도 영역 */}
              <CoinOrder></CoinOrder>
              {/* 미니차트 영역 */}
              <GraphMiniChart></GraphMiniChart>
            </ContainerVertical>
          </ContainerHorizontal>
          <ContainerHorizontal>
            {/* 체결내역 영역 */}
            <Conclude></Conclude>
          </ContainerHorizontal>
        </ContainerVertical>

        {/* 코인시세 우측 영역 */}
        <CoinQuoteRight></CoinQuoteRight>
      </ContainerHorizontal>
    </Container>
  );
};

export default TradePresenter;
