import { Link, useNavigate } from "react-router-dom";
import classes from "./FallTab.module.scss";
import { useContext } from "react";
// import { AuthContext } from "../../context";

export default function FallTab() {
  // const { setIsAuth, setIsAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  // const exitPerson = () => {
  //   setIsAuth(false);
  //   setIsAdmin(false);
  //   navigate("/sign");
  // };

  return (
    <div>
      <div className={classes.tab}>
        <div className={classes.tab_container}>
          <Link className={classes.tab_item} to="/person">
            Мой профиль
          </Link>

          <Link className={classes.tab_item} to="/person">
            Настройки
          </Link>

          <Link className={classes.tab_item} to="/person">
            Мои списки
          </Link>

          <Link className={classes.tab_item} to="/person">
            Моё избранное
          </Link>

          <div className={classes.tab_item}>Выйти</div>
        </div>
      </div>
    </div>
  );
}
