import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PacmanLoader from "react-spinners/PacmanLoader";

// crear una tabla con los datos de la criptomoneda
const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
  border: 1px solid #66a2fe;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(102, 162, 254, 0.2);
  position: relative;
  top: 100px;
  left: 50%;
  width: 100%;
  @media (min-width: 992px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    position: relative;
    top: 230px;
    left: 0;
    width: 90%;
  }
`;

const Info = styled.p`
  font-size: 18px;
  text-align: center;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  text-align: center;
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Img = styled.img`
  width: 50%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
`;

const ContenedorSpinner = styled.div`
  position: relative;
  top: 100px;
  left: 50%;
  width: 100%;
  @media (max-width: 480px) {
    position: relative;
    top: 230px;
    left: -25px;
  }
`;

export const Resultado = ({ resultado, loading }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado;

  return (
    <>
      {loading && (
        <ContenedorSpinner>
          <PacmanLoader
            color={"#fbaf57"}
            size={30}
            cssOverride={{ position: "absolute", top: "60%", left: "50%" }}
          />
        </ContenedorSpinner>
      )}
      {PRICE && (
        <ResultadoDiv>
          <Img src={`https://www.cryptocompare.com${IMAGEURL}`} alt="imagen" />
          <Precio>
            El precio es: <span>{PRICE}</span>
          </Precio>
          <Info>
            Precio más alto del día: <span>{HIGHDAY}</span>
          </Info>
          <Info>
            Precio más bajo del día: <span>{LOWDAY}</span>
          </Info>
          <Info>
            Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
          </Info>
          <Info>
            Última actualización: <span>{LASTUPDATE}</span>
          </Info>
        </ResultadoDiv>
      )}
    </>
  );
};
