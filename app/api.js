const API_URL = process.env.REACT_APP_API_URL || 'https://api.mateuslh.com/api';

export const fetchFeiras = async () => {
    try {
        const response = await fetch(`${API_URL}/feiras`);
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
