'use client';

import { useEffect, useState } from 'react';
import { fetchEventos, addEvento } from '../api/user/eventoservice';
import ModalAdicionarEvento from '../components/ModalAdicionarEvento';
import withAuth from '../../../hoc/withAuth';

interface Evento {
    id: number;
    data: Date;
    feiraId: number;
}

const EventosPage = () => {
    const [eventosData, setEventosData] = useState<Evento[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const eventos = await fetchEventos();
                console.log('Eventos carregados:', eventos); 
                setEventosData(eventos);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddEvento = async (evento: Omit<Evento, 'id'>) => {
        try {
            const newEvento = await addEvento(evento);
            console.log('Evento adicionado:', newEvento);
            setEventosData((prevEventos) => [...prevEventos, newEvento]);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Erro ao adicionar evento:', error); 
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 p-5">
            <h1 className="text-3xl font-bold mb-6">Gerenciar Eventos</h1>

            <div className="mb-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-auto"
                >
                    Adicionar Evento
                </button>
            </div>

            <ModalAdicionarEvento
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddEvento}
            />

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Próximos Eventos</h2>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b">Data</th>
                            <th className="py-2 px-4 border-b">Feira</th>
                            <th className="py-2 px-4 border-b">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventosData.length > 0 ? (
                            eventosData.map((evento) => (
                                <tr key={evento.id} className="text-center">
                                    <td className="py-2 px-4 border-b">{new Date(evento.data).toLocaleDateString()}</td>
                                    <td className="py-2 px-4 border-b">{evento.feiraId}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => console.log(`Excluir evento ${evento.id}`)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="py-4 text-center text-gray-500">
                                    Nenhum evento encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default withAuth(EventosPage);
