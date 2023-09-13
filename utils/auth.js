import { auth, db, googleProvider } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const checkUserAndSignIn = async (user) => {
  const userCollectionRef = collection(db, "users");
  const emailQuery = query(userCollectionRef, where("email", "==", user.email));
  const querySnapshot = await getDocs(emailQuery);
  const currentUser = await auth.currentUser;

  if (querySnapshot.empty) {
    console.log("User does not exists. Create an account first");
    deleteUser(currentUser)
      .then(() => {
        console.log("Deleted non-existent user");
      })
      .catch((err) => console.error(err));
  } else {
    console.log("Log in successfull");
  }
};

export const signInWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    const userEmail = user.user;
    checkUserAndSignIn(userEmail);
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
  const userCollectionRef = collection(db, "users");

  const emailQuery = query(userCollectionRef, where("email", "==", email));
  const emailQuerySnapshot = await getDocs(emailQuery);
  try {
    if (!emailQuerySnapshot.empty) {
      console.log("Email is already in use!");
      return;
    }
    const user = await addDoc(userCollectionRef, {
      fullname,
      email,
      accountType,
    });
    await createUserWithEmailAndPassword(auth, email, password);
    await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    console.log("Account created successfully");
  } catch (error) {
    console.error(error);
  }
};
