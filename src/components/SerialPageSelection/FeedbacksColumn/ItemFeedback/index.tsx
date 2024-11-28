import React from "react";
import classes from "./ItemFeedBack.module.scss";
// @ts-ignore
import FavoriteIcon from "../../../../assets/heart.svg?react";
// @ts-ignore
import EyeIcon from "../../../../assets/feedback/eye.svg?react";
export default function ItemFeedback() {
  return (
    <div className={classes.review_item_wrapper}>
      <div className={classes.review_item_header}>
        <span className={classes.vertical_line}></span>
        <img className={classes.avatar} src="" alt="" />
        <div className={classes.name}>Nazar</div>
        <div className={classes.date}>8 месяцев назад</div>
      </div>
      <div className={classes.review_title}>Прекрасная манхва</div>
      <div className={classes.review_text}>
        Последние слова, произнесенные Королем Пиратов перед казнью, вдохновили
        многих: «Мои сокровища? Коли хотите, забирайте. Ищите – я их все оставил
        там!». Легендарная фраза Золотого Роджера ознаменовала начало Великой
        Эры Пиратов – тысячи людей в погоне за своими мечтами отправились на
        Гранд Лайн, самое опасное место в мире,
      </div>

      <div className={classes.review_footer}>
        <div className={classes.review_rating}>
          <div style={{ fontWeight: "500" }}>Оценка</div>
          <span style={{ marginLeft: "9px" }}>4</span>
        </div>

        <div className={classes.review_stats}>
          <div className={classes.stats_item}>
            <EyeIcon className={classes.stats_icon} />
            <span className={classes.stats_count}>776</span>
          </div>
          <div className={classes.stats_item}>
            <FavoriteIcon className={classes.stats_icon} />
            <span className={classes.stats_count}>776</span>
          </div>
        </div>
      </div>
    </div>
  );
}
