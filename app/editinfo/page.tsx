'use client';

import { useState, useEffect } from 'react';
import { auth } from '../../firebaseConfig'; // Ajuste o caminho se necessário
import { useRouter } from 'next/navigation';
import { getFeira, updateFeira } from '../services/feiraService'; // Atualize o caminho se necessário

export default function EditInfo() {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [vendors, setVendors] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        console.log('Usuário atual:', user); // Adicione este log
        if (user) {
          setUser(user);
          const data = await getFeira(user.uid);
          console.log('Dados da feira:', data); // Adicione este log
          if (data) {
            setName(data.name || '');
            setDate(data.date || '');
            setVendors(data.vendors || '');
            setInfo(data.info || '');
          } else {
            router.push('/login'); // Redireciona se não houver dados da feira
          }
        } else {
          router.push('/login'); // Redireciona se não estiver autenticado
        }
      } catch (error) {
        console.error('Erro ao buscar dados da feira:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      try {
        await updateFeira(user.uid, { name, date, vendors, info });
        alert('Informações atualizadas com sucesso!');
        router.push('/'); // Redirecionar para a página inicial ou outra página desejada
      } catch (error) {
        console.error('Erro ao atualizar informações:', error);
        alert('Erro ao atualizar informações.');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Editar Informações da Feira</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Nome da Feira</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">Data das Próximas Feiras</label>
              <input
                id="date"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="vendors" className="block text-gray-700">Feirantes Participantes</label>
              <input
                id="vendors"
                type="text"
                value={vendors}
                onChange={(e) => setVendors(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="info" className="block text-gray-700">Informações Sobre a Feira</label>
              <textarea
                id="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                className="border p-2 w-full rounded"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full px-4 py-2 rounded text-white ${loading ? 'bg-gray-500' : 'bg-blue-600'} hover:bg-blue-700`}
              disabled={loading}
            >
              {loading ? 'Atualizando...' : 'Atualizar Informações'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
