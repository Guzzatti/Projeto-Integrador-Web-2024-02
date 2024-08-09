"use client"; // Indica que este é um Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importação atualizada

export default function CadastroFeirante() {
  const [nome, setNome] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [produtos, setProdutos] = useState([{ nome: '', descricao: '', fotos: ['', ''] }]);
  const [feiras, setFeiras] = useState<string[]>([]);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você vai adicionar a lógica para enviar os dados para o servidor ou atualizar o estado global

    router.push('/'); // Redireciona para a página inicial ou outra página de sua escolha
  };

  const handleAddProduto = () => {
    setProdutos([...produtos, { nome: '', descricao: '', fotos: ['', ''] }]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cadastrar Novo Feirante</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-lg font-semibold">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="fotoPerfil" className="block text-lg font-semibold">Foto de Perfil:</label>
          <input
            type="text"
            id="fotoPerfil"
            value={fotoPerfil}
            onChange={(e) => setFotoPerfil(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Produtos</h2>
          {produtos.map((produto, index) => (
            <div key={index} className="border p-4 mb-4 rounded">
              <div>
                <label htmlFor={`produto-nome-${index}`} className="block">Nome:</label>
                <input
                  type="text"
                  id={`produto-nome-${index}`}
                  value={produto.nome}
                  onChange={(e) => {
                    const newProdutos = [...produtos];
                    newProdutos[index].nome = e.target.value;
                    setProdutos(newProdutos);
                  }}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor={`produto-descricao-${index}`} className="block">Descrição:</label>
                <textarea
                  id={`produto-descricao-${index}`}
                  value={produto.descricao}
                  onChange={(e) => {
                    const newProdutos = [...produtos];
                    newProdutos[index].descricao = e.target.value;
                    setProdutos(newProdutos);
                  }}
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block">Fotos:</label>
                {produto.fotos.map((foto, fotoIndex) => (
                  <input
                    key={fotoIndex}
                    type="text"
                    value={foto}
                    onChange={(e) => {
                      const newProdutos = [...produtos];
                      newProdutos[index].fotos[fotoIndex] = e.target.value;
                      setProdutos(newProdutos);
                    }}
                    className="border p-2 w-full mb-2"
                  />
                ))}
              </div>
            </div>
          ))}
          <button type="button" onClick={handleAddProduto} className="bg-blue-500 text-white p-2 rounded">
            Adicionar Produto
          </button>
        </div>
        <div>
          <label htmlFor="feiras" className="block text-lg font-semibold">Feiras:</label>
          <input
            type="text"
            id="feiras"
            value={feiras.join(', ')}
            onChange={(e) => setFeiras(e.target.value.split(',').map(f => f.trim()))}
            className="border p-2 w-full"
          />
          <small>Separe as IDs das feiras por vírgulas.</small>
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Cadastrar Feirante</button>
      </form>
    </div>
  );
}
