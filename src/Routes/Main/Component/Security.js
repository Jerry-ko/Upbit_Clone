import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 80px 0;
    background-color: #fff;
`;

const Title = styled.h2`
    font-size: 36px;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.5px;
`;
const TitleMent = styled.h4`
    color: #666;
    margin-top: 10px;
    font-weight: 400;
    letter-spacing: 0.5px;
`;

const SecurityImg = styled.div`
    margin: 50px 0 40px;
`;
const SecurityWay = styled.div`
    display: flex;
    justify-content: center;
`;
const Way = styled.div`
    width: 390px;
    height: 111px;
    padding: 0 20px;
    letter-spacing: 0.5px;

    & > h3 {
        font-size: 20px;
        font-weight: 400;
    }
    & > p {
        font-size: 16px;
        margin-top: 10px;
        color: #999;
        line-height: 25px;
    }
`;

const SecurityContainer = () => {
    return (
        <Container>
            <Title>강력한 멀티팩터 인증으로 24시간 안심거래</Title>
            <TitleMent>글로벌 최고 수준의 파트너들과 함께 가장 안전한 보안체계를 구축합니다.</TitleMent>
            <SecurityImg>
                <img src="/assets/img/mainSecurity/securityWay.png" alt="security-way" />
            </SecurityImg>
            <SecurityWay>
                <Way>
                    <h3>월렛보안</h3>
                    <p>
                        콜드월렛에 안전하게 분리 보관
                        <br />
                        최고 수준의 보안 시스템을 기반으로
                        <br />
                        다양한 디지털 자산 지갑을 안전하게 운영
                    </p>
                </Way>
                <Way>
                    <h3>계정보안</h3>
                    <p>
                        OTP보다 간편하고 안전한 카카오페이
                        <br />
                        간편인증으로 2채널 추가인증
                        <br />
                        체계적으로 고안된 보안시스템으로 24시간 모니터링
                    </p>
                </Way>
            </SecurityWay>
        </Container>
    );
};

export default SecurityContainer;
