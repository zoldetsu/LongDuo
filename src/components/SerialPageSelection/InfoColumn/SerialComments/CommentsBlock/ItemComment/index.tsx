import React from "react";
import classes from "./ItemComment.module.scss";
// @ts-ignore
import ArrowDownIcon from "../../../../../../assets/down-arrow.svg?react";
// @ts-ignore
import ArrowUpIcon from "../../../../../../assets/up-arrow.svg?react";
export default function ItemComment() {
  return (
    <div className={classes.item_wrapper}>
      <div className={classes.item_header}>
        <div className={classes.item_avatar}></div>
        <div className={classes.item_author}>
          <div className={classes.item_user}>Nazar</div>
          <div className={classes.item_date}>3 часа назад</div>
        </div>
        <div className={classes.item_rating}>
          <div className={classes.item_rating_btn}>
            <ArrowDownIcon className={classes.icon_arrow_down} />
          </div>
          <div className={classes.item_rating_number_wrapper}>
            <div className={classes.item_rating_number}>100</div>
          </div>
          <div className={classes.item_rating_btn}>
            <ArrowUpIcon className={classes.icon_arrow_up} />
          </div>
        </div>
      </div>

      <div className={classes.item_body}>
        пираты-разбойники, которым награбленное добро было куда ближе, чем
        какие-то «никчемные мечты». Но вот, одним прекрасным днем,
      </div>

      <div className={classes.item_footer}>
        <div className={classes.footer_reply}>ответить</div>
        <div className={classes.footer_reply}>пожаловаться</div>
      </div>
    </div>
  );
}
