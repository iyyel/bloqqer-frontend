import Link from "next/link";
import { PostCards } from "./post-cards";

const getBloqPosts = async (bloqId: string): Promise<Post[]> => {
  const res = await fetch(`${process.env.BASE_APP_URL}/api/getBloqPosts?bloqId=${bloqId}`);
  const json = await res.json()
  console.log(json)

  if (!json.success) {
    throw new Error("Failed")
  }

  return json.data;
};

export default async function BloqPage({ params }) {
  const posts: Post[] = await getBloqPosts(params.bloqId)

  return (
    <main>
      <h1>Bloq Posts</h1>
      <h3>bloq info here...</h3>
      <PostCards posts={posts} />
    </main>
  )
}