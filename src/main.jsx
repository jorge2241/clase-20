import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import{ sumar , restar } from './matematicas.js'

import PI from './matematicas.js'

/*
Este  es el modulo de 
imports , exports, export default, from es sintaxis de 
JS , NO DE REACT ni JSX

JS tiene soporte para modulos()

*/


console.log(sumar(1,1))

console.log(restar(1,1))

createRoot(document.getElementById('root')).render(
      <App />
 )




console.log(PI)
/* 
imports, exports, export default, from es sintaxis de JS, NO DE REACT ni JSX
JS tiene soporte para modulos (poder separar en archivos una aplicacion)


*/



