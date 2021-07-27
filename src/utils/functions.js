import { RETENSION } from "./const";

export const CALCULAR_BOLETA_LIQUIDA = (monto) => {
  const result = Math.round((100 * monto) / (100 - RETENSION));
  return result;
};

export const CALCULAR_BOLETA_BRUTO = (monto) => {
  const result = Math.round((100 * monto) / (100 - RETENSION));
  return result;
};
