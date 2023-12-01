"use client"
import { setCookie } from "cookies-next"
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children, old }:{children: React.ReactNode, old: string | undefined}) => {
  const [mode, setMode] = useState(old === "light" ? "light" : old === "dark" ? "dark" : "dark")
  const toggle = () => setMode(prev => prev === "dark" ? "light" : "dark")
  useEffect(() => {
    setCookie("darkMode", mode, {maxAge: 60*60*24*365})
    return
  }, [mode])
  return (
    <ThemeContext.Provider value={{toggle, mode}}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}