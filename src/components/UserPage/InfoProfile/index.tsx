import classes from "./InfoProfile.module.scss";
export default function InfoProfile() {
  // надо это перенести к баннеру пользователя
  return (
    <article className={classes.profile_wrapperr}>
      <div className={classes.profile_info_inner}>
        <img className={classes.profile_avatar} src="ava.jpg" alt="not" />
        <div className={classes.profile_info}>
          <div className={classes.profile_name}>Nazar</div>
          <div className={classes.profile_date}>был в cети 12 января 12:25</div>
        </div>
      </div>
    </article>
  );
}
