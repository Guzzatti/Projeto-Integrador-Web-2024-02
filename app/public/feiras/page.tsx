

"use client";  

import { useState, useEffect } from 'react';
import FeiraList from '../../components/FeiraList';
import { fetchFeiras } from '../../api/user/api';  
import Header from '@/app/components/Header';



interface Feira {
  id: string;
  nome: string;
  local: string;
}

export default function Feiras() {
  const [searchTerm, setSearchTerm] = useState('');
  const [feirasData, setFeirasData] = useState<Feira[]>([]);  
  const [filteredFeiras, setFilteredFeiras] = useState<Feira[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feiras = await fetchFeiras();  
        setFeirasData(feiras);  
        setFilteredFeiras(feiras);  
      } catch (error) {
        console.error("Erro ao buscar as feiras:", error);
      }
    };

    fetchData(); 
  }, []);

  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = feirasData.filter((feira) =>
      feira.nome.toLowerCase().includes(term)
    );

    setFilteredFeiras(filtered);  
  };

  return (
    //className="p-8"
    <div>
      <Header/>
      <h1 className="text-2xl font-bold mb-6">Feiras de Comércio Justo</h1>
      
      
      <input
        type="text"
        placeholder="Pesquisar feira..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      
     
      <FeiraList feiras={filteredFeiras} />
    </div>
  );
}
