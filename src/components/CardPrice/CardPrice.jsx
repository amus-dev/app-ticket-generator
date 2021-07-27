import { Col } from "react-bootstrap";
import "./cardprice.style.scss";

const CardPrice = ({ title, monto }) => {
  const { boleta, pago, retension } = monto;
  return (
    <Col sm={12} md={6}>
      <div className="cardPrice">
        <h3 className="cardPrice__title">{title}</h3>
        <div className="cardPrice__monto">
          <p className="cardPrice__monto-text">Debes hacer la Boleta por:</p>
          <p className="cardPrice__monto-text strong">{`$${boleta.toLocaleString(
            "es-CL"
          )}`}</p>
        </div>
        <div className="cardPrice__monto">
          <p className="cardPrice__monto-text">Recibirás un pago de:</p>
          <p className="cardPrice__monto-text strong">{`$${pago.toLocaleString(
            "es-CL"
          )}`}</p>
        </div>
        <div className="cardPrice__monto">
          <p className="cardPrice__monto-text">Retención del SII:</p>
          <p className="cardPrice__monto-text strong">{`$${retension.toLocaleString(
            "es-CL"
          )}`}</p>
        </div>
      </div>
    </Col>
  );
};

export default CardPrice;
