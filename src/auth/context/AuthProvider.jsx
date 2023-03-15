import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {

        const user = {
            name: name,
            id: new Date().getTime()
        }
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('loggedUser', JSON.stringify(user))
        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.logout,
        }
        //localStorage.setItem('loggedUser', JSON.stringify(null))
        localStorage.removeItem('loggedUser')
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider >
    )
}
