import React, { useState } from "react";

// components
import Box from "./Box";

const BoxGenerator = () => {
  const [boxList, setBoxList] = useState(["red", "blue", "purple"]);
  const [newColor, setNewColor] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    setBoxList([...boxList, newColor]);
    console.log(boxList);
  };

  console.log("newColor = ", newColor);
  return (
    <div>
      <h1>Box</h1>
      <h2>Generator</h2>
      <form onSubmit={(e) => createBox(e)}>
        <div>
          <label htmlFor="boxColor">New box color:</label>
          <input
            type="text"
            name="boxColor"
            onChange={(e) => setNewColor(e.target.value)}
          />
        </div>
        <input type="submit" value="Create Box" />
      </form>
      <div className="d-flex justify-content-center">
        {boxList.map((e, idx) => (
          <Box key={idx} color={e} />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
