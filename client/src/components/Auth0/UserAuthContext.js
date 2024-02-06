import { useContext, createContext, useEffect, useState } from "react";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { addDoc, doc, setDoc, collection } from "firebase/firestore";

const userContext = createContext();

export const useAuth = () => {
  return useContext(userContext);
};

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentuser, setuser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
    });
  }, [currentuser]);

  const SignUp = async (email, password, FullName) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        try {
          const ref = doc(db, FullName, result.user.uid);
          await setDoc(ref, { email });
          const docRef = await setDoc(ref, { FullName });
          alert("Welcome! New user created successfully");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Email already in use. Please try another email.");
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Password must be at least 6 characters.");
        } else {
          setError(err.message);
        }
      });
  };

  const value = {
    SignUp,
    error,
    currentuser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserAuthContext;
