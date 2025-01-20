import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userdata, setUserdata] = useState(null)

    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLocalStorage()
        setUserdata({ employees, admin })
    }, [])

    return (
        <div>
            <AuthContext.Provider value={userdata}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
