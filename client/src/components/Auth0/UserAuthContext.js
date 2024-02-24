/* eslint-disable no-undef */

import { useContext, createContext, useEffect, useState } from "react";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";

const userContext = createContext();

export const useAuth = () => {
  return useContext(userContext);
};

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentuser, setuser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setuser(user);
        console.log("u are logging");
      } else {
        // alert("u are logout")
      }
    });
  }, [currentuser]);

  const SignUp = async (email, password, FullName) => {
    setError("");
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const ref = doc(db, "userinfo", result.user.uid);
      await setDoc(ref, { FullName });
      console.log("Document ID: ", ref.id); // Log the document ID
      alert("Welcome new User, created successfully");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setInterval(() => {
          setError("");
        }, 5000);
        setError("Email already in use, try another email");
      } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
        setInterval(() => {
          setError("");
        }, 5000);
        setError("Password must be 6 characters");
      } else {
        setError(err.message);
      }
    }
  };

  const value = {
    SignUp,
    error,
    currentuser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserAuthContext;
