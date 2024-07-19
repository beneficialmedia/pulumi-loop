import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../index";

const COLLECTION_NAME = "craig";
const COLLECTION_FEEDBACK = "feedback";
const COLLECTION_SURVEY = "craig-survey";

export const getAllColleges = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  return querySnapshot.docs.map((doc) => doc.data());
};

export const addSimpleFeedback = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_FEEDBACK), {
      ...data,
      createdAt: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

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
