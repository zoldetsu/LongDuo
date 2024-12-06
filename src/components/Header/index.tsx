import classes from "./Header.module.scss";
import "../../App.css";
import LinkHeader from "./LinkHeader";
import { useLocation, Link } from "react-router-dom";
import { HeaderRouters } from "../../router";
import FallTab from "./FallTab";
import SearchModal from "../SearchModal";
import { useEffect, useState } from "react";

export default function Headers() {
  const { pathname } = useLocation();
  const [active, setActive] = useState("/anime");
  const [showTab, setShowTab] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeBurger, setActiveBurger] = useState(false);

  const isAdmin = true;
  const isAuth = true;
  useEffect(() => {
    setActive(pathname);
    setShowTab(false);
    setActiveBurger(false);
  }, [pathname]);

  const toggleTab = () => setShowTab((prev) => !prev);
  const toggleBurgerMenu = () => setActiveBurger((prev) => !prev);

  const renderLinks = () =>
    HeaderRouters.map((router, index) => (
      <LinkHeader
        key={index}
        route={router.path}
        active={active === router.path}
        onClick={() => setActive(router.path)}
      >
        {router.name}
      </LinkHeader>
    ));

  return (
    <div>
      <div
        className={`${classes.header} ${
          activeBurger ? classes.activeBurger : ""
        }`}
      >
        {/* Появление левого меню  */}
        {
          <div
            className={`${classes.burger_menu} ${
              activeBurger ? classes.open : ""
            }`}
          ></div>
        }

        <div className={`${classes.header_inner} container`}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={toggleBurgerMenu}
              className={`${classes.burger} ${
                activeBurger ? classes.activeBurger : ""
              }`}
            >
              <span></span>
            </div>

            <Link className={classes.header_logo} to="/">
              LongDuo
            </Link>
          </div>

          <nav
            className={`${classes.nav_list} ${
              activeBurger ? classes.activeBurger : ""
            }`}
          >
            {renderLinks()}
            {isAdmin && (
              <LinkHeader
                route="/admin"
                active={active === "/admin"}
                onClick={() => setActive("/admin")}
              >
                Добавить пост
              </LinkHeader>
            )}
          </nav>

          <div className={classes.header_search}>
            <div
              onClick={() => setShowSearch(true)}
              className={classes.button_link}
            >
              Поиск
            </div>
            {isAuth ? (
              <div className={classes.button_link} onClick={toggleTab}>
                Nazar
              </div>
            ) : (
              <Link to="/auth" className={classes.button_link}>
                Вход
              </Link>
            )}
          </div>
        </div>
      </div>

      {showSearch && <SearchModal onClick={setShowSearch} />}
      {showTab && isAuth && <FallTab />}
    </div>
  );
}
