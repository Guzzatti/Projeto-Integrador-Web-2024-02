const API_URL = process.env.REACT_APP_API_URL || 'https://api.mateuslh.com/api';

export const fetchFeiras = async () => {
    try {
        const response = await fetch(`${API_URL}/feiras`);
        const data = await response.json();

        if (data && data.content) {
            return data.content;
        } else {
            console.error('Formato de dados inesperado:', data);
            // Retorna dados simulados se não houver feiras
            return [
                {
                    id: '1',
                    nome: 'Feira da Praça Central',
                    local: 'Praça Central, Criciúma',
                },
                {
                    id: '2',
                    nome: 'Feira do Bairro São José',
                    local: 'Rua das Flores, São José',
                },
                {
                    id: '3',
                    nome: 'Feira de Produtos Orgânicos',
                    local: 'Av. das Nações, Centro',
                },
                {
                    id: '4',
                    nome: 'Feira do Artesanato',
                    local: 'Rua do Artesanato, Centro',
                },
                {
                    id: '5',
                    nome: 'Feira de Alimentos Regionais',
                    local: 'Estrada do Rio Maina, Maina',
                },
            ];
        }
    } catch (error) {
        console.error('Erro ao buscar as feiras:', error);
        return [];
    }
};
