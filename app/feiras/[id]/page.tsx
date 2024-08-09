// app/feiras/[id]/page.tsx

import { feiras } from '../../data/feiras';

type Feira = {
  id: string;
  nome: string;
  local: string;
  datas: { data: string; horario: string }[];
  feirantes: { nome: string; produto: string }[];
};

async function getFeiraById(id: string): Promise<Feira | undefined> {
  // Simula uma busca em um banco de dados ou uma chamada API
  return feiras.find((feira) => feira.id === id);
}

export default async function FeiraPage({ params }: { params: { id: string } }) {
  const feira = await getFeiraById(params.id);

  if (!feira) {
    // Caso não encontre a feira, redirecionar para uma página 404 ou outro tratamento
    return <div>Feira não encontrada.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{feira.nome}</h1>
      <p className="text-gray-600 mb-4">{feira.local}</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Calendário</h2>
        <ul className="space-y-2">
          {feira.datas.map((data, index) => (
            <li key={index} className="border-b py-2">
              <p>{data.data} - {data.horario}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Feirantes</h2>
        <ul className="space-y-2">
          {feira.feirantes.map((feirante, index) => (
            <li key={index} className="border-b py-2">
              <p><strong>{feirante.nome}</strong> - {feirante.produto}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
