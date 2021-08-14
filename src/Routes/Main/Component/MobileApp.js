import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileAppItems from "Routes/Main/Component/MobileApp/MobileAppItems";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  padding-top: 80px;
  height: 960px;
  color: #fff;
  background-color: #093687;
`;
const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: transparent url(${(props) => props.img}) no-repeat center 130px;
  height: 100%;
  padding: 0 80px;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;
const TitleMent = styled.span`
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  width: 100%;
  display: block;
  font-weight: 300;
  letter-spacing: 0.8px;
  line-height: 25px;
`;
const WrapperApp = styled.div`
  height: 620px;
`;
const BtnAppDownloadFrame = styled.div`
  margin-top: 26px;
`;
const BtnAppLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  width: 150px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  margin: 0 3px;
  font-weight: 400;
  background-color: #002a76;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const MobileAppContainer = () => {
  return (
    <Container>
      <Wrapper img={"assets/img/mainMobileApp/mobileApp_bg.png"}>
        <Title>빠르고 간편한 모바일 앱</Title>
        <TitleMent>
          코인 정보부터 주문까지 모바일에서도 간편하고 빠른 디지털 자산 거래소를
          만나보세요.
        </TitleMent>

        <WrapperApp>
          {/* 앱 다운로드 */}
          <BtnAppDownloadFrame>
            <BtnAppLink to="#">
              <FontAwesome icon={faGooglePlay}></FontAwesome>
              안드로이드앱
            </BtnAppLink>
            <BtnAppLink to="#">
              <FontAwesome icon={faApple}></FontAwesome>
              아이폰앱
            </BtnAppLink>
          </BtnAppDownloadFrame>

          {/* 모바일 이미지 아이템 로테이션 */}
          <MobileAppItems></MobileAppItems>
        </WrapperApp>
      </Wrapper>
    </Container>
  );
};

export default MobileAppContainer;
