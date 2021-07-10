import React, { useState } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { FiSun, FiMoon } from 'react-icons/fi'
import '../App.css'

const AppNavbar = ({ setModeHandler, mode }) => {

  return (
    <>
      <Navbar className="mt-1" style={{ backgroundColor: '#17202A' }}>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          TICKER Tracker
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Button variant="outline-light" size="sm" onClick={setModeHandler}>{mode === 'light' ? <FiMoon /> : <FiSun />}</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default AppNavbar
