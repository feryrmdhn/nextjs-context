import { Rendering } from "./state"

const reducer = (newState: Rendering, newValue: Partial<Rendering>) => {
    return { ...newState, ...newValue }
}

export default reducer;