// services/authService.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.mateuslh.com/api';

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Erro ao realizar login');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); 
    return data;
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    throw error;
  }
};
