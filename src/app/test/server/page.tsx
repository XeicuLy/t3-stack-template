import { notFound } from 'next/navigation';

type postsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ServerTest = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) {
    notFound();
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const posts: postsType[] = await response.json();
  if (!posts || posts.length === 0) {
    notFound();
  }
  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p title={post.body}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ServerTest;
