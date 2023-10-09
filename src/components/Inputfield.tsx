
import React, { useState } from 'react'

const Inputfield: React.FC = () =>{
const [message, setMessage] = useState<string | undefined>();

const handleMessage = (event:React.FormEvent<HTMLInputElement>) => {
  setMessage(event.currentTarget.value);
  // setMessage(event.target.value);

};

return (
  <div className="row justify-content-center">
    <div className="mt-5 col-8">
      <div className="form-group mt-2">
        <label>username</label>
        <input
          type="text"
          className="form-control"
          onInput={handleMessage}
        />
        <div>{message}</div>
      </div>
    </div>
  </div>
);
}

export default Inputfield