import React, { useState } from "react";

interface Feira {
  id: string;
  nome: string;
  local: string;
  data: string;
}

const feirasData: Feira[] = [
  { id: "1", nome: "Feira do Livro", local: "São Paulo", data: "2024-11-05" },
  { id: "2", nome: "Feira de Artesanato", local: "Rio de Janeiro", data: "2024-12-01" },
  { id: "3", nome: "Feira Gastronômica", local: "Curitiba", data: "2024-10-20" },
  // Adicione mais feiras aqui
];

const Dashboard: React.FC = () => {
  const [feiras, setFeiras] = useState<Feira[]>(feirasData);
  const [editFeira, setEditFeira] = useState<Feira | null>(null);

  const handleDelete = (id: string) => {
    const updatedFeiras = feiras.filter((feira) => feira.id !== id);
    setFeiras(updatedFeiras);
  };

  const handleEdit = (feira: Feira) => {
    setEditFeira(feira);
  };

  const handleSave = () => {
    setFeiras((prevFeiras) =>
      prevFeiras.map((feira) => (feira.id === editFeira?.id ? editFeira : feira))
    );
    setEditFeira(null); // Fecha o modal e limpa a edição
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Dashboard de Feiras</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b text-left">Nome da Feira</th>
              <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b text-left">Data</th>
              <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b text-left">Local</th>
              <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {feiras.map((feira) => (
              <tr key={feira.id}>
                <td className="py-4 px-6 border-b border-gray-200">{feira.nome}</td>
                <td className="py-4 px-6 border-b border-gray-200">{feira.data}</td>
                <td className="py-4 px-6 border-b border-gray-200">{feira.local}</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
                    onClick={() => handleEdit(feira)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => handleDelete(feira.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Edição */}
      {editFeira && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Editar Feira</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Nome da Feira</label>
              <input
                type="text"
                value={editFeira.nome}
                onChange={(e) => setEditFeira({ ...editFeira, nome: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Local</label>
              <input
                type="text"
                value={editFeira.local}
                onChange={(e) => setEditFeira({ ...editFeira, local: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Data</label>
              <input
                type="date"
                value={editFeira.data}
                onChange={(e) => setEditFeira({ ...editFeira, data: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setEditFeira(null)}
              >
                Cancelar
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
