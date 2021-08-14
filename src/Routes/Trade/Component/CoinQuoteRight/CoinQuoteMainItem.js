import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as Numbers from "../../../../Library/NumberFunction";

const CoinBookmark = styled.td`
  .wrap {
    justify-content: flex-end;
    align-items: center;
    padding-left: 14px;

    img.star {
      position: absolute;
      width: 12px;
      height: 12px;
      object-fit: none;
      object-position: -80px -50px;
    }
  }
`;

const CoinGraph = styled.td`
  .wrap {
    justify-content: center;
    align-items: center;

    .xy-wrap {
      position: absolute;
      width: 7px;
      height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;

      .x-axis {
        position: absolute;
        top: 12px;
        height: 5px;
        width: 100%;
      }
      .y-axis {
        position: absolute;
        height: 10px;
        width: 1px;
      }
    }
  }
`;

const CoinName = styled.td`
  .wrap {
    justify-content: flex-start;
    align-items: center;

    .name-wrap {
      position: absolute;
      flex-direction: column;

      p {
        &.name {
          font-weight: 700;
          line-height: 1em;
          :hover {
            text-decoration: underline;
          }
        }
        &.abbr {
          font-size: 11px;
          color: #666;
          letter-spacing: 0.05em;
        }
      }
    }
  }
`;

const CoinPresentValue = styled.td`
  .wrap {
    justify-content: flex-end;
    align-items: flex-start;
    padding: 7px 4px 0 0;

    span {
      position: absolute;
      line-height: 1.5em;
      letter-spacing: 1px;
    }
  }
`;

const CoinNetChange = styled.td`
  .wrap {
    justify-content: flex-end;
    align-items: center;
    padding-top: 9px;

    .change-wrap {
      position: absolute;

      .percent {
        letter-spacing: 1px;
      }
      .point {
        font-size: 11px;
        text-align: right;
        visibility: ${(props) =>
          props.isChecked === true && props.coinType === "krw"
            ? "visible"
            : "hidden"};
      }
    }
  }
`;

const CoinTradeCost = styled.td`
  .wrap {
    justify-content: flex-end;
    align-items: flex-start;
    padding: 9px 14px 0 0;

    .trade-wrap {
      position: absolute;

      .cost {
        letter-spacing: 1px;
      }
      .unit {
        color: #999;
        font-size: 11px;
        font-family: Dotum, Noto Sans KR, sans-serif;
      }
    }
  }
`;

const CoinRow = styled.tr`
  &.up {
    ${CoinGraph} .xy-wrap div {
      background-color: #d60000;
    }
    ${CoinPresentValue}, ${CoinNetChange} p {
      color: #d60000;
    }
  }
  &.down {
    ${CoinGraph} .xy-wrap div {
      background-color: #0051c7;
    }
    ${CoinPresentValue}, ${CoinNetChange} p {
      color: #0051c7;
    }
  }
  :hover {
    background-color: #f4f6f8;
  }

  td {
    height: 44px;
    border-top: 1px solid #f1f1f4;
    font-size: 12px;
    position: relative;

    & > .wrap {
      height: 100%;
      postition: absolute;
      top: 5px;
      display: flex;
    }
  }
`;

const CoinQuoteMainItem = ({
  index,
  language,
  isCheckedPrice,
  isCheckedKrw,
  coinType,
  showPopup,
  name_kr,
  name_eng,
  abbr,
  present_value,
  net_change_percent,
  net_change_point,
  trade_cost,
}) => {
  useEffect(() => {
    if ({ net_change_percent }.net_change_percent > 0) {
      const plusElement = document.getElementsByClassName(`tr_${index}`)[0];
      plusElement.classList.remove("down");
      plusElement.classList.add("up");
    } else if ({ net_change_percent }.net_change_percent < 0) {
      const minusElement = document.getElementsByClassName(`tr_${index}`)[0];
      minusElement.classList.remove("up");
      minusElement.classList.add("down");
    }
  });

  return (
    <CoinRow className={"tr_" + index}>
      <CoinBookmark onClick={showPopup}>
        <div className="wrap">
          <img className="star" src="/assets/img/sprite.png" alt="bookmark" />
        </div>
      </CoinBookmark>
      <CoinGraph>
        <div className="wrap">
          <div className="xy-wrap">
            <div className="x-axis"></div>
            <div className="y-axis"></div>
          </div>
        </div>
      </CoinGraph>
      <CoinName>
        <div className="wrap">
          <div className="name-wrap">
            <p className="name">
              {language === "kor" && { name_kr }.name_kr}
              {language === "eng" && { name_eng }.name_eng}
            </p>
            <p className="abbr">{abbr}/KRW</p>
          </div>
        </div>
      </CoinName>
      <CoinPresentValue>
        <div className="wrap">
          {/* <div className="present-wrap"> */}
          <span>{Numbers.format({ present_value }.present_value, 2)}</span>
          {/* </div> */}
        </div>
      </CoinPresentValue>
      <CoinNetChange isChecked={isCheckedPrice} coinType={coinType}>
        <div className="wrap">
          <div className="change-wrap">
            <p className="percent">
              {{ net_change_percent }.net_change_percent > 0 && "+"}
              {Numbers.format({ net_change_percent }.net_change_percent, 2)}%
            </p>
            <p className="point">
              {Numbers.format({ net_change_point }.net_change_point, 2)}
            </p>
          </div>
        </div>
      </CoinNetChange>
      <CoinTradeCost isChecked={isCheckedKrw} coinType={coinType}>
        <div className="wrap">
          <div className="trade-wrap">
            <span className="cost">
              {Numbers.format({ trade_cost }.trade_cost)}
            </span>
            <span className="unit">백만</span>
          </div>
        </div>
      </CoinTradeCost>
    </CoinRow>
  );
};

CoinQuoteMainItem.protoTypes = {
  name_kr: PropTypes.string.isRequired,
  name_eng: PropTypes.string.isRequired,
  abbr: PropTypes.string.isRequired,
  present_value: PropTypes.number.isRequired,
  net_change_percent: PropTypes.number.isRequired,
  net_change_point: PropTypes.number.isRequired,
  trade_cost: PropTypes.number.isRequired,
};

export default CoinQuoteMainItem;
