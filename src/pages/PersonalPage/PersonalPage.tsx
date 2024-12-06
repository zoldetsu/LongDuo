import InfoBlockFriends from "../../components/UserPage/InfoBlockFriends/InfoBlockFriends";
import InfoBlockPerson from "../../components/UserPage/InfoBlockPerson/InfoBlockPerson";
import InfoBlockWall from "../../components/UserPage/InfoBlockWall/InfoBlockWall";
import classes from "./PersonPage.module.scss";
export default function PersonPage() {
  return (
    <div className={classes.Person}>
      <img className={classes.person_banner} src={""} alt="" />
      <div className={classes.PersonPage}>
        <div className={classes.person_container}>
          <InfoBlockPerson />
          <InfoBlockWall />
          <InfoBlockFriends />
        </div>
      </div>
    </div>
  );
}
