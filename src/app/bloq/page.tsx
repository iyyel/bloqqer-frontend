import { BloqFeed } from "./bloq-feed";

const getAllBloqsMetadata = async (): Promise<BloqMetadata[]> => {
  const res = await fetch(`${process.env.BASE_APP_URL}/api/getAllBloqsMetadata`, {
    cache: "no-store",
  });
  const json = await res.json();

  if (!json.success) {
    throw new Error("Failed");
  }

  return json.data;
};

export default async function BloqsPage() {
  const bloqs: BloqMetadata[] = await getAllBloqsMetadata();
  return (
    <main>
      <h1>Bloqs</h1>
      <BloqFeed bloqs={bloqs} />
    </main>
  );
}