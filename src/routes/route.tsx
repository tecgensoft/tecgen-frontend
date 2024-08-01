/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Product from "../pages/product";
import Signup from "../pages/signup";
import Aunthenticate from "./Aunthenticate";
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      // <NoInternetConnection>
      //   <ErrorBoundary FallbackComponent={ErrorReturn} onReset={() => (location.href = "/")}>
      //     <App />
      //   </ErrorBoundary>
      // </NoInternetConnection>
      <App />
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/auth/register",
        element: (
          <Aunthenticate>
            <Signup />
          // </Aunthenticate>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <Aunthenticate>
            <Login />
          // </Aunthenticate>
        ),
      },
      {
        // path: "/profile",
        // element: (
        //   <PrivateRoute>
        //     {" "}
        //     <User />{" "}
        //   </PrivateRoute>
        // ),
        children: [
          // {
          //   index: true,
          //   element: <UserProfile />,
          // },

        ],
      },

    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/notFound",
    element: <NotFound />,
  },
]);

export default routes;
