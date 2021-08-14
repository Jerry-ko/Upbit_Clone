import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as Numbers from "Library/NumberFunction";
import Slider, { SliderTooltip } from "rc-slider";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";

const { Handle } = Slider;
const textInputDefault = "직접입력";

const OrderMenu = styled.div`
  display: flex;
  top: 0px;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px 0 0;
  background: #f9fafc;
  border-bottom: 1px solid #d4d6dc;
  z-index: 10;

  .checkBox {
    display: flex;
    line-height: 30px;
    width: 127px;

    .check {
      margin: 0 0 0 10px;
    }
  }
`;

const OrderContainer = styled.div`
  display: ${(props) => (props.isview ? "none" : "block")};
  font-size: 12px;
`;

const OrderButton = styled.div`
  display: flex;
  width: 360px;
  height: 28px;
  padding: 0 0 0 7px;
  margin: 0 0 0 7px;
  border-left: 1px solid #9999;

  & button:last-child {
    color: ${(props) =>
      props.isview === textInputDefault ? "#2b2b2b" : "#1660cc"};
    border-color: ${(props) =>
      props.isview === textInputDefault ? "#95959e" : "#1660cc"};
  }
`;
const OrderPercentButton = styled.button`
  outline: none;
  width: 60px;
  height: 28px;
  margin: 0 0 0 3px;
  background-color: #f9fafc;
  border: 1px solid #95959e;
  padding: 0;
  cursor: pointer;
  font-size: 12px;

  ${(props) =>
    props.percentorder &&
    css`
      border-color: #1660cc;
      color: #1660cc;
      font-weight: 700;
    `}
  &:hover {
    text-decoration: underline;
  }
`;

const SliderPanel = styled.div`
  display: ${(props) => (props.isview ? "block" : "none")};

  width: 352px;
  height: 27px;
  margin-left: 8px;
  border-left: 1px solid #9999;

  .button {
    position: static;
    outline: none;
    border: none;
    width: 282px;
    margin-right: 50px;
  }

  span {
    display: block;
    position: absolute;
    top: 10px;
    right: 8px;
    width: 50px;
    height: 26px;
    border: 0;
    background: #0062df;
    color: #fff;
    font-size: 12px;
    line-height: 28px;
  }
`;

const DataContainer = styled.div`
  height: 645px;
  border-bottom: 1px solid #f1f1f4;
  overflow-y: scroll;
  cursor: pointer;

  .down {
    font-size: 12px;

    .grabA {
      border-bottom: 1px solid #f1f1f4;
      border-right: 1px solid #f1f1f4;

      a {
        display: block;
        width: 100%;
        height: 44px;
        background: #f5f9ff;
        color: #a0a0a1;
        line-height: 44px;
        text-align: center;
      }
    }

    .bar {
      height: 44px;
      line-height: 44px;
      color: #2b2b2b;
      text-align: right;
      position: relative;
      border-bottom: 1px solid #f1f1f4;
      padding: 0;

      p {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        color: #2b2b2b;
        position: absolute;
        top: 8px;
        right: 6px;
      }

      div {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        background-color: rgba(0, 98, 223, 0.06);
        color: #2b2b2b;
        overflow: hidden;
        text-indent: -999em;
        vertical-align: middle;
      }
    }

    /* .price a div .ty03 {
    float: left;
    width: 60%;
    line-height: 36px;
    text-align: right;
    padding: 0 8px 0 0;
    background-color: rgba(0,98,223,.03);
  }

  table a div .ty02 {
    float: left;
    width: 40%;
    line-height: 36px;
    text-align: right;
  } */

    .price {
      padding: 0 8px 0 0;
      background-color: rgba(0, 98, 223, 0.06);

      .ty03 {
        float: left;
        width: 60%;
        line-height: 36px;
        text-align: right;
        strong {
          display: block;
          font-weight: 700;
          color: #0051c7;
        }
      }

      .ty02 {
        float: left;
        width: 40%;
        line-height: 36px;
        text-align: right;
        color: #0051c7;
      }
    }

    &:hover {
      td.bar div {
        background-color: rgba(0, 98, 223, 0.1) !important;
      }
      td.price {
        background-color: rgba(0, 98, 223, 0.1) !important;
      }
    }

    .inner01 {
      vertical-align: bottom;
      .mostL {
        float: left;
        height: auto;
        width: 79px;
        line-height: 1.8em;
        font-size: 11px;
        font-family: Dotum, Noto Sans KR, sans-serif;
        letter-spacing: 0;
        margin: 0 10px;
        padding: 10px 0;

        dt {
          text-align: left;
          color: #84868c;
        }

        dd {
          text-align: right;
          color: #2b2b2b;
          font-size: 11px;
        }

        .up {
          color: #d60000;
        }
        .down {
          color: #0051c7;
        }

        img {
          color: #999;
          font-size: 10px;
          letter-spacing: 0.05em;
          margin: 0 5px;
        }

        em {
          display: block;
          color: #5c5c5c;
          font-size: 11px;
        }
      }
    }

    .grabB {
      height: 44px;
      line-height: 44px;
      color: #2b2b2b;
      background: #fff5f8;
      color: #a0a0a1;
      border-left: 1px solid #f1f1f4;
      border-bottom: 1px solid #f1f1f4;
    }
  }

  .up {
    font-size: 12px;
    .grabA {
      a {
        display: block;
        width: 100%;
        height: 44px;
        background: #f5f9ff;
        color: #a0a0a1;
        line-height: 44px;
        text-align: center;
        border-top: 1px solid #f1f1f4;
        border-right: 1px solid #f1f1f4;
        border-bottom: 1px solid #f1f1f4;
      }
    }

    .inner02 {
      width: 162px;
      padding: 0;
      vertical-align: top;

      .overflow {
        height: 419px;
        overflow: hidden;
      }

      .mostL {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40px;

        & dt {
          width: 79px;
          height: 19px;
          color: #84868c;
          text-align: left;
          line-height: 19px;
        }

        & dd {
          width: 79px;
          height: 19px;
          font-size: 11px;
          letter-spacing: 1px;
          text-align: right;
          line-height: 19px;
        }
      }

      table td {
        height: 20px;
      }

      .mostT {
        thead {
          border-bottom: 1px solid #f1f1f4;
        }

        thead th {
          width: 50px;
          height: 30px;
          background-color: #f9fafc;
          line-height: 31px;
          font-size: 11px;
          text-align: center;
          border-top: 1px solid #f1f1f4;
          color: #666;
          font-size: 11px;
        }

        tbody td.num {
          padding-left: 10px;
          text-align: left;
          color: #595959;
        }

        tbody td.down {
          padding-right: 10px;
          text-align: right;
          color: #0051c7;
        }
      }
    }

    .price {
      padding: 0 8px 0 0;
      background-color: rgba(216, 14, 53, 0.06);

      .ty03 {
        float: left;
        width: 60%;
        line-height: 36px;
        text-align: right;

        strong {
          display: block;
          font-weight: 700;
          color: #0051c7;
        }
      }

      .ty02 {
        float: left;
        width: 40%;
        line-height: 36px;
        text-align: right;
        color: #0051c7;
      }
    }

    .bar {
      padding-right: 8px;
      text-align: left;
      position: relative;

      & p {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        color: #2b2b2b;
        position: absolute;
        left: 6px;
      }

      & div {
        display: inline-block;
        height: 26px;
        line-height: 26px;
        background-color: rgba(216, 14, 53, 0.06);
        color: #2b2b2b;
        vertical-align: middle;
        overflow: hidden;
        text-indent: -999em;
      }
    }

    &:hover {
      td.bar div {
        background-color: rgba(216, 14, 53, 0.09) !important;
      }
      td.price {
        background-color: rgba(216, 14, 53, 0.09) !important;
      }
    }

    .grabB {
      display: block;
      width: 100%;
      height: 44px;
      background: #fff5f8;
      color: #a0a0a1;
      line-height: 44px;
      text-align: center;
    }
  }
`;

const TotalContainer = styled.div`
  line-height: 49px;
  background-color: #f9fafc;
  color: #2b2b2b;
  font-size: 12px;

  & td:first-child {
    height: 44px;
    line-height: 44px;

    border-right: 1px solid #f1f1f4;
  }

  & td.rAlign {
    position: relative;
    height: 44px;
    line-height: 44px;

    padding: 0 5px 0 0;
    text-align: right;
    border-right: 1px solid #f1f1f4;
  }

  & td.amountToggle {
    height: 44px;
    line-height: 44px;

    text-align: center;
    font-weight: 700;
    font-size: 13px;
    position: relative;

    & > span {
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 1px;
    }

    & > img {
      position: absolute;
      top: 20px;
      right: 45px;
    }
  }

  & td.lAlign {
    height: 44px;
    line-height: 44px;
    width: 100px;
    border-left: 1px solid #f1f1f4;
    padding: 0 0 0 5px;
    text-align: left;
  }

  & td:last-child {
    height: 44px;
    line-height: 44px;
    border-left: 1px solid #f1f1f4;
  }
`;

const Modal = styled.div`
  display: ${(props) => (props.isview ? "block" : "none")};
  .upbitDim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
    z-index: 15050;
  }

  .popupInfoLogin {
    width: 410px;
    margin-left: -205px;
    position: fixed;
    z-index: 15050;
    width: 410px;
    height: 228px;
    padding: 38px 40px 40px;
    background: #fff;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -195px;
  }

  article {
    display: block;
    text-align: left;

    strong {
      color: #2b2b2b;
      font-size: 19px;
      font-weight: 700;
    }

    p {
      margin: 15px 0 0;
      color: #666;
      font-size: 16px;
      line-height: 23px;
    }

    span {
      display: block;
      width: 100%;
      padding: 27px 0 0;
      text-align: right;
      overflow: hidden;

      a {
        display: inline-block;
        width: 92px;
        height: 42px;
        background: #0062df;
        color: #f0f0f0;
        font-size: 15px;
        font-weight: 500;
        text-align: center;
        vertical-align: top;
        line-height: 40px;

        &:hover {
          text-decoration: none;
        }
      }

      .bgNoneBlue {
        margin-right: 6px;
        background-color: #fff;
        border: 1px solid #0062df;
        color: #0062df;
      }
    }
  }
`;

const Slink = styled(Link)`
  color: #a0a0a1;
  &:hover {
    text-decoration: underline;
  }
`;

const OrderQuoteContainer = () => {
  //툴팁용
  const [isOrder, setIsOrder] = useState(false);
  const handleClickOrder = () => {
    setIsOrder(!isOrder);
  };

  //슬라이더 확인버튼 클릭시
  const [orderNumber, setOrderNumber] = useState(1);
  const [confirmButtonText, setConfirmButtonText] = useState(textInputDefault);
  const handleClickConfirm = () => {
    setConfirmButtonText(orderNumber + "%");
    handleClickOrder();
  };

  //퍼센트용
  const [orderPercent, setOrderPercent] = useState(0);
  const handleClickPercent = (number) => {
    setOrderPercent(number);
    setConfirmButtonText(textInputDefault);
  };

  const handleChangeConfirm = (value) => {
    setOrderNumber(value);
    setOrderPercent(value);
  };

  //매도, 매수 클릭시
  const [orderState, setOrderState] = useState(false);
  const handleClickSlink = () => {
    setOrderState(!orderState);
  };

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value} %`}
        visible={dragging}
        placement="top"
        key={index}
        min={1}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <>
      <OrderMenu>
        <div className="checkBox">
          <div className="check">
            <span className="custom-radio">
              <input
                type="radio"
                name="item-order"
                id="item_limit"
                defaultChecked
              />
              <label htmlFor="item_limit">가능</label>
            </span>
          </div>
          <div className="check">
            <span className="custom-radio">
              <input
                type="radio"
                name="item-order"
                id="item_market_price"
                disabled={true}
              />
              <label htmlFor="item_market_price">금액</label>
            </span>
          </div>
        </div>
        <OrderContainer isview={isOrder}>
          <OrderButton isview={confirmButtonText}>
            <OrderPercentButton
              className="button"
              type="button"
              onClick={() => handleClickPercent(10)}
              percentorder={
                orderPercent === 10 && confirmButtonText === textInputDefault
              }
            >
              10%
            </OrderPercentButton>
            <OrderPercentButton
              className="button"
              type="button"
              onClick={() => handleClickPercent(25)}
              percentorder={
                orderPercent === 25 && confirmButtonText === textInputDefault
              }
            >
              25%
            </OrderPercentButton>
            <OrderPercentButton
              className="button"
              type="button"
              onClick={() => handleClickPercent(50)}
              percentorder={
                orderPercent === 50 && confirmButtonText === textInputDefault
              }
            >
              50%
            </OrderPercentButton>
            <OrderPercentButton
              className="button"
              type="button"
              onClick={() => handleClickPercent(100)}
              percentorder={
                orderPercent === 100 && confirmButtonText === textInputDefault
              }
            >
              100%
            </OrderPercentButton>
            <OrderPercentButton
              className="button"
              type="button"
              onClick={handleClickOrder}
              percentorder={confirmButtonText !== textInputDefault}
            >
              {confirmButtonText}
            </OrderPercentButton>
          </OrderButton>
        </OrderContainer>

        <SliderPanel isview={isOrder}>
          <OrderPercentButton className="button" type="button">
            <Slider handle={handle} min={1} onChange={handleChangeConfirm} />
            <span onClick={handleClickConfirm}>확인</span>
          </OrderPercentButton>
        </SliderPanel>
      </OrderMenu>

      <DataContainer>
        <table className="DataContent">
          <colgroup>
            <col width="60"></col>
            <col width="100"></col>
            <col width="*"></col>
            <col width="100"></col>
            <col width="60"></col>
          </colgroup>
          <tbody>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "17.57391%" }}>-</div>
                  <p>{Numbers.format(0.007, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(77686000)}</strong>
                  </div>
                  <div className="ty02">+1.16%</div>
                </Slink>
              </td>
              <td rowSpan="13" className="inner01">
                <dl className="first mostL">
                  <dt>거래대금</dt>
                  <dd>
                    {Numbers.format(10877)}
                    <img
                      src="https://cdn.upbit.com/images/ico_million.9f2273e.png"
                      alt="백만원"
                    />
                    <em>(최근24시간)</em>
                  </dd>
                </dl>
                <dl className="mostL">
                  <dt>52주 최고</dt>
                  <dd className="up">
                    983
                    <em>(2021.04.02)</em>
                  </dd>
                  <dt>52주 최저</dt>
                  <dd className="down">
                    44.80
                    <em>(2020.11.26)</em>
                  </dd>
                </dl>
                <dl className="mostL">
                  <dt>전일종가</dt>
                  <dd>620</dd>
                  <dt>당일고가</dt>
                  <dd className="up">
                    621
                    <em className="up">+0.16%</em>
                  </dd>
                  <dt>당일저가</dt>
                  <dd className="down">
                    260
                    <em className="down">-9.68%</em>
                  </dd>
                </dl>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>

            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "16.12596%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "16.12596%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "16.12596%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "16.12596%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "32.9755%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "7.57391%" }}>-</div>
                  <p>{Numbers.format(0.035, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(77564000)}</strong>
                  </div>
                  <div className="ty02">+0.79%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>

            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "5.19976%" }}>-</div>
                  <p>{Numbers.format(0.026, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>

            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "28.552%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "7.57391%" }}>-</div>
                  <p>{Numbers.format(0.035, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(77564000)}</strong>
                  </div>
                  <div className="ty02">+0.79%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "28.552%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "7.57391%" }}>-</div>
                  <p>{Numbers.format(0.035, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(77564000)}</strong>
                  </div>
                  <div className="ty02">+0.79%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="down">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "28.552%" }}>-</div>
                  <p>{Numbers.format(0.024, 3)}</p>
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(74562000)}</strong>
                  </div>
                  <div className="ty02">+0.70%</div>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>

            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td rowSpan={15} className="inner02">
                <dl className="mostL">
                  <dt>체결강도</dt>
                  <dd>+64.56%</dd>
                </dl>
                <div className="overflow">
                  <table className="mostT">
                    <colgroup>
                      <col width="50%"></col>
                      <col width="*"></col>
                    </colgroup>

                    <thead>
                      <tr>
                        <th>체결가</th>
                        <th>체결량</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="2" className="num">
                          {Numbers.format(753)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="down">
                          {Numbers.format(27910)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="num">
                          {Numbers.format(753)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="down">
                          {Numbers.format(27910)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="num">
                          {Numbers.format(753)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="down">
                          {Numbers.format(27910)}
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="2" className="num">
                          {Numbers.format(753)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="down">
                          {Numbers.format(27910)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="num">
                          {Numbers.format(753)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="down">
                          {Numbers.format(27910)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="num">
                          {Numbers.format(753)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="down">
                          {Numbers.format(27910)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "36.12596%" }}>-</div>
                  <p>{Numbers.format(785462)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "36.12596%" }}>-</div>
                  <p>{Numbers.format(14588905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "27.12596%" }}>-</div>
                  <p>{Numbers.format(31003894)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
            <tr className="up">
              <td className="grabA">
                <Slink to="#" onClick={handleClickSlink}>
                  매도{" "}
                </Slink>
              </td>
              <td className="price">
                <Slink to="#">
                  <div className="ty03">
                    <strong>{Numbers.format(78110000)}</strong>
                  </div>
                  <div className="ty02">-0.81%</div>
                </Slink>
              </td>
              <td className="bar">
                <Slink to="#">
                  <div style={{ width: "56.12596%" }}>-</div>
                  <p>{Numbers.format(43288905)}</p>
                </Slink>
              </td>
              <td className="grabB">
                <Slink to="#" onClick={handleClickSlink}>
                  매수
                </Slink>
              </td>
            </tr>
          </tbody>
        </table>
      </DataContainer>
      <TotalContainer>
        <table className="total">
          <colgroup>
            <col width="60"></col>
            <col width="100"></col>
            <col width="*"></col>
            <col width="100"></col>
            <col width="60"></col>
          </colgroup>
          <tbody>
            <tr>
              <td></td>
              <td className="rAlign">{Numbers.format(78110000)}</td>
              <td className="amountToggle">
                수량<span>(HIVE)</span>
                <img
                  src="assets/img/mainOrderQuotes/img-arrowIcon.png"
                  alt="Arrow"
                />
              </td>
              <td className="lAlign">{Numbers.format(35429058)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </TotalContainer>
      <div>
        <Modal isview={orderState}>
          <div className="upbitDim"></div>
          <section className="popupInfoLogin">
            <article>
              <strong>안내</strong>
              <p>
                로그인이 필요한 서비스입니다.
                <br />
                로그인 후 사용해주세요
              </p>
              <span className="btnB">
                <Slink to="#" className="bgNoneBlue" onClick={handleClickSlink}>
                  취소
                </Slink>
                <Slink to="#" onClick={handleClickSlink}>
                  로그인
                </Slink>
              </span>
            </article>
          </section>
        </Modal>
      </div>
    </>
  );
};

export default OrderQuoteContainer;
