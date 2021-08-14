import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
`;

const Wrap = styled.div`
    width: 1400px;
    padding: 0 40px;
    display: flex;
`;

const Box = styled.div`
    width: 33.333%;
    padding: 50px 40px;
    &:first-child,
    &:nth-child(2) {
        cursor: pointer;
    }
`;

const Title = styled.div`
    font-size: 30px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    cursor: ${props => (props.name ? 'default' : 'pointer')};
    color: ${props => (props.data ? '#0051c7' : 'default')};
    margin-bottom: ${props => (props.quote ? '10px' : '0')};
`;

const SubTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    color: ${props => (props.name ? '#666666' : '#0051c7')};
    margin-left: ${props => (props.degree ? '5px' : props.percentage ? '10px' : '0')};
`;
const Arrow = styled.div`
    width: 12px;
    height: 8px;
    background: transparent url(/assets/img/mainCoinQuote/arrow.png) no-repeat 0 -31px;
    margin-top: 7px;
`;

const Graph = styled.div`
    width: 358px;
    height: 148px;
    margin: 30px 0 14px;
    border: 1px solid #eee;
    background: no-repeat center/101% url(${props => props.img});
`;

const GraphLine = styled.div`
    display: flex;
    align-items: center;
`;
const GraphLineColor = styled.div`
    width: 10px;
    height: ${props => (props.today ? '2px' : '10px')};
    background-color: ${props => (props.today ? '#093687' : '#e6e7ec')};
    margin-right: 8px;
`;
const GraphLineName = styled.div`
    font-size: 12px;
    margin-right: 16px;
`;

const ListItem = styled.div`
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => (props.last ? 'none' : '1px solid #eee')};
    padding: 11px 0;
    &:hover > div:first-child {
        text-decoration: underline;
    }
`;
const ListItemInfo = styled.div`
    color: ${props => (props.name ? '#2b2b2b' : '#0051c7')};
    &:last-child {
        width: 90px;
    }

    /*
  ${props =>
        props.percentage > 0 &&
        css`
            color: red;
            div + & {
                color: red;
            }
        `}*/
`;
const ListItemInfoWrap = styled.div`
    display: flex;
    text-align: end;

    & > div:last-child::after {
        content: '${props => (props.percentage > 0 ? '+' + props.percentage : props.percentage === 0 ? '0.00' : props.percentage)}%';
    }

    & > div {
        color: ${props => (props.percentage > 0 ? '#d60000' : props.percentage === 0 ? '#2b2b2b' : 'default')};
    }
`;

const CoinQuoteContainer = () => {
    return (
        <Container>
            <Wrap>
                <Box>
                    <Title>
                        <Title name="true">BBMI</Title>
                        <Title data="true">8,519.72</Title>
                    </Title>
                    <SubTitle>
                        <SubTitle name="true">Borabit Market Index</SubTitle>
                        <SubTitle data="true">
                            <Arrow></Arrow>
                            <SubTitle degree>148</SubTitle>
                            <SubTitle percentage>-1.69%</SubTitle>
                        </SubTitle>
                    </SubTitle>
                    <Graph img={'/assets/sample/bbmi.png'}></Graph>
                    <GraphLine>
                        <GraphLineColor today></GraphLineColor>
                        <GraphLineName>당일</GraphLineName>
                        <GraphLineColor yesterday></GraphLineColor>
                        <GraphLineName>전일</GraphLineName>
                    </GraphLine>
                </Box>
                <Box>
                    <Title>
                        <Title name="true">BBAI</Title>
                        <Title data="true">4,135.25</Title>
                    </Title>
                    <SubTitle>
                        <SubTitle name="true">Borabit Altcoin Index</SubTitle>
                        <SubTitle data="true">
                            <Arrow></Arrow>
                            <SubTitle degree>180</SubTitle>
                            <SubTitle percentage>-4.17%</SubTitle>
                        </SubTitle>
                    </SubTitle>
                    <Graph img={'/assets/sample/bbai.png'}></Graph>
                    <GraphLine>
                        <GraphLineColor today></GraphLineColor>
                        <GraphLineName>당일</GraphLineName>
                        <GraphLineColor yesterday></GraphLineColor>
                        <GraphLineName>전일</GraphLineName>
                    </GraphLine>
                </Box>
                <Box>
                    <Title quote>코인시세</Title>
                    <ul>
                        <a href="/">
                            <ListItem>
                                <ListItemInfo name="true">비트코인</ListItemInfo>
                                <ListItemInfoWrap percentage={-2.75}>
                                    <ListItemInfo>54,876,000 KRW</ListItemInfo>
                                    <ListItemInfo></ListItemInfo>
                                </ListItemInfoWrap>
                            </ListItem>
                        </a>
                        <a href="/">
                            <ListItem>
                                <ListItemInfo name="true">이더리움</ListItemInfo>
                                <ListItemInfoWrap percentage={-4.57}>
                                    <ListItemInfo>1,711,500 KRW</ListItemInfo>
                                    <ListItemInfo></ListItemInfo>
                                </ListItemInfoWrap>
                            </ListItem>
                        </a>
                        <a href="/">
                            <ListItem>
                                <ListItemInfo name="true">에이다</ListItemInfo>
                                <ListItemInfoWrap percentage={+1.15}>
                                    <ListItemInfo>1,315 KRW</ListItemInfo>
                                    <ListItemInfo></ListItemInfo>
                                </ListItemInfoWrap>
                            </ListItem>
                        </a>
                        <a href="/">
                            <ListItem>
                                <ListItemInfo name="true">폴카닷</ListItemInfo>
                                <ListItemInfoWrap percentage={-6.11}>
                                    <ListItemInfo>38,600 KRW</ListItemInfo>
                                    <ListItemInfo></ListItemInfo>
                                </ListItemInfoWrap>
                            </ListItem>
                        </a>
                        <a href="/">
                            <ListItem last>
                                <ListItemInfo name="true">리플</ListItemInfo>
                                <ListItemInfoWrap percentage={0.0}>
                                    <ListItemInfo>533 KRW</ListItemInfo>
                                    <ListItemInfo></ListItemInfo>
                                </ListItemInfoWrap>
                            </ListItem>
                        </a>
                    </ul>
                </Box>
            </Wrap>
        </Container>
    );
};

export default CoinQuoteContainer;
