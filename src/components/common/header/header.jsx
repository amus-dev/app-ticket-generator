import "./header.style.scss";

import { Alert } from "react-bootstrap";

const header = () => {
  return (
    <section className="boleteo">
      <h1 className="boleteo__title">Boleteo</h1>
      <p className="boleteo__description">
        Calcula tus Boletas de Honorarios. Actualizado a la Ley 21.133 que
        aumenta gradualmente la retención de impuestos.
      </p>
      <Alert variant="warning" className="boleteo__alert">
        Tasa Retención Año 2021: 11.50%
      </Alert>
    </section>
  );
};

export default header;
