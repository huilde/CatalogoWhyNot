import firebase_app from "./config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
const getData = async (collection, id) => {
  let docRef = doc(db, db[colllection], db[id]);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
};
export { getData };
