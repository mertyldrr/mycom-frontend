import styled from "@emotion/styled";
import { Link } from "@mui/material";
import { ReactComponent as TUM } from "../assets/TUM.svg";

const Homepage = () => {
  return (
    <Container>
      <Hello>hello!</Hello>
      <AboutMe>
        I'm Mert, an Informatics Master's student
        <span style={{ color: "#3070b3" }}> @</span>
        <Link href="https://www.tum.de/en/" target={"_blank"}>
          <TUM style={{ marginRight: 5 }} width={80} height={40} />
        </Link>
        and part-time frontend developer{" "}
        <Link
          href="https://smokeless.world/"
          underline="none"
          color="#0052b5"
          target={"_blank"}
        >
          @Smokeless
        </Link>
      </AboutMe>
      <Technologies>
        Currently working on React-Native, ReactJS, GraphQL, Redux
      </Technologies>
      <Technologies>Also, have experience on Node.js, Python</Technologies>
    </Container>
  );
};

const Container = styled.div`
  background-color: #c0c8d5;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 100px;
`;

const Hello = styled.p`
  font-size: 8em;
  font-weight: 900;
  color: white;
`;

const AboutMe = styled.p`
  font-size: 3.5em;
  font-weight: 700;
  color: #f8f8ff;
  width: 80%;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const Technologies = styled.p`
  font-size: 3em;
  font-weight: 700;
  color: #100c07;
  padding-top: 20px;
`;

export default Homepage;
