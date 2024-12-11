import { useRef, useState } from "react";
import classes from "./ReviewModal.module.scss";
import { useGetReviews } from "../store";
import { ButtonReviewsConstation } from "../../../../utils/constants/buttonSelection";

interface IReviewModal {
  setOpen: (arg: boolean) => void;
}

export default function ReviewModal({ setOpen }: IReviewModal) {
  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  const [active, setActive] = useState("positive");
  const [activeRating, setActiveRating] = useState(null);
  const [rating, setRating] = useState(null);
  const addReview = useGetReviews((state) => state.setAddReview);

  const onClickExitt = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const name = inputRef.current.value;
    const text = textareaRef.current.value;

    if (name.length > 10 && text.length > 10) {
      const review = {
        nameReviews: name,
        textReviews: text,
        type: active,
        rating: rating || 0,
      };
      addReview(review);
      setOpen(false);
    }
  };

  const handleRatingClick = (num: number) => {
    setActiveRating(num);
    setRating(num);
  };

  return (
    <div onClick={onClickExitt} className={classes.modal_overlay}>
      <div onClick={(e) => e.stopPropagation()} className={classes.modal}>
        <div className={`${classes.text_center} ${classes.text}`}>
          Написать отзыв
        </div>
        <input
          className={classes.input_review}
          placeholder="Название отзыва"
          name=""
          ref={inputRef}
          id=""
        />
        <div className={classes.review_inner}>
          <textarea
            className={classes.review_text}
            placeholder="Напишите что нибудь..."
            ref={textareaRef}
            name=""
            id=""
          ></textarea>
        </div>
        <div className={` ${classes.text}`}>Оценка</div>
        <div className={classes.rating}>
          {[...Array(10)].map((obj, index) => (
            <div
              onClick={() => handleRatingClick(index + 1)}
              className={`${classes.review_choose_number_inner} ${
                activeRating === index + 1 ? classes.activeRating : ""
              }`}
            >
              <div className={classes.number}>{index + 1}</div>
            </div>
          ))}
        </div>
        <div className={` ${classes.text}`}>Тип отзыва</div>
        <div className={classes.buttons_types}>
          {ButtonReviewsConstation.map((type, index) => (
            <button
              key={index}
              onClick={() => setActive(type.name)}
              className={`${classes.button_type} ${
                active === type.name ? classes[`button_type_${type.name}`] : ""
              }`}
            >
              {type.icon}
            </button>
          ))}
        </div>
        <button onClick={handleSubmit} className={classes.review_button}>
          Создать
        </button>
      </div>
    </div>
  );
}
