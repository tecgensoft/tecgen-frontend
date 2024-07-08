/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorReturn from "../components/error/Error";
import NoInternetConnection from "../components/error/NoInternetConnection";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <NoInternetConnection>
        <ErrorBoundary FallbackComponent={ErrorReturn} onReset={() => (location.href = "/")}>
          <App />
        </ErrorBoundary>
      </NoInternetConnection>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/campaign",
        // element: <Campaign />,
      },
      {
        path: "/auth/signup",
        // element: (
        //   <Aunthenticate>
        //     <Signup />
        //   </Aunthenticate>
        // ),
      },
      {
        path: "/auth/login",
        element: (
          // <Aunthenticate>
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
