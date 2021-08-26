import React from "react";
import styled from "styled-components";
import women from "../assets/women.jpg";
import laptop from "../assets/laptop.jpg";

function SectionTwo() {
  return (
    <Container>
      <Title>Nieuws</Title>
      <Image src={women} />
      <InterviewWrapper>
        <Left>
          “Sociale steun in het werk is een zeer belangrijke bron tegen
          werkstress.”
        </Left>
        <Right>
          <ArticleContentInterView>
            Sandra Roodenburg is als psycholoog werkzaam bij het kenniscentrum
            van de Inspectie SZW. Ze is op dit moment bezig met haar
            masterscriptie over telepressure en burn-outklachten. “Mensen
            verbieden om in het weekend op hun mails te reageren, kan evengoed
            stressvol zijn.”
            <br></br>
            <br></br>
            Lees het interview op <Link>echtcontact.nu</Link>
          </ArticleContentInterView>
        </Right>
      </InterviewWrapper>
      <Fifty>
        <Block50 src={laptop} />
        <Byline>
          <Type>Interview</Type>
          met Anouk Vermeij
        </Byline>
        <ArticleTitleBig>
          “Mensen zijn van nature sociale dieren.”
        </ArticleTitleBig>
        <ArticleContent>
          Lees het interview op <Link>echtcontact.nu</Link>
        </ArticleContent>
      </Fifty>
      <TwentyFive>
        <Block25 />
        <Byline>
          <Type>Artikel</Type>
        </Byline>
        <ArticleTitleSmall>
          Bij thuiswerken ligt technostress op de loer
        </ArticleTitleSmall>
        <ArticleContent>
          Lees het interview op <br></br>
          <Link>volkskrant.nl</Link>
        </ArticleContent>
      </TwentyFive>
      <TwentyFive>
        <Block25Small />
        <Byline>
          <Type>Artikel</Type>
        </Byline>
        <ArticleTitleSmall>
          Meer thuiswerken betekent nóg meer schermtijd – hoe houd<br></br> je
          werk en privé uit<br></br> elkaar?
        </ArticleTitleSmall>
        <ArticleContent>
          Lees het interview op <br></br>
          <Link>nrc.nl</Link>
        </ArticleContent>
      </TwentyFive>
      <FacebookContainer>
        <LineOne>
          Meer thuiswerken betekent nóg meer schermtijd <br></br>
        </LineOne>
        <LineTwo>
          Hoe houdt u werk en privé uit elkaar?<br></br>
        </LineTwo>
        <LineThree>Discussiëer mee op Facebook</LineThree>
      </FacebookContainer>
    </Container>
  );
}

export default SectionTwo;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 20px;
  margin: auto;
  max-width: 1440px;
  background-color: white;
`;

const Title = styled.p`
  background-color: transparent;
  padding: 60px 0 20px 170px;
  color: #210d3a;
  font-size: 3.2rem;
  @media only screen and (max-width: 480px) {
    padding: 10px;
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  display: flex;
  height: 420px;
  width: 100%;
  margin: 20px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  overflow: auto;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const InterviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-bottom: 96px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-size: 36px;
  line-height: 42px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-size: 21px;
  color: #6c5d78;
  line-height: 39px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const ArticleContentInterView = styled.p`
  background-color: white;
  font-size: 21px;
  color: #6c5d78;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const Fifty = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  }
`;

const Block50 = styled.img`
  width: 100%;
  height: 304px;
  border-radius: 15px;
`;

const Block25 = styled.div`
  width: 95%;
  height: 309px;
  background-color: red;
  margin-right: 5px;
  border-radius: 15px;
`;

const Block25Small = styled.div`
  width: 95%;
  height: 220px;
  background-color: red;
  margin-right: 5px;
  border-radius: 15px;
`;

const TwentyFive = styled.div`
  width: 22%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: white;
  font-size: 36px;
  line-height: 42px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  }
`;
const Byline = styled.div`
  display: flex;
  background-color: white;
  padding: 10px 0 10px 0;
`;
const Type = styled.p`
  color: #d53110;
  font-size: 16px;
  background-color: transparent;
  margin-right: 10px;
  background-color: white;
`;

const ArticleTitleBig = styled.h2`
  background-color: white;
  font-size: 36px;
  line-height: 42px;
`;

const ArticleTitleSmall = styled.h2`
  background-color: white;
  font-size: 24px;
  line-height: 30px;
`;

const ArticleContent = styled.p`
  padding: 30px 0 30px 0;
  font-size: 18px;
  background-color: white;
  color: #6e617f;
`;

const Link = styled.span`
  color: #0c3caf;
  background-color: white;
`;

const FacebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: #faf5ed;
  margin-bottom: 100px;
  @media only screen and (max-width: 480px) {
    margin: 10px;
  }
`;

const LineOne = styled.p`
  font-size: 32px;
  color: #210d3a;
  @media only screen and (max-width: 480px) {
    font-size: 32px;
    margin: 10px;
  }
`;
const LineTwo = styled.p`
  font-size: 46px;
  color: #ee4725;
  @media only screen and (max-width: 480px) {
    margin: 10px;
  }
`;
const LineThree = styled.p`
  font-size: 24px;
  color: #0c3caf;
  @media only screen and (max-width: 480px) {
    margin: 10px;
  }
`;
