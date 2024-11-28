import classes from "./ChaptersColumn.module.scss";
import ItemChapter from "./ItemChapter";
// @ts-ignore
import ReverseIcon from "../../../assets/reverse-arrow.svg?react";
import { useSortingChapters } from "../../../hooks/UseSortingChapters";
import { useQuery } from "react-query";
import { chapters } from "../../../fakeBd/chapters";

export default function ChaptersColumn() {
  const { data, isLoading, error } = useQuery("chapter", async () => chapters);

  const { requiredChapter, filteredResults, setReverse, handleChange } =
    useSortingChapters(chapters);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
  return (
    <div className={classes.chapters_wrapper}>
      <div className={classes.chapters_title}>Серии</div>

      <div className={classes.search_inner}>
        <input
          className={classes.search}
          type="number"
          placeholder="Искать по номеру главы"
          value={requiredChapter}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          onClick={() => setReverse((prev) => !prev)}
          className={classes.reverse_button}
        >
          <ReverseIcon className={classes.reverse_icon} />
          перевернуть
        </button>
      </div>

      <div>
        {filteredResults &&
          filteredResults.map((chapter) => (
            <ItemChapter key={chapter.chapter} chapter={chapter} />
          ))}
      </div>
    </div>
  );
}
