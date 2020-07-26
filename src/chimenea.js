import React, { useState } from 'react';

function Chimenea(props) {
    let [izquierda, setIzquierda] = useState(props.e);
    let [encendida, setEncendida] = useState(props.i);
    function izquierdaDerecha() {
      setIzquierda(!izquierda);
    }
    function encenderApagar() {
      setEncendida(!encendida);
    }
    if(izquierda && encendida) {
      return (
      <>
      <code>{`       )
        (
       _[]________`
    }</code><br />
    <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
    <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
    </>
      )
  
    } else if(izquierda && !encendida) {
      return (
        <>
    <code>{`
  
       _[]________`
  }</code><br />
  <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
  <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
  </>
    );
  } else if(!izquierda && !encendida) {
    return (
      <>
  <code>{`
  
    ________[]_`
  }</code><br />
  <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
  <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
  </>
  );
  } else if(!izquierda && encendida) {
    return (
      <>
  <code>{`       )
            (
     ________[]_`
  }</code><br />
  <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
  <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
  </>
  );
  }
  }
  

  export default Chimenea