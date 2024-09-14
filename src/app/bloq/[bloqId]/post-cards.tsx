import { PostCard } from "./post-card";

export const PostCards = ({ posts }: { posts: Post[] }) => {
  return (
    <main>
      {posts.map((post: Post) => (
        <ul key={post.id}>
          <PostCard post={post} />
        </ul>
      ))}
    </main>
  );
}