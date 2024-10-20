// app/feiras/page.tsx

"use client";  // Indica que este é um Client Component

import { useState, useEffect } from 'react';
import FeiraList from '../components/FeiraList';
import { fetchFeiras } from '../api';  // Importa a função que busca as feiras da API

// Define a interface para uma feira
interface Feira {
  id: string;
  nome: string;
  local: string;
}

export default function Feiras() {
  const [searchTerm, setSearchTerm] = useState('');
  const [feirasData, setFeirasData] = useState<Feira[]>([]);  // Define o estado como um array de Feira
  const [filteredFeiras, setFilteredFeiras] = useState<Feira[]>([]);  // Define o estado como um array de Feira

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feiras = await fetchFeiras();  // Faz a requisição à API
        setFeirasData(feiras);  // Atualiza o estado com as feiras recebidas
        setFilteredFeiras(feiras);  // Inicialmente, todas as feiras são exibidas
      } catch (error) {
        console.error("Erro ao buscar as feiras:", error);
      }
    };

    fetchData();  // Executa a função ao carregar o componente
  }, []);

  // Função para lidar com a pesquisa
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = feirasData.filter((feira) =>
      feira.nome.toLowerCase().includes(term)
    );

    setFilteredFeiras(filtered);  // Atualiza as feiras filtradas com base na busca
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Feiras de Comércio Justo</h1>
      
      {/* Barra de Pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar feira..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      
      {/* Renderiza a lista de feiras filtradas */}
      <FeiraList feiras={filteredFeiras} />
    </div>
  );
}
