import { authenticatedFetch } from './apiService';

export const fetchFeiras = async () => {
    try {
        const data = await authenticatedFetch('/feiras');
        return data.content || [];
    } catch (error) {
        console.error('Erro ao buscar as feiras:', error);
        return []; 
    }
};

export const addFeira = async (feira: { nome: string; local: string; data: Date; descricao: string }) => {
    try {
        const newFeira = await authenticatedFetch('/feiras', {
            method: 'POST',
            body: JSON.stringify(feira),
        });
        return newFeira;
    } catch (error) {
        console.error('Erro ao enviar dados da feira:', error);
        throw error;
    }
};
