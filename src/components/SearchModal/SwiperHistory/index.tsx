import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import HistoryItem from "../HistoryItem";
import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/cookieUtils";
import classes from "./SwiperHistory.module.scss";
import "swiper/scss";

export default function SwiperHistory() {
  const [arraySearch, setArraySearch] = useState<string[]>([]);
  //* --------------------------------------------------------------------
  useEffect(() => {
    const arrayString = getCookie("saveArray");
    const array = arrayString ? arrayString.split(",") : [];
    setArraySearch(array);
  }, []);
  return (
    <div className={classes.swiper_wrapper}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10} // Интервал между слайдами
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        style={{ width: "100%" }}
      >
        <SwiperSlide>
          <div className={classes.swiper_inner}>
            {arraySearch.map((word: string) => (
              <HistoryItem
                name={word}
                array={arraySearch}
                setArray={setArraySearch}
              />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
