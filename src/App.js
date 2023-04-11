import { useState } from "react";
import './App.css';
import Titulo from './components/Titulo';
import Puntos from './components/Puntos';
import Boton from './components/Boton';

function App() {

  // Estado (marcadores)
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);

  const onClickHandlerA = (event) => {
    setPuntosA(puntosA + 1);
  }

  const onClickHandlerB = (event) => {
    setPuntosB(puntosB + 1);
  }

  const onClickHandlerC = (event) => {
    setPuntosA(0); 
    setPuntosB(0);
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
    </div>
  );
}

export default App;