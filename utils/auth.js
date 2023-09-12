import { auth, db, googleProvider } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Signin Successful");
  } catch (error) {
    console.error(error);
  }
};

export const createUserWithEmail = async (
  email,
  password,
  fullname,
  accountType
) => {
  try {
    const userCollectionRef = collection(db, "users");
    const user = await addDoc(userCollectionRef, {
      fullname,
      email,
      accountType,
    });
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Account created successfully");
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};
