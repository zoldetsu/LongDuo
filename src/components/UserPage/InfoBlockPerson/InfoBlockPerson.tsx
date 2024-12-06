import classes from "./InfoPerson.module.scss";
export default function InfoBlockPerson() {
  return (
    <>
      <div>
        <div className={classes.person_basic_container}>
          <img className={classes.person_avatar} src="" alt="not" />
          <div className={classes.namePerson}>Nazar</div>
          <div>был в cети</div>

          <div className={classes.section_info}>
            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>друзей</div>
            </div>

            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>рейтинг</div>
            </div>

            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>комментарии</div>
            </div>

            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>аниме</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
