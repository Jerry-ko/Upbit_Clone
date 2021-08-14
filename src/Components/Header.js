import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Navigation from 'Components/Navigation';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    color: ${({ main }) => (main ? '#2b2b2b' : '#f4f5f8')};
    background-color: ${({ main }) => (main ? '#f4f5f8' : '#093687')};
    z-index: 100;

    ${props =>
        props.current === '/' &&
        css`
            height: 80px;
        `}

    ${props =>
        props.current !== '/' &&
        css`
            height: 60px;
        `}
`;

const HeaderWrapper = styled.div`
    max-width: 1400px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 1200px) {
        width: 1200px;
    }
    @media screen and (min-width: 1201px) and (max-width: 1400px) {
        width: 100%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Logo = styled(Link)`
    width: 120px;
    height: 50px;
    margin-top: 0px;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 100;
`;

/**
 * 메인일경우 className 추가
 *
 * @param {*} isMain
 */
const setMainClassName = isMain => {
    var getBody = document.getElementsByTagName('body')[0];
    if (isMain) {
        getBody.classList.add('main');
    } else {
        getBody.classList.remove('main');
    }
};

/**
 * 페이지 로드시마다 상단으로 이동
 */
const loadPageTop = (top = 0) => {
    document.documentElement.scrollTop = top;
};

/**
 * Header
 *
 * @param {*} props
 */

const HeaderContainer = ({ location: { pathname } }) => {
    const isMain = pathname === '/';

    // page load시 상단으로 이동
    loadPageTop();

    // 메인일경우 className 추가
    setMainClassName(isMain);

    return (
        <Header current={pathname} main={isMain}>
            <HeaderWrapper>
                <LogoContainer>
                    <Logo img={isMain === true ? '/assets/img/navigation/img-logo-color.png' : '/assets/img/navigation/img-logo-white.png'} to="/"></Logo>
                </LogoContainer>
                <Navigation className="head-navigation"></Navigation>
            </HeaderWrapper>
        </Header>
    );
};

export default withRouter(HeaderContainer);
