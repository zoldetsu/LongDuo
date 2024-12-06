import classes from "./BlockFavorite.module.scss";

export default function Wall({ active }) {
  return (
    <div
      className={
        active ? `${classes.Favorite} ${classes.active}` : classes.Favorite
      }
    >
      <div className="container"></div>
    </div>
  );
}
