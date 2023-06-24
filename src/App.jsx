import { useState } from 'react'
import './App.css'
import Section from './Component/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header></header>
      <main>
      <Section/>
     
      </main>
      <footer></footer>

    </div>
  )
}

export default App
