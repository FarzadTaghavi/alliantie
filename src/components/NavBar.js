import React from "react";
import styled from "styled-components";
import headerLogo from "../assets/logo.svg";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={headerLogo} />
          <Menu>
            <MenuItem>Thema's</MenuItem>
            <MenuItem>Actueel</MenuItem>
            <MenuItem>Kennisbank</MenuItem>
            <MenuItem>Over Ons</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Right>
          <Button>
            <ThumbUp />
            Ik heb een idee
          </Button>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Right = styled.div`
  width: 18%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  cursor: pointer;
  @media only screen and (max-width: 960px) {
    //padding-left: 50px;
    width: 100%;
    padding: 10px;
  }
`;

const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  margin-left: 150px;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  display: flex;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 500;
  padding-right: 20px;

  color: #210d3a;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 10px;
  border: 1px solid white;
  padding: 10px 15px;
  font-size: 18px;
  color: #0c3caf;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const ThumbUp = styled(ThumbUpAltOutlinedIcon)`
  margin-right: 5px;
  background-color: white;
`;
