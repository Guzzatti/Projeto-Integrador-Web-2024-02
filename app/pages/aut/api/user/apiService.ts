const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:8080/api';


const getToken = () => {
    const name = 'token=';
    const decodedCookie = decodeURIComponent(document.cookie); 
    const parts = decodedCookie.split(';');

   
    for (let part of parts) {
        part = part.trim(); 
        if (part.startsWith(name)) {
            return part.substring(name.length);
        }
    }
    
    return null; 
};

export const authenticatedFetch = async (url: string, options: RequestInit = {}) => {
    const token = getToken();
    const headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
    };

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response.json();
};
