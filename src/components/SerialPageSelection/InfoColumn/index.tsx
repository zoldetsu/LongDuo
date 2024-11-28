import { TTitle } from "../../../types/TypeTitle";
import SerialComments from "./SerialComments";
import SerialDetails from "./SerialDetails";
import classes from "./InfoColumn.module.scss";
interface ITabInfo {
  SerialInfo: TTitle;
}

export default function InfoColumn({ SerialInfo }: ITabInfo) {
  return (
    <div>
      <div className={classes.discription}>
        {SerialInfo.discription.length === 0
          ? "Описание отсутствует"
          : SerialInfo.discription}
      </div>

      <div className={classes.line}></div>
      <div>
        <SerialDetails />
        <SerialComments />
      </div>
    </div>
  );
}
