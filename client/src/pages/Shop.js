import { Container, Col, Row } from "react-bootstrap";

import React from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2 ">
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <div>
            <BrandBar />
          </div>
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
