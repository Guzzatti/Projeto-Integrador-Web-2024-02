const API_URL = process.env.REACT_APP_API_URL || 'https://api.mateuslh.com/api';

export const fetchFeiras = async () => {
    try {
        const response = await fetch(`${API_URL}/feiras`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar feiras');
        }

        const data = await response.json();

        
        if (data && data.content) {
            return data.content;
        } else {
            console.error('Formato de dados inesperado:', data);
            return []; 
        }
    } catch (error) {
        console.error('Erro ao buscar as feiras:', error);
        return []; 
    }
};

export const addFeira = async (feira: { nome: string; local: string }) => {
    try {
        const response = await fetch(`${API_URL}/feiras`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feira),
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar feira');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao enviar dados da feira:', error);
        throw error;
    }
};
