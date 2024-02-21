import { useReducer } from "react"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {

    useReducer

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
