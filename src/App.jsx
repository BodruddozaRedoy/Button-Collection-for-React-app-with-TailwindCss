import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import ButtonSample3 from './Components/ButtonFormTailwind'
import Button1 from './Components/Button1/Button1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      {/* <Button/> */}
      {/* <ButtonSample3/> */}
      <Button1/>
    </>
  )
}

export default App
