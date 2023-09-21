import React from 'react'
import './App.css'
import { Routes, Route } from "react-router";
import Home from "./components/Home"

function App() {
  return (
    <div className='bg-slate-600'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
