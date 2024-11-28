import ButtonsSortingSelection from "./ButtonsSortingSelection";
import classes from "./FeedBacksColumn.module.scss";
import ItemFeedback from "./ItemFeedback";

export default function FeedbacksColumn() {
  return (
    <div>
      <button className={classes.feedback__create_btn}>Написать отзыв</button>

      <ButtonsSortingSelection />

      <div className={classes.feedbacks__inner}>
        <ItemFeedback />
        <ItemFeedback />
        <ItemFeedback />
        <ItemFeedback />
      </div>
    </div>
  );
}
