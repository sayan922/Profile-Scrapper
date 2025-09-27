import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from "./components/Profile.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Profile/>
    </>
  )
}

export default App
