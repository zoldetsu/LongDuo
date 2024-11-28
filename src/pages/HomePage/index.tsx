// import CardAnime from "../../components/CardAnime/CardAnime.tsx";
import classes from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";
// import { useLoading } from "../../hooks/useLoading.ts";
// import MyLoader from "../../UI/Loader/MyLoader.tsx";
// import { AuthContext } from "../../context/index.ts";
import { AnimeTitle } from "../../fakeBd/poster.ts";
import CardChapter from "../../components/CardChapter/index.tsx";
export default function HomePage() {
  // const [loading] = useLoading();
  const loading = true;
  const router = useNavigate();

  return (
    <div className={classes.container_home}>
      <div className={classes.home_inner}>
        {loading ? (
          <div>
            <h1 className={classes.home_main_title}>Последние обновления</h1>
            <div className={classes.cards_wrapper}>
              {AnimeTitle.map((poster, index: number) => (
                <CardChapter
                  key={index}
                  onClick={() => router(`/anime/${poster.id}`)}
                  title={poster.title}
                  status={poster.status}
                  img={poster.path}
                ></CardChapter>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "15%",
              justifyContent: "center",
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
