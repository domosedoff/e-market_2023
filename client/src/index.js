import { createContext } from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <App />
  </Context.Provider>
);
