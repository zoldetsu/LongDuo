import React from "react";
import classes from "./ButtonSelection.module.scss";

interface IButtonSelection {
  active: string;
  setActive: Function;
  name: string;
  label: string;
}

export default function ButtonSelection({
  active,
  setActive,
  name,
  label,
}: IButtonSelection) {
  return (
    <>
      <button
        onClick={() => setActive(name)}
        className={
          active === name
            ? `${classes.button} ${classes.active}`
            : `${classes.button}`
        }
      >
        {label}
      </button>
    </>
  );
}
