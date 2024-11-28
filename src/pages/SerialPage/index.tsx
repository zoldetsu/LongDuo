import { useParams } from "react-router-dom";
import classes from "./TitlePage.module.scss";
import { AnimeTitle } from "../../fakeBd/poster.ts";
import { useState } from "react";
import { ButtonSelectionConstation } from "../../utils/constants/buttonSelection.tsx";
import ButtonSelection from "../../UI/ButtonSelection/index.tsx";
import InfoColumn from "../../components/SerialPageSelection/InfoColumn/index.tsx";
import ChaptersColumn from "../../components/SerialPageSelection/ChaptersColumn/index.tsx";
import FeedbacksColumn from "../../components/SerialPageSelection/FeedbacksColumn/index.tsx";

export default function SerialPage() {
  const { id } = useParams();
  const [active, setActive] = useState(ButtonSelectionConstation[0].name);
  const result = AnimeTitle.find(
    (anime: { id: number }) => anime.id === (id ? parseInt(id) : 0)
  );

  return (
    <div className={classes.serial_container}>
      <div>
        {result ? (
          <div className={classes.view_container}>
            <img className={classes.serial_poster} src={result.path} alt="" />
            <div className={classes.main_block}>
              <p className={classes.status}>{result.status}</p>
              <div className={classes.name}>{result.title}</div>

              <div className={classes.button_block}>
                {ButtonSelectionConstation.map((items) => (
                  <ButtonSelection
                    key={items.label}
                    active={active}
                    setActive={setActive}
                    name={items.name}
                    label={items.label}
                  ></ButtonSelection>
                ))}
              </div>
              {active === "description" && <InfoColumn SerialInfo={result} />}
              {["titles", "feedback", "cards"].includes(active) && (
                <div className={classes.discription_text}>
                  {active === "titles" ? (
                    <ChaptersColumn />
                  ) : active === "feedback" ? (
                    <FeedbacksColumn />
                  ) : (
                    "карты"
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>Аниме с id {id} не найдено</div>
        )}
      </div>
    </div>
  );
}
