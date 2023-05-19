import { Button, Card, Container, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";
import { useContext, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("navigate", navigate);
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="Введите email..."
            className="mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            placeholder="Введите пароль... "
            className="mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 d-inline-block ">
            <div className="d-flex justify-content-between ">
              {isLogin ? (
                <div className="d-inline-block">
                  Нет аккаунта?
                  <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь!</NavLink>
                </div>
              ) : (
                <div className="d-inline-block">
                  Есть аккаунт?
                  <NavLink to={LOGIN_ROUTE}> Войдите!</NavLink>
                </div>
              )}
              <Button
                variant={"outline-success"}
                className="ml-auto"
                onClick={click}
              >
                {isLogin ? "Войти" : "Регистрация"}
              </Button>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
