import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <NavigationLink to={"/"}>Home</NavigationLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #706fbb;
  height: 100px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const NavigationLink = styled(NavLink)`
  font-weight: 900;
  color: white;
  font-size: 25px;
  text-decoration: none;
`;

export default Navbar;
