import { useEffect, useRef, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const cardRef = useRef(null)

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // apply dark mode only to card
  useEffect(() => {

    if (cardRef.current) {

      cardRef.current.classList.remove("light", "dark")
      cardRef.current.classList.add(themeMode)
    }

  }, [themeMode])

  return (

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center justify-center bg-gray-100">

        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div
            ref={cardRef}
            className="w-full max-w-sm mx-auto"
          >
            <Card />
          </div>

        </div>

      </div>

    </ThemeProvider>
  )
}

export default App