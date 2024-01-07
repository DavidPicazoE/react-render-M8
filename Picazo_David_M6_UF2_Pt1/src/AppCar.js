import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Car(props) {
  const [color, setColor] = useState("red");
  return <>
    <h2>I am a {props.marca} Car color {color}!</h2>
    <button
      type="button"
      onClick={() => {
        let cc = prompt("color:")
        if (cc) {
          setColor(cc)
        }
      }
      }
    >Botó</button>
  </>
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car marca="Seat" />
    </>
  );
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Garage />
      </header>
    </div>
  );
}

export default App;
