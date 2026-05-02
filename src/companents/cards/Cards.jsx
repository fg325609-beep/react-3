import React, { useState } from 'react';
import "./Cards.scss";

function Cards() {
    const [count, setCount] = useState(0);

    return (
        <div className='one'>
            <h1>{count}</h1>
            <div className='two'>

            <button onClick={() => setCount(count + 1)}>Plus</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
            </div>
        </div>
    );
}

export default Cards;
