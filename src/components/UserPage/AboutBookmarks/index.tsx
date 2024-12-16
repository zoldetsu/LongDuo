import React, { useRef } from "react";
import classes from "./AboutBookmarks.module.scss";
import { AnimeTitle } from "../../../fakeBd/poster";
import CardChapter from "../../CardChapter";
import { useNavigate } from "react-router-dom";
import { initDrag } from "../../../utils/dragFunction";
export default function AboutBookmarks() {
  const router = useNavigate();
  const marksInnerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    if (marksInnerRef.current) {
      initDrag(marksInnerRef.current);
    }
  };

  return (
    <article className={classes.marks_wrapper}>
      <header className={classes.marks_main_text}>
        <h3>закладки</h3>
        <h4>вся манга</h4>
      </header>
      <div className={classes.line}></div>
      <div
        ref={marksInnerRef}
        onMouseDown={handleMouseDown}
        className={classes.marks_inner}
      >
        {AnimeTitle.map((poster, index: number) => (
          <CardChapter
            key={index}
            onClick={() => router(`/anime/${poster.id}`)}
            title={poster.title}
            status={poster.status}
            img={poster.path}
          ></CardChapter>
        ))}
      </div>
    </article>
  );
}
