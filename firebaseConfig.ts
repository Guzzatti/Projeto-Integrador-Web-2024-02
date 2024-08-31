// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { setPersistence, browserSessionPersistence} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs_jAO7KAwH2kL5_-xehPr4kLtMXd4nQI",
  authDomain: "hubfeirasnextjs.firebaseapp.com",
  projectId: "hubfeirasnextjs",
  storageBucket: "hubfeirasnextjs.appspot.com",
  messagingSenderId: "391541342315",
  appId: "1:391541342315:web:622dab6c64faa2958b712e",
  measurementId: "G-RMHZVLL3Y9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const db = getFirestore(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistência definida para sessão");
  })
  .catch((error) => {
    console.error("Erro ao definir persistência:", error);
  });;

export { db, app, auth, firestore, storage };
