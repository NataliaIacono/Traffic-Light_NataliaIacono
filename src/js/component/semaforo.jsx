import React, { useState } from 'react';

const Semaforo = () => {
    const [color, setColor] = useState('red');
    const [morado, setMorado] = useState(false);


    const cambiarLuz = () => {
        if (morado) {
            if (color === "red") {
                setColor("yellow");
            } if (color === "yellow") {
                setColor("green");
            } if (color === "green") {
                setColor("purple")
            } if (color === "purple") {
                setColor("red")
            }
        } else {
            if (color === "red") {
                setColor("yellow");
            } if (color === "yellow") {
                setColor("green");
            } if (color === "green") {
                setColor("red")
            }
        }

        //else if (morado == true) {
        //   setColor("purple");
    }


    const agregarMorado = () => {
        setMorado(!morado);
    };


    return (
        <div className="constainer">
            <div className="palo"></div>
            <div className="semaforo">
                <button className={`red ${color === "red" ? "destello" : ""}`} onClick={() => { setColor('red'); }}></button>
                <button className={`yellow ${color === "yellow" ? "destello" : ""}`} onClick={() => { setColor('yellow'); }}></button>
                <button className={`green ${color === "green" ? "destello" : ""}`} onClick={() => { setColor('green'); }}></button>
                {morado && (
                    <button className={`purple ${color === "purple" ? "destello" : ""}`} onClick={() => { setColor('purple'); }}></button>
                )}
            </div>
            <div className='boton contenedor'>
                <button type="button" className="btn btn-secondary" onClick={cambiarLuz}>Cambia la luz</button>
                <button type="button" className="btn btn-secondary" onClick={agregarMorado}>Luz Morada</button>
            </div>
        </div>
    );
};

export default Semaforo;
