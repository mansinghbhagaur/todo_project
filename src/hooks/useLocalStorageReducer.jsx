import { useEffect, useReducer } from "react";

export const useLocalStorageReducer = (key, reducer, initialState) => {
      const initializer = () => {
            const saveState = localStorage.getItem(key);
            return saveState ? JSON.parse(saveState) : initialState;
      }

      const [state, dispatch] = useReducer(reducer, initialState, initializer);

      useEffect(() => {
            localStorage.setItem(key, JSON.stringify(state));
      }, [key, state])

      return [state, dispatch];
}