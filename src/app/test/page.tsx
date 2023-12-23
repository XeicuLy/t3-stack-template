'use client';

import { useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Test;
