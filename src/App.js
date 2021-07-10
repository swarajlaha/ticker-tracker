import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import AppNavbar from './commons/appNavbar'
import './App.css'

const App = () => {
  const [mode, setMode] = useState('light')

  const setModeHandler = () => {
    mode === 'dark' ? setMode('light') : setMode('dark')
  }
  let modeClass = 'mode-' + mode
  return (
    <div className={modeClass}>
      <AppNavbar setModeHandler={setModeHandler} mode={mode} />
      <HomePage mode={mode} />
    </div>
  )
}

export default App
