export const CALCULAR_BOLETA = (monto, retension) => {
  const result = Math.round((100 * monto) / (100 - retension));
  return result;
};
