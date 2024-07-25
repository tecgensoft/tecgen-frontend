/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from "../redux/hooks";

const Protected = ({ children }: { children: any }) => {
  // const location = useLocation();
  // // const { isReset } = useAppSelector((state) => state.filter);
  // const { pathname, state } = location;

  // if (isReset) {
  //   return children;
  // }

  // if (!isReset) {
  //   return <Navigate to="/" state={{ ...state, path: pathname }} />;
  // }
  return children;
};

export default Protected;
