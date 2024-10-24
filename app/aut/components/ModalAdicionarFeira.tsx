import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 

interface ModalAdicionarFeiraProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { nome: string; local: string; data: Date; descricao: string }) => void;
}

const ModalAdicionarFeira: React.FC<ModalAdicionarFeiraProps> = ({ isOpen, onClose, onSubmit }) => {
    const [nome, setNome] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState<Date | null>(null); 
    const [descricao, setDescricao] = useState('');

    const handleClose = () => {
        
        setNome('');
        setLocal('');
        setData(null);
        setDescricao('');
        onClose(); 
    };

    const handleSubmit = () => {
        if (!data) {
            alert('Por favor, selecione uma data válida.');
            return;
        }
        onSubmit({ nome, local, data, descricao });
        handleClose(); 
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Adicionar Feira</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Nome da Feira</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Local</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Data</label>
                    <DatePicker
                        selected={data}
                        onChange={(date: Date) => setData(date)}
                        dateFormat="dd/MM/yyyy"
                        className="w-full px-4 py-2 border rounded"
                        placeholderText="Selecione uma data"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Descrição</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded h-24 resize-none"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva a feira"
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

export default ModalAdicionarFeira;
