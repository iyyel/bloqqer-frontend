import { BloqCards } from "./bloq-cards";

export const BloqFeed = ({ bloqs }: { bloqs: BloqMetadata[] }) => {
  return (
    <main>
      <BloqCards bloqs={bloqs} />
    </main>
  );
}