'use client';

import { useEffect, useState } from 'react';
import ModalAdicionarFeirante from '../components/ModalAdicionarFeirante'; 
import { fetchFeirantes } from '../api/user/feiranteservice'; 
import withAuth from '../../../hoc/withAuth';

const FeirantesPage = () => {
  const [feirantesData, setFeirantesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const feirantes = await fetchFeirantes();
      setFeirantesData(feirantes);
    };

    fetchData();
  }, []);

  const handleAddFeirante = async (feirante: { nomeFeirante: string; nomeEmpresa: string; cnpj: string; telefone: string }) => {
    try {
      const newFeirante = await addFeirante(feirante);
      setFeirantesData((prevFeirantes) => [...prevFeirantes, newFeirante]);
    } catch (error) {
      console.error('Erro ao adicionar feirante:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Feirantes</h1>
  
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-auto"
        >
          Adicionar Feirante
        </button>
      </div>
  
      <ModalAdicionarFeirante
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddFeirante}
      />
  
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Lista de Feirantes</h2>
  
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Nome do Feirante</th>
              <th className="py-2 px-4 border-b">Nome da Empresa</th>
              <th className="py-2 px-4 border-b">CNPJ</th>
              <th className="py-2 px-4 border-b">Telefone</th>
              <th className="py-2 px-4 border-b">Opções</th>
            </tr>
          </thead>
          <tbody>
            {feirantesData.length > 0 ? (
              feirantesData.map((feirante) => (
                <tr key={feirante.id} className="text-center">
                  <td className="py-2 px-4 border-b">{feirante.nomeFeirante}</td>
                  <td className="py-2 px-4 border-b">{feirante.nomeEmpresa}</td>
                  <td className="py-2 px-4 border-b">{feirante.cnpj}</td>
                  <td className="py-2 px-4 border-b">{feirante.telefone}</td>
                  <td className="py-2 px-4 border-b flex justify-center space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                      onClick={() => handleEdit(feirante.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(feirante.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Nenhum feirante encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default withAuth(FeirantesPage);
