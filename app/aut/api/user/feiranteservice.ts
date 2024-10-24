const API_URL = process.env.REACT_APP_API_URL || 'https://api.mateuslh.com/api';

export const addFeirante = async (feirante: { nomeFeirante: string; nomeEmpresa: string; cnpj: string; telefone: string }) => {
    try {
        const response = await fetch(`${API_URL}/feirantes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feirante),
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar feirante');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao enviar dados do feirante:', error);
        throw error;
    }
};

export const fetchFeirantes = async () => {
    try {
        const response = await fetch(`${API_URL}/feirantes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar feirantes');
        }

        const data = await response.json();

        
        if (data && data.content) {
            return data.content;
        } else {
            console.error('Formato de dados inesperado:', data);
            return [];
        }
    } catch (error) {
        console.error('Erro ao buscar os feirantes:', error);
        return []; 
    }
};
