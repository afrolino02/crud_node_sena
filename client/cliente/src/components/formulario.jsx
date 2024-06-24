import React from "react";
import { useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState("");

// eslint-disable-next-line react-hooks/rules-of-hooks
const [edad, setEdad] = useState(0);
// eslint-disable-next-line react-hooks/rules-of-hooks
const [pais, setPais] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [cargo, setCargo] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [anios, setAnios] = useState(0);



function mostrarPersona(){
        console.log(nombre)
}

export function Formulario(){
    return(
        <div className='datos'>
                
        <label htmlFor=""> Nombre <input onChange={(e)=> { setNombre(e.target.value)

        }} type='text'/></label>
        <label htmlFor=""> Edad <input onChange={(e)=> { setEdad(e.target.value)

        }} type='number'/></label>
        <label htmlFor=""> Pais <input onChange={(e)=> { setPais(e.target.value)

        }} type='text'/></label>
        <label htmlFor=""> Cargo <input onChange={(e)=> { setCargo(e.target.value)

        }} type='text'/></label>
        <label htmlFor=""  > Años <input onChange={(e)=> { setAnios(e.target.value)

        }} type='number'/></label>
        <button onClick={mostrarPersona} >Registrar</button>
      </div>
    );
}