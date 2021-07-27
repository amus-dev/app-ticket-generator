import { RETENSION_NOW, RETENSION_OLD } from "./const";

export const CALCULAR_BOLETA_LIQUIDA_TODAY = (monto) => {
  const result = Math.round((100 * monto) / (100 - RETENSION_NOW));
  return result;
};

export const CALCULAR_BOLETA_LIQUIDA_OLD = (monto) => {
  const result = Math.round((100 * monto) / (100 - RETENSION_OLD));
  return result;
};
