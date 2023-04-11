// Autor: Rey Condado
// Fecha: 2023-10-04
// Título de la aplicación


import "../styles/Titulo.css";

const Titulo = (props) => {
  return <div className="titulo-tenis">
        {props.texto}
    </div>
};

export default Titulo;