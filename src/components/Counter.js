import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState({ x: 0 });

    function handleClick() {
      // set state with a new object
      setCount({ x: count.x + 1 });
    }
  
    return <button onClick={handleClick}>{count.x}</button>;
}

export default Counter;