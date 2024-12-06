import { useEffect, useState } from "react";
import ButtonsSortingSelection from "./ButtonsSortingSelection";
import classes from "./FeedBacksColumn.module.scss";
import ItemFeedback from "./ItemFeedback";
import ReviewModal from "./ReviewModal";
import { TReview, useGetReviews } from "./store";
import { reviewsBD } from "../../../fakeBd/reviews";

export default function FeedbacksColumn() {
  const [open, setOpen] = useState(false);
  const getReviews = useGetReviews((state) => state.setGetReviews);
  const reviews = useGetReviews((state) => state.arrayReviews);
  useEffect(() => {
    getReviews(reviewsBD);
  }, []);

  console.log(reviews);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={classes.feedback__create_btn}
      >
        Написать отзыв
      </button>
      {open && <ReviewModal setOpen={setOpen} />}
      <ButtonsSortingSelection />

      <div className={classes.feedbacks__inner}>
        {reviews.map((review: TReview) => (
          <ItemFeedback item={review} />
        ))}
      </div>
    </div>
  );
}
