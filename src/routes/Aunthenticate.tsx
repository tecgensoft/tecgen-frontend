/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
// import { useAppSelector } from "../redux/hooks";

const Aunthenticate = ({ children }: { children: any }) => {
  const location = useLocation();
  const { pathname, state } = location;
  const { userInfo } = useAppSelector((state) => state.auth);

  if (!userInfo) {
    return children;
  }

  if (userInfo) {
    return <Navigate to="/" state={{ ...state, path: pathname }} />;
  }
  return children;
};

export default Aunthenticate;
