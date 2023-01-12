import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Allrouter from './components/Allrouter'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Allrouter/>
    </div>
  )
}

export default App
