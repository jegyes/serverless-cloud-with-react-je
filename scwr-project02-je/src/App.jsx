import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const semiAnnuals = [
  {
    year: '2000',
    yearFirstHalf: 326447,
    yearSecondHalf:  562342,
  },
  {
    year: '2008',
    yearFirstHalf: 424587,
    yearSecondHalf:  764254,
  },
  {
    year: '2012',
    yearFirstHalf: 756230,
    yearSecondHalf: 695323,
  }
]

function App() {

  return (
    <>
      <h1>Report of Annual Totals for Select Years</h1>
    </>
  )
}

export default App
