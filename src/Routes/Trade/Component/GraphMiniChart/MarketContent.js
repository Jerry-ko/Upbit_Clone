import styled from "styled-components";

const Container = styled.div``;

const MarketImg = styled.img`
  width: 100%;
`;

const MarketContent = () => {
  return (
    <Container>
      <MarketImg
        src={"assets/img/mainGraphMiniChart/marketImg.png"}
        alt="Market"
      ></MarketImg>
    </Container>
  );
};

export default MarketContent;
