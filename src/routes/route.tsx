/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
import { createBrowserRouter } from "react-router-dom";
import NoInternetConnection from "../components/error/NoInternetConnection";
import { ErrorBoundary } from "react-error-boundary";
import App from "../App";
import ErrorReturn from "../components/error/Error";
import Home from "../pages/home";
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

  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
  // {
  //   path: "/notFound",
  //   element: <NotFound />,
  // },
]);

export default routes;
