import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase"

// context
const AuthContext = React.createContext()
export function useAuth(){
    return  useContext(AuthContext)
}

// component
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    //! main functions
    function signup(email, password) { 
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) { 
        return auth.signInWithEmailAndPassword(email, password)
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }
    function logout() {
        return auth.signOut()
    }

    // constext value
    const value = {
        currentUser,
        signup,
        login,
        resetPassword,
        updateEmail,
        updatePassword,
        logout
    }
    useEffect(() => {
        // Додає спостерігача для змін у стані входу користувача
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
