import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Container>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
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

const NavLink = styled.li`
  font-weight: 900;
  color: white;
  font-size: 25px;
`;

export default Navbar;
