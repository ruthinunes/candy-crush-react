import React, { useState, useEffect } from "react";

function Board() {
  const [randomCandiesArray, setRandomCandiesArray] = useState([]);
  const width = 8;
  const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

  useEffect(() => {
    const randomCandies = [];
    for (let i = 0; i < width * width; i++) {
      const randomCandy =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomCandies.push(randomCandy);
    }

    setRandomCandiesArray(randomCandies);
    console.log(randomCandies);
  }, []);

  return (
    <div className="board">
      {randomCandiesArray.map((candy, index) => (
        <div
          className="cell"
          key={index}
          style={{ backgroundColor: candy }}
        ></div>
      ))}
    </div>
  );
}

export default Board;
