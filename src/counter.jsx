import { useState } from "react";

export default function Counter() {
  const [Count, SetCount] = useState(0);

  const handelAdd = () => {
    const newCount = Count + 1;
    SetCount(newCount);
  };

  const counterStyle = {
    border: "2px solid yellow",
  };
  return (
    <div style={counterStyle}>
      <h3>count:{Count} </h3>
      <button onClick={handelAdd}>Add</button>
    </div>
  );
}
