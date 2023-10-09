import React,{ useState } from "react";

const Temp: React.FC = () => {
  const [num1, setCelsius] = useState<string>("");
  const [num2, setFahrenheit] = useState<string>("");


  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    const convertedFahrenheit = (parseFloat(value) * 9/5) + 32;
    setFahrenheit(isNaN(convertedFahrenheit) ? "" : convertedFahrenheit.toString());
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    const convertedCelsius = (parseFloat(value) - 32) * 5/9;
    setCelsius(isNaN(convertedCelsius) ? "" : convertedCelsius.toString());
  };

 
  return (
    <div>
      <div className="row justify-content-center">
        <div className="mt-5 col-8">
      Celsius
      <input type="text" name="celsius" value={num1} onInput={handleCelsiusChange} />
      x Fahrenheit
      <input type="text" name="num2" value={num2} onChange={handleFahrenheitChange} />
    </div>
    </div>

    </div>

  );
}

export default Temp;



