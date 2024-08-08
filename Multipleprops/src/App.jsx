import { useState } from 'react'

import './App.css'
import Country from './Country'
import { State } from './State'

function App() {
  const contries= [
      {
        id: 1,
        name: "Indea"
      },
      {
        id: 2,
        name: "London"
      },
      {
        id: 3,
        name: "USA"
      },
      {
        id: 4,
        name: "UAE"
      }
  ]

  const states =[
    {
      id: 1,
      name: "Gujarat"
    },
    {
      id: 2,
      name: "MH"
    },
    {
      id: 3,
      name: "Rajasthan"
    },
    {
      id: 4,
      name: "UK"
    }
  ]

  return (
   <>
   <Country list1= {contries} /> 
   <State list2= {states} />
   </>
  )
}

export default App
