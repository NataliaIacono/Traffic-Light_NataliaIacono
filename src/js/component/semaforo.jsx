import React, { useState } from 'react';

const Semaforo = () => {
    const [color, setColor] = useState('red');

    return (
        <div className="constainer">
            <div className="palo"></div>
            <div className="semaforo">
                <button className={`red ${color === "red" ? "destello" : ""}`} onClick={() => { setColor('red'); }}></button>
                <button className={`yellow ${color === "yellow" ? "destello" : ""}`} onClick={() => { setColor('yellow'); }}></button>
                <button className={`green ${color === "green" ? "destello" : ""}`} onClick={() => { setColor('green'); }}></button>
            </div>
        </div>
    );
};

export default Semaforo;
