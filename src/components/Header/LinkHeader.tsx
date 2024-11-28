import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

interface LinkHeader {
  children: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  route: string;
}

export default function LinkHeader({
  children,
  active,
  onClick,
  route,
}: LinkHeader) {
  return (
    <Link
      className={
        active ? `${classes.nav_item} ${classes.active}` : classes.nav_item
      }
      onClick={onClick}
      to={route}
    >
      {children}
    </Link>
  );
}
