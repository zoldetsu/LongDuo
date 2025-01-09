import classes from "./AboutProfile.module.scss";
export default function AboutProfile() {
  return (
    <article className={classes.about_wrapper}>
      <header className={classes.about_main_text}>Обо мне</header>
      <div className={classes.line}></div>
      <div className={classes.description_title}>Описание</div>
      <div className={classes.description_text}>
        Хочу пожелать вам только самого лучшего! Пусть ваша жизнь будет
        наполнена счастьем, любовью и радостью. Пусть здоровье никогда не
        подводит, удача сопутствует во всех начинаниях, а мечты исполняются
        легко и красиво.
      </div>
      <div className={classes.date_title}>Дата рождения</div>
      <div className={classes.date_text}>20.03.2003</div>
    </article>
  );
}
