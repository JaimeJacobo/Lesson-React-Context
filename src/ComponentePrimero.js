import React from 'react';
import MyContext from './context.js';

function ComponentePrimero(){

  const stateFromContext = React.useContext(MyContext)

  return(
    <div>
      <h2>Hola! Mi nombre es {stateFromContext.name} y mi apellido es {stateFromContext.lastName}</h2>
    </div>
  )
}


export default ComponentePrimero