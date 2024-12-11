import { useState } from "react";
import classes from "./ButtonsSortingSelection.module.scss";
import { ButtonFeedbacksConstation } from "../../../../utils/constants/buttonSelection";

interface ISorting {
  typeFilter: (arg: string) => void;
}

export default function ButtonsSortingSelection({ typeFilter }: ISorting) {
  const [isActive, setIsActive] = useState(ButtonFeedbacksConstation[0].name);

  const handleClick = (item) => {
    typeFilter(item.name);
    setIsActive(item.name);
  };
  return (
    <div>
      <div className={classes.sort_inner}>
        {ButtonFeedbacksConstation.map((item) => (
          <button
            onClick={() => handleClick(item)}
            className={`${classes.sort_btn} ${
              isActive === item.name ? classes.active : ""
            }`}
          >
            <div className={classes[item.style]}>{item.icon}</div>
            <span className={classes.label}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
