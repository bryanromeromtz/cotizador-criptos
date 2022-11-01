import React from "react";
import styled from "@emotion/styled";
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

export const Formulario = () => {
  const [state, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  return (
    <Form>
      <div>
        <SelectMonedas />
      </div>
      {state}
      <InputSubmit type="submit" value="Calcular" />
    </Form>
  );
};
