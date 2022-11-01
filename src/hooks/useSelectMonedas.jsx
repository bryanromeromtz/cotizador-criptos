import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "lato", sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  display: block;
  gap: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 10px;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <div>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">-- Seleccione --</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </div>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
