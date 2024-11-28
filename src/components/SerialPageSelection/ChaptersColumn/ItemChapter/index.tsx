import React, { useState } from "react";
import classes from "./ItemChapter.module.scss";
// @ts-ignore
import UnlikeIcon from "../../../../assets/heart.svg?react";
// @ts-ignore
import LikeIcon from "../../../../assets/heart-_1_.svg?react";
import { chapter } from "../../../../types/TypeChapter";

interface IItemChapter {
  chapter: chapter;
}

export default function ItemChapter({ chapter }: IItemChapter) {
  const [like, setLike] = useState<boolean>(chapter.like);
  return (
    <div className={classes.chapter_item_wrapper}>
      <div>Серия {chapter.chapter}</div>
      <div className={classes.chapter_info_inner}>
        <div className={classes.info_date}>{chapter.date}</div>
        <div
          onClick={() => setLike((prev) => !prev)}
          className={classes.info_icon_favorite}
        >
          {!like ? <UnlikeIcon /> : <LikeIcon />}
        </div>
        <div className={classes.info_counter}>{chapter.countLike}</div>
      </div>
    </div>
  );
}
