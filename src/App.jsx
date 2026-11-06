import React from 'react'
import ProductCard from './Component/ProductCard/ProductCard'
import WspContactOption from './Component/WspContactOption/WspContactOption'
import Counter from './Component/Counter/Counter'
import LuzPrendida from './Component/LuzPrendida/LuzPrendida'


/* 

crear  el  componente WspContactOption

Recibira:

nombre:  string
ultimo_mensaje: string
fecha string
cantidad_memsajes_no_leidos: number


e  instanciarlo 3  veces en el App component
*/

export default function App() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <ProductCard
      titulo={"TV samsung 42"}
      descripcion={'lorem'}
      precio={200}
       />
       <ProductCard
        titulo={"Mesa ratona"}
      descripcion={'lorem 2'}
      precio={20}
      />
     <WspContactOption
        nombre="dani"
        ultimo_mensaje="Hola"
        fecha="22:40"
        cantidad_mensajes_no_leidos={2}
      />

      <WspContactOption
        nombre="ignacio"
        ultimo_mensaje="Hola 2"
        fecha="18:58"
        cantidad_mensajes_no_leidos={5}
      />
      <WspContactOption
        nombre="mili"
        ultimo_mensaje="Hola 3"
        fecha="16:30"
        cantidad_mensajes_no_leidos={1}
      />
       <Counter/>

       <LuzPrendida/>
  
      
      </div>
      
  )
}



  