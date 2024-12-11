import { useEffect, useMemo, useState } from "react";
import ButtonsSortingSelection from "./ButtonsSortingSelection";
import classes from "./FeedBacksColumn.module.scss";
import ItemFeedback from "./ItemFeedback";
import ReviewModal from "./ReviewModal";
import { TReview, useGetReviews } from "./store";
import { reviewsBD } from "../../../fakeBd/reviews";

export default function FeedbacksColumn() {
  const [open, setOpen] = useState(false);
  const { setGetReviews, arrayReviews } = useGetReviews((state) => state);

  useEffect(() => {
    setGetReviews(reviewsBD);
  }, []);

  const [filterType, setFilterType] = useState("all");

  const filteredReviews = useMemo(() => {
    return filterType === "all"
      ? arrayReviews
      : arrayReviews.filter((obj: TReview) => obj.type === filterType);
  }, [filterType, arrayReviews]);

  const handleClick = (type: string) => setFilterType(type);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={classes.feedback__create_btn}
      >
        Написать отзыв
      </button>
      {open && <ReviewModal setOpen={setOpen} />}
      <ButtonsSortingSelection typeFilter={handleClick} />

      <div className={classes.feedbacks__inner}>
        {filteredReviews.map((review: TReview) => (
          <ItemFeedback item={review} />
        ))}
      </div>
    </div>
  );
}
