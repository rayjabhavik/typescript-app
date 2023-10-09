import React, { useState } from 'react';

interface mainType {
  name: string;
  price: number;
}

const ButtonNew: React.FC = () => {
  const [value, setValue] = useState<mainType>({
    name: 'one',
    price: 1,
  });

  const handleClick = () => {
    setValue({
      name: 'two',
      price: value.price + 10,
    });
  };

  return (
    <div>
      <h3>
        {value.name} {value.price}
      </h3>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default ButtonNew;
