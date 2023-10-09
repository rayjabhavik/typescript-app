import React, { useState} from 'react';

const Message: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const showMessage: (event: React.MouseEvent<HTMLButtonElement>) => void = () => {
    setMessage('Welcome to Logistic Infotech');
  };

  const hideMessage = () => {
    setMessage('');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={showMessage}>Show Message</button>
      <button className="mx-2" onClick={hideMessage}>
        Hide Message
      </button>
    </div>
  );
}

export default Message;
