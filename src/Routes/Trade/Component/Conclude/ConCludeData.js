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
      width: 300px;
      padding: 0 4px 0 0;
    }

    & th:nth-child(3) {
      width: 280px;
      padding: 0 14px 0 0;
    }

    & th:last-child {
      width: 314px;
      padding: 0 22px 0 0;
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
  }
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

    & tr:nth-child(even) {
      background-color: #f9fafc;
    }

    & td {
      height: 32px;
      & span {
        color: #999;
        padding: 0 0 0 4px;
      }
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
      width: 300px;
      font-weight: 700;
    }

    & td:nth-child(3) {
      width: 280px;
    }

    & td:last-child {
      width: 314px;
      padding: 0 7px 0 0;
    }
  }
`;

const TableTr = styled.tr`
  & > td:nth-child(2),
  & > td:nth-child(3) {
    color: ${(props) => (0 > props.dataNumber ? "#0051c7" : "#d60000")};
  }
`;

const ConcludeData = () => {
  return (
    <Container>
      <table className="tbTrade">
        <thead className="title">
          <tr>
            <th>체결시간</th>
            <th>체결가격(KRW)</th>
            <th>체결량(BTC)</th>
            <th>체결금액(KRW)</th>
          </tr>
        </thead>
      </table>
      <Scroll>
        <div className="scroll-down">
          <table>
            <tbody className="content">
              <TableTr dataNumber={-0.48}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(64469000)}</td>
                <td>{Numbers.format(0.56688851, 8)}</td>
                <td>{Numbers.format(62354)}</td>
              </TableTr>
              <TableTr dataNumber={2.25}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(63328000)}</td>
                <td>{Numbers.format(0.05270682, 8)}</td>
                <td>{Numbers.format(4216600)}</td>
              </TableTr>
              <TableTr dataNumber={-1.24}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(61536000)}</td>
                <td>{Numbers.format(0.05642814, 8)}</td>
                <td>{Numbers.format(427000)}</td>
              </TableTr>
              <TableTr dataNumber={0.64}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(54824000)}</td>
                <td>{Numbers.format(0.03658914, 8)}</td>
                <td>{Numbers.format(1641000)}</td>
              </TableTr>
              <TableTr dataNumber={-2.22}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(56426000)}</td>
                <td>{Numbers.format(0.05479826, 8)}</td>
                <td>{Numbers.format(547000)}</td>
              </TableTr>
              <TableTr dataNumber={0.57}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(59635000)}</td>
                <td>{Numbers.format(0.05142675, 8)}</td>
                <td>{Numbers.format(653100)}</td>
              </TableTr>
              <TableTr dataNumber={1.63}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(60935000)}</td>
                <td>{Numbers.format(0.03621458, 8)}</td>
                <td>{Numbers.format(547800)}</td>
              </TableTr>
              <TableTr dataNumber={-0.54}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(57225000)}</td>
                <td>{Numbers.format(0.02548518, 8)}</td>
                <td>{Numbers.format(910000)}</td>
              </TableTr>
              <TableTr dataNumber={-3.75}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(61123000)}</td>
                <td>{Numbers.format(0.03625815, 8)}</td>
                <td>{Numbers.format(654300)}</td>
              </TableTr>
              <TableTr dataNumber={-2.24}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(66328000)}</td>
                <td>{Numbers.format(0.06589145, 8)}</td>
                <td>{Numbers.format(12457600)}</td>
              </TableTr>
              <TableTr dataNumber={1.04}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(67328000)}</td>
                <td>{Numbers.format(0.03621545, 8)}</td>
                <td>{Numbers.format(857000)}</td>
              </TableTr>
              <TableTr dataNumber={-2.86}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(67974000)}</td>
                <td>{Numbers.format(0.06251845, 8)}</td>
                <td>{Numbers.format(62478000)}</td>
              </TableTr>
              <TableTr dataNumber={-2.55}>
                <td>
                  03.29 <span>16:24</span>
                </td>
                <td>{Numbers.format(66591000)}</td>
                <td>{Numbers.format(0.06584875, 8)}</td>
                <td>{Numbers.format(12348000)}</td>
              </TableTr>
            </tbody>
          </table>
        </div>
      </Scroll>
    </Container>
  );
};

export default ConcludeData;
