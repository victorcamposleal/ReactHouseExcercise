import React, { useState } from 'react';


function Chimenea(props) {

  let [encendida, setEncendida] = useState(props.e);
  let [izquierda, setIzquierda] = useState(props.i);
  function encenderApagar() {
    setEncendida(!encendida);
  }
  function izquierdaDerecha() {
    setIzquierda(!izquierda);
  }
  if(izquierda && encendida === true) {
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
<code>{`              )
             (
     ________[]_`
}</code><br />
<button onClick={izquierdaDerecha}>Posicion Chimenea</button>
<button onClick={encenderApagar}>Encender Apagar Chimenea</button>
</>
);
}
}

function Tejado(props) {
  let [tejas, setTejas] = useState(props.tejas);
  function cambiarTecho() {
    setTejas(!tejas);
  }

  const conTejas = `    /^=^-^-^=^-^\\
   /^-^-^-^-^-^-^\\
  /__^_^_^_^^_^_^_\\`;

 const sinTejas = `    /           \\
   /             \\
  /__ _ _ _  _ _ _\\ `;
let techo;
 if (tejas === true) {
  techo = conTejas;
 } else {
   techo = sinTejas;
 }
    return (
    <>
    <code>{techo}</code>
  <button onClick={cambiarTecho}>Tejado</button>
  </>
    )
}

function Pared(props) {
  const ventanaCerrada = `
   |  .==.       |
   |  |  |  [}{] |
   |__|__|_______|
`;

const ventanaAbierta = `
   |  .==.       |
   |  |  |  {__} |
   |__|__|_______|
`;
let [abierta, setAbierta] = useState(ventanaAbierta);
function cambiarVentana() {
  if(abierta) {
    props.calentar()
  } else {
    props.enfriar()
  }
  setAbierta(!abierta);
}

  return (
    <>
    <code>{abierta?ventanaAbierta:ventanaCerrada}</code>
  <button onClick={cambiarVentana}>Ventana</button>
  </>
    )
} 

function App() {
  let [temperatura, setTemperatura] = useState('ok');
  function enfriar() {
    switch(temperatura){
      case 'ok':
        setTemperatura('frío');
        break;
      case 'calor':
        setTemperatura('ok');
        break;
      case 'frío':
        setTemperatura('frío');
        break;
      default:
        setTemperatura('ok')
    }

  }
  function calentar() {
    switch(temperatura){
      case 'ok':
        setTemperatura('calor');
        break;
      case 'calor':
        setTemperatura('calor');
        break;
      case 'frío':
        setTemperatura('ok');
        break;
      default:
        setTemperatura('ok')
    }

  }
  return (
  <div>
    <Chimenea e={true} i={true} />
    <Tejado tejas={true} />
    <Pared enfriar={enfriar} 
    calentar={calentar}
    ventanaAbierta={true} />
    <p>{temperatura}</p>
    <button onClick={enfriar}>Enfriar</button>
    <button onClick={calentar}>Calentar</button>
  </div>
  );
}

export default App;