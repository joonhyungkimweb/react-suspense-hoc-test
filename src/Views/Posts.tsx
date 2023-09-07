import withSuspendedData from "./HOC/withSuspendedData";
import Loading from "./Loading";
import { listPosts } from "../api/Post";
import Post from "./Post";

const Posts = withSuspendedData(
  listPosts,
  ({ wait }) => {
    const posts = wait();

    return (
      <ul>
        {posts.map(({ id }) => (
          <li key={id}>
            <Post postId={id} />
          </li>
        ))}
      </ul>
    );
  },
  <Loading />
);

export default Posts;
