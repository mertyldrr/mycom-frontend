import React from "react";
import { Link } from "@mui/material";
import { ReactComponent as TUM } from "./assets/TUM.svg";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div
        className="homepage-container"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: 100,
        }}
      >
        <p
          style={{
            fontSize: "7em",
            fontWeight: 900,
            color: "white",
            margin: 0,
            padding: 0,
          }}
        >
          hello!
        </p>
        <p
          style={{
            fontSize: "3.5em",
            fontWeight: 500,
            color: "#F8F8FF",
            width: "65%",
          }}
        >
          I'm Mert, an Informatics Master's student{" "}
          <span style={{ color: "#3070b3" }}>@</span>
          <Link href="https://www.tum.de/en/" target={"_blank"}>
            <TUM style={{ marginRight: 5 }} width={80} height={40} />
          </Link>{" "}
          and part-time frontend developer{" "}
          <Link
            href="https://smokeless.world/"
            underline="none"
            color="#0052b5"
            target={"_blank"}
          >
            @Smokeless
          </Link>
        </p>
        <p style={{ fontSize: "2.5em", fontWeight: 700, color: "#100C07", marginTop: 0 }}>
          Currently working on React-Native, ReactJS, GraphQL, Redux
        </p>
        <p style={{ fontSize: "2em", fontWeight: 700, color: "#100C07", margin: 0 }}>
          Have experience on Node.js, Python
        </p>
      </div>
    </div>
  );
}

export default App;
