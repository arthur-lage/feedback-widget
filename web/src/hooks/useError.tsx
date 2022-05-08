import { useContext } from "react";
import { ErrorContext } from "../contexts/ErrorContext";

export function useError() {
  const value = useContext(ErrorContext);

  return value;
}
