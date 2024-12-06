import React from "react";
import classes from "./ItemFeedBack.module.scss";
// @ts-ignore
import FavoriteIcon from "../../../../assets/heart.svg?react";
// @ts-ignore
import EyeIcon from "../../../../assets/feedback/eye.svg?react";
import { TReview } from "../store";

type TtypeFeedBack = {
  item: TReview;
};

export default function ItemFeedback({ item }: TtypeFeedBack) {
  return (
    <div className={classes.review_item_wrapper}>
      <div className={classes.review_item_header}>
        <span className={classes.vertical_line}></span>
        <img className={classes.avatar} src="" alt="" />
        <div className={classes.name}>{item.nickName || "Nazar"}</div>
        <div className={classes.date}>{item.date || "2 часа назад"}</div>
      </div>
      <div className={classes.review_title}>{item.nameReviews}</div>
      <div className={classes.review_text}>{item.textReviews}</div>

      <div className={classes.review_footer}>
        <div className={classes.review_rating}>
          <div style={{ fontWeight: "500" }}>Оценка</div>
          <span style={{ marginLeft: "9px" }}>{item.rating || 4}</span>
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
