import React, { useState } from 'react';

const  Color: React.FC = () => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  const mainF = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    const name = event.target.name;

    if (name === 'red') {
      setRed(value);
    } else if (name === 'green') {
      setGreen(value);
    } else if (name === 'blue') {
      setBlue(value);
    }
  };

  const changeColor = `rgb(${red}, ${green}, ${blue})`;


  return (
    <div >
        <div className="row justify-content-center">
        <div className="mt-5 col-8">
      <div style={{ backgroundColor: changeColor }}>
        {changeColor}
      </div>

      <fieldset>
        <label>Red :</label>
        <input
          type="number"
          name="red"
          value={red}
          onChange={mainF}
        />
        <input
          type="range"
          name="red"
          min="0"
          max="255"
          value={red}
          onChange={mainF}
        />
      </fieldset>

      <fieldset>
        <label >Green :</label>
        <input
          type="number"
          name="green"
          value={green}
          onChange={mainF}
        />
        <input
          type="range"
          name="green"
          min="0"
          max="255"
          value={green}
          onChange={mainF}
        />
      </fieldset>

      <fieldset>
        <label >Blue :</label>
        <input
          type="number"
          name="blue"
          value={blue}
          onChange={mainF}
        />
        <input
          type="range"
          name="blue"
          min="0"
          max="255"
          value={blue}
          onChange={mainF}
        />
      </fieldset>
    </div>
    </div>

</div>

  );
}

export default Color;

