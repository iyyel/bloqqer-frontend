import Link from "next/link";

export const Feed = ({ bloqs }: { bloqs: Bloq[] }) => {
  return (
    <main>
      {bloqs.map((bloq: Bloq) => (
        <li key={bloq.bloqId}>
          <Link href={`/bloq/${bloq.bloqId}`}>Bloq: {bloq.bloqId}</Link>
        </li>
      ))}
      <p><Link href="/">Back</Link></p>
    </main>
  );
}