import { createContext, Dispatch, useContext } from "react";
import { globalState, Rendering } from "./state";

interface ContextType {
    state: Rendering;
    dispatch: Dispatch<Partial<Rendering>>;
}

export const initialContext: ContextType = {
    state: globalState,
    dispatch: () => null
}

export const AppContext = createContext(initialContext)

//name function must be start with "use"
export const useCtx = () => useContext(AppContext)