import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../index";

const COLLECTION_SURVEY = "craig-survey";

export const addSurveyFeedback = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_SURVEY), {
      ...data,
      createdAt: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
