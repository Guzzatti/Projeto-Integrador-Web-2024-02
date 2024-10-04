// app/components/FeiraRegister.tsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

const FeiraRegister: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Adiciona a feira no Firestore
      await setDoc(doc(firestore, 'feiras', user.uid), {
        nome,
        local,
        email,
      });

      router.push('/'); 
    } catch (error) {
      setError('Falha no registro. Tente novamente.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registro da Feira</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700">Nome da Feira</label>
          <input
            type="text"
            id="nome"
            className="w-full border p-2 rounded"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="local" className="block text-gray-700">Local</label>
          <input
            type="text"
            id="local"
            className="w-full border p-2 rounded"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Senha</label>
          <input
            type="password"
            id="password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default FeiraRegister;
