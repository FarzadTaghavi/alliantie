import styled from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/NavBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
      </Container>
      <Container>
        <SectionOne />
      </Container>
      <Container>
        <SectionTwo />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  position: relative;
`;
