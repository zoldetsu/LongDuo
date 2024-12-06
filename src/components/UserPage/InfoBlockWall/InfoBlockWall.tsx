import { useState } from "react";
import Wall from "../BlockWall/Wall";
import classes from "./InfoBlock.module.scss";
import BlockFavorite from "../BlockFavorite/BlockFavorite";

export default function InfoBlockWall() {
  const [active, getActive] = useState("wall");

  return (
    <>
      <div className={classes.person_info_container}>
        <div className={classes.button_line}>
          <div
            className={classes.button}
            onClick={() => {
              getActive("wall");
            }}
          >
            Стена
          </div>
          <div className={classes.button}>Активность</div>
          <div
            className={classes.button}
            onClick={() => {
              getActive("favorite");
            }}
          >
            Избранное
          </div>
          <div className={classes.button}>Списки</div>
        </div>

        <div className={classes.block_fall}>
          <Wall active={active === "wall"} />
          <BlockFavorite active={active === "favorite"} />
        </div>
      </div>
    </>
  );
}
