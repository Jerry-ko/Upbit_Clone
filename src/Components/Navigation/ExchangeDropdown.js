import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`;

const ExchangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 16px;
  position: relative;
  margin-left: 25px;

  ${(props) =>
    props.current !== "/" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.current === "/" &&
    css`
      display: block;
      bottom: 2px;
      right: 10px;
    `}
`;

const KoreaFlag = styled.img`
  width: 30px;
  border: 1px solid #d7d8dd;
  position: absolute;
  color: #d5d6dc;
  margin-right: 30px;
`;

const ExchangeArrow = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
  right: -11px;
  color: #666;
`;

const ExchangeByCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 28px;
  right: -10px;
  width: 200px;
  line-height: 30px;
  border: 1px solid #d5d6dc;
  display: ${(props) => (props.hover ? "block" : "none")};
`;

// eslint-disable-next-line
const ExchangeTitle = styled.div`
  font-size: 11px;
  padding: 2px 12px;
  color: #999;
  font-weight: 600;
  border-bottom: 1px solid #f1f1f4;
`;

const ExchangeByCountry = styled.div`
  list-style: none;
  padding: 0;
  width: 200px;
`;

const KoreaExchange = styled.a``;

const SingaporeExchange = styled.a``;

const IndonesiaExchange = styled.a``;

const ThailandExchange = styled.a``;

const KoreaBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #f1f1f4;

  ${KoreaExchange}:hover & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SingaporeBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #f1f1f4;

  ${SingaporeExchange}:hover & {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${SingaporeExchange}:active & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IndonesiaBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #f1f1f4;

  ${IndonesiaExchange}:hover & {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${IndonesiaExchange}:active & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ThailandBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #f1f1f4;

  ${ThailandExchange}:hover & {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${ThailandExchange}:active & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SingaporeFlag = styled.img`
  width: 30px;
  border: 1px solid #d7d8dd;
  position: absolute;
`;

const IndonesiaFlag = styled.img`
  width: 30px;
  border: 1px solid #d7d8dd;
  position: absolute;
`;

const ThailandFlag = styled.img`
  width: 30px;
  border: 1px solid #d7d8dd;
  position: absolute;
`;

const CountryName = styled.div`
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  color: #999;
  margin-left: 50px;
  ${KoreaExchange}:hover & {
    color: #666;
    font-size: 15px;
  }

  ${SingaporeExchange}:hover & {
    color: #666;
    font-size: 15px;
  }
  ${IndonesiaExchange}:hover & {
    color: #666;
    font-size: 15px;
  }
  ${ThailandExchange}:hover & {
    color: #666;
    font-size: 15px;
  }
`;

const ExchangeDropdown = ({ location: { pathname } }) => {
  const [onHover, setHover] = useState(false);
  const setHoverAction = () => {
    setHover(!onHover);
  };

  return (
    <Item current={pathname === "/test"}>
      <Slink to="#" onMouseOver={setHoverAction} onMouseOut={setHoverAction}>
        <ExchangeContainer current={pathname}>
          <KoreaFlag
            src={"/assets/img/navigation/img-flagOfKorea-borabit.png"}
            alt="Korea, South"
          />
          <ExchangeArrow>
            <i className="fas fa-caret-down fa-xs"></i>
          </ExchangeArrow>
          <ExchangeByCountryContainer hover={onHover}>
            <ExchangeTitle>거래소를 선택해주세요</ExchangeTitle>
            <ExchangeByCountry>
              <KoreaExchange>
                <KoreaBackground>
                  <KoreaFlag
                    src={"/assets/img/navigation/img-flagOfKorea-borabit.png"}
                    alt="Korea, South"
                  />
                  <CountryName>Korea, South</CountryName>
                </KoreaBackground>
              </KoreaExchange>
              <SingaporeExchange>
                <SingaporeBackground>
                  <SingaporeFlag
                    src={
                      "/assets/img/navigation/img-flagOfSingapore.borabit.svg"
                    }
                    alt="Singapore"
                  />
                  <CountryName>Singapore</CountryName>
                </SingaporeBackground>
              </SingaporeExchange>
              <IndonesiaExchange>
                <IndonesiaBackground>
                  <IndonesiaFlag
                    src={
                      "/assets/img/navigation/img-flagOfIndonesia.borabit.svg"
                    }
                    alt="Indonesia"
                  />
                  <CountryName>Indonesia</CountryName>
                </IndonesiaBackground>
              </IndonesiaExchange>
              <ThailandExchange>
                <ThailandBackground>
                  <ThailandFlag
                    src={
                      "/assets/img/navigation/img-flagOfThailand.borabit.svg"
                    }
                    alt="Thailand"
                  />
                  <CountryName>Thailand</CountryName>
                </ThailandBackground>
              </ThailandExchange>
            </ExchangeByCountry>
          </ExchangeByCountryContainer>
        </ExchangeContainer>
      </Slink>
    </Item>
  );
};

export default withRouter(ExchangeDropdown);
