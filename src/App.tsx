import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Router from './Routes/Router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Router />
        <Footer/>
      
    </>
  )
}

export default App
