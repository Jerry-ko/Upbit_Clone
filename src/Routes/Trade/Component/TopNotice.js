import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Container = styled.article`
    margin: 0 10px 10px 0;
    color: #000;
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 4px #dee1e7;
    box-shadow: 2px 2px 4px #dee1e7;
    padding: 13px 0;
    overflow: hidden;
    display: ${(props) => props.isView ? 'none' : 'flex'};
    align-items: center;

    & > div {
        flex: 1 1 auto;
        font-size: 14px;

        strong {
            float: left;
            margin: 0 15px;
            color: #0E3687;
            font-weight: 600;
        }
        a {
            color: #777;
            display: block;
        }
    }
    & > a {
        position: relative;
        text-indent: -9999px;
        padding: 0 15px;

        &, &:before {
            width: 20px;
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 16px;
            background: url('/assets/img/icon-close.png') center no-repeat;
        }
    }
`;
const FontAwesome = styled(FontAwesomeIcon)`
    margin-right: 6px;
`;
const Slink = styled(Link)``;

const TopNoticeContainer = () => {
    const [closeNotice, setCloseNotice] = useState(false);
    const handleClickCloseNotice = () => {
        setCloseNotice(!closeNotice);
    }
    return (
        <Container isView={closeNotice}>
          <div className='clearfix'>
              <strong>
                  <FontAwesome icon={faExclamationCircle}></FontAwesome>
                  공지
              </strong>
              <Slink to="#">
                  <p>[마켓] 고머니2(GOM2) 거래 지원 종료 안내</p>
              </Slink>
          </div>
          <Slink to="#" title="닫기" onClick={handleClickCloseNotice}>닫기</Slink>
      </Container>
    );
};

export default TopNoticeContainer;
