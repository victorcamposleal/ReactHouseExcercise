import React, { useState } from 'react';

function Tejado(props) {
    let [tejas, setTejas] = useState(props.tejas);
    function cambiarTecho() {
      setTejas(!tejas);
    }
    if(tejas === true) {
      return (
      <>
      <code>{`    /^=^-^-^=^-^\\
     /^-^-^-^-^-^-^\\
    /__^_^_^_^^_^_^_\\`
    }</code>
    <button onClick={cambiarTecho}>Tejado</button>
    </>
      )
  
    } else {
      return (
        <>
    <code>{`    /           \\
     /             \\
    /__ _ _ _  _ _ _\\ `
  }</code>
  <button onClick={cambiarTecho}>Tejado</button>
  </>
    );
  }
  }


  export default Tejado