import { useState } from "react";
import classes from "./Login.module.scss";

// import { useAppDispatch, useAppSelector } from "../../../redux/store";
// import { fetchLogin } from "../../../redux/slices/Auth";
import { useNavigate } from "react-router-dom";
// import { TUser } from "../../../types/TypesAuth";
import TextField from "../../../UI/TextField";

export default function Login() {
  //   const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //   const { theme } = useAppSelector((state) => state.SwitchTheme);
  //* --------------------------------------------------------------------
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //* --------------------------------------------------------------------
  const SendClick = async () => {
    // const values = {
    //   email,
    //   password,
    // };
    // //* Возвращает информацию о пользоавателе после входа
    // const data = (await dispatch(fetchLogin(values))) as { payload: TUser };
    // if (!data.payload) {
    //   return alert("не удалось войти");
    // }
    // //* берем токен и записываем в localStorage
    // if (data.payload) {
    //   window.localStorage.setItem("token", data.payload.token);
    //   navigate("/");
    // }
  };
  //* --------------------------------------------------------------------
  return (
    <div className={classes.login_wrapper}>
      <TextField
        type="text"
        placeholder="Email"
        value={email}
        setInput={setEmail}
      />
      <TextField
        type="text"
        placeholder="Password"
        value={password}
        setInput={setPassword}
      />

      <button
        disabled={(password && email) === ""}
        className={classes.button}
        onClick={SendClick}
      >
        Войти
      </button>
    </div>
  );
}
