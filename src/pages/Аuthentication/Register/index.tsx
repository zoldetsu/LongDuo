import classes from "./Register.module.scss";
// import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useState } from "react";
// import { fetchRegister } from "../../../redux/slices/Auth";
import { useNavigate } from "react-router-dom";
import TextField from "../../../UI/TextField";
// import { TUser } from "../../../types/TypesAuth";

export default function Register() {
  //   const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //   const { theme } = useAppSelector((state) => state.SwitchTheme);
  //* --------------------------------------------------------------------
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //* --------------------------------------------------------------------

  const SendClick = async () => {
    // const values = {
    //   fullName,
    //   email,
    //   password,
    // };
    // //* Возвращает информацию о пользоавателе после регистрации
    // const data = (await dispatch(fetchRegister(values))) as { payload: TUser };
    // if (!data.payload) {
    //   return alert("не удалось зарегистрироваться");
    // }
    // //* берем токен и записываем в localStorage
    // if ("token" in data.payload) {
    //   window.localStorage.setItem("token", data.payload.token);
    //   navigate("/");
    // }
  };

  return (
    <div className={classes.register_wrapper}>
      <TextField
        type="text"
        placeholder="Имя"
        value={fullName}
        setInput={setFullName}
      />
      <TextField
        type="text"
        placeholder="Имя"
        value={password}
        setInput={setPassword}
      />
      <TextField
        type="text"
        placeholder="Password"
        value={email}
        setInput={setEmail}
      />

      <button
        disabled={(fullName && password && email) === ""}
        className={classes.button}
        onClick={SendClick}
      >
        Зарегистрироваться
      </button>
    </div>
  );
}
