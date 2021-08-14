import React, { useState } from "react";
import styled from "styled-components";
import * as Numbers from "Library/NumberFunction";

const Container = styled.div`
  & > .tbTrade {
    width: 100%;
    height: 100%;

    & th:first-child {
      position: relative;
    }

    & th:first-child {
      width: 100px;
      padding: 0 2px 0 0;
      & i {
        margin-left: 4px;
        text-align: center;
        cursor: pointer;
      }
    }

    & th:nth-child(2) {
      width: 334px;
      padding: 0 40px 0 0;
    }

    & th:nth-child(3) {
      width: 190px;
      padding: 0 2px 0 0;
    }

    & th:nth-child(4) {
      width: 80px;
      padding: 0 10px 0 0;
    }

    & th:last-child {
      width: 286px;
      padding: 0 20px 0 0;
    }

    .title th:not(:first-child) {
      height: 30px;
      line-height: 30px;
      text-align: right;
    }

    .title {
      background-color: #f9fafc;
      color: #666;
      font-size: 11px;
      border-bottom: 1px solid #f1f1f4;
    }

    .info {
      position: absolute;
      top: 24px;
      left: 28px;
      min-width: 236px;
      padding: 8px 10px;
      background-color: #fff;
      border: 1px solid #c8cad1;
      box-shadow: 0 1px 1px #f5f5f5;
      line-height: 1.5em;
      color: #333;
      font-size: 11px;
      font-family: Dotum, Noto Sans KR, sans-serif;
      letter-spacing: 0;
      text-align: left;
      z-index: 100;

      & h5 {
        font-weight: 700;
        margin: 6px 0 0;
      }
    }
  }
  .content tr:nth-child(even) {
    background-color: #f9fafc;
  }
`;

const Tooltip = styled.span`
  display: ${(props) => (props.isview ? "block" : "none")};
`;

const Scroll = styled.div`
  position: relative;
  height: 360px;
  overflow: hidden;
  width: 100%;
  .scroll-down {
    height: 100%;
    width: 100%;
    line-height: 32px;
    overflow-y: scroll;
    position: absolute;
    top: 0px;
    font-size: 11px;

    & td {
      height: 32px;
    }

    & td:not(:first-child) {
      font-size: 12px;
      text-align: right;
    }

    & td:first-child {
      width: 100px;
      & i {
        margin-left: 4px;
        text-align: center;
        cursor: pointer;
      }
    }
    & td:nth-child(2) {
      width: 334px;
      font-weight: 700;
    }

    & td:nth-child(3) {
      width: 190px;
    }

    & td:nth-child(4) {
      width: 80px;
    }

    & td:last-child {
      width: 286px;
      padding: 0 7px 0 0;
    }
  }
`;

const TableTr = styled.tr`
  & > td:nth-child(2),
  & > td:nth-child(3) {
    color: ${(props) => (0 > props.dataNumber ? "#0051c7" : "#d60000")};
  }

  & > td:nth-child(4) {
    color: ${(props) => (0 > props.dataNumber ? "#0051c7" : "#D60000")};

    &:before {
      content: "${(props) =>
        0 < props.dataNumber ? "+" + props.dataNumber : props.dataNumber}%";
    }
  }
`;

const DayOnDayData = () => {
  //툴용
  const [isDate, setIsDate] = useState(false);
  const handleHoverDate = () => {
    setIsDate(!isDate);
  };

  return (
    <Container>
      <table className="tbTrade">
        <thead className="title">
          <tr>
            <th>
              <span>일자</span>
              <i
                className="far fa-question-circle"
                onMouseOver={handleHoverDate}
                onMouseOut={handleHoverDate}
              ></i>
              <Tooltip className="info" isview={isDate}>
                업비트는 UTC(협정세계시)를 사용해 일별 데이터를 계산합니다.
                대다수의 글로벌 거래소들이 UTC 기준 시간을 사용하고 있으며, 한국
                시간(KST)보다는 9시간 느립니다.
                <h5>일별종가</h5>
                UTC 24시(=한국시간 오전 9시) 기준 가격
                <h5>전일대비 등락률</h5>
                UTC 기준 전일 종가 대비 등락률
              </Tooltip>
            </th>
            <th>종가(KRW)</th>
            <th></th>
            <th>전일대비</th>
            <th>거래량(BTC)</th>
          </tr>
        </thead>
      </table>
      <Scroll>
        <div className="scroll-down">
          <table>
            <tbody className="content">
              <TableTr dataNumber={-0.48}>
                <td>03.26</td>
                <td>{Numbers.format(64469000)}</td>
                <td>{Numbers.format(308000)} </td>
                <td></td>
                <td>{Numbers.format(938)}</td>
              </TableTr>
              <TableTr dataNumber={2.25}>
                <td>03.25</td>
                <td>{Numbers.format(63328000)}</td>
                <td>{Numbers.format(527000)}</td>
                <td></td>
                <td>{Numbers.format(10258)}</td>
              </TableTr>
              <TableTr dataNumber={-1.24}>
                <td>03.24</td>
                <td>{Numbers.format(61536000)}</td>
                <td>{Numbers.format(681000)}</td>
                <td></td>
                <td>{Numbers.format(11247)}</td>
              </TableTr>
              <TableTr dataNumber={0.64}>
                <td>03.23</td>
                <td>{Numbers.format(54824000)}</td>
                <td>{Numbers.format(916000)}</td>
                <td></td>
                <td>{Numbers.format(11432)}</td>
              </TableTr>
              <TableTr dataNumber={-2.22}>
                <td>03.22</td>
                <td>{Numbers.format(56426000)}</td>
                <td>{Numbers.format(1449000)}</td>
                <td></td>
                <td>{Numbers.format(10463)}</td>
              </TableTr>
              <TableTr dataNumber={0.57}>
                <td>03.21</td>
                <td>{Numbers.format(59635000)}</td>
                <td>{Numbers.format(2395000)}</td>
                <td></td>
                <td>{Numbers.format(965)}</td>
              </TableTr>
              <TableTr dataNumber={1.63}>
                <td>03.20</td>
                <td>{Numbers.format(60935000)}</td>
                <td>{Numbers.format(729000)}</td>
                <td></td>
                <td>{Numbers.format(10875)}</td>
              </TableTr>
              <TableTr dataNumber={-0.54}>
                <td>03.19</td>
                <td>{Numbers.format(57225000)}</td>
                <td>{Numbers.format(125000)}</td>
                <td></td>
                <td>{Numbers.format(10118)}</td>
              </TableTr>
              <TableTr dataNumber={-3.75}>
                <td>03.18</td>
                <td>{Numbers.format(61123000)}</td>
                <td>{Numbers.format(835000)}</td>
                <td></td>
                <td>{Numbers.format(11252)}</td>
              </TableTr>
              <TableTr dataNumber={-2.24}>
                <td>03.17</td>
                <td>{Numbers.format(66328000)}</td>
                <td>{Numbers.format(4008000)}</td>
                <td></td>
                <td>{Numbers.format(8024)}</td>
              </TableTr>
              <TableTr dataNumber={1.04}>
                <td>03.16</td>
                <td>{Numbers.format(67328000)}</td>
                <td>{Numbers.format(1858000)}</td>
                <td></td>
                <td>{Numbers.format(8097)}</td>
              </TableTr>
              <TableTr dataNumber={-2.86}>
                <td>03.15</td>
                <td>{Numbers.format(67974000)}</td>
                <td>{Numbers.format(3128000)}</td>
                <td></td>
                <td>{Numbers.format(9961)}</td>
              </TableTr>
              <TableTr dataNumber={-2.55}>
                <td>03.14</td>
                <td>{Numbers.format(66591000)}</td>
                <td>{Numbers.format(429000)}</td>
                <td></td>
                <td>{Numbers.format(10756)}</td>
              </TableTr>
            </tbody>
          </table>
        </div>
      </Scroll>
    </Container>
  );
};

export default DayOnDayData;
