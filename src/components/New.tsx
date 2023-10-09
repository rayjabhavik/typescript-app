
// import React, { useState } from 'react'

// function Inputfield(){
// const [message, setMessage] = useState<string>("");

// const handleMessage = (event:React.FormEvent<HTMLInputElement>) => {
//   setMessage(event.currentTarget.value);
// };

// return (
//   <div className="row justify-content-center">
//     <div className="mt-5 col-8">
//       <div className="form-group mt-2">
//         <label>username</label>
//         <input
//           type="text"
//           className="form-control"
//           onInput={handleMessage}
//         />
//         <div>{message}</div>
//       </div>
//     </div>
//   </div>
// );
// }

// export default Inputfield

import React, { useState } from 'react';

interface typeDeclare {
  message: string;
}

const New: React.FC = () => {
  const [state, setState] = useState<typeDeclare>({ message: "" });

  const handleMessage = (event: React.FormEvent<HTMLInputElement>) => {
    setState({ message: event.currentTarget.value });
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
          <div>{state.message}</div>
        </div>
      </div>
    </div>
  );
}

export default New;


