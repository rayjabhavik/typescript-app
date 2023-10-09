import React, { useState } from "react";

const Clone : React.FC = () =>{
  const [items1, setItems1] = useState<string[]>(["Coffee", "Tea"]);

  const items2:string[] = ["Water", "Milk"]; 

  const handleClick = () => {
    const lastItem = items2[items2.length - 1];
    setItems1((prevItems) => [...prevItems, lastItem]);
   
  };

  return (
    <>
      <ul id="lst1">
        {items1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul id="lst2">
        {items2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
     
      <button onClick={handleClick}>Try it !</button>
    </>
  );
};

export default Clone;