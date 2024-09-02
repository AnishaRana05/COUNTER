import { useState } from "react";

function COUNTER() {
  let [count, setcount] = useState(0);

  const handleIncreament = () => {
    setcount(count + 1);
    console.log(count);
  };

  const handleDecreament = () => {
    setcount(count - 1);
    console.log(count);
  };
  const handleReset = () => {
    setcount((count = 0));
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className="butt">
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
        <button onClick={handleReset}>Reset </button>
      </div>
    </div>
  );
}

export default COUNTER;
