import { Container, Col, Row } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchTypes, fetchDevices } from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.Page,
      2
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.selectedType, device.selectedBrand]);

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
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
