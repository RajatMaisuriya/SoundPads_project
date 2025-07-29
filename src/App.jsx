// import { useState } from 'react'
import React  from 'react'
import padsData from "./pads"
import './App.css'

function App() {
 const [pads,setPads] = React.useState(padsData)


const buttonElement = pads.map(pad =>(
  <button key={pad.id} ></button>
))
  return (
    <>
     <div className='padDesign'>
      {buttonElement}
     </div>
    </>
  )
}

export default App
