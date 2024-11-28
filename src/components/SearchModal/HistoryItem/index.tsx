import classes from "./HistoryItem.module.scss";
import { setCookie } from "../../../utils/cookieUtils";

interface IHistoryItem {
  name: string;
  array: string[];
  setArray: (arg: string[]) => void;
}

export default function HistoryItem({ name, array, setArray }: IHistoryItem) {
  /*
   * Функция удаления запроса из истории поиска.
   * Получаем массив запросов, удаляем элемент и обратно возращаем новый массив
   */
  const RemoveHistory = () => {
    const indexRemove = array.indexOf(name);

    const newArray = [
      ...array.slice(0, indexRemove),
      ...array.slice(indexRemove + 1),
    ];
    //* обновляем массив
    setArray(newArray);
    //* добавляем новый массив в cookie
    setCookie("saveArray", newArray, 30);
  };
  return (
    <div className={classes.history_inner}>
      <div className={classes.title}>{name}</div>
      <div onClick={RemoveHistory} className={classes.cancel_icon}>
        <span></span>
      </div>
    </div>
  );
}
