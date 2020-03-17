import React, { useState } from 'react';
import './App.css';
import MyContext from './context.js';
import ComponentePrimero from './ComponentePrimero'

function App() {

  const [myState, updateMyState] = useState({
    name: 'Jaime',
    lastName: 'Jacobo',
    alive: true
  })

  return (
    <MyContext.Provider value={[myState, updateMyState]}>
      <div className="App">
        <ComponentePrimero />
      </div>        
    </MyContext.Provider>
  );
}

export default App;
