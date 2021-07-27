import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CALCULAR_BOLETA_LIQUIDA } from "../../utils/functions";
import { BoletaContext } from "../../context/BoletaContext";

import "./form.style.scss";

const FormBoleta = () => {
  const { setMontoLiquido, setVisibleResult } = useContext(BoletaContext);
  const [monto, setMonto] = useState(0);
  const handleCalculate = (e) => {
    e.preventDefault();

    setLiquido();
    setVisibleResult(true);
  };

  const setLiquido = () => {
    const boleta = CALCULAR_BOLETA_LIQUIDA(monto);
    setMontoLiquido({
      boleta,
      pago: parseInt(monto),
      retension: boleta - monto,
    });
  };

  return (
    <>
      <Form className="formBoleta">
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
    </>
  );
};

export default FormBoleta;
