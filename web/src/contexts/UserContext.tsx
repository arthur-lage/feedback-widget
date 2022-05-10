import { signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";

import { GoogleAuthProvider, signOut } from "firebase/auth";

import { auth } from "../services/firebase";

type UserProps = {
  currentUser: User | null;
  login: () => void;
  logout: () => void;
};

type User = {
  id: string;
  email: string;
  name: string;
  image: string;
};

export const UserContext = createContext({} as UserProps);

type Props = {
  children: React.ReactNode;
};

export function UserProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const provider = new GoogleAuthProvider();

  function login() {
    signInWithPopup(auth, provider)
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
  }

  function logout() {
    signOut(auth)
      .then(() => {
        console.log("logged out");
        setCurrentUser(null);
      })
      .catch((err) => console.log(err));
  }

  const value = {
    currentUser,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
