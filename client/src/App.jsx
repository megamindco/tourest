import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Destination from './Component/Destination'
import Popular from './Component/Popular'
import About from './Component/About'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Destination></Destination>
     <Popular></Popular>
     {/* <Blog></Blog> */}
     <Footer></Footer>
    </>
  )
}

export default App
