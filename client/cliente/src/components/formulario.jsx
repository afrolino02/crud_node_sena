import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

  function mostrarPersona() {
    console.log(nombre);
  }

  return (
    <div className='datos'>
      <label>
        Nombre
        <input type='text' onChange={(e) => setNombre(e.target.value)} />
      </label>

      <label>
        Edad
        <input type='number' onChange={(e) => setEdad(e.target.value)} />
      </label>

      <label>
        Pais
        <input type='text' onChange={(e) => setPais(e.target.value)} />
      </label>

      <label>
        Cargo
        <input type='text' onChange={(e) => setCargo(e.target.value)} />
      </label>

      <label>
        Años
        <input type='number' onChange={(e) => setAnios(e.target.value)} />
      </label>

      <button onClick={mostrarPersona}>Registrar</button>
    </div>
  );
}

export default Formulario;
