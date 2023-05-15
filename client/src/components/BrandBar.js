import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex ">
      <div className="col-auto">
        {device.brands.map((brand) => (
          <Card
            style={{ cursor: "pointer" }}
            key={brand.id}
            className="p-3 d-inline-block"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? "dabger" : "light"}
          >
            {brand.name}
          </Card>
        ))}
      </div>
    </Row>
  );
});

export default BrandBar;
