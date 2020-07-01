import React, { useState, useEffect } from 'react';
import Frase from "./Componentes/Frase";
import styled from "../node_modules/@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer;
`;

function App() {

  //State de Frases

  const [ frase, guardarFrase ] = useState({})

  const consultarAPI = async () => {
    // const resultado = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    // const frase = resultado.then( respuesta => respuesta.json );
    // frase.then(resultado => console.log(resultado))

    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  useEffect( () => {
    consultarAPI()
  }, [] );

  return (
    <Contenedor>

      <Frase 
        frase={frase}
      />

      <Boton
        onClick={consultarAPI}
      >Obtener Frease</Boton>
    </Contenedor>
  );
}

export default App;
