import classes from "./CardChapter.module.scss";

interface Icard {
  status: string;
  title: string;
  img: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function CardChapter({ status, title, img, onClick }: Icard) {
  return (
    <div className={classes.Card} onClick={onClick}>
      <div>
        <div className={classes.Card_block_img}>
          <img className={classes.Card_img} src={img} alt="нету" />
          <div className={classes.text_img}>смотреть онлайн</div>
        </div>
        <div className={classes.Card_name}>{title}</div>
        <p>{status}</p>
      </div>
    </div>
  );
}
