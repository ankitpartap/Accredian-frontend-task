import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section2 from './components/Section2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <section className='m-10'>
      <Hero/>
      </section>
      <section className='mt-25'>
      <Section2/>

      </section>


    </>
  )
}

export default App
