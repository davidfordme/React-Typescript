import {createContext, useContext} from "react";

export type GlobalContent = {
  isLoading: boolean,
  setLoading:(c: boolean) => void
}

export const Context = createContext<GlobalContent>({
  isLoading : false,
  setLoading: () => {}
})

export const useGlobalContext = () => useContext(Context)