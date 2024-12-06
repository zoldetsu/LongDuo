// <reference types="vite-plugin-svgr/client" />
import classes from "./TextFieldComment.module.scss";
// @ts-ignore
import EmojiIcon from "../../assets/emoji.svg?react";
// @ts-ignore
import PaperIcon from "../../assets/clip.svg?react";

import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { useGetComments } from "../../components/SerialPageSelection/InfoColumn/store";
export default function TextFieldComment() {
  const [emojiAcive, setEmojiActive] = useState(false);
  const [text, setText] = useState("");
  const [countLike, setCountLike] = useState(0);
  // * zustand
  const addComment = useGetComments((state) => state.setAddComment);

  const onSubmit = () => {
    const values = {
      text,
      countLike,
    };
    addComment(values);
  };
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
        value={text}
        name=""
        id=""
        placeholder="Напишите что нибудь..."
        onChange={(e) => setText(e.target.value)}
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

        <button onClick={onSubmit} className={classes.button}>
          Отправить
        </button>
      </div>
    </div>
  );
}
