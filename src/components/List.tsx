import React, { useState } from "react";

const List: React.FC = () => {
  const [inputData, setinputData] = useState<string>("");
  const [answer, setanswer] = useState<string>("");
  const [inputDataLabel, setinputDataLabel] = useState<string>("Celsius");
  const [outputDataLabel, setOutputDataLabel] = useState<string>("Fahrenheit");
  const [selectedValue, setSelectedValue] = useState<string>("temperature");

  const handleValueChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value === "temperature") {
      setinputDataLabel("Celsius");
      setOutputDataLabel("Fahrenheit");
    } else if (value === "time") {
      setinputDataLabel("minute");
      setOutputDataLabel("second");
    }
  };

  const handleDataChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setinputData(value);

    if (selectedValue === "temperature") {
      const converted = (parseFloat(value) * 9) / 5 + 32;
      setanswer(converted.toString());
    } else if (selectedValue === "time") {
      const converted = parseFloat(value) * 60;
      setanswer(converted.toString());
    }
  };

  const handleAnswerChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setanswer(value);

    if (selectedValue === "temperature") {
      const original = ((parseFloat(value)- 32) * 5) / 9;
      setinputData(original.toString());
    } else if (selectedValue === "time") {
      const original = parseFloat(value)/ 60;
      setinputData(original.toString());
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="mt-5 col-8">
          <select onChange={handleValueChange} value={selectedValue}>
            <option value="temperature">Temperature</option>
            <option value="time">Time</option>
          </select>
          <div>
            <div className="form-group">
              <label className="mt-2">{inputDataLabel}</label>
              <input
                type="number"
                onChange={handleDataChange}
                value={inputData}
                className="form-control"
              />
            </div>
          </div>
          <div>
            <label className="mt-2">{outputDataLabel}</label>
            <input
              type="number"
              onChange={handleAnswerChange}
              value={answer}
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
