import { BloqCard } from "./bloq-card";

export const BloqCards = ({ bloqs }: { bloqs: BloqMetadata[] }) => {
  return (
    <main>
      {bloqs.map((bloq: BloqMetadata) => (
        <ul key={bloq.id}>
          <BloqCard bloq={bloq} />
        </ul>
      ))}
    </main>
  );
}