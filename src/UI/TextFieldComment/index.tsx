// <reference types="vite-plugin-svgr/client" />
import classes from "./TextFieldComment.module.scss";
// @ts-ignore
import EmojiIcon from "../../assets/emoji.svg?react";
// @ts-ignore
import PaperIcon from "../../assets/clip.svg?react";

import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
export default function TextFieldComment() {
  const [emojiAcive, setEmojiActive] = useState(false);
  return (
    <div className={classes.field_wrapper}>
      <div className={classes.emoji_picker}>
        <EmojiPicker
          open={emojiAcive}
          theme="dark"
          className={classes.emoji_inner}
        />
      </div>
      <textarea
        className={classes.input_field}
        name=""
        id=""
        placeholder="Напишите что нибудь..."
      />
      <div className={classes.comment_tools_wrapper}>
        <div className={classes.tools_inner}>
          <div
            onClick={() => setEmojiActive((prev) => !prev)}
            className={classes.tool}
          >
            <EmojiIcon />
          </div>

          <div className={classes.tool}>
            <PaperIcon />
          </div>
        </div>

        <button className={classes.button}>Отправить</button>
      </div>
    </div>
  );
}
