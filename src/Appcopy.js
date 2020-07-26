// import React, { useState } from 'react';


// function Chimenea(props) {
//   let [izquierda, setIzquierda] = useState(props.e);
//   let [encendida, setEncendida] = useState(props.i);
//   function izquierdaDerecha() {
//     setIzquierda(!izquierda);
//   }
//   function encenderApagar() {
//     setEncendida(!encendida);
//   }
//   if(izquierda && encendida) {
//     return (
//     <>
//     <code>{`       )
//       (
//      _[]________`
//   }</code><br />
//   <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
//   <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
//   </>
//     )

//   } else if(izquierda && !encendida) {
//     return (
//       <>
//   <code>{`

//      _[]________`
// }</code><br />
// <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
// <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
// </>
//   );
// } else if(!izquierda && !encendida) {
//   return (
//     <>
// <code>{`

//      ________[]_`
// }</code><br />
// <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
// <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
// </>
// );
// } else if(!izquierda && encendida) {
//   return (
//     <>
// <code>{`              )
//              (
//      ________[]_`
// }</code><br />
// <button onClick={izquierdaDerecha}>Posicion Chimenea</button>
// <button onClick={encenderApagar}>Encender Apagar Chimenea</button>
// </>
// );
// }
// }



// function Tejado(props) {
//   let [tejas, setTejas] = useState(props.tejas);
//   function cambiarTecho() {
//     setTejas(!tejas);
//   }
//   if(tejas === true) {
//     return (
//     <>
//     <code>{`    /^=^-^-^=^-^\\
//    /^-^-^-^-^-^-^\\
//   /__^_^_^_^^_^_^_\\`
//   }</code>
//   <button onClick={cambiarTecho}>Tejado</button>
//   </>
//     )

//   } else {
//     return (
//       <>
//   <code>{`    /           \\
//    /             \\
//   /__ _ _ _  _ _ _\\ `
// }</code>
// <button onClick={cambiarTecho}>Tejado</button>
// </>
//   );
// }
// }

// // function Tejado(props) {
// //   let [tejas, setTejas] = useState(props.tejas);
// //   function cambiarTecho() {
// //     setTejas(!tejas);
// //   }

// //   const conTejas = `    /^=^-^-^=^-^\\
// //    /^-^-^-^-^-^-^\\
// //   /__^_^_^_^^_^_^_\\`;

// //  const sinTejas = `    /           \\
// //    /             \\
// //   /__ _ _ _  _ _ _\\ `;
// // let techo;
// //  if (tejas === true) {
// //   techo = conTejas;
// //  } else {
// //    techo = sinTejas;
// //  }
// //     return (
// //     <>
// //     <code>{techo}</code>
// //   <button onClick={cambiarTecho}>Tejado</button>
// //   </>
// //     )
// // }

// function Pared(props) {
//   const ventanaCerrada = `
//    |  .==.       |
//    |  |  |  [}{] |
//    |__|__|_______|
// `;

// const ventanaAbierta = `
//    |  .==.       |
//    |  |  |  {__} |
//    |__|__|_______|
// `;
// let [abierta, setAbierta] = useState(props.ventanaAbierta);
// function cambiarVentana() {
//   setAbierta(!abierta);
// }
// if (abierta) {
//   return (
//     <>
//     <code>{ventanaAbierta}</code>
//   <button onClick={cambiarVentana}>Ventana</button>
//   </>
//     )
// } else {
//   return (
//     <>
//     <code>{ventanaCerrada}</code>
//     <button onClick={cambiarVentana}>Ventana</button>
//     </>
//   )
// }
// }

// function Casa(props) {
//   return (
//     <div>
//       <Chimenea e={props.chimeneaEncendida} i={props.chimeneaIzquierda} />
//       <Tejado tejas={props.tejas} />
//       <Pared ventanaAbierta={props.ventanaAbierta} />
//     </div>
//   )
// }

// function App() {

//   let casas = [
//     {
//       chimeneaEncendida: true,
//       chimeneaIzquierda: true,
//       tejas: true,
//       ventanaAbierta: true
//     },
//     {
//       chimeneaEncendida: false,
//       chimeneaIzquierda: false,
//       tejas: false,
//       ventanaAbierta: false
//     },
//     {
//       chimeneaEncendida: true,
//       chimeneaIzquierda: false,
//       tejas: true,
//       ventanaAbierta: false
//     },
//     {
//       chimeneaEncendida: true,
//       chimeneaIzquierda: false,
//       tejas: true,
//       ventanaAbierta: false
//     },
//     {
//       chimeneaEncendida: true,
//       chimeneaIzquierda: false,
//       tejas: true,
//       ventanaAbierta: false
//     }
//   ];
//   let casasJSX = casas.map(function(casa) {
//     return (
//       <Casa 
//         chimeneaEncendida={casa.chimeneaEncendida} 
//         chimeneaIzquierda={casa.chimeneaIzquierda}
//         tejas={casa.tejas}
//         ventanaAbierta={casa.ventanaAbierta}
//       />
//     )
//   })
//   return (
//   <div>
//     {casasJSX}
//   </div>
//   );
// }
// export default App;