import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import useInterval from 'Library/UseInterval';

const WrapperMobileApp = styled.div`
    padding-top: 0;
    margin: 0 auto;
    position: relative;
    width: auto;
`;
const WrapperMobileAppContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 620px;

    & button {
        border: 0;
        width: 400px;
        height: 140px;
        display: inline-block;
        padding: 0;
        border-radius: 0;
        background: transparent;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        z-index: 99;
        outline: none;
    }

    /* Active */
    ${props =>
        props.active !== 0 &&
        css`
            & > div:nth-child(${props.active}) {
                &,
                button > img:first-child {
                    opacity: 1;
                }
            }
        `}
`;
const ItemMobileApp = styled.div`
    width: 400px;
    position: absolute;
    opacity: 0.8;

    /* TOP/LEFT */
    ${props =>
        props.isTop &&
        props.isLeft &&
        css`
            top: 112px;
            left: -40px;
        `}

    /* BOTTOM/LEFT */
    ${props =>
        !props.isTop &&
        props.isLeft &&
        css`
            bottom: 34px;
            left: 45px;
        `}

    /* TOP/RIGHT */
    ${props =>
        props.isTop &&
        !props.isLeft &&
        css`
            top: 75px;
            right: 5px;
        `}

    /* BOTTOM/RIGHT */
    ${props =>
        !props.isTop &&
        !props.isLeft &&
        css`
            bottom: 82px;
            right: 28px;
        `}

    & button {
        &,
        img {
            position: absolute !important;
        }

        img {
            &:first-child {
                opacity: 0;
                z-index: 1;
            }
        }

        /* LEFT */
        ${props =>
            props.isLeft &&
            css`
                &,
                img {
                    top: 0;
                    right: 0;
                }
            `}

        /* RIGHT */
        ${props =>
            !props.isLeft &&
            css`
                &,
                img {
                    top: 0;
                    left: 0;
                }
            `}
    }

    & p {
        /* LEFT */
        ${props =>
            props.isLeft &&
            css`
                text-align: right;
                padding-right: 100px;
            `}

        /* RIGHT */
        ${props =>
            !props.isLeft &&
            css`
                text-align: left;
                padding-left: 100px;
            `}
    }

    & * {
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
`;
const ItemMobileAppMent = styled.p``;
const ItemMobileAppTitle = styled.span`
    display: block;
    color: #fff;
    font-size: 20px;
    margin-top: 28px;
    letter-spacing: 1px;
    line-height: 25px;
`;
const ItemMobileAppSubText = styled.span`
    display: block;
    margin-top: 10px;
    color: #8ea4cb;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 25px;
`;
const ImgMobileFrame = styled.img`
    position: absolute;
    top: 46px;
    left: 50%;
    margin-left: -172px;
    z-index: 3;
`;
const ImgMobileSlide = styled.div`
    width: 234px;
    overflow: hidden;
    position: absolute;
    top: 123px;
    left: 50%;
    margin-left: -117px;
    z-index: 2;
    background-color: #444;
`;
const ImgMobileSlideContainer = styled.div`
    position: relative;
    width: 400%;

    /* Slide left ?????? */
    ${props =>
        props.active > 0 &&
        css`
            left: ${100 - props.active * 100}%;
        `}
`;
const ImgMobileSlideItem = styled.div`
    float: left;
    width: 25%;
`;

const MobileAppItemsContainer = () => {
    const delayTime = 3000;
    const [activeItem, setActive] = useState(1);
    const [activeDelay, setActiveDeley] = useState(delayTime);

    // Custom SetInterval
    useInterval(() => {
        if (activeItem === 4) {
            setActive(1);
        } else {
            setActive(activeItem + 1);
        }
    }, activeDelay);

    // ????????? ?????? (delayTime ?????????)
    const setChangeItem = item => {
        setActive(item);
        setActiveDeley(null);
        setTimeout(() => {
            setActiveDeley(delayTime);
        }, 10);
    };

    return (
        <WrapperMobileApp>
            {/* ?????? ?????? ????????? */}
            <WrapperMobileAppContainer active={activeItem}>
                <ItemMobileApp isLeft={true} isTop={true}>
                    <button onClick={() => setChangeItem(1)}>
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_01.png'} alt="" />
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_dot.png'} alt="" />
                    </button>
                    <ItemMobileAppMent>
                        <ItemMobileAppTitle>????????? ?????? ?????? ??????</ItemMobileAppTitle>
                        <ItemMobileAppSubText>
                            ?????? ???????????? ????????? ??????????????????
                            <br />
                            ????????? ????????? ???????????? ??????
                        </ItemMobileAppSubText>
                    </ItemMobileAppMent>
                </ItemMobileApp>
                <ItemMobileApp isLeft={false} isTop={true}>
                    <button onClick={() => setChangeItem(2)}>
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_02.png'} alt="" />
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_dot.png'} alt="" />
                    </button>
                    <ItemMobileAppMent>
                        <ItemMobileAppTitle>????????? ?????? ??? ?????? ??????</ItemMobileAppTitle>
                        <ItemMobileAppSubText>
                            ????????? ????????? ????????? ????????? ??????
                            <br />
                            ?????? ?????? ??????
                        </ItemMobileAppSubText>
                    </ItemMobileAppMent>
                </ItemMobileApp>
                <ItemMobileApp isLeft={false} isTop={false}>
                    <button onClick={() => setChangeItem(3)}>
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_03.png'} alt="" />
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_dot.png'} alt="" />
                    </button>
                    <ItemMobileAppMent>
                        <ItemMobileAppTitle>????????? ?????? ????????? ??????</ItemMobileAppTitle>
                        <ItemMobileAppSubText>
                            ????????? ???????????? ?????? ??????
                            <br />
                            ????????? ????????? ??? ?????? ????????? ?????? ??????
                        </ItemMobileAppSubText>
                    </ItemMobileAppMent>
                </ItemMobileApp>
                <ItemMobileApp isLeft={true} isTop={false}>
                    <button onClick={() => setChangeItem(4)}>
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_04.png'} alt="" />
                        <img src={'/assets/img/mainMobileApp/mobileApp_item_dot.png'} alt="" />
                    </button>
                    <ItemMobileAppMent>
                        <ItemMobileAppTitle>????????? MTS ????????? ????????? ??????</ItemMobileAppTitle>
                        <ItemMobileAppSubText>
                            ????????? ????????? ????????? ?????? ??????
                            <br />
                            ???????????? ???????????? ??????
                        </ItemMobileAppSubText>
                    </ItemMobileAppMent>
                </ItemMobileApp>
            </WrapperMobileAppContainer>

            {/* ????????? ???????????? */}
            <ImgMobileSlide>
                <ImgMobileSlideContainer active={activeItem}>
                    <ImgMobileSlideItem>
                        <img src={'/assets/img/mainMobileApp/mobileApp_01.png'} alt="" />
                    </ImgMobileSlideItem>
                    <ImgMobileSlideItem>
                        <img src={'/assets/img/mainMobileApp/mobileApp_02.png'} alt="" />
                    </ImgMobileSlideItem>
                    <ImgMobileSlideItem>
                        <img src={'/assets/img/mainMobileApp/mobileApp_03.png'} alt="" />
                    </ImgMobileSlideItem>
                    <ImgMobileSlideItem>
                        <img src={'/assets/img/mainMobileApp/mobileApp_04.png'} alt="" />
                    </ImgMobileSlideItem>
                </ImgMobileSlideContainer>
            </ImgMobileSlide>

            {/* ????????? ????????? */}
            <ImgMobileFrame src={'assets/img/mainMobileApp/mobileFrame.png'}></ImgMobileFrame>
        </WrapperMobileApp>
    );
};

export default MobileAppItemsContainer;
