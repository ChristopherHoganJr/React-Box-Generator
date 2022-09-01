import React from "react";

const Box = (props) => {
  const boxStyle = {
    height: "100px",
    width: "100px",
    background: props.color,
  };

  return <div style={boxStyle}>{props.idx}</div>;
};

export default Box;
