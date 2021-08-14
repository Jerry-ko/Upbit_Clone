import styled from "styled-components";

const Container = styled.div``;

const ChartImg = styled.img`
  width: 100%;
`;

const ChartContent = () => {
  return (
    <Container>
      <ChartImg src={"/assets/img/mainGraphMiniChart/chartImg.png"}></ChartImg>
    </Container>
  );
};

export default ChartContent;
