"use client";

import { useState } from 'react';

const Feed = () => {

  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div onClick={() => setCount(count + 1)}>Feed</div>
  )
}

export default Feed