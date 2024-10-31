import { authenticatedFetch } from './apiService';

export const addEvento = async (evento: {  data: Date, feiraId: number}) => {
    try {
        const response = await authenticatedFetch('/eventos', {
            method: 'POST',
            body: JSON.stringify(evento),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.error('Erro ao adicionar evento:', error);
        throw error;
    }
};

export const fetchEventos = async () => {
    try {
        const eventos = await authenticatedFetch('/eventos', {
            method: 'GET',
        });
        return eventos;
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
        return []; 
    }
};
