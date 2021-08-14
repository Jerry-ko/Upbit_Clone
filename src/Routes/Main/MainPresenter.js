import React from "react";
import styled from "styled-components";

// Components Embeded
import VisualGlobal from "Routes/Main/Component/VisualGlobal";
import CoinQuote from "Routes/Main/Component/CoinQuote";
import MobileApp from "Routes/Main/Component/MobileApp";
import Security from "Routes/Main/Component/Security";
import Certification from "Routes/Main/Component/Certification";
import Customer from "Routes/Main/Component/Customer";

const Container = styled.div`
  margin: 0;
  text-align: center;
`;

const PressPresenter = () => {
  return (
    <Container>
      {/* 메인비주얼 영역 */}
      <VisualGlobal></VisualGlobal>
      {/* 코인시세 영역 */}
      <CoinQuote></CoinQuote>
      {/* 모바일앱 영역 */}
      <MobileApp></MobileApp>
      {/* 보안시스템 안내 영역 */}
      <Security></Security>
      {/* 인증획득 영역 */}
      <Certification></Certification>
      {/* 고객센터 영역 */}
      <Customer></Customer>
    </Container>
  );
};

export default PressPresenter;
