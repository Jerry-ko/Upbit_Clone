import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as Numbers from "Library/NumberFunction";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

const { Handle } = Slider;
const textInputDefault = "직접입력";

const Container = styled.div`
  position: relative;
  background-color: white;
  font-size: 12px;
  height: 432px;
  padding: 14px;
  color: #666666;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const OrderContainer = styled.div`
  display: flex;
`;

const PriceContainer = styled.div`
  display: flex;

  & a:nth-child(3) {
    border-top: 1px solid #dfe0e5;
    border-bottom: 1px solid #dfe0e5;
  }

  & a:last-child {
    border: 1px solid #dfe0e5;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SliderPanel = styled.div`
  display: ${(props) => (props.View ? "block" : "none")};
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 462px;
  height: 38px;
  margin: 0 0 6px;
  padding: 0 14px;

  & > div:first-child {
    position: absolute;
    width: 265px;
    margin: 7px 45px 0 0;
    box-sizing: border-box;
  }

  & > span {
    width: 50px;
    height: 28px;
    line-height: 28px;
    display: inline-block;
    background-color: #0062df;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0px;
    &:hover {
      text-decoration: underline white;
    }
  }
`;

const TotalContainer = styled.div`
  display: flex;
`;

const Option = styled.div`
  display: relative;
  width: 134px;
  height: 30px;
  line-height: 30px;

  & > i {
    margin-left: 1.5px;
    cursor: pointer;
  }
`;

const Order = styled.div`
  display: inline-block;
  width: 134px;
  height: 53px;
  line-height: 53px;
  box-sizing: border-box;
`;

const OrderText = styled.div`
  display: inline-block;
  width: 328px;
  height: 53px;
  font-size: 18px;
  box-sizing: border-box;
  padding-top: 8px;
  letter-spacing: 1px;
  text-align: right;
  color: #2b2b2b;
  font-weight: 600;

  & > span {
    font-size: 11px;
    color: #666;
    font-weight: 400;
    letter-spacing: 0.05em;
  }
`;

const Price = styled.div`
  display: inline-block;
  width: 134px;
  height: 38px;
  line-height: 38px;
  margin: 0 0 10px;
  box-sizing: border-box;
`;

const Quantity = styled.div`
  width: 134px;
  height: 38px;
  line-height: 38px;
  margin: 0 0 6px;
  box-sizing: border-box;
`;

const QuantityCon = styled.div`
  display: flex;
`;

const QuantityText = styled.input`
  width: 328px;
  height: 38px;
  line-height: 36px;
  letter-spacing: 1px;
  text-align: right;
  font-size: 14px;
  padding: 0 14px;
  margin-bottom: 6px;
  border: 1px solid #dfe0e5;
  box-sizing: border-box;
`;

const QuantityPanel = styled.div`
  display: ${(props) => (props.isView ? "none" : "block")};
`;

const QuantityBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 462px;
  height: 38px;
  font-size: 12px;
  color: #2b2b2b;

  a:last-child {
    color: ${(props) =>
      props.isView === textInputDefault ? "#999" : "#115dcb"};
    border-color: ${(props) =>
      props.isView === textInputDefault ? "#dfe0e5" : "#115dcb"};
  }
`;

const PriceNumber = styled.input`
  display: inline-block;
  width: 250px;
  height: 38px;
  padding: 0 14px;
  text-align: right;
  border: 1px solid #dfe0e5;
  box-sizing: border-box;
  font-weight: bold;
`;

const Calculate = styled.a`
  display: inline-block;
  width: 38px;
  height: 38px;
  padding: 0;
  cursor: pointer;
  line-height: 38px;
  text-align: center;
  box-sizing: border-box;
  font-size: 16px;
  color: #84868d;
  background-color: #f9fafc;
`;

const Total = styled.div`
  width: 134px;
  height: 38px;
  line-height: 38px;
`;

const TotalText = styled.input`
  width: 328px;
  height: 38px;
  line-height: 36px;
  font-size: 14px;
  padding: 0 14px;
  border: 1px solid #dfe0e5;
  letter-spacing: 1px;
  text-align: right;
  color: #666;
  box-sizing: border-box;
`;

const Info = styled.div`
  position: absolute;
  bottom: 14px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 462px;
  height: 20px;
  margin: 0 0 12px;
`;

const Access = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignUp = styled.div`
  display: inline-block;
  width: 108px;
  height: 44px;
  line-height: 44px;
  background-color: #0c3887;
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = styled.div`
  display: inline-block;
  width: 344px;
  height: 44px;
  line-height: 44px;
  background-color: #115dcb;
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Tip = styled.div`
  position: absolute;
  background-color: white;
  top: 45px;
  left: 37px;
  width: 250px;
  height: 230px;
  padding: 10px;
  font-size: 11px;
  line-height: 1.5;
  border: 1px solid #ccc;
  cursor: pointer;

  display: ${(props) => (props.isView ? "block" : "none")};
`;

const CheckBox = styled.div`
  line-height: 30px;
  height: 30px;
  width: 328px;
  margin: 0;
  display: flex;
  align-items: center;

  & div:first-child {
    color: #666;
  }

  & div:last-child {
    width: 100px;
  }
`;

const Check = styled.div`
  display: inline-block;
  width: 68px;
  height: 18px;
  line-height: 18px;
  margin: 0 20px 0 0;
  font-size: 14px;
  text-align: baseline;
  color: #cccdd5;
`;

const MinimumOrderAmount = styled.div`
  width: 146px;
  height: 20px;
  line-height: 20px;
  margin: 0 14px 0 0;
  padding: 0 0 0 8px;
  font-size: 12px;
  color: #2b2b2b;
  box-sizing: border-box;
`;

const Fees = styled.div`
  width: 85px;
  height: 20px;
  line-height: 20px;
  padding: 0 0 0 8px;
  font-size: 12px;
  box-sizing: border-box;
  color: #2b2b2b;
`;

const QuanBtn = styled.a`
  width: 60px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  color: #2b2b2b;
  margin: 0 0 0 7px;
  box-sizing: border-box;
  border: 1px solid #dfe0e5;
  cursor: pointer;

  ${(props) =>
    props.ordercount &&
    css`
      border: 1px solid #1660cc;
      color: #1660cc;
      font-weight: 700;
    `}
`;

const Content = () => {
  // 툴팁용
  const [isTip, setIsTip] = useState(false);
  const hoverTip = () => {
    setIsTip(!isTip);
  };

  // 플러스/마이너스 연산용
  const [priceNumber, setPriceNumber] = useState(67640000);
  const handleCalculateCtrl = (number) => {
    let getCalcute = priceNumber + number;
    if (0 > getCalcute) {
      getCalcute = 0;
    }
    setPriceNumber(getCalcute);
  };

  //툴팁용
  const [isTool, setIsTool] = useState(false);
  const handleClickTool = () => {
    setIsTool(!isTool);
  };

  // 슬라이더 확인버튼 클릭시
  const [confirmNumber, setConfirmNumber] = useState(1);
  const [confirmButtonText, setConfirmButtonText] = useState(textInputDefault);
  const handleClickConfirm = () => {
    setConfirmButtonText(confirmNumber + "%");
    handleClickTool();
  };

  // 퍼센트용
  const [countOrder, setOrderCount] = useState(0);
  const handleClickCount = (number) => {
    setOrderCount(number);
    setConfirmButtonText(textInputDefault);
  };

  const handleChangeConfirm = (value) => {
    setConfirmNumber(value);
    setOrderCount(value);
  };

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value} %`}
        visible={dragging}
        placement="top"
        key={index}
        min={1}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <Container>
      <OptionContainer>
        <Option>
          주문구분
          <i
            className="far fa-question-circle fa-lg"
            onMouseOver={hoverTip}
            onMouseOut={hoverTip}
          ></i>
          <Tip isView={isTip}>
            <h5>[[지정가주문]]</h5>
            주문 수량과 가격을 직접 결정하는 주문입니다. 매매체결 여부보다
            가격을 우선으로 생각할 때 사용 합니다.
            <h5>[[시장가주문]]</h5>
            매수 시 주문 금액/매도 시 주문 수량만 설정하면, 시장가격으로 즉시
            체결시키는 주문입니다. 빠르게 매매를 체결하고 싶을 때 사용합니다.
            <h5>[예약주문]</h5>
            설정한 감시 가격에 도달하면, 설정된 주문을 자동으로 실행시키는
            주문입니다. 주로 손실 제한/이익 실현 등의 목적으로 사용합니다.
          </Tip>
        </Option>
        <CheckBox>
          <Check>
            <span className="custom-radio">
              <input
                type="radio"
                name="item-buy"
                id="item_limit"
                defaultChecked
              />
              <label htmlFor="item_limit">지정가</label>
            </span>
          </Check>
          <Check>
            <span className="custom-radio">
              <input
                type="radio"
                name="item-buy"
                id="item_market_price"
                disabled={true}
              />
              <label htmlFor="item_market_price">시장가</label>
            </span>
          </Check>
          <Check>
            <span className="custom-radio">
              <input
                type="radio"
                name="item-buy"
                id="item_reservation_price"
                disabled={false}
              />
              <label htmlFor="item_reservation_price">예약-지정가</label>
            </span>
          </Check>
        </CheckBox>
      </OptionContainer>

      <OrderContainer>
        <Order>주문가능</Order>
        <OrderText>
          0 <span>KRW</span>
        </OrderText>
      </OrderContainer>

      <PriceContainer>
        <Price>
          매수가격<span>(KRW)</span>
        </Price>
        <PriceNumber
          type="text"
          value={Numbers.format(priceNumber)}
          onChange={(e) => this.value(priceNumber)}
        ></PriceNumber>
        <Calculate onClick={() => handleCalculateCtrl(-1000)}>-</Calculate>
        <Calculate onClick={() => handleCalculateCtrl(1000)}>+</Calculate>
      </PriceContainer>

      <QuantityContainer>
        <QuantityCon>
          <Quantity>
            주문수량<span>(BTC)</span>
          </Quantity>
          <QuantityText type="text" defaultValue="0"></QuantityText>
        </QuantityCon>
        <QuantityPanel isView={isTool}>
          <QuantityBtn isView={confirmButtonText}>
            <QuanBtn
              isView={confirmButtonText}
              onClick={() => handleClickCount(10)}
              ordercount={
                countOrder === 10 && confirmButtonText === textInputDefault
              }
            >
              10%
            </QuanBtn>
            <QuanBtn
              isView={confirmButtonText}
              onClick={() => handleClickCount(25)}
              ordercount={
                countOrder === 25 && confirmButtonText === textInputDefault
              }
            >
              25%
            </QuanBtn>
            <QuanBtn
              isView={confirmButtonText}
              onClick={() => handleClickCount(50)}
              ordercount={
                countOrder === 50 && confirmButtonText === textInputDefault
              }
            >
              50%
            </QuanBtn>
            <QuanBtn
              isView={confirmButtonText}
              onClick={() => handleClickCount(100)}
              ordercount={
                countOrder === 100 && confirmButtonText === textInputDefault
              }
            >
              100%
            </QuanBtn>
            <QuanBtn
              onClick={handleClickTool}
              ordercount={confirmButtonText !== textInputDefault}
            >
              {confirmButtonText}
            </QuanBtn>
          </QuantityBtn>
        </QuantityPanel>
        <SliderPanel View={isTool}>
          <SliderContainer>
            <div>
              <Slider handle={handle} min={1} onChange={handleChangeConfirm} />
            </div>
            <span onClick={handleClickConfirm}>확인</span>
          </SliderContainer>
        </SliderPanel>
      </QuantityContainer>

      <TotalContainer>
        <Total>
          주문총액<span>(KRW)</span>
        </Total>
        <TotalText defaultValue="0"></TotalText>
      </TotalContainer>

      <Info>
        <Summary>
          <MinimumOrderAmount>최소주문금액: 1,000 KRW</MinimumOrderAmount>
          <Fees>수수료: 0.05%</Fees>
        </Summary>
        <Access>
          <SignUp>회원가입</SignUp>
          <Login>로그인</Login>
        </Access>
      </Info>
    </Container>
  );
};
export default Content;
