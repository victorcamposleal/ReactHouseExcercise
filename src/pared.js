import React, { useState } from 'react';
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
  let [abierta, setAbierta] = useState(props.ventanaAbierta);
  function cambiarVentana() {
    setAbierta(!abierta);
  }
  if (abierta) {
    return (
      <>
      <code>{ventanaAbierta}</code>
    <button onClick={cambiarVentana}>Ventana</button>
    </>
      )
  } else {
    return (
      <>
      <code>{ventanaCerrada}</code>
      <button onClick={cambiarVentana}>Ventana</button>
      </>
    )
  }
  }


  export default Pared
  