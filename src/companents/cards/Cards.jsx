import React, { useState } from 'react';
import "./Cards.scss";

function Cards() {
    // useState funksiya kabi () qavs bilan yozilishi shart
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{count}</h1>
            {/* setCount funksiyasini chaqirishda count, deb yozmang */}
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
        </div>
    );
}

export default Cards;
