import { useContext } from "react";

import { Container, Row } from "react-bootstrap";
import Header from "../components/common/header";
import FormBoleta from "../components/form/FormBoleta";
import CardPrice from "../components/CardPrice";

import { BoletaContext } from "../context/BoletaContext";

const LayoutDefault = () => {
  const { MontoLiquido, MontoLiquidoOld } = useContext(BoletaContext);
  return (
    <Container>
      <Header />
      <FormBoleta />
      <Row>
        <CardPrice title="Valor Liquído 12.25%" monto={MontoLiquido} />
        <CardPrice title="Valor Liquído 10%" monto={MontoLiquidoOld} />
      </Row>
    </Container>
  );
};

export default LayoutDefault;
