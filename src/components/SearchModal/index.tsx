import { useEffect, useRef, useState } from "react";
import classes from "./SearchModal.module.scss";
import { getCookie, setCookie } from "../../utils/cookieUtils";
import HistoryItem from "./HistoryItem";

interface IAlert {
  onClick: (arg: boolean) => void;
  user?: string;
}

export default function SearchModal({ onClick }: IAlert) {
  const [item, setItem] = useState("");
  const [arraySearch, setArraySearch] = useState<string[]>([]);
  //* --------------------------------------------------------------------
  useEffect(() => {
    const arrayString = getCookie("saveArray");
    const array = arrayString ? arrayString.split(",") : [];
    setArraySearch(array);
  }, []);
  //* эта функция принмает в качестве колбэка другую функцию и передает булевое значение
  //* выход из редактирования
  const onClickExit = () => {
    onClick(false);
  };
  //* --------------------------------------------------------------------
  /*
   * при нажатии создает объект с инфой об пользователе и отправляет на сервер
   */
  const onSubmit = async () => {
    const arrayString = getCookie("saveArray");
    const array = arrayString ? arrayString.split(",") : [];
    console.log(array);

    if (!array.includes(item)) {
      array.push(item); // Добавляем элемент
      setArraySearch(array);
      setCookie("saveArray", array, 30); // Сохраняем обновленный массив в куки
    } else {
    }
  };
  //* --------------------------------------------------------------------

  const initDrag = (el: HTMLElement) => {
    let isDragging = false,
      prevPageX = 0,
      prevScrollLeft = 0;

    const dragStart = (e: MouseEvent) => {
      isDragging = true;
      prevPageX = e.pageX;
      prevScrollLeft = el.scrollLeft;
    };

    const drag = (e: MouseEvent) => {
      if (!isDragging) return;
      el.scrollLeft = prevScrollLeft - (e.pageX - prevPageX);
    };

    const dragStop = () => (isDragging = false);

    el.addEventListener("mousedown", dragStart);
    el.addEventListener("mousemove", drag);
    el.addEventListener("mouseup", dragStop);
    el.addEventListener("mouseleave", dragStop);
  };

  return (
    <div>
      <div onClick={onClickExit} className={classes.modal_overlay}></div>
      <div className={`${classes.modal}`}>
        <input
          className={classes.inputFieldSearch}
          type="text"
          placeholder="Что ищем"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        {/* ------------------------------------------------------------- */}
        <div>
          <button className={classes.buttonSearch} onClick={onSubmit}>
            тайтлы
          </button>
          {/* ------------------------------------------------------------- */}
          <button
            className={classes.buttonSearch}
            onClick={() => onClick(false)}
          >
            пользователи
          </button>
          {/* ------------------------------------------------------------- */}
          <div
            onMouseDown={() =>
              initDrag(
                document.querySelector(
                  `.${classes.history_inner}`
                ) as HTMLElement
              )
            }
            className={classes.history_inner}
          >
            {arraySearch.map((word: string) => (
              <HistoryItem
                name={word}
                array={arraySearch}
                setArray={setArraySearch}
              />
            ))}
          </div>
          {/* ------------------------------------------------------------- */}
          {/* <SwiperHistory /> */}
        </div>
        {/* ------------------------------------------------------------- */}
      </div>
    </div>
  );
}
