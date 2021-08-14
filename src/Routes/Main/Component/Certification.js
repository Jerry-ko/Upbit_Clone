import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 0;
  background-color: #f4f5f9;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
`;
const TitleMent = styled.h4`
  color: #666;
  margin-top: 10px;
  font-weight: 400;
`;

const CertificationSource = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 53px;
`;

const Source = styled.div`
  letter-spacing: 0.5px;
  line-height: 25px;

  &:first-child {
    width: 480px;
  }
  &:last-child {
    width: 640px;
  }

  & > h3 {
    font-size: 20px;
    margin-top: 35px;
    font-weight: 400;
  }
  & > p {
    font-size: 16px;
    margin-top: 10px;
    color: #999;
  }
`;

const SourceImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & > img {
    margin: 0 35px;
  }
  & > img[alt="ISMS__iAS"] {
    width: 88px;
  }
  & > img[alt^="ISO/IEC"] {
    width: 127px;
  }
`;

const CertificationContainer = () => {
  return (
    <Container>
      <Title>국제 표준 및 국내 주요 보안 인증 획득</Title>
      <TitleMent>
        ISMS 및 ISO 인증을 획득한 보안 시스템으로 자산을 안전하게 보호합니다.
      </TitleMent>
      <CertificationSource>
        <Source>
          <SourceImg>
            <img src="/assets/img/mainCertification/isms.png" alt="ISMS" />
          </SourceImg>
          <h3>정보보호관리체계(ISMS)</h3>
          <p>
            기업이 보유하고 있는 중요 정보자산의 관리, 운영 등의
            <br />
            종합적인 정보보호 관리체계를 국가로부터 인증받는 제도
          </p>
        </Source>
        <Source>
          <SourceImg>
            <img src="/assets/img/mainCertification/ias.svg" alt="ISMS__iAS" />
            <img src="/assets/img/mainCertification/iec1.svg" alt="ISO/IEC 1" />
            <img src="/assets/img/mainCertification/iec2.svg" alt="ISO/IEC 2" />
          </SourceImg>
          <h3>ISO/IEC 27001, 27017, 27018</h3>
          <p>
            국제표준화기구(ISO) 및 국제전기기술위원회(IEC)가 제정한
            <br />
            정보보호 관리체계에 대한 국제 보안 표준 인증
          </p>
        </Source>
      </CertificationSource>
    </Container>
  );
};

export default CertificationContainer;
