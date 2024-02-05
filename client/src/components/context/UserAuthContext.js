import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import HeroPage from "../Hero_page/HeroPage";

const userContext = createContext();
export const useAuth = () => useContext(userContext);

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentuser, setuser] = useState();
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setuser(user);
        console.log("You are logged in");
        if (isSignUpSuccess) {
          return <HeroPage/>
          // Reset the signup success state
          setIsSignUpSuccess(false);
        }
      } else {
        // alert("You are logged out");
      }
    });

    return () => {
      // Cleanup function
      unsubscribe();
    };
  }, [currentuser, navigate, isSignUpSuccess]);

  const SignUp = async (email, password, FullName) => {
    setError("");
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      const ref = doc(db, FullName, result.user.uid);
      await setDoc(ref, { email });

      alert("Welcome! New user created successfully");
      console.log("Document written with ID: ", ref.id);

      // Set the signup success state to true
      setIsSignUpSuccess(true);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setTimeout(() => {
          setError("");
        }, 5000);
        setError("Email already in use. Please try another email.");
      } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
        setTimeout(() => {
          setError("");
        }, 5000);
        setError("Password must be at least 6 characters long.");
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
