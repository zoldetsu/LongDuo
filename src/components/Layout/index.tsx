import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";
import "../../index.css";
import { useCallback } from "react";
import Header from "../Header";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { switches } from "../../redux/slices/SwitchTheme";

export default function Layout() {
  //   const dispatch = useAppDispatch();
  //   const { theme } = useAppSelector((state) => state.SwitchTheme);

  //   const switcTheme = useCallback(() => {
  //     dispatch(switches());
  //   }, []);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
