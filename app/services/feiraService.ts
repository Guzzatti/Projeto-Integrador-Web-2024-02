// app/services/feiraService.ts
import { db } from "../../firebaseConfig"; // Ajuste o caminho se necessário
import { doc, setDoc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";

// Função para criar uma nova feira
export const createNewFeira = async (uid: string) => {
  try {
    const docRef = doc(db, "feiras", uid); // 'feiras' é a coleção e uid é o identificador do documento
    await setDoc(docRef, {
      name: "Nome da Feira",
      date: "Data das Próximas Feiras",
      vendors: "Feirantes Participantes",
      info: "Informações Sobre a Feira",
    });
    console.log("Feira criada com sucesso!");
  } catch (error) {
    console.error("Erro ao criar a feira:", error);
  }
};

// Função para atualizar uma feira existente
export const updateFeira = async (uid: string, updates: any) => {
  try {
    const docRef = doc(db, "feiras", uid);
    await updateDoc(docRef, updates);
    console.log("Feira atualizada com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar a feira:", error);
  }
};

// Função para recuperar dados da feira
export const getFeira = async (uid: string) => {
  try {
    const docRef = doc(db, "feiras", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("Feira não encontrada");
    }
  } catch (error) {
    console.error("Erro ao buscar dados da feira:", error);
  }
};

const getFeiraRealtime = (uid: string,) => {
  const docRef = doc(db, "feiras", uid);
  onSnapshot(docRef, (doc) => {
    console.log("Dados atualizados:", doc.data());
  });
}