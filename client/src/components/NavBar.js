import { useContext } from "react";
import { Context } from "..";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          ЮМЕГАМАГАЗ{" "}
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} className="mx-3">
              {" "}
              Админ панель
            </Button>
            <Button variant={"outline-light"}>Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
