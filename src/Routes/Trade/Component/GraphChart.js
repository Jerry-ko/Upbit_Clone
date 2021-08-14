import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseInterval from "Library/UseInterval";
import * as Numbers from "Library/NumberFunction";
import { data } from "./GraphChart/coinRelation.json";

// 차트 사이즈 최소/최대 지정
const minChartSize = 0;
const maxChartSize = 2;

const Container = styled.article`
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
  margin: 0 10px 0 0;
  flex: 1;
`;
const ContainerHeader = styled.div`
  display: block;
  height: 42px;
  padding: 0 14px;
  position: relative;
  border-bottom: 1px solid #d4d6dc;

  .select {
    display: inline-block;
    height: 42px;
    padding-right: 0;

    em {
      float: left;
      line-height: 39px;
      padding-right: 10px;
    }
    img {
      vertical-align: middle;
      max-width: 26px;
      max-height: 26px;
    }
    strong {
      float: left;
      color: #2b2b2b;
      font-weight: 700;
      margin-top: 12px;
      font-size: 20px;
      font-family: Noto Sans KR, sans-serif;
    }
    p {
      color: #666;
      float: left;
      margin: 18px 4px 0;
      font-size: 12px;
      letter-spacing: 0.05em;
    }
  }
  .arrow {
    display: inline-block;
    height: 42px;
    width: 13px;
    padding: 0 8px;
    background: url("/assets/img/subGraphChart/icon-arrow.png") center 18px
      no-repeat;
    overflow: hidden;
    text-indent: -999em;
    vertical-align: top;
  }
  .setting {
    float: right;
    width: 44px;
    height: 42px;
    border-left: 1px solid #e3e5ec;

    a {
      display: block;
      height: 100%;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      color: #84868d;
      line-height: 42px;
      text-align: center;
    }
  }
`;
const ExchangeList = styled.div`
  display: ${(props) => (props.isView ? "block" : "none")};

  ul {
    position: absolute;
    top: 41px;
    left: 14px;
    width: 220px;
    height: 156px;
    padding: 6px 0;
    background-color: #fff;
    border: 1px solid #a9acb7;
    overflow: hidden;
    z-index: 10;
  }
  li {
    width: 100%;
    height: 26px;
    overflow: hidden;
  }
  a {
    font-weight: 600;
    font-size: 12px;
    display: block;
    height: 26px;
    padding-left: 14px;
    line-height: 26px;
    color: #2b2b2b;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const SettingList = styled.div`
  position: absolute;
  right: 0;
  top: 41px;
  z-index: 10;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 270px;
  background: #fff;
  border: 1px solid #d5d6dc;
  display: ${(props) => (props.isView ? "block" : "none")};

  h6 {
    padding: 8px 14px;
    background: #f9fafc;
    color: #999;
    font-size: 12px;
    font-weight: 400;
  }
  ul {
    width: auto;
    padding: 0;
    border: 0;
    position: relative;
    background-color: #fff;
    z-index: 10;

    li {
      margin: 0 14px;
      padding: 16px 0;
      border-top: 1px solid #f1f1f4;
      width: auto;
      height: auto;
      overflow: unset;
      position: relative;
      color: #999;
      display: flex;
    }
    label {
      line-height: 1;
      color: #666;
      font-size: 13px;

      em {
        display: block;
        width: 100%;
        padding-top: 4px;
        color: #999;
        font-size: 12px;
        padding-right: 0;
        line-height: normal;
      }
    }
  }
  p {
    line-height: 17px;
    padding: 0;
    margin: 0;
    letter-spacing: 0;
    color: #999;
    font-size: 12px;
  }
`;
const ContainerTab = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  .header-tabs {
    width: 280px;
    float: left;
  }
`;
const ButtonGroup = styled.div`
  line-height: normal;
  margin: 0;
  position: absolute;
  top: 16px;
  left: 1px;
  z-index: 1;

  & + label {
    padding-left: 74px;
    display: block;
    position: relative;
  }

  > button {
    display: inline-block;
    width: 32px;
    height: 30px;
    background: #f9fafc no-repeat 50%;
    border: 1px solid #dfe0e5;
    position: relative;
    margin-left: -1px;
    vertical-align: middle;
    text-indent: -9999em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
const ButtonGroupItem = styled.button`
  /* 테머버튼 */
  &.btn-set-white {
    background-image: url("/assets/img/subGraphChart/bg-icon-white-${(props) =>
      props.theme === "white" ? "on" : "off"}.png");
  }
  &.btn-set-dark {
    background-image: url("/assets/img/subGraphChart/bg-icon-dark-${(props) =>
      props.theme !== "white" ? "on" : "off"}.png");
  }

  /* 테머버튼 */
  &.btn-set-minus {
    background: url("/assets/img/subGraphChart/bg-icon-minus.png") no-repeat
      10px ${(props) => (props.disabled ? 0 : "-20px")};
  }
  &.btn-set-plus {
    background: url("/assets/img/subGraphChart/bg-icon-plus.png") no-repeat 10px
      ${(props) => (props.disabled ? 0 : "-20px")};
  }
`;
const EmSizemMent = styled.em`
  ${(props) =>
    (props.setSize === minChartSize || props.setSize === maxChartSize) &&
    css`
      color: #d82035 !important;
    `}
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

const ContainerBody = styled.div``;
const ContainerPanel = styled.div`
  display: ${(props) => (props.isView ? "block" : "none")};
  position: relative;

  &:last-child {
    width: 100%;
    height: 572px;
    padding: 20px 350px 30px 20px;
    overflow-y: scroll;
  }

  .title {
    margin-top: 40px;
    line-height: 26px;
    font-size: 16px;
    font-weight: 500;
  }
  > div:first-child > .title {
    margin-top: 0;
  }

  .desc {
    margin-top: 13px;

    p {
      line-height: 20px;
      font-size: 12px;
      font-family: 돋움, Dotum, Noto Sans KR, sans-serif, Arial, Helvetica;
      color: #666;
    }
  }

  .tableLayout {
    margin-top: 13px;
    border-top: 2px solid #f1f1f4;
    border-bottom: 1px solid #f1f1f4;

    table {
      width: 100%;

      th,
      td {
        line-height: 18px;
        padding: 8px 15px;
        border-bottom: 1px solid #f1f1f4;
        text-align: left;
        height: auto;
        word-break: break-all;
      }
      th {
        background: #f9fafc;
        font-size: 12px;
        color: #666;
      }
      td {
        border-top: none;
        font-size: 12px;
        font-family: 돋움, Dotum, Noto Sans KR, sans-serif, Arial, Helvetica;
        color: #2b2b2b;
      }
    }
  }
`;

// 시세 탭
const MarketPrice = styled.div`
  position: relative;
  display: flex;
  padding: 18px 20px 14px;
  overflow: hidden;
`;
const MarketGraph = styled.div`
  border: 1px solid #d4d6dc;
`;

const MarketInfo = styled.div`
  ${(props) =>
    props.isType === 1 &&
    css`
      width: 320px;

      div strong {
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        color: ${(props) =>
          props.status === "up" ? "#d60000" : "#0051c7"} !important;
      }
      .price-info {
        margin: -6px 0 6px;
        letter-spacing: 1px;
        color: ${(props) =>
          props.status === "up" ? "#d60000" : "#0051c7"} !important;

        strong {
          font-size: 32px;
          font-weight: 700;
        }
      }
      .price-previous {
        letter-spacing: 1px;
      }
      .title {
        display: inline-block;
        margin-right: 4px;
        line-height: 19px;
        color: #666;
        font-size: 11px;
        font-family: Dotum, Noto Sans KR, sans-serif;
        letter-spacing: 0;
        vertical-align: top;
      }
      .upDown {
        margin-left: 8px;
        padding-left: 14px;
        background: url("/assets/img/subGraphChart/bg-icon-trade-${props.status}.png")
          0 4px no-repeat;
      }
    `}

  ${(props) =>
    props.isType === 2 &&
    css`
      width: 140px;
      height: 50px;
      margin-top: 2px;
      background-color: #f9fafb;
      overflow: hidden;
    `}

    ${(props) =>
    props.isType === 3 &&
    css`
      display: flex;
      justify-content: flex-end;
      flex: 1 1 auto;

      dl {
        width: 48%;
        font-size: 13px;
        margin-left: 2%;
      }
      dt {
        float: left;
        height: 24px;
        line-height: 18px;
        color: #2b2b2b;
        font-family: Dotum, Noto Sans KR, sans-serif;
        width: 35%;

        &:first-child {
          margin-bottom: 9px;
          padding-bottom: 9px;
          border-bottom: 1px solid #e3e5ec;
        }
      }
      dd {
        float: left;
        height: 24px;
        line-height: 18px;
        letter-spacing: 1px;
        text-align: right;
        word-break: break-all;
        width: 65%;

        &:nth-child(2) {
          margin-bottom: 9px;
          padding-bottom: 9px;
          border-bottom: 1px solid #e3e5ec;
        }
        i {
          display: inline-block;
          color: #999;
          font-size: 11px;
          letter-spacing: 0.05em;
        }
        .up {
          color: #d60000;
          font-weight: 700;
        }
        .down {
          color: #0062df;
          font-weight: 700;
        }
      }
    `}
`;

const Slink = styled(Link)``;

// 정보 탭
const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: inline-block;
    width: 76px;
    height: 26px;
    line-height: 24px;
    margin: 0 0 0 4px;
    border: 1px solid #d2d3d7;
    border-radius: 2px;
    color: #2b2b2b;
    font-size: 12px;
    font-family: 돋움, Dotum, Noto Sans KR, sans-serif;
    font-weight: 400;
    text-align: center;
    vertical-align: top;
  }
`;

const ProfileMain = styled.div``;

const RelationIndex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    all: unset;
    width: 23px;
    height: 20px;
    border: 0;

    &.pre {
      background: url(/assets/img/subGraphChart/arrow_left.png) no-repeat 0 0;
    }
    &.next {
      margin-left: -1px;
      background: url(/assets/img/subGraphChart/arrow_right.png) no-repeat 0 0;
    }
  }
`;

const RelationIndexMain = styled.div`
  margin-top: 13px;

  ul {
    display: flex;
  }
`;

const RelationIndexItem = styled.li`
  width: calc(33.33% - 6.7px);
  height: 66px;
  margin-left: 10px;
  background: #f4f5f8;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :first-child {
    margin-left: 0;
  }

  > .rate {
    margin-top: 5px;
    font-weight: 500;
    color: ${(props) => (props.rate > 0 ? "#d60000" : "#0051c7")};
  }
`;

const Introduction = styled.div``;
const IntroductionMain = styled.div``;
const Feature = styled.div``;
const FeatureMain = styled.div``;
const CoreValue = styled.div``;
const CoreValueMain = styled.div``;
const DeveloperInfo = styled.div``;
const DeveloperInfoMain = styled.div``;

const EtcNotice = styled.div`
  margin-top: 40px;
  line-height: 18px;
  padding: 12px 15px;
  background: #f9fafc;
  font-size: 11px;
  font-family: 돋움, Dotum, Noto Sans KR, sans-serif, Arial, Helvetica;
  color: #666;
`;

const TwitterApi = styled.div`
  width: 302px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const GraphChartContainer = () => {
  /*
   * 시세 탭
   */

  // 코인 선택 툴팁
  const [isToggleSelectCoin, setIsToggleCoin] = useState(false);
  const handleClickToggleSelectCoin = () => {
    setIsToggleCoin(!isToggleSelectCoin);
  };

  // 설정 화면 툴팁
  const [isToggleSetting, setIsToggleSetting] = useState(false);
  const handleClickToogleSetting = () => {
    setIsToggleSetting(!isToggleSetting);
  };

  // 차트 사이즈 조절
  const [settingSize, setSizeSetting] = useState(0);
  const handleClickSizeUp = (num) => {
    let size = settingSize + num;
    if (minChartSize > size || maxChartSize < size) {
      return;
    }
    setSizeSetting(size);
  };

  // 탭 전환
  const [tabActive, setTabActive] = useState(1);
  const handleClickTabActive = (tab) => {
    setTabActive(tab);
  };

  // 코인 정보 동적 처리
  const [coinNumber, setCoinNumber] = useState(64549000);
  const [coinUpDown, setCoinUpDown] = useState("down");
  UseInterval(() => {
    if (0 < Math.floor(Math.random() * 2)) {
      setCoinUpDown("up");
      setCoinNumber(coinNumber + Math.random() * 100);
    } else {
      setCoinUpDown("down");
      setCoinNumber(coinNumber - Math.random() * 100);
    }
  }, 800);

  /*
   * 정보 탭
   */
  const {
    profile,
    relation_index,
    relation_index: { relations },
    introduction,
    feature,
    core_value,
    developer_info: { poster_boy },
  } = data;

  const per = relation_index.limit;
  const paginator = (arr, start) => {
    return arr.slice(start * per, (start + 1) * per);
  };

  const [page, setPage] = useState(0);
  const clickNextBtn = () => {
    if (page + 1 < relations.length / per) {
      setPage(page + 1);
    }
  };
  const clickPreBtn = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <Container>
      <ContainerHeader>
        <Slink
          to={"#"}
          className="select"
          onClick={handleClickToggleSelectCoin}
        >
          <em>
            <img src={"/assets/img/subGraphChart/BTC.png"} alt="BTC" />
          </em>
          <strong>비트코인</strong>
          <p>BTC/KRW</p>
        </Slink>
        <Slink to="#" className="arrow" onClick={handleClickToggleSelectCoin}>
          Arrow
        </Slink>
        <ExchangeList isView={isToggleSelectCoin}>
          <ul>
            <li>
              <Slink to="#">
                비트코인 <i>(BTC/KRW)</i>
              </Slink>
            </li>
            <li>
              <Slink to="#">
                비트코인 <i>(BTC/USDT)</i>
              </Slink>
            </li>
          </ul>
        </ExchangeList>
        <ContainerTab>
          <div className="header-tabs">
            <Tabs countTabs={2}>
              <TabItem
                current={tabActive === 1}
                onClick={() => handleClickTabActive(1)}
              >
                <Slink to="#" title="시세">
                  시세
                </Slink>
              </TabItem>
              <TabItem
                current={tabActive === 2}
                onClick={() => handleClickTabActive(2)}
              >
                <Slink to="#" title="정보">
                  정보
                </Slink>
              </TabItem>
            </Tabs>
          </div>
          <div className="setting">
            <Slink to="#" title="화면 설정" onClick={handleClickToogleSetting}>
              <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
            </Slink>
            <SettingList isView={isToggleSetting}>
              <h6>화면 설정</h6>
              <ul>
                <li>
                  <ButtonGroup>
                    <ButtonGroupItem
                      type="button"
                      className="btn-set-white"
                      theme={"white"}
                    >
                      White
                    </ButtonGroupItem>
                    <ButtonGroupItem
                      type="button"
                      className="btn-set-dark"
                      theme={"white"}
                    >
                      Dark
                    </ButtonGroupItem>
                  </ButtonGroup>
                  <label>
                    화면 테마 설정<em>데이(일반) 모드</em>
                  </label>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="bunchsetting_ch03"
                      defaultChecked
                    />
                    <label htmlFor="bunchsetting_ch03">
                      일반 호가에 평균가/누적량/누적액 노출
                    </label>
                  </span>
                </li>
              </ul>
              <h6>차트 설정</h6>
              <ul>
                <li>
                  <ButtonGroup>
                    <ButtonGroupItem
                      type="button"
                      className="btn-set-minus"
                      disabled={minChartSize === settingSize}
                      onClick={() => handleClickSizeUp(-1)}
                    >
                      Minus
                    </ButtonGroupItem>
                    <ButtonGroupItem
                      type="button"
                      className="btn-set-plus"
                      disabled={maxChartSize === settingSize}
                      onClick={() => handleClickSizeUp(1)}
                    >
                      Plus
                    </ButtonGroupItem>
                  </ButtonGroup>
                  <label>
                    차트 높이 설정
                    <EmSizemMent setSize={settingSize}>
                      {settingSize === minChartSize &&
                        "가장 작은 높이의 차트입니다."}
                      {settingSize > minChartSize &&
                        settingSize < maxChartSize &&
                        "차트 높이를 설정할 수 있습니다."}
                      {settingSize === maxChartSize &&
                        "가장 큰 높이의 차트입니다."}
                    </EmSizemMent>
                  </label>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="ch02" defaultChecked />
                    <label htmlFor="ch02">차트에 매수평균가 기준선 노출</label>
                  </span>
                </li>
                <li>
                  <p>
                    차트설정 옵션은 회원님의 투자 편의를 제공하는 것으로,
                    업비트는 제공된 정보에 의한 투자 결과에 대해 책임을 지지
                    않습니다.
                  </p>
                </li>
              </ul>
            </SettingList>
          </div>
        </ContainerTab>
      </ContainerHeader>

      <ContainerBody>
        {/* 시세 탭 */}
        <ContainerPanel isView={tabActive === 1}>
          <MarketPrice>
            <MarketInfo status={coinUpDown} isType={1}>
              <div className="price-info">
                <strong>{Numbers.format(coinNumber)}</strong>
                <em>KRW</em>
              </div>
              <div className="price-previous">
                <p className="title">전일대비</p>
                <strong>{Numbers.format(-2.53, 2)}%</strong>
                <strong className="upDown">{Numbers.format(-1471000)}</strong>
              </div>
            </MarketInfo>
            <MarketInfo isType={2}>
              <Slink to="#">
                <div data-highcharts-chart="0">
                  <div id="highcharts-myxxp5y-0" dir="ltr">
                    <img src="/assets/sample/coinChnageGraph.svg" alt="" />
                  </div>
                </div>
              </Slink>
            </MarketInfo>
            <MarketInfo isType={3}>
              <dl>
                <dt>고가</dt>
                <dd>
                  <strong className="up">{Numbers.format(66301000)}</strong>
                </dd>
                <dt>저가</dt>
                <dd>
                  <strong className="down">{Numbers.format(64320000)}</strong>
                </dd>
              </dl>
              <dl>
                <dt>거래량(24H)</dt>
                <dd>
                  <strong>{Numbers.format(11155.581, 3)}</strong>&nbsp;
                  <i>BTC</i>
                </dd>
                <dt>거래대금(24H)</dt>
                <dd>
                  <strong>{Numbers.format(722961458016)}</strong>&nbsp;
                  <i>KRW</i>
                </dd>
              </dl>
            </MarketInfo>
          </MarketPrice>
          <MarketGraph>
            <img src="/assets/sample/img-trade-graph.png" alt="" />
          </MarketGraph>
        </ContainerPanel>

        {/* 정보 탭 */}
        <ContainerPanel isView={tabActive === 2}>
          <Profile>
            <div className="title">Bitcoin</div>
            <div>
              <a href="https://bitcoin.org/" target="_blank" rel="noreferrer">
                웹사이트
              </a>
              <a
                href="https://bitcoin.org/bitcoin.pdf"
                target="_blank"
                rel="noreferrer"
              >
                백서
              </a>
              <a href="https://btc.com/" target="_blank" rel="noreferrer">
                블록조회
              </a>
            </div>
          </Profile>

          <ProfileMain className="tableLayout">
            <table>
              <colgroup>
                <col width="100px" />
                <col width="34%" />
                <col width="100px" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <th>최초발행</th>
                  <td>{profile.first_publication}</td>
                  <th>시가총액</th>
                  <td>{profile.market_capitalization}</td>
                </tr>
                <tr>
                  <th>블록 생성주기</th>
                  <td>{profile.block_cycle}</td>
                  <th>총 발행한도</th>
                  <td>{profile.total_limit}</td>
                </tr>
                <tr>
                  <th>합의 프로토콜</th>
                  <td>{profile.agreement_protocol}</td>
                </tr>
              </tbody>
            </table>
          </ProfileMain>

          <RelationIndex>
            <div className="title">연관인덱스</div>
            <div>
              <button className="pre" onClick={clickPreBtn}></button>
              <button className="next" onClick={clickNextBtn}></button>
            </div>
          </RelationIndex>
          <RelationIndexMain page={page}>
            <div>
              <ul>
                {paginator(relations, page).map((relation, index) => (
                  <RelationIndexItem key={index} rate={relation.rate}>
                    <div className="name">{relation.name}</div>
                    <div className="rate">
                      {relation.rate > 0 && "+"}
                      {relation.rate}%
                    </div>
                  </RelationIndexItem>
                ))}
              </ul>
            </div>
          </RelationIndexMain>

          <Introduction className="title">코인 소개</Introduction>
          <IntroductionMain className="desc">
            <p dangerouslySetInnerHTML={{ __html: introduction }}></p>
          </IntroductionMain>

          <Feature className="title">코인 특징</Feature>
          <FeatureMain className="desc">
            <p dangerouslySetInnerHTML={{ __html: feature }}></p>
          </FeatureMain>

          <CoreValue className="title">핵심 가치</CoreValue>
          <CoreValueMain className="desc">
            <p dangerouslySetInnerHTML={{ __html: core_value }}></p>
          </CoreValueMain>

          <DeveloperInfo className="title">개발자 정보</DeveloperInfo>
          <DeveloperInfoMain className="tableLayout">
            <table>
              <colgroup>
                <col width="100px" />
                <col width="*" />
                <col width="100px" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <th>대표인물</th>
                  <td>{poster_boy}</td>
                </tr>
              </tbody>
            </table>
          </DeveloperInfoMain>

          <EtcNotice>
            위 정보는 코인에 대한 이해를 돕기 위해서 제공하는 것으로, 투자
            권유를 목적으로 하지 않습니다.
            <br />
            제공되는 정보는 오류 또는 지연이 발생할 수 있으며, 두나무는 제공된
            정보에 의한 투자결과에 대해 법적인 책임을 지지 않습니다.
            <br />
          </EtcNotice>

          <TwitterApi>
            <div>
              {/* <iframe
                id="twitter-widget-5"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
                className="twitter-timeline twitter-timeline-rendered"
                data-widget-id="profile:bitcoin"
                title="트위터 타임라인"
              ></iframe> */}
              <img src="/assets/sample/img-twitter-api.png" alt="" />
            </div>
          </TwitterApi>
        </ContainerPanel>
      </ContainerBody>
    </Container>
  );
};

export default GraphChartContainer;
