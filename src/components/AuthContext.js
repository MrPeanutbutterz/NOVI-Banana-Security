import React, {createContext, useContext, useState} from "react";

const AuthContext = createContext(null)
const AuthUpdateContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext)
}

export function UserAuthProvider({children}) {

  const [isAuth, toggleIsAuth] = useState(false);

  function toggleAuth() {
    toggleIsAuth(isAuth => !isAuth)
  }

  return (
    <AuthContext.Provider value={isAuth}>
      <AuthUpdateContext.Provider value={toggleAuth}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
}