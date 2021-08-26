import React from "react";
import styled from "styled-components";

function SectionOne() {
  return (
    <Container>
      <BlockWrapper>
        <BlockOne>
          <Title>Alleenstaanden </Title>
          <Desc>
            Bij scheiden of overlijden levert dit vaak problemen op. Dan blijkt
            één van de partners digitaal niet meer mee te kunnen.
          </Desc>
          <Link>Bekijk themapagina</Link>
        </BlockOne>
        <BlockTwo>
          <Title>18-jarigen</Title>
          <Desc>
            Zelfstandig worden betekent veel rechten en plichten. Veel jongeren
            ervaren dit als een onoverzichtelijke, vaak digitale, rompslomp.
          </Desc>
          <Link>Bekijk themapagina</Link>
        </BlockTwo>
        <BlockThree>
          <Title>Ouderen</Title>
          <Desc>
            Digitalisering, alleen het woord al jaagt veel ouderen angst aan.
            Terwijl juist ouderen er veel profijt van kunnen hebben.
          </Desc>
          <Link>Bekijk themapagina</Link>
        </BlockThree>
      </BlockWrapper>
      <SecondWrapper>
        <BlockFour>
          <Title>Technostress bij (jong)werkenden</Title>
          <DescLong>
            Digitalisering, alleen het woord al jaagt veel ouderen angst aan.
            Terwijl juist ouderen er veel profijt van kunnen hebben.
          </DescLong>
          <Link>Bekijk themapagina</Link>
        </BlockFour>
        <BlockFive>
          <Title>Opvoeders en kinderen</Title>
          <DescLong>
            Digitalisering, alleen het woord al jaagt veel ouderen angst aan.
            Terwijl juist ouderen er veel profijt van kunnen hebben.
          </DescLong>
          <Link>Bekijk themapagina</Link>
        </BlockFive>
      </SecondWrapper>
    </Container>
  );
}

export default SectionOne;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: auto;
  max-width: 1100px;
  margin-bottom: 100px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const BlockOne = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 310px;
  height: 294px;
  margin-top: 36px;
  /* margin-right: 52px; */
  padding: 10px;
  border-radius: 25px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  display: flex;
  background-color: white;
  padding: 20px 0px 0px 15px;
`;

const Desc = styled.p`
  display: flex;
  background-color: white;
  width: 58%;
  height: 150px;
  font-size: 16px;
  padding: 15px;
  color: #6c5d78;
`;

const DescLong = styled.p`
  display: flex;
  background-color: white;
  width: 60%;
  font-size: 16px;
  padding: 20px;
  height: 100%;
  color: #6c5d78;
`;

const BlockTwo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 310px;
  height: 294px;
  margin-top: 36px;
  /* margin-right: 52px; */
  padding: 10px;
  border-radius: 25px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const BlockThree = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 310px;
  height: 294px;
  padding: 10px;
  margin-top: 36px;
  border-radius: 25px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const BlockFour = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 500px;
  height: 220px;
  margin-top: 36px;
  padding: 15px;
  border-radius: 25px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const BlockFive = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 500px;
  height: 220px;
  margin-top: 36px;
  padding: 15px;
  border-radius: 25px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Link = styled.p`
  display: flex;
  background-color: transparent;
  padding: 20px 0px 5px 15px;
  color: #0c3caf;
`;
