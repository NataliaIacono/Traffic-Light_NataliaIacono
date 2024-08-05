import React, { useState } from 'react';

const Semaforo = () => {
    const [color, setColor] = useState('red');

    const cambiarLuz = () => {
        if (color === 'red') {
            setColor('yellow');
        } else if (color === 'yellow') {
            setColor('green');
        } else {
            setColor('red');
        }
    };

    return (
        <div className="constainer">
            <div className="palo"></div>
            <div className="semaforo">
                <button className={`red ${color === "red" ? "destello" : ""}`} onClick={() => { setColor('red'); }}></button>
                <button className={`yellow ${color === "yellow" ? "destello" : ""}`} onClick={() => { setColor('yellow'); }}></button>
                <button className={`green ${color === "green" ? "destello" : ""}`} onClick={() => { setColor('green'); }}></button>
            </div>
            <div className='boton contenedor'>
                <button type="button" className="btn btn-secondary" onClick={cambiarLuz}>Cambia la luz</button>
            </div>
        </div>
    );
};

export default Semaforo;
