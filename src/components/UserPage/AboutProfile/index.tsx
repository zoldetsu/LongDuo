import classes from "./AboutProfile.module.scss";
export default function AboutProfile() {
  return (
    <article className={classes.about_wrapper}>
      <header className={classes.about_main_text}>Обо мне</header>
      <div className={classes.line}></div>
      <div className={classes.description_title}>Описание</div>
      <div className={classes.description_text}>
        я играю майнкрафт я играю майнкрафт я играю майнкрафтя играю майнкрафтя
        играю майнкрафтя играю майнкрафт
      </div>
      <div className={classes.date_title}>Дата рождения</div>
      <div className={classes.date_text}>20.03.2003</div>
    </article>
  );
}
