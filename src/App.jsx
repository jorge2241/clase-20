import React, { useState } from 'react'
import LoginForm from './Component/LoginForm/LoginForm'
import Messages from './Component/Messages/Messages'
import FormAltaProducto from './Component/FormAltaProducto/FormAltaProducto'
import Tarea from './Component/Tarea/Messages'


export default function App() {


  return (
    <div>
           
     <FormAltaProducto/>
      <Messages/>
      <LoginForm/>
      <Tarea/>
    </div>
  )
}


