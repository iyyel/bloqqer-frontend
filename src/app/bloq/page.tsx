import { Feed } from "./feed";

const getBloqs = async (): Promise<Bloq[]> => {
  const res = await fetch(`${process.env.BASE_APP_URL}/api/getBloqs`);
  const json = await res.json();

  if (!json.success) {
    throw new Error("Failed");
  }

  return json.data;
};

export default async function BloqsPage() {
  const bloqs: Bloq[] = await getBloqs();
  return (
    <main>
      <Feed bloqs={bloqs} />
    </main>
  );
}