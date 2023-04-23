import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ReactComponent as MyLogo } from "../assets/mylogo.svg";

const Navbar = () => {
  return (
    <Box>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
    </Box>
  );
};

const Logo = styled(MyLogo)`
  width: 80px;
  height: 80px;
`;

export default Navbar;
