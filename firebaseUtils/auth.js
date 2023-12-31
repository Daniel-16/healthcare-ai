import { auth, db, googleProvider } from "@/config/firebase";
import {
  // signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  getRedirectResult,
} from "@firebase/auth";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
// import { logEvent } from "firebase/analytics";

const checkUserAndSignIn = async (user) => {
  const userCollectionRef = collection(db, "users");
  const emailQuery = query(userCollectionRef, where("email", "==", user.email));
  const querySnapshot = await getDocs(emailQuery);
  const currentUser = auth.currentUser;

  if (querySnapshot.empty) {
    console.log("User does not exists. Create an account first");
    deleteUser(currentUser)
      .then(() => {
        console.log("Deleted non-existent user");
      })
      .catch((err) => console.error(err));
  } else {
    console.log("Log in successfull");
    // logEvent(analytics, "login", {
    //   method: "Google",
    // });
  }
};

// export const signInWithGoogle = async () => {
//   try {
//     const user = await signInWithPopup(auth, googleProvider);
//     const userEmail = user.user;
//     checkUserAndSignIn(userEmail);
//   } catch (error) {
//     console.error(error);
//   }
// };

export const signInWithGoogleRedirect = async () => {
  try {
    const user = await signInWithRedirect(auth, googleProvider);
    const userEmail = user.user;
    checkUserAndSignIn(userEmail);
    handleRedirectResult();
  } catch (error) {
    console.error(error);
  }
};

const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    const user = result.user;
    console.log("User signed in: ", user);
  } catch (error) {
    console.error(error);
  }
};

export const signInWithEmail = async (email, password, setError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Signin Successful");
    // logEvent(analytics, "login", {
    //   method: "Email and Password",
    // });
  } catch (error) {
    console.error(error);
    const { message } = error;
    setError(message);
  }
};

export const createUserWithEmail = async (
  email,
  password,
  fullname,
  accountType,
  setError
) => {
  const userCollectionRef = collection(db, "users");

  const emailQuery = query(userCollectionRef, where("email", "==", email));
  const emailQuerySnapshot = await getDocs(emailQuery);
  try {
    if (!emailQuerySnapshot.empty) {
      console.log("Email is already in use!");
      setError("Email already in use!");
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
    // logEvent(analytics, "sign_up", {
    //   method: "Name, email, password and accountType",
    // });
  } catch (error) {
    console.error(error);
    setError(error.message);
  }
};

export const passwordReset = async (email, setError, setSuccess) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully");
    setSuccess(true);
  } catch (error) {
    console.error(error);
    setError(error.message);
  }
};
