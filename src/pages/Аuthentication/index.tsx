import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { Button } from "@mui/material";
import "../../App.css";
import classes from "./Authentication.module.scss";
import Login from "./Login";
import Register from "./Register";

// import { useAppSelector } from "../../redux/store";
export default function Аuthentication() {
  const [buttonActive, setButtons] = useState("register");
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  //   const { theme } = useAppSelector((state) => state.SwitchTheme);

  return (
    <div className="container">
      <div className={`${classes.auth_wrapper} `}>
        <div className={classes.buttons_inner}>
          <button
            onClick={() => setButtons("login")}
            className={`${classes.button} `}
          >
            Войти
          </button>
          <button
            onClick={() => setButtons("register")}
            className={`${classes.button}`}
          >
            Регистрация
          </button>
        </div>
        {buttonActive === "login" && <Login />}
        {buttonActive === "register" && <Register />}
      </div>
      <button></button>
    </div>
  );
}
