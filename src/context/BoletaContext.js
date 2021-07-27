import { createContext, useState } from "react";
export const BoletaContext = createContext();

export const BoletaProvider = ({ children }) => {
  const [MontoLiquido, setMontoLiquido] = useState({
    boleta: 0,
    pago: 0,
    retension: 0,
  });

  const [MontoLiquidoOld, setMontoLiquidoOld] = useState({
    boleta: 0,
    pago: 0,
    retension: 0,
  });

  const [visibleResult, setVisibleResult] = useState();
  return (
    <div>
      <BoletaContext.Provider
        value={{
          MontoLiquido,
          setMontoLiquido,
          MontoLiquidoOld,
          setMontoLiquidoOld,
          visibleResult,
          setVisibleResult,
        }}
      >
        {children}
      </BoletaContext.Provider>
    </div>
  );
};
