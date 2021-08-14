import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CoinQuoteMainItem from './CoinQuoteRight/CoinQuoteMainItem';
import LoginPopup from './LoginPopup';
import { data } from './CoinQuoteRight/coinQuoteData.json';

const RightSection = styled.div`
    position: sticky;
    top: 72px;
    bottom: 0;
    width: 400px;
    height: calc(100vh - 72px - 10px);
    // margin-bottom: 10px;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: 2px 2px 4px #dee1e7;
`;

const SearchWrap = styled.div`
    height: 42px;
    border-bottom: 1px solid #d5d6dc;
    display: flex;
`;

const Search = styled.div`
    width: 356px;
    height: 42px;
    padding: 8px 9px 8px 14px;
    border-right: 1px solid #d5d6dc;
    overflow: hidden;
    display: flex;
    position: relative;

    input {
        width: 304px;
        height: 26px;
        line-height: 26px;
        font: 700 12.5px Arial;
        color: #2b2b2b;
        margin: 0;
        padding: 0;
        border: 0;

        &::placeholder {
            color: #a2a7b4;
        }
        &:focus::placeholder {
            color: transparent;
        }
    }
    .cancelBtn {
        position: absolute;
        top: 16px;
        right: 45px;
        visibility: ${props => (props.isInput ? 'visible' : 'hidden')};
    }
    .searchBtn {
        width: 26px;
        height: 26px;
        overflow: hidden;
        object-fit: none;
        object-position: -90px 0;
    }
`;

const Settings = styled.div`
    .settingBtn {
        transform: translate(90%, 80%);
    }
`;

const SettingsList = styled.div`
    width: 250px;
    position: absolute;
    top: 41px;
    right: 0;
    border: 1px solid #d5d6dc;
    background-color: white;
    z-index: 1;
    visibility: ${props => (props.isShown ? 'visible' : 'hidden')};

    .title {
        padding: 8px 14px;
        background-color: #f9fafc;
        color: #999;
        font-size: 12px;
    }
    ul > li {
        padding: 17px 14px;
        border-top: 1px solid #f1f1f4;

        label {
            font-size: 12.5px;

            & > p {
                color: #999;
                font-size: 11.5px;
                padding-top: 7px;
            }
        }
    }
`;

const Main = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    position: relative;
`;

const CoinType = styled.ul`
    display: flex;

    li {
        width: 20%;
        border-bottom: 1px solid #d4d6dc;
        text-align: center;
        line-height: 40px;
        color: #2b2b2b;
        font-size: 14px;
        font-family: Noto Sans KR, sans-serif;
        font-weight: 500;

        :hover {
            text-decoration: underline;
        }
        &.on {
            border-bottom: 3px solid #115dcb;
            color: #115dcb;
            font-weight: 700;
        }
    }
`;

const CoinQuoteListWrap = styled.div`
    height: calc(100% - 85px);
    overflow-y: scroll;

    & > p {
        position: absolute;
        top: 213px;
        left: 82px;
        font-size: 12.3px;
        line-height: 22px;
        color: #999;
    }

    ${props =>
        (props.coinType === 'own' || props.coinType === 'interest') &&
        css`
            &.default {
                visibility: hidden;
            }
        `}

    ${props =>
        props.coinType === 'own' &&
        css`
            &.own {
                visibility: visible;

                p::after {
                    content: '로그인하면 내 보유코인을 확인할 수 있습니다.';
                }
            }
        `}

    ${props =>
        props.coinType === 'interest' &&
        css`
            &.own {
                visibility: visible;

                p::after {
                    content: '로그인하면 내 관심코인을 확인할 수 있습니다.';
                }
            }
        `}
`;

const CoinQuoteList = styled.table`
    width: 100%;
    border-collapse: collapse;

    &.default,
    &.own {
        height: 30px;
    }
    &.default {
        visibility: ${props => (props.coinType === 'own' ? 'hidden' : 'visible')};
    }
    &.own {
        visibility: ${props => (props.coinType === 'own' ? 'visible' : 'hidden')};
        position: absolute;
        top: 43px;
    }
`;

const CoinQuoteHeader = styled.thead`
    th {
        height: 30px;
        background-color: #f9fafc;
        color: #666;
        font-size: 11px;
        font-family: Dotum, Noto Sans KR, sans-serif;
        font-weight: 400;
        vertical-align: middle;

        img {
            vertical-align: middle;
            padding-left: 3px;
        }
        :hover {
            text-decoration: underline;
        }

        &.presentValue > img {
            content: ${props =>
                (props.order_presentvalue === 'default' && 'url(/assets/img/TradeCoinQuoteRight/arrow_updown.png)') ||
                (props.order_presentvalue === 'up' && 'url(/assets/img/TradeCoinQuoteRight/arrow_up.png)') ||
                (props.order_presentvalue === 'down' && 'url(/assets/img/TradeCoinQuoteRight/arrow_down.png)')};
        }
        &.netChange > img {
            content: ${props =>
                (props.order_netchange === 'default' && 'url(/assets/img/TradeCoinQuoteRight/arrow_updown.png)') ||
                (props.order_netchange === 'up' && 'url(/assets/img/TradeCoinQuoteRight/arrow_up.png)') ||
                (props.order_netchange === 'down' && 'url(/assets/img/TradeCoinQuoteRight/arrow_down.png)')};
        }
        &.tradeCost > img {
            content: ${props =>
                (props.order_tradecost === 'default' && 'url(/assets/img/TradeCoinQuoteRight/arrow_updown.png)') ||
                (props.order_tradecost === 'up' && 'url(/assets/img/TradeCoinQuoteRight/arrow_up.png)') ||
                (props.order_tradecost === 'down' && 'url(/assets/img/TradeCoinQuoteRight/arrow_down.png)')};
        }
    }
`;

const CoinQuoteMain = styled.tbody``;

const CoinQuoteRight = () => {
    const [isInput, setIsInput] = useState(false);
    const inputKeyword = () => {
        let getValue = document.querySelector('#keyword').value;
        if (0 < getValue.length) {
            setIsInput(true);
        } else {
            setIsInput(false);
        }
    };
    const cancelKeyword = () => {
        let getValue = document.querySelector('#keyword');
        getValue.value = '';
        setIsInput(false);
    };

    const [isShown, setIsShown] = useState(false);
    const showSettings = () => {
        setIsShown(!isShown);
    };

    const [isCheckedPrice, setIsCheckedPrice] = useState(true);
    const showNetChangePrice = () => {
        setIsCheckedPrice(!isCheckedPrice);
    };
    const [isCheckedKrw, setIsCheckedKrw] = useState(true);
    const showTradeCostKrw = () => {
        setIsCheckedKrw(!isCheckedKrw);
    };

    const [coinType, setCoinType] = useState('krw');
    const clickCoinType = event => {
        const options = document.querySelector(CoinType).querySelectorAll('li');
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove('on');
        }

        let element = event.currentTarget;
        if (!element.classList.contains('on')) {
            element.classList.add('on');
            setCoinType(element.id);
        }
    };

    const [language, setLanguage] = useState('kor');
    const clickLanguage = () => {
        if (language === 'kor') {
            setLanguage('eng');
        } else {
            setLanguage('kor');
        }
    };
    const [orderPresentValue, setOrderPresentValue] = useState('default');
    const clickPresentValue = () => {
        if (orderPresentValue === 'default' || orderPresentValue === 'down') {
            setOrderPresentValue('up');
        } else {
            setOrderPresentValue('down');
        }
    };
    const [orderNetChange, setOrderNetChange] = useState('default');
    const clickNetChange = () => {
        if (orderNetChange === 'default' || orderNetChange === 'down') {
            setOrderNetChange('up');
        } else {
            setOrderNetChange('down');
        }
    };
    const [orderTradeCost, setOrderTradeCost] = useState('default');
    const clickTradeCost = () => {
        if (orderTradeCost === 'default' || orderTradeCost === 'down') {
            setOrderTradeCost('up');
        } else {
            setOrderTradeCost('down');
        }
    };

    const { coins } = data;

    const [popup, setPopup] = useState(false);
    const showPopup = () => {
        setPopup(!popup);
    };

    return (
        <RightSection>
            <Container>
                <SearchWrap>
                    <Search isInput={isInput}>
                        <input placeholder="코인명/심볼검색" id="keyword" onKeyUp={inputKeyword}></input>
                        <img className="cancelBtn" src="/assets/img/TradeCoinQuoteRight/icon_x.png" alt="cancel button" onClick={cancelKeyword} />
                        <img className="searchBtn" src="/assets/img/sprite.png" alt="search button" />
                    </Search>
                    <Settings>
                        <img className="settingBtn" src="/assets/img/TradeCoinQuoteRight/icon_setting.png" alt="settings button" onClick={showSettings} />
                    </Settings>
                    <SettingsList isShown={isShown}>
                        <div className="title">코인목록 설정</div>
                        <ul>
                            <li>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="showNetChange" onClick={showNetChangePrice} defaultChecked />
                                    <label htmlFor="showNetChange">
                                        <span>전일 대비 등락 가격 표시</span>
                                        <p>(KRW 마켓만 적용)</p>
                                    </label>
                                </span>
                            </li>
                            <li>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="showTradeCost" onClick={showTradeCostKrw} defaultChecked></input>
                                    <label htmlFor="showTradeCost">
                                        <span>거래대금 KRW 환산 가격 표시</span>
                                        <p>(BTC, USDT 마켓만 적용)</p>
                                    </label>
                                </span>
                            </li>
                        </ul>
                    </SettingsList>
                </SearchWrap>

                <Main>
                    <CoinType>
                        <li onClick={clickCoinType} id="krw" className="on">
                            원화
                        </li>
                        <li onClick={clickCoinType} id="btc">
                            BTC
                        </li>
                        <li onClick={clickCoinType} id="usdt">
                            USDT
                        </li>
                        <li onClick={clickCoinType} id="own">
                            보유
                        </li>
                        <li onClick={clickCoinType} id="interest">
                            관심
                        </li>
                    </CoinType>

                    {/* CoinQuoteHeader ver.1 */}
                    <CoinQuoteList className="default" coinType={coinType}>
                        <colgroup>
                            <col width="26"></col>
                            <col width="26"></col>
                            <col width="30"></col>
                            <col width="88"></col>
                            <col width="78"></col>
                            <col width="*"></col>
                        </colgroup>

                        <CoinQuoteHeader order_presentvalue={orderPresentValue} order_netchange={orderNetChange} order_tradecost={orderTradeCost}>
                            <tr>
                                <th colSpan="3" className="language" onClick={clickLanguage}>
                                    <span>
                                        {language === 'kor' && '한글명'}
                                        {language === 'eng' && '영문명'}
                                    </span>
                                    <img src="/assets/img/TradeCoinQuoteRight/arrow_change.png" alt="left_right" />
                                </th>
                                <th className="presentValue" onClick={clickPresentValue}>
                                    현재가
                                    <img alt="up_down" />
                                </th>
                                <th className="netChange" onClick={clickNetChange}>
                                    전일대비
                                    <img alt="up_down" />
                                </th>
                                <th className="tradeCost" onClick={clickTradeCost}>
                                    거래대금
                                    <img alt="up_down" />
                                </th>
                            </tr>
                        </CoinQuoteHeader>
                    </CoinQuoteList>

                    {/* CoinQuoteHeader ver.2 */}
                    <CoinQuoteList className="own" coinType={coinType}>
                        <colgroup>
                            <col width="105"></col>
                            <col width="100"></col>
                            <col width="100"></col>
                            <col width="*"></col>
                        </colgroup>

                        <CoinQuoteHeader>
                            <tr>
                                <th>
                                    코인명
                                    <img src="/assets/img/TradeCoinQuoteRight/arrow_change.png" alt="left_right" />
                                </th>
                                <th>
                                    보유(평가금)
                                    <img src="/assets/img/TradeCoinQuoteRight/arrow_updown.png" alt="up_down" />
                                </th>
                                <th>
                                    매수평균가
                                    <img src="/assets/img/TradeCoinQuoteRight/arrow_updown.png" alt="up_down" />
                                </th>
                                <th>
                                    수익률
                                    <img src="/assets/img/TradeCoinQuoteRight/arrow_updown.png" alt="up_down" />
                                </th>
                            </tr>
                        </CoinQuoteHeader>
                    </CoinQuoteList>

                    {/* CoinQuoteMain ver.1 */}
                    <CoinQuoteListWrap className="default" coinType={coinType}>
                        <CoinQuoteList>
                            <colgroup>
                                <col width="26"></col>
                                <col width="26"></col>
                                <col width="94"></col>
                                <col width="98"></col>
                                <col width="58"></col>
                                <col width="*"></col>
                            </colgroup>
                            <CoinQuoteMain>
                                {coins.krw.map((coin, index) => (
                                    <CoinQuoteMainItem
                                        key={index}
                                        index={index}
                                        language={language}
                                        isCheckedPrice={isCheckedPrice}
                                        isCheckedKrw={isCheckedKrw}
                                        coinType={coinType}
                                        showPopup={showPopup}
                                        name_kr={coin.name_kr}
                                        name_eng={coin.name_eng}
                                        abbr={coin.abbr}
                                        present_value={coin.present_value}
                                        net_change_percent={coin.net_change_percent}
                                        net_change_point={coin.net_change_point}
                                        trade_cost={coin.trade_cost}
                                    />
                                ))}
                            </CoinQuoteMain>
                        </CoinQuoteList>
                    </CoinQuoteListWrap>

                    {/* CoinQuoteMain ver.2 */}
                    <CoinQuoteListWrap className="own interest" coinType={coinType}>
                        <p></p>
                    </CoinQuoteListWrap>
                </Main>
            </Container>

            <LoginPopup popup={popup} showPopup={showPopup} />
        </RightSection>
    );
};

export default CoinQuoteRight;
