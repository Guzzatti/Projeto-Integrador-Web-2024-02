// services/storageService.ts
import { storage } from '../../firebaseConfig';  
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function uploadFile(file: File, path: string): Promise<string> {
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  return url;
}
