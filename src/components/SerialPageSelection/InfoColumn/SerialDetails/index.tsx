import React from "react";
import classes from "./SerialDetails.module.scss";
import {
  SerialDetailsConstation,
  SerialDetailsScoreConstation,
} from "../../../../utils/constants/SerialDetails";
export default function SerialDetails() {
  return (
    <div className={classes.details_container}>
      {/* Первый блок */}
      <div className={classes.details_block}>
        <div>В списках у людей</div>
        <ul className={classes.details_list}>
          {SerialDetailsConstation.map((detail) => (
            <li key={detail.label} className={classes.details_list_row}>
              {" "}
              <span className={classes.label_text}>{detail.label}</span>
              <div className={classes.line_progress}></div>
              <span>0%</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Второй блок */}
      <div className={classes.details_block}>
        <div>Оценки пользователей</div>
        <ul className={classes.details_list}>
          {SerialDetailsScoreConstation.map((number) => (
            <li key={number} className={classes.details_list_row}>
              {" "}
              <span className={classes.label_precent}>{number}</span>
              <div className={classes.line_progress}></div>
              <span>0%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
