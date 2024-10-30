const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export const saveToken = (token: string) => {
  // Armazena o token em um cookie
  document.cookie = `token=${token}; path=/; secure; samesite=strict;`;
};

export const getToken = () => {
  // Função para obter o valor do cookie
  const name = 'token=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  
  return null;
};

export const loginUser = async (credentials: { usuario: string; senha: string }) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    // Handle non-200 responses
    if (!response.ok) {
      const errorDetails = await response.json(); // Get error details from the response
      console.error('Erro ao realizar login:', errorDetails); // Log error details
      throw new Error('Erro ao realizar login');
    }

    const data = await response.json();
    const token = data.content.token;  
    saveToken(token);  
    return data;
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    throw error;
  }
};
