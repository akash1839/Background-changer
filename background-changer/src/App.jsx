import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4" style={{backgroundColor:"blue"}}>blue</button> 
          <button onClick={()=>setColor("green")} className="outline-none px-4" style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 text-white" style={{backgroundColor:"black" }}>black</button>
        </div>
      </div>
    </div>
      )
}

export default App
