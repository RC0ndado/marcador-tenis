import { useState } from "react";
import './App.css';
import Titulo from './components/Titulo';
import Puntos from './components/Puntos';
import Boton from './components/Boton';
import Set from "./components/Set";

function App() {

  // Estado (marcadores)
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);

  const [setA, seSetA] = useState(0);
  const [setB, seSetB] = useState(0);

  const onClickHandlerA = (event) => { 
      if (puntosA >= 30) {
        setPuntosA(puntosA + 10);
        if (puntosA >= 40 && (puntosB < 40)) {
          seSetA(setA + 1);
          setPuntosA(0);
          setPuntosB(0);
        }
        if (puntosA >= 40 && (puntosA - puntosB === 10)) {
          setPuntosA(0);
          setPuntosB(0);
          seSetA(setA + 1);
        }
      } else {
        setPuntosA(puntosA + 15);
      }
    }

  const onClickHandlerB = (event) => {
    if (puntosB >= 30) {
        setPuntosB(puntosB + 10);
        if (puntosB >= 40 && (puntosA < 40)) {
          seSetB(setB + 1);
          setPuntosA(0);
          setPuntosB(0);
        }
        if (puntosB >= 40 && (puntosB - puntosA === 10)) {
          seSetB(setB + 1);
          setPuntosA(0);
          setPuntosB(0);
        }
      } else {
        setPuntosB(puntosB + 15);
      }
  }

  const onClickHandlerC = (event) => {
    setPuntosA(0); 
    setPuntosB(0);
    seSetA(0);
    seSetB(0);
  }

  return (
    <div className="App">
      <Titulo texto="Jugador A" />
      <Puntos valor={puntosA} />
      <Titulo texto="Jugador B" />
      <Puntos valor={puntosB} />

      {/*<Boton texto="Punto de A" onClick={null}/>*/}
      <Boton texto="Punto de A" onClick={onClickHandlerA}/>
      <Boton texto="Punto de B" onClick={onClickHandlerB}/>
      {/*<Boton texto="Punto de B" onClick={null}/>*/}
      {/*<Boton texto="Reiniciar" onClick={null}/>*/}
      <Boton texto="Reiniciar" onClick={onClickHandlerC}/>
      <Set sets={setA} />
      <Set sets={setB} />
    </div>
  );
}

export default App;