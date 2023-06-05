import firebase_app from "./config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
const addData = async (colllection, id, data) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, db[colllection], db[id]), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};
export { addData };
