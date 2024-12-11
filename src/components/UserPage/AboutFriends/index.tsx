import classes from "./AboutFriends.module.scss";
export default function AboutFriends() {
  return (
    <div className={classes.friends_wrapper}>
      <header style={{ display: "flex" }}>
        <div className={classes.friends_main_text}>Друзья</div>
        <div className={classes.count}>100</div>
      </header>
      <div className={classes.line}></div>
      <div className={classes.friends_inner}>
        <div className={classes.circle_test}></div>
        <div className={classes.circle_test}></div>
        <div className={classes.circle_test}></div>
      </div>
    </div>
  );
}
