import React, { useState } from "react";

const Quantity: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [output, setOutput] = useState<number>(0);

  const priceSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);

    if (name === "num1") {
      if (isNaN(value)) {
        setNum1(0);
      } else {
        setNum1(value);
      }
      //   setNum1(value);
      calculate(value, num2);
    } else if (name === "num2") {
      if (isNaN(value)) {
        setNum2(0);
      } else {
        setNum2(value);
      }

      calculate(num1, value);
    }
  };

  const calculate = (value1: number, value2: number) => {
    const result = value1 * value2;
    if (!isNaN(result)) {
      setOutput(result);
    } else {
      setOutput(0);
    }
  };

  return (
    <div>
      Price
      <input type="text" name="num1" value={num1} onChange={priceSet} />
      x qty
      <input type="text" name="num2" value={num2} onChange={priceSet} />
      <div className="out">
        <h3>{output}</h3>
      </div>
    </div>
  );
}

export default Quantity;
