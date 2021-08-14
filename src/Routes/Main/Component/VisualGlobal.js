import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CountUp from 'react-countup';

const easingFn = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
};

const Container = styled.div`
    height: 500px;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #f4f5f8 url(${props => props.img}) no-repeat center 100%;
    background-position: center 20px;
    border-top: 1px solid white;
`;

const Wrapper = styled.div`
    max-width: 1400px;
    height: 580px;
    width: 100%;
    position: relative;
`;

const TextBox = styled.div``;

const NoticeBox = styled.div`
    position: absolute;
    background-color: #0062dfcc;
    padding: 20px;
    width: 340px;
    top: 23px;
    right: 25px;
    line-height: 25px;
    margin-top: 10px;
    letter-spacing: -0.6px;
`;

const MainText = styled.div`
    text-align: center;
    position: absolute;
    display: block;
    top: 90px;
    letter-spacing: -1px;
    font-size: 36px;
    color: #2b2b2b;
    width: 100%;
    font-family: 'Noto Sans KR';
`;

const SubText = styled.div`
    text-align: center;
    font-size: 16px;
    width: 100%;
    display: block;
    color: #666;
    position: absolute;
    top: 144px;
    z-index: 1;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.5px;
`;

const InfoBox = styled.div`
    width: 100%;
    margin: 10px auto 0;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 188px;
`;

const NoticeTitle = styled.div`
    color: #ffc008;
    font-size: 13px;
    font-weight: 700;
    text-align: left;
`;

const NoticeMore = styled.div`
    position: absolute;
    background-color: white;
    top: 17px;
    right: 22px;
    background: transparent url(${props => props.img}) no-repeat 0 0;
    width: 20px;
    height: 20px;
`;

const NoticeContent = styled.ul`
    font-size: 13px;
    color: #fff;
`;

const Infomation = styled.div`
    display: flex;
    margin-bottom: 48px;
`;

const InfoCoin = styled.div``;

const InfoMarkets = styled.div``;

const Buttons = styled.div``;

const Icon01 = styled.img`
    position: absolute;
    top: 50px;
    left: 215px;
`;

const Icon02 = styled.img`
    position: absolute;
    top: 255px;
    left: 60px;
`;

const Icon03 = styled.img`
    position: absolute;
    top: 145px;
    right: 372px;
`;

const Icon04 = styled.img`
    position: absolute;
    bottom: 170px;
    right: 123px;
`;

const CoinNumber = styled.div`
    color: #093687;
    font-size: 48px;
    width: 170px;
    font-weight: 600;
`;

const CoinText = styled.div`
    color: #7588aa;
    font-size: 16px;
    width: 170px;
`;

const MarketNumber = styled.div`
    color: #093687;
    font-size: 48px;
    width: 170px;
    font-weight: 600;
`;

const MarketText = styled.div`
    color: #7588aa;
    font-size: 16px;
    width: 170px;
`;

const InfoDivider = styled.div`
    height: 60px;
    width: 0.1px;
    position: absolute;
    background-color: #7588aa;
    opacity: 0.5;
    top: 20px;
    right: 700px;
`;

const Notice = styled.div`
    display: flex;
`;

const LookLink = styled(Link)`
    margin: 0 5px;
    width: 150px;
    height: 46px;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    line-height: 46px;
    color: #fff;
    font-size: 16px;
    background-color: #0062df;
    cursor: pointer;
`;

const LoginLink = styled.a`
    margin: 0 5px;
    width: 150px;
    height: 46px;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    line-height: 46px;
    color: #fff;
    font-size: 16px;
    background-color: #093687;
    cursor: pointer;
`;

const NoticeImg = styled.img`
    padding-left: 10px;
    background: transparent url(${props => props.img}) no-repeat 0;
`;

const NoticeLink = styled.a`
    font-weight: 200;
    cursor: pointer;
    ${Notice}:hover & {
        text-decoration: underline;
    }
`;

const VisualGlobalContainer = () => {
    return (
        <Container img={'/assets/img/mainVisualGlobal/visualGlobal_bg.png'}>
            <Wrapper>
                <TextBox>
                    <MainText>가장 신뢰받는 글로벌 표준 디지털 자산 거래소</MainText>
                    <SubText>안전하고 투명한 시스템으로 빠르고 편리한 거래 환경을 제공합니다.</SubText>
                    <InfoBox>
                        <Infomation>
                            <InfoCoin>
                                <CoinNumber>
                                    <CountUp end={182} easingFn={easingFn}></CountUp>
                                </CoinNumber>
                                <CoinText>Coins</CoinText>
                            </InfoCoin>
                            <InfoDivider></InfoDivider>
                            <InfoMarkets>
                                <MarketNumber>
                                    <CountUp end={295} easingFn={easingFn}></CountUp>
                                </MarketNumber>
                                <MarketText>Markets</MarketText>
                            </InfoMarkets>
                        </Infomation>
                        <Buttons>
                            <LookLink to="/trade">거래소 둘러보기</LookLink>
                            <LoginLink to="#">로그인</LoginLink>
                        </Buttons>
                    </InfoBox>
                    <Icon01 src="/assets/img/mainVisualGlobal/visualGlobal_icon_01.png" />
                    <Icon02 src="/assets/img/mainVisualGlobal/visualGlobal_icon_02.png" />
                    <Icon03 src="/assets/img/mainVisualGlobal/visualGlobal_icon_03.png" />
                    <Icon04 src="/assets/img/mainVisualGlobal/visualGlobal_icon_04.png" />
                </TextBox>

                <NoticeBox>
                    <NoticeTitle>Notice</NoticeTitle>
                    <NoticeMore title="공지사항" img={'/assets/img/mainVisualGlobal/visualGlobal_ellipsis.png'} />
                    <NoticeContent>
                        <Notice>
                            <NoticeImg img={'/assets/img/mainVisualGlobal/visualGlobal_dot.png'} />
                            <NoticeLink>[이벤트] 신규 가입 회원 대상 업비트 X 밀킄코인 이벤...</NoticeLink>
                        </Notice>
                        <Notice>
                            <NoticeImg img={'/assets/img/mainVisualGlobal/visualGlobal_dot.png'} />
                            <NoticeLink>[거래] BTC 마켓 디지털 자산 추가 (니어프로토콜 NE...</NoticeLink>
                        </Notice>
                        <Notice>
                            <NoticeImg img={'/assets/img/mainVisualGlobal/visualGlobal_dot.png'} />
                            <NoticeLink>[디지털 자산] 아이오에스티(IOST) 보유 회원 대상 도... </NoticeLink>
                        </Notice>
                    </NoticeContent>
                </NoticeBox>
            </Wrapper>
        </Container>
    );
};

export default VisualGlobalContainer;
