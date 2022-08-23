import React from "react";
import { ReactComponent as HsLogo } from "./assets/hs.svg";
import { ReactComponent as Mountain } from "./assets/mountain.svg";
import { ReactComponent as Chess } from "./assets/chess.svg";
import { ReactComponent as Mtg } from "./assets/magic.svg";
import { ReactComponent as Besiktas } from "./assets/besiktas.svg";

const Hobbies = () => {
  return (
    <div>
      <HsLogo
        style={{
          width: 100,
          height: 100,
          fill: "black",
          position: "absolute",
          bottom: 300,
          left: 300,
        }}
      />
      <Mountain
        style={{
          width: 250,
          height: 150,
          color: "black",
          position: "absolute",
          bottom: 300,
          right: 300,
        }}
      />
      <Chess
        style={{ width: 150, height: 100, position: "absolute", top: 300, left: 300 }}
      />
      <Mtg
        style={{
          width: 150,
          height: 150,
          color: "white",
          position: "absolute",
          top: 300,
          right: 300,
        }}
      />
      <Besiktas
        style={{
          width: 100,
          height: 100,
          position: "absolute",
        }}
      />
    </div>
  );
};

export default Hobbies;
