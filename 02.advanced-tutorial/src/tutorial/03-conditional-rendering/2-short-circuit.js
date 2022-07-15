import React, { useState } from 'react';

// short-circut evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('ss');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* {if(){console.log('hello world');}} */}
      <h1>{text || 'text is not there'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error</p> : <p>sup bitch</p>}
    </>
  );
};

export default ShortCircuit;
