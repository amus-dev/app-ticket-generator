import { useContext } from "react";

import { Container, Row } from "react-bootstrap";
import Header from "../components/common/header";
import FormBoleta from "../components/form/FormBoleta";
import CardPrice from "../components/CardPrice";

import { BoletaContext } from "../context/BoletaContext";

const LayoutDefault = () => {
  const { MontoLiquido } = useContext(BoletaContext);
  return (
    <Container>
      <Header />
      <FormBoleta />
      <Row>
        <CardPrice title="Valor Liquído" monto={MontoLiquido} />
      </Row>
    </Container>
  );
};

export default LayoutDefault;
