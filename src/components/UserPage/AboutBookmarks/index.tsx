import React from "react";
import classes from "./AboutBookmarks.module.scss";
export default function AboutBookmarks() {
  return (
    <article className={classes.marks_wrapper}>
      <header className={classes.marks_main_text}>Закладки</header>
      <div className={classes.line}></div>
    </article>
  );
}
