import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CALCULAR_BOLETA } from "../../utils/functions";
import { RETENSION_NOW, RETENSION_OLD } from "../../utils/const";
import { BoletaContext } from "../../context/BoletaContext";

import "./form.style.scss";

const FormBoleta = () => {
  const { setMontoLiquido, setVisibleResult, setMontoLiquidoOld } =
    useContext(BoletaContext);
  const [monto, setMonto] = useState(0);
  const handleCalculate = (e) => {
    e.preventDefault();

    setLiquido();
    setLiquidoOld();
    setVisibleResult(true);
  };

  const setLiquido = () => {
    const boleta = CALCULAR_BOLETA(monto, RETENSION_NOW);
    setMontoLiquido({
      boleta,
      pago: parseInt(monto),
      retension: boleta - monto,
    });
  };

  const setLiquidoOld = () => {
    const boleta = CALCULAR_BOLETA(monto, RETENSION_OLD);
    setMontoLiquidoOld({
      boleta,
      pago: parseInt(monto),
      retension: boleta - monto,
    });
  };

  return (
    <Form className="formBoleta" onSubmit={(e) => handleCalculate(e)}>
      <Form.Control
        type="number"
        placeholder="Precio"
        onChange={(e) => setMonto(e.target.value)}
        className="formBoleta__input"
      />
      <Button
        variant="primary"
        color="primary"
        onClick={(e) => handleCalculate(e)}
        className="formBoleta__btn"
      >
        Calcular
      </Button>
    </Form>
  );
};

export default FormBoleta;
