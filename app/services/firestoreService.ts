// services/firestoreService.ts
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Ajuste o caminho conforme necessário

const feirantesCollection = collection(db, 'feirantes');
const feirasCollection = collection(db, 'feiras');

export async function addFeirante(feirante: { nome: string, telefone: string }) {
  try {
    await addDoc(feirantesCollection, feirante);
    console.log('Feirante adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar feirante: ', error);
  }
}

export async function addFeira(feira: { nome: string, local: string, data: string }) {
  try {
    await addDoc(feirasCollection, feira);
    console.log('Feira adicionada com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar feira: ', error);
  }
}
