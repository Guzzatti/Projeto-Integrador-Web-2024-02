'use client';


import { useEffect, useState } from 'react'; 
import { fetchFeiras, } from '../api/user/feiraservice'; 
import ModalAdicionarFeira from '../components/ModalAdicionarFeira';
import withAuth from '../../../hoc/withAuth';

const FeirasPage = () => {


  const [feirasData, setFeirasData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const feiras = await fetchFeiras();
      setFeirasData(feiras);
    };

    fetchData();
  }, []);

  const handleAddFeira = async (feira: { nome: string; local: string; data: Date; descricao: string }) => {
    try {
      const newFeira = await addFeira(feira);
      setFeirasData((prevFeiras) => [...prevFeiras, newFeira]);
    } catch (error) {
      console.error('Erro ao adicionar feira:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Feiras</h1>
  
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-auto"
        >
          Adicionar Feira
        </button>
      </div>
  
      <ModalAdicionarFeira
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddFeira}
      />
  
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Próximas Feiras</h2>
  
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Local</th>
              <th className="py-2 px-4 border-b">Data</th>
              <th className="py-2 px-4 border-b">Descrição</th>
              <th className="py-2 px-4 border-b">Opções</th>
            </tr>
          </thead>
          <tbody>
            {feirasData.length > 0 ? (
              feirasData.map((feira) => (
                <tr key={feira.id} className="text-center">
                  <td className="py-2 px-4 border-b">{feira.nome}</td>
                  <td className="py-2 px-4 border-b">{feira.local}</td>
                  <td className="py-2 px-4 border-b">{feira.data}</td>
                  <td className="py-2 px-4 border-b">{feira.descricao}</td>
                  <td className="py-2 px-4 border-b flex justify-center space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                      onClick={() => handleEdit(feira.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(feira.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  Nenhuma feira encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
  
  
  
  
};

export default withAuth(FeirasPage);
