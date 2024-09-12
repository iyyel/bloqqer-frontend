import Link from "next/link";

const getBloq = async (postId: string): Promise<Bloq> => {
  const res = await fetch(`${process.env.BASE_APP_URL}/api/getBloq?bloqId=${postId}`)
  const json = await res.json()

  if (!json.success) {
    throw new Error("Failed")
  }

  return json.data;
};

export default async function BloqPage({ params }) {
  const bloq: Bloq = await getBloq(params.bloqId)
  console.log(bloq)
  return (
    <main>
      <h1>Bloq</h1>
      <h2>Bloq Id: {bloq.bloqId}</h2>
      <h2>Author Id: {bloq.authorId}</h2>
      <h2>Title: {bloq.title}</h2>
      <h2>Description: {bloq.description}</h2>
      <h2>isPrivate: {bloq.isPrivate.toString()}</h2>
      <h2>isPublished: {bloq.isPublished.toString()}</h2>
      <h2>Published: {bloq.published?.toString() || "Not available"}</h2>
      <h2>Posts:</h2>
      <ul>
        {bloq.posts?.map((post: Post) => (
          <li key={post.id}>
            <br></br>
            <h3>Post Id: {post.id}</h3>
            <h3>Author Id: {post.authorId}</h3>
            <h3>Title: {post.title}</h3>
            <h3>Description: {post.description}</h3>
            <h3>Content: {post.Content}</h3>
            <h3>isPublished: {post.isPublished.toString()}</h3>
            <h3>Published: {post.published?.toString() || "Not available"}</h3>
            <h2>Post Reactions:</h2>
            <ul>
              {post.reactions?.map((reaction: Reaction) => (
                <li key={reaction.id}>
                  <br></br>
                  <h3>Reaction Id: {reaction.id}</h3>
                  <h3>Post Id: {reaction.postId}</h3>
                  <h3>Comment Id: {reaction.commentId}</h3>
                  <h3>Reactor Id: {reaction.reactorId}</h3>
                </li>
              ))}
            </ul>
            <br></br>
          </li>
        ))}
      </ul>
      <br></br>
      <h2>Reactions:</h2>
      <ul>
        {bloq.reactions?.map((reaction: Reaction) => (
          <li key={reaction.id}>
            <br></br>
            <h3>Reaction Id: {reaction.id}</h3>
            <h3>Post Id: {reaction.postId}</h3>
            <h3>Comment Id: {reaction.commentId}</h3>
            <h3>Reactor Id: {reaction.reactorId}</h3>
          </li>
        ))}
      </ul>
      <br></br>
      <p><Link href="/bloq">Back</Link></p>
    </main>
  )
}