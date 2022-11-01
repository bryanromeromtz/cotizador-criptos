import { useState } from "react";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import LogoImg from "./img/crip.png";

import { Formulario } from "./components/Formulario";

const Heading = styled.h1`
  margin: 100px auto 80px auto;
  font-family: "Ubuntu Condensed", sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 2.5rem;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Logo = styled.img`
  max-width: 400px;
  margin: 100px auto 0 auto;
  width: 80px;
  display: block;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: start;
  max-width: 400px;
  @media (min-width: 992px) {
    margin: 0 auto;
  }
`;

// poner el componente Formulario abajo de la imagen
const ContenedorFormulario = styled.div`
  position: relative;
  top: 230px;
  left: -325px;
`;

function App() {
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="imagen cripto" />
      <HeaderLogo>
        <Logo src={LogoImg} alt="logo" />
        <Heading>Cotizador de Criptomonedas.</Heading>
        <ContenedorFormulario>
          <Formulario />
        </ContenedorFormulario>
      </HeaderLogo>
    </Contenedor>
  );
}

export default App;
