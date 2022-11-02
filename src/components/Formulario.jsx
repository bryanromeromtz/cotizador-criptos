import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import toast, { Toaster } from "react-hot-toast";

import useSelectMonedas from "../hooks/useSelectMonedas";

import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9496fe;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #4646b8;
    cursor: pointer;
  }
`;

const Form = styled.form`
  gap: 1rem;
  max-width: 600px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Formulario = ({ setMoneda, setCriptomoneda }) => {
  const [criptomonedas, setCriptomonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((moneda) => ({
        codigo: moneda.CoinInfo.Name,
        nombre: moneda.CoinInfo.FullName,
      }));
      setCriptomonedas(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const [stateMoneda, SelectMonedas] = useSelectMonedas(
    "Elige tu moneda",
    monedas
  );
  const [stateCripto, SelectCripto] = useSelectMonedas(
    "Elige tu criptomoneda",
    criptomonedas
  );

  const cotizarMoneda = (e) => {
    e.preventDefault();

    if (stateMoneda === "" || stateCripto === "") {
      toast("Todos los campos son obligatorios", {
        icon: "🚨",
        position: "top-center",
        ariaProps: {
          role: "alert",
          "aria-live": "assertive",
        },
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    setMoneda(stateMoneda);
    setCriptomoneda(stateCripto);
    setAlerta("");
  };

  return (
    <Form>
      <div>
        <SelectMonedas />
        <SelectCripto />
      </div>
      <Toaster />
      <InputSubmit type="submit" value="Calcular" onClick={cotizarMoneda} />
    </Form>
  );
};
