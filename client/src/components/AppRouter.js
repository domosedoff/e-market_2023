import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log("User:", user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}

      {/* <Navigate to={SHOP_ROUTE} /> */}
    </Routes>
  );
};

export default AppRouter;

// import React from "react";

// import { Routes, Route } from "react-router-dom";
// import { authRoutes, publicRoutes } from "../routes";
// import { SHOP_ROUTE } from "../utils/consts";

// const AppRouter = () => {
//   //const iaAuth = false
//   return (
//     <Routes>
//       {authRoutes.map(({ path, Component }) => (
//         <Route key={path} path={path} element={Component} exact />
//       ))}
//       {publicRoutes.map(({ path, Component }) => (
//         <Route key={path} path={path} element={Component} exact />
//       ))}
//     </Routes>
//   );
// };
// export default AppRouter;
