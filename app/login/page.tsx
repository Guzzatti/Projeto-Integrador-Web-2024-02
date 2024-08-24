'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // Ajuste o caminho se necessário
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirecionar para a página inicial após login
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setError('Por favor, insira seu email.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert('Email de recuperação enviado!');
    } catch (error) {
      setError('Erro ao enviar email de recuperação.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/'); // Redirecionar para a página inicial após login
    } catch (error) {
      setError('Erro ao fazer login com o Google.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded text-white ${loading ? 'bg-gray-500' : 'bg-blue-600'} hover:bg-blue-700`}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Login'}
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Login com Google
          </button>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Esqueceu sua senha?</h2>
          <input
            type="email"
            placeholder="Digite seu email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            className="border p-2 w-full mt-2 rounded"
          />
          <button
            onClick={handlePasswordReset}
            className="w-full px-4 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Enviar email de recuperação
          </button>
        </div>
      </div>
    </div>
  );
}
