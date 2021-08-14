import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

const Item = styled.div`
  font-size: 15px;
  padding: 10px 0;
  text-align: center;
  list-style: none;
  color: ${(props) => (props.current ? "inherit" : "#2b2b2b")};
  transition: border-bottom 0.2s ease-in-out;
  cursor: pointer;
  width: 50px;
`;

const Slink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  ${(props) =>
    props.isSub &&
    props.isHover &&
    css`
      .icon-grid {
        background-image: url("/assets/img/navigation/img-menu-borabit-white-on.svg");
      }
    `};
  ${(props) =>
    !props.isSub &&
    props.isHover &&
    css`
      .icon-grid {
        background-image: url("/assets/img/navigation/img-menu-borabit-black.svg");
      }
    `};
`;

const MenuContainer = styled.div`
  position: relative;
`;

// eslint-disable-next-line
const Menu = styled.div`
  width: 30px;
  height: 16px;

  ${(props) =>
    props.imgPath &&
    css`
      background: url(${props.imgPath}) no-repeat;
    `}
  background-size: contain;
`;

const MenuDropdown = styled.div`
  position: absolute;
  width: 290px;
  right: -60px;
  line-height: 30px;
  background: #fff;
  font-size: 12px;
  color: #999;
  border: 1px solid #d5d6dc;
  display: ${(props) => (props.hover ? "block" : "none")};

  ${(props) =>
    props.current !== "/" &&
    css`
      top: 38.2px;
      right: 2px;
    `}

  ${(props) =>
    props.current === "/" &&
    css`
      top: 28px;
      right: -64px;
    `}
`;

const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DownloadTitle = styled.div`
  background-color: #f4f5f8;
  padding-left: 20px;
  width: 100%;
  font-weight: 600;
`;

const ServiceTitle = styled.div`
  display: flex;
  background-color: #f4f5f8;
  padding-left: 20px;
  font-weight: 600;
  box-sizing: border-box;
  width: 100%;
`;

const MethodOfDownload = styled.div`
  display: flex;
  padding: 15px 20px;
`;

const ServiceList = styled.div`
  width: inherit;
`;

const DownloadQr = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 15px;
`;

const DownloadMobile = styled.div``;

const PlatformServiceContainer = styled.a``;

const UbciServiceContainer = styled.a``;

const PlatformServiceBackground = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 290px;
  border-bottom: 1px solid #d5d6dc;
  ${PlatformServiceContainer}:hover & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const UbciServiceBackground = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  ${UbciServiceContainer}:hover & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const AndroidContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  border: 1px solid #d5d6dc;
  margin-bottom: 5px;
  font-weight: 600;
`;

const IphoneContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  border: 1px solid #d5d6dc;
  font-weight: 600;
`;

const PlatformService = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
`;

const UbciService = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
`;

const PlatformServiceIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  margin-bottom: 5px;
`;

const UbciServiceIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  margin-bottom: 5px;
`;

const PlatformServiceName = styled.div`
  font-size: 15px;
  font-weight: 600;
  ${PlatformServiceContainer}:hover & {
    color: #666;
    font-size: 16px;
  }
`;

const AndroidBadge = styled.img`
  width: 14px;
  margin-right: 5px;
`;

const IphoneBadge = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const AndroidTitle = styled.div`
  ${AndroidContainer}:hover & {
    color: #666;
  }
`;

const IphoneTitle = styled.div`
  ${IphoneContainer}:hover & {
    color: #666;
  }
`;

const UbciServiceName = styled.div`
  font-size: 15px;
  font-weight: 600;
  ${UbciServiceContainer}:hover & {
    font-size: 16px;
    color: #666;
  }
`;

const PlatformServiceSummary = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1;
`;

const UbciServiceSummary = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1;
`;

const DownloadDropdown = ({ location: { pathname } }) => {
  const isExchange = pathname === "/trade";

  const [onHover, setHover] = useState(false);
  const setHoverAction = () => {
    setHover(!onHover);
  };

  return (
    <Item current={pathname === "/test"}>
      <Slink
        to="#"
        onMouseOver={setHoverAction}
        onMouseOut={setHoverAction}
        isSub={isExchange}
        isHover={onHover}
      >
        <MenuContainer>
          <Menu
            className="icon-grid"
            imgPath={
              isExchange === true
                ? "/assets/img/navigation/img-menu-borabit-white.svg"
                : "/assets/img/navigation/img-menu-borabit-gray.svg"
            }
            isSub={isExchange}
          ></Menu>
          <MenuDropdown current={pathname} hover={onHover}>
            <DownloadContainer>
              <DownloadTitle>업비트 앱 다운로드</DownloadTitle>
              <MethodOfDownload>
                <DownloadQr
                  src={"/assets/img/navigation/img-qrcode-borabit.png"}
                  alt="QR Code"
                ></DownloadQr>
                <DownloadMobile>
                  <AndroidContainer>
                    <AndroidBadge
                      src={
                        "/assets/img/navigation/img-androidBadge-borabit.png"
                      }
                      alt="Android"
                    ></AndroidBadge>
                    <AndroidTitle>안드로이드앱</AndroidTitle>
                  </AndroidContainer>
                  <IphoneContainer>
                    <IphoneBadge
                      src={"/assets/img/navigation/img-iphoneBadge-borabit.png"}
                      alt="Iphone"
                    ></IphoneBadge>
                    <IphoneTitle>아이폰앱</IphoneTitle>
                  </IphoneContainer>
                </DownloadMobile>
              </MethodOfDownload>
            </DownloadContainer>
            <ServiceContainer>
              <ServiceTitle>연관 서비스</ServiceTitle>
              <ServiceList>
                <PlatformServiceContainer>
                  <PlatformServiceBackground>
                    <PlatformService
                      src={
                        "/assets/img/navigation/img-luniverseLogo-borabit.png"
                      }
                      alt="Luniverse"
                    ></PlatformService>
                    <PlatformServiceIntro>
                      <PlatformServiceName>Luniverse</PlatformServiceName>
                      <PlatformServiceSummary>
                        차세대 블록체인 서비스 플랫폼
                      </PlatformServiceSummary>
                    </PlatformServiceIntro>
                  </PlatformServiceBackground>
                </PlatformServiceContainer>
                <UbciServiceContainer>
                  <UbciServiceBackground>
                    <UbciService
                      src={"/assets/img/navigation/img-ubciLogo-borabit.png"}
                      alt="UBCI"
                    ></UbciService>
                    <UbciServiceIntro>
                      <UbciServiceName>UBCI</UbciServiceName>
                      <UbciServiceSummary>
                        디지털 자산 시장의 표준 인덱스
                      </UbciServiceSummary>
                    </UbciServiceIntro>
                  </UbciServiceBackground>
                </UbciServiceContainer>
              </ServiceList>
            </ServiceContainer>
          </MenuDropdown>
        </MenuContainer>
      </Slink>
    </Item>
  );
};

export default withRouter(DownloadDropdown);
