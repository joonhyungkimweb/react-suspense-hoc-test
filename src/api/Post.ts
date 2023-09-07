const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  userid: number;
  body: string;
  id: number;
  title: string;
}

export const listPosts = async (): Promise<Post[]> =>
  new Promise((res) =>
    setTimeout(async () => res((await fetch(ENDPOINT)).json()), 3000)
  );

export const getPost = async (id: number): Promise<Post> =>
  new Promise((res) =>
    setTimeout(async () => res((await fetch(`${ENDPOINT}/${id}`)).json()), 3000)
  );
