import { authenticatedFetch } from './apiService';

export const addFeirante = async (feirante: { nomeFeirante: string; nomeEmpresa: string; cnpj: string; telefone: string }) => {
    try {
        const response = await authenticatedFetch('/feirantes', {
            method: 'POST',
            body: JSON.stringify(feirante),
        });
        return response;
    } catch (error) {
        console.error('Erro ao adicionar feirante:', error);
        throw error;
    }
};


export const fetchFeirantes = async () => {
    try {
        const feirantes = await authenticatedFetch('/feirantes', {
            method: 'GET',
        });
        return feirantes;
    } catch (error) {
        console.error('Erro ao buscar feirantes:', error);
        return []; 
    }
};
