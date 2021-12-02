import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const [value2, setValue2] = useState(0);

  const complexIncrease = () => {
    setTimeout(() =>{

      // setValue2(value2 + 1);

      setValue2((preState) => {
        return preState + 1
      });

    }, 2000);
  }

  return (<>

    <section style={{margin: '4rem 0'}}>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
      <button className='btn' onClick={() => setValue(0)}>reset</button>
      <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
    </section>

    <section style={{margin: '4rem 0'}}>
      <h2>More complex Counter</h2>
      <h1>{value2}</h1>
      <button className='btn' onClick={complexIncrease}>increase later</button>
    </section>


  </>);

};

export default UseStateCounter;
