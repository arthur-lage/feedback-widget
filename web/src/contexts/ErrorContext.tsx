import React, { createContext, useState } from "react";

type ErrorContextProps = {
  errors: Error[] | null;
  handleSetErrors: (error: string) => void;
  removeError: (id: number) => void;
};

type Props = {
  children: React.ReactNode;
};

interface Error {
  message: string;
  id: number;
}

export const ErrorContext = createContext({} as ErrorContextProps);

export function ErrorProvider({ children }: Props) {
  const [errors, setErrors] = useState<Error[] | null>(null);

  function handleSetErrors(error: string) {
    if (errors !== null) {
      const newError = {
        message: error,
        id: Date.now(),
      };

      setErrors([...errors, newError]);
    } else {
      const newError = {
        message: error,
        id: Date.now(),
      };

      setErrors([newError]);
    }
  }

  function removeError(id: number) {
    if (errors !== null) {
      const newErrors = errors.filter((error) => error.id !== id);

      //@ts-ignore
      const button = document.getElementById(`${id}`);

      if (button !== null) {
        button.classList.add("opacity-0");
      }

      setTimeout(() => {
        setErrors(newErrors);
      }, 250);
    }
  }

  const value = {
    errors,
    handleSetErrors,
    removeError,
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
}
