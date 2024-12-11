import AboutBookmarks from "../../components/UserPage/AboutBookmarks";
import AboutFriends from "../../components/UserPage/AboutFriends";
import AboutProfile from "../../components/UserPage/AboutProfile";
import InfoProfile from "../../components/UserPage/InfoProfile";
import classes from "./ProfilePage.module.scss";
export default function ProfilePage() {
  return (
    <div className={classes.profile_wrapper}>
      <section className={classes.profile_background}>
        <img className={classes.profile_banner} src={"isagi.jpg"} alt="" />

        <InfoProfile />
      </section>
      <section>
        <div>
          <AboutFriends />
          <AboutProfile />
        </div>

        <AboutBookmarks />
      </section>
    </div>
  );
}
