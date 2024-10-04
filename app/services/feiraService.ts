// app/services/feiraService.ts
import { db } from "../../firebaseConfig"; 
import { doc, setDoc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";


export const createNewFeira = async (uid: string) => {
  try {
    const docRef = doc(db, "feiras", uid); 
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

export const updateFeira = async (uid: string, updates: any) => {
  try {
    const docRef = doc(db, "feiras", uid);
    await updateDoc(docRef, updates);
    console.log("Feira atualizada com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar a feira:", error);
  }
};

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