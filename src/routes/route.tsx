/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Product from "../pages/product";
import SignUp from "../pages/signup";
import AuthGuard from "./Aunthenticate";
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
        path: "/:productName/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/auth/register",
        element: (
          <AuthGuard>
            <SignUp />
          </AuthGuard>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
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
