import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 40px 0;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: center;
    background-color: #fff;
`;

const Wrapper = styled.div`
    display: flex;
`;

const Logo = styled.div`
    min-width: 160px;
    & > img {
        width: 120px;
    }
`;

const Information = styled.div`
    color: #999;
    width: 790px;
`;

const InformationMain = styled.div`
  height: 29px;
  font-size: 14px;
  color: #2b2b2b;

  & > span {
      padding: 0 10px;
      border-right: 1px solid #ddd;

      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        border: 0;
      }
    }
  }
`;

const InformationDetail = styled.div`
    font-size: 14px;
    height: 24px;

    & > span {
        padding: 0 10px;
        border-right: 1px solid #ddd;

        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            border: 0;
        }
    }
`;

const SNS = styled.div`
    display: flex;
    margin: 10px 0 20px;
`;

const Icon = styled.div`
    width: 26px;
    height: 26px;
    background-color: #bbb;
    border-radius: 50%;
    margin-right: 12px;

    &.twitter {
        padding: 3px 7px;
    }
    &.facebook {
        padding: 5.4px 9px;
    }
    &.medium {
        padding: 4px 6px;
    }
    &.naver {
        padding: 4px 7px;
    }
    &.linkedin {
        padding: 4px 7px;
    }
    &.youtube {
        padding: 3px 6px;
    }
`;

const Partners = styled.div`
    display: flex;
`;

const Partner = styled.div`
    height: 62px;
    margin-right: 15px;
    background: url('/assets/img/Footer/partner_2019.png') no-repeat;
    opacity: 0.55;

    &.IBM {
        width: 77px;
        background-position: 1px 0px;
    }
    &.NCP {
        width: 120px;
        background-position: -89px 0px;
    }
    &.KoreanNews {
        width: 62px;
        background-position: -223px 1px;
    }
`;

const Copyright = styled.div`
    font-size: 13px;
    margin-top: 6px;
`;

const CustomerService = styled.div`
    width: 210px;

    & > h5 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    & li > a {
        font-size: 14px;
        color: #666;
        line-height: 25px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Company = styled(CustomerService)`
    & li:last-child > a {
        color: #093687;
        font-size: 15px;
        font-weight: 600;
    }
`;

// eslint-disable-next-line
export default () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <img src="/assets/img/navigation/img-logo-color.png" alt="borabit-logo" />
                </Logo>
                <Information>
                    <InformationMain>
                        <span>고객센터</span>
                        <span>1833-5021</span>
                        <span>전라북도 전주시 덕진구 만성북로 21-26,401호(만성동)</span>
                    </InformationMain>
                    <InformationDetail>
                        <span>주식회사 뱅코</span>
                        <span>전라북도 전주시 덕진구 만성북로 21-26,401호(만성동)</span>
                        <span>대표 강대구</span>
                        <span>사업자등록번호 280-88-00977</span>
                    </InformationDetail>
                    <InformationDetail>
                        <span>기사 배열 책임자 박동규</span>
                        <span>청소년 보호 책임자 송세정</span>
                    </InformationDetail>
                    <SNS>
                        <Icon className="twitter">
                            <img src="/assets/img/Footer/icon_sns_twitter.svg" alt="twitter" />
                        </Icon>
                        <Icon className="facebook">
                            <img src="/assets/img/Footer/icon_sns_facebook.svg" alt="facebook" />
                        </Icon>
                        <Icon className="medium">
                            <img src="/assets/img/Footer/icon_sns_medium.svg" alt="medium" />
                        </Icon>
                        <Icon className="naver">
                            <img src="/assets/img/Footer/icon_sns_naver.svg" alt="naver" />
                        </Icon>
                        <Icon className="linkedin">
                            <img src="/assets/img/Footer/icon_sns_linkedin.svg" alt="linkedin" />
                        </Icon>
                        <Icon className="youtube">
                            <img src="/assets/img/Footer/icon_sns_youtube.svg" alt="youtube" />
                        </Icon>
                    </SNS>
                    <Partners>
                        <a href="/">
                            <Partner className="IBM"></Partner>
                        </a>
                        <a href="/">
                            <Partner className="NCP"></Partner>
                        </a>
                        <a href="/">
                            <Partner className="KoreanNews"></Partner>
                        </a>
                    </Partners>
                    <Copyright>Copyright © 2018 - 2021 Banco Inc. All rights reserved.</Copyright>
                </Information>
                <Company>
                    <h5>회사</h5>
                    <ul>
                        <li>
                            <a href="/">회사소개</a>
                        </li>
                        <li>
                            <a href="/">공지사항</a>
                        </li>
                        <li>
                            <a href="/">이용약관</a>
                        </li>
                        <li>
                            <a href="/">Open API 이용약관</a>
                        </li>
                        <li>
                            <a href="/">개인정보처리방침</a>
                        </li>
                    </ul>
                </Company>
                <CustomerService>
                    <h5>고객지원</h5>
                    <ul>
                        <li>
                            <a href="/">자주하는 질문(FAQ)</a>
                        </li>
                        <li>
                            <a href="/">카카오톡 문의(24시간)</a>
                        </li>
                        <li>
                            <a href="/">1:1 문의하기</a>
                        </li>
                        <li>
                            <a href="/">Open API</a>
                        </li>
                        <li>
                            <a href="/">거래 및 입출금 이용안내</a>
                        </li>
                        <li>
                            <a href="/">상장문의 및 제보 (Listening Inquiry)</a>
                        </li>
                    </ul>
                </CustomerService>
            </Wrapper>
        </Container>
    );
};
