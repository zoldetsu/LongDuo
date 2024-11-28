import { useState } from "react";
import classes from "./ButtonsSortingSelection.module.scss";
import { ButtonFeedbacksConstation } from "../../../../utils/constants/buttonSelection";
export default function ButtonsSortingSelection() {
  const [isActive, setIsActive] = useState(ButtonFeedbacksConstation[0].name);
  return (
    <div>
      <div className={classes.sort_inner}>
        {ButtonFeedbacksConstation.map((item) => (
          <button
            onClick={() => {
              setIsActive(item.name);
            }}
            className={
              isActive === item.name
                ? `${classes.sort_btn} ${classes.active}`
                : `${classes.sort_btn}`
            }
          >
            <div className={classes[item.style]}>{item.icon}</div>
            <span className={classes.label}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
