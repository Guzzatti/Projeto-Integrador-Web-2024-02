import React, { useState } from 'react';

interface ModalAdicionarFeiranteProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { nomeFeirante: string; nomeEmpresa: string; cnpj: string; telefone: string }) => void;
}

const ModalAdicionarFeirante: React.FC<ModalAdicionarFeiranteProps> = ({ isOpen, onClose, onSubmit }) => {
  const [nomeFeirante, setNomeFeirante] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleClose = () => {
    setNomeFeirante('');
    setNomeEmpresa('');
    setCnpj('');
    setTelefone('');
    onClose();
  };

  const handleSubmit = () => {
    if (!nomeFeirante || !nomeEmpresa || !cnpj || !telefone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    onSubmit({ nomeFeirante, nomeEmpresa, cnpj, telefone });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Adicionar Feirante</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Nome do Feirante</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            value={nomeFeirante}
            onChange={(e) => setNomeFeirante(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Nome da Empresa</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            value={nomeEmpresa}
            onChange={(e) => setNomeEmpresa(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">CNPJ</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Telefone</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarFeirante;
