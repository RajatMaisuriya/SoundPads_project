// import { useState } from 'react'
import React  from 'react'
import padsData from "./pads"
import Pad from "./pad"
import './App.css'

function App(props) {
 const [pads] = React.useState(padsData)
 const styles ={
    backgroundColor: props.backgroundColor ? "#222222" : "#cccccc"
  }

const buttonElement = pads.map(pad =>(
  // <button style={styles} className='padDesign' key={pad.id} ></button>
  <Pad key={pad.id} color={pad.color} on={pad.on} />
))
  return (
    <>
     <div style={styles} className='padDesign'>
      {buttonElement}
     </div>
    </>
  )
}

export default App
