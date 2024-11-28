import React, { useState } from "react";
import { ButtonCommentsConstation } from "../../../../utils/constants/buttonSelection";
import ButtonSelection from "../../../../UI/ButtonSelection";
import classes from "./SerialComments.module.scss";
import CommentsBlock from "./CommentsBlock";
import TextFieldComment from "../../../../UI/TextFieldComment";
export default function SerialComments() {
  const [activeComment, setActiveComment] = useState(
    ButtonCommentsConstation[0].name
  );
  console.log(activeComment);

  return (
    <div className={classes.comments_container}>
      <div style={{ display: "flex" }}>
        <div className={classes.text}>Комментарии</div>
        <h5 className={classes.count}>1000</h5>
      </div>
      <div>
        {ButtonCommentsConstation.map((cons) => (
          <ButtonSelection
            active={activeComment}
            setActive={setActiveComment}
            name={cons.name}
            label={cons.label}
          ></ButtonSelection>
        ))}
      </div>
      <TextFieldComment />
      {activeComment === "news" && <CommentsBlock />}
      {activeComment === "popular" && <h1>популярные</h1>}
    </div>
  );
}
