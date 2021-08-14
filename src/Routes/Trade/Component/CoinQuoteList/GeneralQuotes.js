import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerHoga = styled.div`
    flex: 1 1 auto;
    overflow-y: auto;

    td {
        height: 44px;
        border-top: 1px solid #f1f1f4;
        border-right: 1px solid #f1f1f4;
        letter-spacing: 1px;
        text-align: right;
        position: relative;

        &.bar {
            position: relative;
            width: 7px;
            margin: 0 auto;

            div {
                display: inline-block;
                overflow: hidden;
                text-indent: 999px;
                vertical-align: middle;
                height: 26px;
                line-height: 26px;
            }
        }

        p {
            top: 8px;
            right: 6px;
            position: absolute;
            display: inline-block;
            height: 26px;
            line-height: 26px;
            color: #2b2b2b;
        }

        .ty02 {
            float: left;
            width: 40%;
            line-height: 36px;
            text-align: right;
        }
        .ty03 {
            float: left;
            width: 60%;
            line-height: 36px;
            text-align: right;
        }
    }

    tr.down {
        color: #0051c7 !important;

        td {
            &.bar {
                padding-left: 8px;
                text-align: right;

                div {
                    background-color: rgba(0, 98, 223, 0.09);
                }
            }
            a {
                color: #0051c7;
            }
            .upB {
                padding: 0 8px 0 0;
                background-color: rgba(0, 98, 223, 0.03);

                a {
                    color: #d60000 !important;
                }
            }
        }

        &:hover:not(.nothover) {
            td.bar div {
                background-color: rgba(0, 98, 223, 0.16) !important;
            }
            td.upB {
                background-color: rgba(0, 98, 223, 0.11) !important;
            }
        }

        &.selectedArea {
            .bar a:after,
            .upB a:after {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(9, 54, 135, 0.04);
            }
        }
    }
    tr.up {
        td {
            &.bar {
                padding-left: 8px;
                text-align: right;

                div {
                    background-color: rgba(0, 98, 223, 0.09);
                }
            }
            a {
                color: #d60000;
            }
            .upB {
                padding: 0 8px 0 0;
                background-color: rgba(0, 98, 223, 0.03);

                a {
                    color: #d60000 !important;
                }
            }
        }
    }

    .inner01 {
        width: 162px;
        border-right: 0;
        vertical-align: bottom;
    }
    .inner02 {
        height: 419px;
        overflow: hidden;

        table {
            tr {
                .up {
                    color: #d60000;
                }
                .down {
                    color: #0051c7;
                }
            }
            td {
                height: 20px;
                padding: 0;
                border: 0;
                color: #595959;
                font-size: 11px;
            }
        }
    }

    dl {
        margin: 0 10px;
        padding: 10px 0;
        border-top: 1px solid #f1f1f4;
        overflow: hidden;

        dt {
            float: left;
            width: 40%;
            color: #84868c;
            line-height: 1.8em;
            font-size: 11px;
            font-family: Dotum, Noto Sans KR, sans-serif;
            letter-spacing: 0;
            text-align: left;
        }
        dd {
            float: left;
            width: 60%;
            line-height: 1.8em;
            color: #2b2b2b;
            font-size: 11px;
            letter-spacing: 1px;
            text-align: right;
        }
    }
`;
const ContainerTr = styled.tr``;
const ContainerTotal = styled.div`
    background-color: #f9fafc;
    border-top: 1px solid #e3e4e8;

    td {
        height: 46px;
        font-size: 14px;
        text-align: center;
    }
`;
const Slink = styled(Link)``;

const GeneralQuoteContainer = () => {
    return (
        <>
            <ContainerHoga>
                <table>
                    <colgroup>
                        <col width="42" />
                        <col width="120" />
                        <col width="*" />
                        <col width="120" />
                        <col width="42" />
                    </colgroup>
                    <tbody>
                        <ContainerTr className="down">
                            <td></td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '53.292364%' }}>-</div>
                                    <p>0.005</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,348,000</strong>
                                    </div>
                                    <div className="ty02">+1.61%</div>
                                </Slink>
                            </td>
                            <td colSpan="2" rowSpan="15" className="inner01">
                                <dl className="first">
                                    <dt>거래량</dt>
                                    <dd>
                                        9,222 <i>BTC</i>
                                    </dd>
                                    <dt>거래대금</dt>
                                    <dd>
                                        587,979{' '}
                                        <i>
                                            <img src="https://cdn.upbit.com/images/ico_million.9f2273e.png" alt="백만원" />
                                        </i>
                                        <em>(최근24시간)</em>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>52주 최고</dt>
                                    <dd className="up">
                                        71,450,000<em>(2021.03.14)</em>
                                    </dd>
                                    <dt>52주 최저</dt>
                                    <dd className="down">
                                        7,199,000<em>(2020.03.30)</em>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>전일종가</dt>
                                    <dd>63,328,000</dd>
                                    <dt>당일고가</dt>
                                    <dd className="up">
                                        64,700,000<em className="up">+2.17%</em>
                                    </dd>
                                    <dt>당일저가</dt>
                                    <dd className="down">
                                        63,265,000<em className="down">-0.10%</em>
                                    </dd>
                                </dl>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.0732547%' }}>-</div>
                                    <p>0.001</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,345,000</strong>
                                    </div>
                                    <div className="ty02">+1.61%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '11.72%' }}>-</div>
                                    <p>0.195</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,341,000</strong>
                                    </div>
                                    <div className="ty02">+1.60%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.935022%' }}>-</div>
                                    <p>0.016</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,340,000</strong>
                                    </div>
                                    <div className="ty02">+1.60%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '7.58057%' }}>-</div>
                                    <p>0.126</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,339,000</strong>
                                    </div>
                                    <div className="ty02">+1.60%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '11.0874%' }}>-</div>
                                    <p>0.184</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,326,000</strong>
                                    </div>
                                    <div className="ty02">+1.58%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '27.3484%' }}>-</div>
                                    <p>0.455</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,313,000</strong>
                                    </div>
                                    <div className="ty02">+1.56%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.022126%' }}>-</div>
                                    <p>0.000</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,304,000</strong>
                                    </div>
                                    <div className="ty02">+1.54%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '16.3553%' }}>-</div>
                                    <p>0.272</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,301,000</strong>
                                    </div>
                                    <div className="ty02">+1.54%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '100%' }}>-</div>
                                    <p>1.662</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,297,000</strong>
                                    </div>
                                    <div className="ty02">+1.53%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '11.5446%' }}>-</div>
                                    <p>0.192</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,295,000</strong>
                                    </div>
                                    <div className="ty02">+1.53%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '11.6589%' }}>-</div>
                                    <p>0.194</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,280,000</strong>
                                    </div>
                                    <div className="ty02">+1.50%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '1.88228%' }}>-</div>
                                    <p>0.031</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,278,000</strong>
                                    </div>
                                    <div className="ty02">+1.50%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '10.0846%' }}>-</div>
                                    <p>0.168</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,276,000</strong>
                                    </div>
                                    <div className="ty02">+1.50%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <ContainerTr className="down">
                            <td> </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '25.4055%' }}>-</div>
                                    <p>0.422</p>
                                </Slink>
                            </td>
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,270,000</strong>
                                    </div>
                                    <div className="ty02">+1.49%</div>
                                </Slink>
                            </td>
                        </ContainerTr>
                        <tr className="up">
                            <td colSpan="2" rowSpan="15" className="inner02">
                                <dl>
                                    <dt>체결강도</dt>
                                    <dd>+110.29%</dd>
                                </dl>
                                <div className="overflow">
                                    <table>
                                        <colgroup>
                                            <col width="50%" />
                                            <col width="*" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>체결가</th>
                                                <th>체결량</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>64,268,000</td>
                                                <td className="down">0.006</td>
                                            </tr>
                                            <tr>
                                                <td>64,268,000</td>
                                                <td className="down">0.127</td>
                                            </tr>
                                            <tr>
                                                <td>64,268,000</td>
                                                <td className="down">0.001</td>
                                            </tr>
                                            <tr>
                                                <td>64,268,000</td>
                                                <td className="down">0.022</td>
                                            </tr>
                                            <tr>
                                                <td>64,268,000</td>
                                                <td className="down">0.019</td>
                                            </tr>
                                            <tr>
                                                <td>64,268,000</td>
                                                <td className="down">0.014</td>
                                            </tr>
                                            <tr>
                                                <td>64,270,000</td>
                                                <td className="up">0.136</td>
                                            </tr>
                                            <tr>
                                                <td>64,270,000</td>
                                                <td className="up">0.100</td>
                                            </tr>
                                            <tr>
                                                <td>64,270,000</td>
                                                <td className="down">0.031</td>
                                            </tr>
                                            <tr>
                                                <td>64,270,000</td>
                                                <td className="down">0.000</td>
                                            </tr>
                                            <tr>
                                                <td>64,276,000</td>
                                                <td className="up">0.005</td>
                                            </tr>
                                            <tr>
                                                <td>64,276,000</td>
                                                <td className="up">0.013</td>
                                            </tr>
                                            <tr>
                                                <td>64,278,000</td>
                                                <td className="down">0.003</td>
                                            </tr>
                                            <tr>
                                                <td>64,278,000</td>
                                                <td className="down">0.001</td>
                                            </tr>
                                            <tr>
                                                <td>64,278,000</td>
                                                <td className="down">0.001</td>
                                            </tr>
                                            <tr>
                                                <td>64,278,000</td>
                                                <td className="down">0.009</td>
                                            </tr>
                                            <tr>
                                                <td>64,278,000</td>
                                                <td className="down">0.000</td>
                                            </tr>
                                            <tr>
                                                <td>64,297,000</td>
                                                <td className="up">0.023</td>
                                            </tr>
                                            <tr>
                                                <td>64,278,000</td>
                                                <td className="down">0.001</td>
                                            </tr>
                                            <tr>
                                                <td>64,297,000</td>
                                                <td className="up">0.008</td>
                                            </tr>
                                            <tr>
                                                <td>64,301,000</td>
                                                <td className="up">0.118</td>
                                            </tr>
                                            <tr>
                                                <td>64,301,000</td>
                                                <td className="up">0.009</td>
                                            </tr>
                                            <tr>
                                                <td>64,301,000</td>
                                                <td className="up">0.073</td>
                                            </tr>
                                            <tr>
                                                <td>64,301,000</td>
                                                <td className="up">0.001</td>
                                            </tr>
                                            <tr>
                                                <td>64,301,000</td>
                                                <td className="up">0.003</td>
                                            </tr>
                                            <tr>
                                                <td>64,301,000</td>
                                                <td className="up">0.001</td>
                                            </tr>
                                            <tr>
                                                <td>64,301,000</td>
                                                <td className="up">0.002</td>
                                            </tr>
                                            <tr>
                                                <td>64,304,000</td>
                                                <td className="up">0.001</td>
                                            </tr>
                                            <tr>
                                                <td>64,307,000</td>
                                                <td className="up">0.008</td>
                                            </tr>
                                            <tr>
                                                <td>64,311,000</td>
                                                <td className="up">0.005</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td className="upB positionR">
                                <Slink to="#">
                                    <div className="ty03">
                                        <span className="selected"></span>
                                        <strong>64,268,000</strong>
                                    </div>
                                    <div className="ty02">+1.48%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.98246%' }}>-</div>
                                    <p>0.016</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,267,000</strong>
                                    </div>
                                    <div className="ty02">+1.48%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.504473%' }}>-</div>
                                    <p>0.008</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,266,000</strong>
                                    </div>
                                    <div className="ty02">+1.48%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.023402%' }}>-</div>
                                    <p>0.000</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,260,000</strong>
                                    </div>
                                    <div className="ty02">+1.47%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '11.0644%' }}>-</div>
                                    <p>0.184</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,259,000</strong>
                                    </div>
                                    <div className="ty02">+1.47%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '10.3306%' }}>-</div>
                                    <p>0.172</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,247,000</strong>
                                    </div>
                                    <div className="ty02">+1.45%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.893172%' }}>-</div>
                                    <p>0.015</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,245,000</strong>
                                    </div>
                                    <div className="ty02">+1.45%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '2.63603%' }}>-</div>
                                    <p>0.044</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,244,000</strong>
                                    </div>
                                    <div className="ty02">+1.45%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '0.0990667%' }}>-</div>
                                    <p>0.002</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,243,000</strong>
                                    </div>
                                    <div className="ty02">+1.44%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '4.67527%' }}>-</div>
                                    <p>0.078</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,242,000</strong>
                                    </div>
                                    <div className="ty02">+1.44%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '39.4669%' }}>-</div>
                                    <p>0.656</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,228,000</strong>
                                    </div>
                                    <div className="ty02">+1.42%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '3.31351%' }}>-</div>
                                    <p>0.055</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,226,000</strong>
                                    </div>
                                    <div className="ty02">+1.42%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '1.07716%' }}>-</div>
                                    <p>0.018</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,224,000</strong>
                                    </div>
                                    <div className="ty02">+1.41%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '7.09299%' }}>-</div>
                                    <p>0.118</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,223,000</strong>
                                    </div>
                                    <div className="ty02">+1.41%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '20.7214%' }}>-</div>
                                    <p>0.344</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                        <tr className="up">
                            <td className="upB">
                                <Slink to="#">
                                    <div className="ty03">
                                        <strong>64,222,000</strong>
                                    </div>
                                    <div className="ty02">+1.41%</div>
                                </Slink>
                            </td>
                            <td className="bar">
                                <Slink to="#">
                                    <div style={{ width: '8.1099%' }}>-</div>
                                    <p>0.135</p>
                                </Slink>
                            </td>
                            <td className="last"> </td>
                        </tr>
                    </tbody>
                </table>
            </ContainerHoga>
            <ContainerTotal>
                <table className="total">
                    <colgroup>
                        <col width="42" />
                        <col width="120" />
                        <col width="*" />
                        <col width="120" />
                        <col width="42" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td> </td>
                            <td className="rAlign">3.684</td>
                            <td className="AmountToggle">
                                <Slink to="#">
                                    <b>수량</b>
                                    <i>(BTC)</i>
                                    <img src={'/assets/img/TradeCoinQuoteRight/arrow_change.png'} alt="" />
                                </Slink>
                            </td>
                            <td className="lAlign">2.223</td>
                            <td className="last"></td>
                        </tr>
                    </tbody>
                </table>
            </ContainerTotal>
        </>
    );
};

export default GeneralQuoteContainer;
