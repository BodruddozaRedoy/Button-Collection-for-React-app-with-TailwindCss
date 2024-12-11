import { useState } from 'react'
import './App.css'
import ButtonSample3 from './Components/ButtonFormTailwind'
import Dashboard from './Components/DashboardTemplate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

    
      {/* <Button/> */}
      <div>
      <ButtonSample3/>
      </div>
      <div>
        <Dashboard/>
      </div>
      {/* <Button1/>
      <Button2/>
      <Button3/>
      <Button4/>
      <Button5/>
      <Button6/>
      <Button7/>
      <Button8/>
      <Button9/>
      <Button10/>
      <Button11/>
      <Button12/>
      <Button13/>
      <Button14/>
      <Button15/> */}
      
    </div>
  )
}

export default App
