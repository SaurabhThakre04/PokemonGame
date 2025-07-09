import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Main-Container'>
      <h1>Let's Catch Pokemon</h1>

      <input type='text' className='Search-Field' placeholder='Enter Pokemon Name'></input>

      <div className='Cards-Container'>
      <Card></Card>
      <Card></Card>
      <Card></Card>

      <Card></Card>

      <Card></Card>
      <Card></Card>

      </div>
      
    </div>
  )
}

export default App
