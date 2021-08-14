import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            line-height: 42px;
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
            font-family: Noto Sans KR,sans-serif;
            margin-top: 6px;
            font-size: 20px;
            font-family: Noto Sans KR,sans-serif;
        }
        p {
            color: #666;
            float: left;
            margin: 18px 4px 0;
            font-size: 12px;
            letter-spacing: .05em;
        }
    }
    .arrow {
        display: inline-block;
        height: 42px;
        width: 13px;
        padding: 0 8px;
        background: url('/assets/img/subGraphChart/icon-arrow.png') center 18px no-repeat;
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
            color: #84868D;
            line-height: 42px;
            text-align: center;
        }
    }
`;
const ContainerTab = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    .header-tabs {
        width: 250px;
        float: left;
    }
`;

const Tabs = styled.ul`
    float: left;
    width: 100%;
    display: table;
    table-layout: fixed;

    > li {
        float: left;
        width: ${(props) => props.countTabs > 0 ? (100 / props.countTabs) : '100'}%;
    }
`;
const Item = styled.li`
    display: block;
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #d4d6dc;
    line-height: 42px;
    color: #2b2b2b;
    font-size: 16px;
    font-weight: 500;
    font-family: Noto Sans KR,sans-serif;
    text-align: center;

    > a {
        color: inherit;

        &:hover {
            text-decoration: underline;
        }
    }

    ${(props) => props.current && css`
        height: 42px;
        border-bottom: 3px solid #115dcb;
        color: #115dcb;
        font-weight: 700;
    `}
`;


const Slink = styled(Link)``;

// Link Event preventDefault
const hrefDefault = (e) => e.preventDefault();

const GraphChartContainerHeader = () => {
    return (
        <ContainerHeader>
            <Slink to={'#'} className='select' onClick={hrefDefault}>
                <em>
                    <img src={'/assets/img/subGraphChart/BTC.png'} alt="BTC" />
                </em>
                <strong>비트코인</strong>
                <p>BTC/KRW</p>
            </Slink>
            <Slink to="#" className='arrow' onClick={hrefDefault}>Arrow</Slink>

            <ContainerTab>
                <div className='header-tabs'>
                    <Tabs countTabs={2}>
                        <Item current={true}>
                            <Slink to="#" title="시세">시세</Slink>
                        </Item>
                        <Item current={false}>
                            <Slink to="#" title="정보">정보</Slink>
                        </Item>
                    </Tabs>
                </div>
                <div className="setting">
                    <Slink to="#" title="화면 설정">
                        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                    </Slink>
                </div>
            </ContainerTab>
        </ContainerHeader>
    );
};

export default GraphChartContainerHeader;