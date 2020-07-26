import React, { useState } from 'react';
import Casa from './casa';

function Casas(props) {


    
  let casas = [
    {
      chimeneaEncendida: true,
      chimeneaIzquierda: true,
      tejas: true,
      ventanaAbierta: true
    },
    {
      chimeneaEncendida: false,
      chimeneaIzquierda: false,
      tejas: false,
      ventanaAbierta: false
    },
    {
      chimeneaEncendida: true,
      chimeneaIzquierda: false,
      tejas: true,
      ventanaAbierta: false
    },
    {
      chimeneaEncendida: true,
      chimeneaIzquierda: false,
      tejas: true,
      ventanaAbierta: false
    },
    {
      chimeneaEncendida: true,
      chimeneaIzquierda: false,
      tejas: true,
      ventanaAbierta: false
    }
  ];
  let casasJSX = casas.map(function(casa) {
    return (
      <Casa 
        chimeneaEncendida={casa.chimeneaEncendida} 
        chimeneaIzquierda={casa.chimeneaIzquierda}
        tejas={casa.tejas}
        ventanaAbierta={casa.ventanaAbierta}
      />
    )
  })

  return(
    <div>
    {casasJSX}
  </div>
  )
    
}

export default Casas