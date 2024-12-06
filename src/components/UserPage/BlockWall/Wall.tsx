import { useContext, useRef, useEffect, useState } from "react";
import classes from "./Wall.module.scss";
// import "../../../../public/Icons/icon_smile.png";

interface iAcive {
  active: boolean;
}
export default function Wall({ active }: iAcive) {
  // const { isPerson } = useContext(AuthContext);
  // const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  // const [comment, setComment] = useState<iComment[]>(() => {
  //   const initialComments =
  //     Comments.find((user) => user.user_id === isPerson.id)?.comments || [];
  //   return initialComments;
  // });

  // useEffect(() => {
  //   const textarea = textareaRef.current;
  //   if (!textarea) return;

  //   const adjustHeight = () => {
  //     textarea.style.height = "auto";
  //     textarea.style.height = `${textarea.scrollHeight}px`;
  //   };

  //   textarea.addEventListener("input", adjustHeight);
  //   return () => {
  //     textarea.removeEventListener("input", adjustHeight);
  //   };
  // }, []);

  // const users = Comments.filter((user) => {
  //   return user.user_id === isPerson.id;
  // });

  const addComment = () => {
    // if (textareaRef.current && users[0]) {
    //   setComment([
    //     ...comment,
    //     {
    //       id: users[0].comments.length + 1,
    //       comment: textareaRef.current.value,
    //     },
    //   ]);
    //   textareaRef.current.value = "";
    // }
  };

  const fu = () => {
    // console.log(users, "просто users");
    // console.log(users.length, "просто users");
    // console.log(users[0], "просто users");
    // console.log(users[0].comments, "просто users");
  };

  return (
    <div
      className={active ? `${classes.Wall} ${classes.active}` : classes.Wall}
    >
      <div className={classes.container}>
        <div className={classes.LineOne}>
          <div onClick={fu} className={classes.sort_text}>
            сортировка
          </div>
          <div className={classes.sort_text}>правила</div>
        </div>
        <div className={classes.container_comment}>
          <div className={classes.icon_text}>
            <img src="{isPerson.avatar}" className={classes.avatar} alt="" />
            <textarea
              className={classes.input}
              placeholder="Что у вас нового?"
              required
            ></textarea>
          </div>

          <div className={classes.buttons_line}>
            <img className={classes.icon} src="/Icons/icon_smile.png" alt="" />
            <img
              className={classes.icon}
              src="/Icons/icon_sticker2.png"
              alt=""
              onClick={() => {}}
            />
            <div onClick={addComment} className={classes.button_send}>
              отправить
            </div>
          </div>
        </div>
      </div>

      {/* {comment.map((comment) => {
        return (
          <CommentBlock
            avatar={isPerson.avatar}
            name={isPerson.name}
            comment={comment.comment}
          />
        );
      })} */}
    </div>
  );
}
