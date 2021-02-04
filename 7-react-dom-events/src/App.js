import './App.css';
import { useState } from 'react';

function App() {

  let [ show, setShow ] = useState(false)
  // STATE CHANGE => TRIGGERS DOM CHANGE

  return (
    <div className="App">
      <header className="App-header">
        <h1>DOM Testing</h1>
        <button onClick={ () => setShow(!show) } >Show secret</button>
        { show && <p>!YOU EXPOSED ME!</p> }
      </header>
    </div>
  );
}

export default App;
