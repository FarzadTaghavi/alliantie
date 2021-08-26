import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Intro() {
  return (
    <Container>
      <Left>
        <Title>Iedereen doet en telt mee in de digitale samenleving</Title>
        <Desc>
          <Arrow />
          Over de Aliantie
        </Desc>
      </Left>
      <Right>IMAGE</Right>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: auto;
  max-width: 1100px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: 72px;
  display: flex;

  @media only screen and (max-width: 960px) {
    width: 100%;
    font-size: 50px;
    margin: 10px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  display: flex;
  color: #0c3caf;
  margin-top: 40px;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Arrow = styled(ArrowForwardIcon)`
  margin: 5px;
  margin-right: 15px;
  background-color: #0c3caf;
  color: white;
  border-radius: 15px;
  padding: 5px;
  font-size: 5px;
`;
