import {
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, signOut } from "firebase/auth";

import { auth } from "../services/firebase";

type User = {
  id: string;
  email: string;
  name: string;
  image: string;
};

type UserProps = {
  currentUser: User | undefined;
  SignInWithGoogle: () => void;
  logout: () => void;
};

export const UserContext = createContext({} as UserProps);

type Props = {
  children: React.ReactNode;
};

export function UserProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();

  const provider = new GoogleAuthProvider();

  function SignInWithGoogle() {
    setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithPopup(auth, provider)
        .then((result) => {
          const user = {
            id: result.user.uid,
            email: result.user.email,
            name: result.user.displayName,
            image: result.user.photoURL,
          };

          setCurrentUser(user as User);
        })
        .catch((err) => console.log(err));
    });
  }

  function logout() {
    signOut(auth)
      .then(() => {
        setCurrentUser(undefined);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL || !email) {
          throw new Error("Missing information from Google Account.");
        }

        setCurrentUser({
          id: uid,
          name: displayName,
          email: email,
          image: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    SignInWithGoogle,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
