import { useState } from 'react'
import './App.css'
import Colour from './Colour'

function App() {
  const colorlist = [
    {
      id: 1,
      name: "Red",
      bgcolor: "red"
    },
    {
      id: 2,
      name: "Pink",
      bgcolor: "pink"
    },
    {
      id: 3,
      name: "Blue",
      bgcolor: "blue"
    },
    {
      id: 4,
      name: "Green",
      bgcolor: "green"
    },
    {
      id: 5,
      name: "Yellow",
      bgcolor:"Yellow"
    },
    {
      id: 6,
      name: "Black",
      bgcolor: "black"
    },
    {
      id: 7,
      name: "White",
      bgcolor: "white"
    }
  ]

  return (
 <>
 <Colour list = {colorlist} />
 </>
  )
}

export default App
