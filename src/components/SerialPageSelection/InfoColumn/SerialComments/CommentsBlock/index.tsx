import { useGetComments } from "../../store";
import ItemComment from "./ItemComment";

export default function CommentsBlock() {
  const comment = useGetComments((state) => state.arrayCommnets);
  console.log(comment);

  return (
    <div style={{ marginTop: "15px" }}>
      {comment.map((item) => (
        <ItemComment item={item} />
      ))}
    </div>
  );
}
