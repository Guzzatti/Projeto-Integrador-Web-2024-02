// app/components/FeiraList.tsx
import Link from 'next/link';

type Feira = {
  id: string;
  nome: string;
  local: string;
};

interface FeiraListProps {
  feiras: Feira[];
}

const FeiraList: React.FC<FeiraListProps> = ({ feiras }) => {
  return (
    <ul className="space-y-4">
      {feiras.map((feira) => (
        <li key={feira.id} className="border p-4 rounded">
          <h3 className="text-xl font-semibold">
            <Link href={`/feiras/${feira.id}`}>{feira.nome}</Link>
          </h3>
          <p className="text-gray-600">{feira.local}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeiraList;
