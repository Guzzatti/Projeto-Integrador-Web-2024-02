// app/feiras/[id]/page.tsx

import { feiras } from '../../data/feiras';

type Data = { data: string; horario: string };
type Feirante = { nome: string; produto: string };
type Locais = { local: string; datas: Data[] };

type Feira = {
  id: string;
  nome: string;
  locais?: Locais[];  // Ajustado para suportar múltiplos locais
  local?: string;     // Manter compatibilidade com as feiras que têm um único local
  datas?: Data[];     // Também manter compatibilidade para o campo datas
  feirantes: Feirante[];
};

async function getFeiraById(id: string): Promise<Feira | undefined> {
  // Simula uma busca em um banco de dados ou uma chamada API
  return feiras.find((feira) => feira.id === id);
}

export default async function FeiraPage({ params }: { params: { id: string } }) {
  const feira = await getFeiraById(params.id);

  if (!feira) {
    return <div>Feira não encontrada.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{feira.nome}</h1>

      {/* Verifica se a feira tem múltiplos locais ou um único local */}
      {feira.locais ? (
        // Renderiza se houver múltiplos locais
        feira.locais.map((localObj, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{localObj.local}</h2>
            <ul className="space-y-2">
              {localObj.datas.map((data, idx) => (
                <li key={idx} className="border-b py-2">
                  <p>{data.data} - {data.horario}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        // Renderiza se houver apenas um único local e datas
        <>
          <p className="text-gray-600 mb-4">{feira.local}</p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Calendário</h2>
            <ul className="space-y-2">
              {feira.datas?.map((data, index) => (
                <li key={index} className="border-b py-2">
                  <p>{data.data} - {data.horario}</p>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

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
