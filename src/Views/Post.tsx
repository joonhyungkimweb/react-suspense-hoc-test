import withSuspendedData from "./HOC/withSuspendedData";
import Loading from "./Loading";
import { getPost } from "../api/Post";

const Post = withSuspendedData(
  ({ postId }: { postId: number }) => getPost(postId),
  ({ wait, postId }) => {
    const { title, body } = wait();

    return (
      <>
        <>
          <h1>{title}</h1>
          <p>{body}</p>
          <button onClick={() => alert(`Liked!! ${postId}`)}>
            <span role="img" aria-label="like">
              👍
            </span>
          </button>
        </>
      </>
    );
  },
  <Loading />
);

export default Post;
