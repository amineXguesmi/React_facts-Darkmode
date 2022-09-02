import { useState } from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import './App.css'

function App() {
  const [togg,setTogg]=useState(false)
  function toggle(){
    setTogg(prevTogg =>!prevTogg)
  }
  return (
    <>
    <Nav  toggle={toggle} togg={togg}/>
    <Main toggle={toggle} togg={togg}/>
    </>
  )
}

export default App
