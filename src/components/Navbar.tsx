import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ReactComponent as MyLogo } from "../assets/mylogo.svg";

const Navbar = () => {
  return (
    <Container>
      <LeftContainer>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
      </LeftContainer>
      <RightContainer>
        <NavigationLink to={"/"}>Home</NavigationLink>
        <NavigationLink to={"/photos"}>Photos</NavigationLink>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #706fbb;
  height: 100px;
  flex-direction: row;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-grow: 0.35;
  padding-left: 100px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-grow: 0.45;
  justify-content: space-around;
`;

const NavigationLink = styled(NavLink)`
  font-weight: 900;
  color: white;
  font-size: 25px;
  text-decoration: none;
`;

const Logo = styled(MyLogo)`
  width: 80px;
  height: 80px;
`;

export default Navbar;
