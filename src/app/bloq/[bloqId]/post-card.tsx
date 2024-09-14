export const PostCard = ({ post }: { post: Post }) => {
  return (
    <main>
      <h1>Post</h1>
      <h2>Post Id: {post.id}</h2>
      <h2>Bloq Id: {post.bloqId}</h2>
      <h2>Author Id: {post.authorId}</h2>
      <h2>Title: {post.title}</h2>
      <h2>Description: {post.description}</h2>
      <h2>Content: {post.content}</h2>
      <h2>isPublished: {post.isPublished.toString()}</h2>
      <h2>Published: {post.published?.toString() || "Not available"}</h2>
      <h2>Comments:</h2>
      {post.comments?.map((comment: Comment) => (
        <ul key={post.id}>
          <h4>Comment</h4>
          <h4>{comment.content}</h4>
        </ul>
      ))}
      <h2>Reactions:</h2>
    </main>
  );
}