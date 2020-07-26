import React, { useState } from 'react';
import Chimenea from './chimenea';
import Tejado from './tejado';
import Pared from './pared';



function Casa(props) {
    return (
      <div>
        <Chimenea e={props.chimeneaEncendida} i={props.chimeneaIzquierda} />
        <Tejado tejas={props.tejas} />
        <Pared ventanaAbierta={props.ventanaAbierta} />
      </div>
    )
  }

  export default Casa