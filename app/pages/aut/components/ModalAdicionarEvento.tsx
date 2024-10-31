import React, { useState, useEffect } from 'react';
import { authenticatedFetch } from '../api/user/apiService';

interface Feira {
    id: number;
    nome: string;
}

interface ModalAdicionarEventoProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { data: Date; feiraId: number }) => void;
}

const ModalAdicionarEvento: React.FC<ModalAdicionarEventoProps> = ({ isOpen, onClose, onSubmit }) => {
    const [data, setData] = useState<Date | null>(null);
    const [feiraId, setFeiraId] = useState<number | null>(null);
    const [feiras, setFeiras] = useState<Feira[]>([]);

    useEffect(() => {
        const fetchFeiras = async () => {
            try {
                const feirasData = await authenticatedFetch('/feiras');
                setFeiras(feirasData.content || []); 
            } catch (error) {
                console.error('Erro ao buscar feiras:', error);
                alert('Não foi possível carregar as feiras.');
            }
        };

        fetchFeiras();
    }, []);

    const handleClose = () => {
        setData(null);
        setFeiraId(null);
        onClose();
    };

    const handleSubmit = () => {
        if (!data || !feiraId) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        onSubmit({ data, feiraId });
        handleClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Adicionar Evento</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Data do Evento</label>
                    <input
                        type="date"
                        className="w-full px-4 py-2 border rounded"
                        onChange={(e) => setData(new Date(e.target.value))}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Feira</label>
                    <select
                        className="w-full px-4 py-2 border rounded"
                        onChange={(e) => setFeiraId(Number(e.target.value))}
                        value={feiraId ?? ''}
                    >
                        <option value="" disabled>Selecione uma feira</option>
                        {feiras.map((feira) => (
                            <option key={feira.id} value={feira.id}>{feira.nome}</option>
                        ))}
                    </select>
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

export default ModalAdicionarEvento;
