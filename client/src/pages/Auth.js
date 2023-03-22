import { Button, Card, Container, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">АВТОРИЗАЦИЯ</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите email..." className="mt-3" />
          <Form.Control placeholder="Введите пароль... " className="mt-3" />
          <Row className="d-flex justify-beetween mt-5 ">
            <div>
              Нет аккаунта?
              <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь!</NavLink>
            </div>
            <Button variant={"outline-success"}>Войти</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
