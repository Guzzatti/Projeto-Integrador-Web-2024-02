// app/feiras/page.tsx

"use client";  // Indica que este é um Client Component

import { useState } from 'react';
import FeiraList from '../components/FeiraList';
import { feiras as feirasData } from '../data/feiras';

export default function Feiras() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFeiras, setFilteredFeiras] = useState(feirasData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = feirasData.filter((feira) =>
      feira.nome.toLowerCase().includes(term)
    );

    setFilteredFeiras(filtered);
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
      
      <FeiraList feiras={filteredFeiras} /> {/* Passando feiras filtradas */}
    </div>
  );
}
