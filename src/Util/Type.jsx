import React from "react";
import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Front-end developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Mern-stack developer",
        1000,
        "React developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Type;
