import { Card, Col, Row, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import bigStar from "../assets/bigStar.png";

const DevicePage = () => {
  const device = {
    id: 6,
    name: "apple",
    price: 5000,
    rating: 0,
    img: "https://klike.net/uploads/posts/2022-09/1663135202_a.jpg",
  };

  const description = [
    { id: 1, title: "Скорость", description: "1000" },
    { id: 2, title: "вес", description: "Стопудов" },
    { id: 3, title: "Рост", description: "Карлик" },
    { id: 4, title: "Цвет", description: "Розовый" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>

        <Col md={4}>
          <Card className="d-flex flex-column align-items-center">
            <h3>{device.name}</h3>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3> {device.price}</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-2">
        <h1>Характеристики</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
