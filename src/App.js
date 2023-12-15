import { useEffect, useState } from 'react';
import DisplayTable from './components/DisplayTable';
import Calculator from './components/Calculator';
import ColourChange from './ColourChange';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
     {/* <DisplayTable/> */}
     {/* <Calculator/> */}
     {/* <ColourChange/> */}
     <Todo/>
    </div>
  );
}

export default App;
